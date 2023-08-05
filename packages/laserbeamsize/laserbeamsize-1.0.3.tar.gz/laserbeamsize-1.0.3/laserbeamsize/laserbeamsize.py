#pylint: disable=invalid-name
#pylint: disable=too-many-instance-attributes
#pylint: disable=anomalous-backslash-in-string
#pylint: disable=too-many-locals
#pylint: disable=too-many-arguments
"""
A module for finding the beam size in an image.

    Simple and fast calculation of beam sizes from a single monochrome image based
    on the ISO 11146 method of variances.  Some effort has been made to make
    the algorithm less sensitive to background offset and noise.

Finding the center and dimensions of a good beam image::

    import imageio
    import laserbeamsize as lbs

    beam = imageio.imread("t-hene.pgm")
    x, y, dx, dy, phi = lbs.beam_size(beam)

    print("The image center is at (%g, %g)" % (x,y))
    print("The horizontal width is %.1f pixels" % dx)
    print("The vertical height is %.1f pixels" % dy)
    print("The beam oval is rotated is %.1f°" % (phi*180/3.1416))
"""

import numpy as np
import matplotlib.pyplot as plt

__all__ = ('basic_beam_size',
           'basic_beam_size_naive',
           'beam_size',
           'beam_test_image',
           'draw_beam_figure',
           'ellipse_arrays',
           'elliptical_mask',
           'plot_image_and_ellipse',
           )

def basic_beam_size(image):
    """
    Determine the beam center, diameters, and tilt using ISO 11146 standard.

    Find the center and sizes of an elliptical spot in an 2D array.

    The function does nothing to eliminate background noise.  It just finds the first
    and second order moments and returns the beam parameters. Consequently
    a beam spot in an image with a constant background will fail badly.
    
    FWIW, this implementation is roughly 800X faster than one that finds 
    the moments using for loops.
    
    The returned parameters are::

        `xc`,`yc` is the center of the elliptical spot.

        `dx`,`dy` is the width and height of the elliptical spot.

        `phi` is tilt of the ellipse from the axis [radians]

    Parameters
    ----------
    image: 2D array
        image with beam spot in it
        
    Returns
    -------
    array: 
        [xc, yc, dx, dy, phi]
    """
    v, h = image.shape

    # total of all pixels
    p = np.sum(image, dtype=np.float)     # float avoids integer overflow

    # find the centroid
    hh = np.arange(h, dtype=np.float)      # float avoids integer overflow
    vv = np.arange(v, dtype=np.float)      # ditto
    xc = int(np.sum(np.dot(image, hh))/p)
    yc = int(np.sum(np.dot(image.T, vv))/p)

    # find the variances
    hs = hh-xc
    vs = vv-yc
    xx = np.sum(np.dot(image, hs**2))/p
    xy = np.dot(np.dot(image.T, vs), hs)/p
    yy = np.sum(np.dot(image.T, vs**2))/p

    # the ISO measures
    diff = xx-yy
    summ = xx+yy

    # Ensure that the case xx==yy is handled correctly
    if diff:
        disc = np.sign(diff)*np.sqrt(diff**2 + 4*xy**2)
    else:
        disc = np.abs(xy)
    dx = 2.0*np.sqrt(2)*np.sqrt(summ+disc)
    dy = 2.0*np.sqrt(2)*np.sqrt(summ-disc)

    # negative because top of matrix is zero
    phi = -0.5 * np.arctan2(2*xy, diff)

    return xc, yc, dx, dy, phi


def elliptical_mask(image, xc, yc, dx, dy, phi):
    """
    Return a boolean mask for a rotated elliptical disk.

    The returned mask is the same size as `image`.
    
    Parameters
    ----------
    image: 2D array
    xc: float
        horizontal center of beam
    yc: int
        vertical center of beam
    dx: float
        horizontal diameter of beam
    dy: float
        vertical diameter of beam
    phi: float
        angle that elliptical beam is rotated (about center) from the horizontal axis in radians

    Returns
    -------
    mask: boolean 2D array
    """
    v, h = image.shape
    y, x = np.ogrid[:v, :h]

    sinphi = np.sin(phi)
    cosphi = np.cos(phi)
    rx = dx/2
    ry = dy/2
    r2 = ((x-xc)*cosphi-(y-yc)*sinphi)**2/rx**2 + \
        ((x-xc)*sinphi+(y-yc)*cosphi)**2/ry**2
    the_mask = r2 <= 1

    return the_mask


def beam_size(image, threshold=0.1, mask_diameters=2):
    """
    Determine beam parameters in an image with noise.

    The function first estimates the beam parameters by excluding all points
    that are less than 10% of the maximum value in the image.  These parameters
    are refined by masking all values more than two radii from the beam and
    recalculating.

    The returned parameters are::

        `xc`,`yc` is the center of the elliptical spot.

        `dx`,`dy` is the width and height of the elliptical spot.

        `phi` is tilt of the ellipse from the axis [radians]

    Parameters
    ----------
    image: 2D array
        should be a monochrome two-dimensional array

    threshold: float, optional
        used to eliminate points outside the beam that confound estimating
        the beam parameters

    mask_diameters: float, optional
        when masking the beam for the final estimation, this determines
        the size of the elliptical mask

    Returns
    -------
    array: 
        [xc, yc, dx, dy, phi]
    """
    # use a 10% threshold to get rough idea of beam parameters
    thresholded_image = np.copy(image)

    # remove possible offset
    minn = thresholded_image.min()  # remove any offset
    thresholded_image -= minn

    # remove all values less than threshold*max
    maxx = thresholded_image.max()
    minn = int(maxx*threshold)
    np.place(thresholded_image, thresholded_image < minn, 0)

    # estimate the beam values
    xc, yc, dx, dy, phi = basic_beam_size(thresholded_image)

    # create a that is twice the estimated beam size
    mask = elliptical_mask(
        image, xc, yc, mask_diameters*dx, mask_diameters*dy, phi)
    masked_image = np.copy(image)

    # find the minimum in the region of the mask
    maxx = masked_image.max()
    masked_image[~mask] = maxx    # exclude max values

    minn = masked_image.min()   # remove offset everywhere
    masked_image -= minn

    masked_image[~mask] = 0       # zero all masked values

    return basic_beam_size(masked_image)


def beam_test_image(h, v, xc, yc, dx, dy, phi, offset=0, noise=0, max_value=255):
    """
    Create a test image.

    Create a v x h image with an elliptical beam with specified center and
    beam dimensions.  By default the values in the image will range from 0 to 
    255. The default image will have no background and no noise.  
    
    Parameters
    ----------
    h: int
        horizontal size of image to generate
    v: int
        vertical size of image to generate
    xc: float
        horizontal center of beam
    yc: int
        vertical center of beam
    dx: float
        horizontal diameter of beam
    dy: float
        vertical diameter of beam
    phi: float
        angle that elliptical beam is rotated [radians]
    offset: float, optional, default = 0
        background offset to be added to entire image
    noise: float, optional, default = 0
        normally distributed pixel noise to add to image
    max_value: float, optional, default = 256
        all values in image fall between 0 and `max_value`

    Returns
    -------
    test_image: v x h pixels in size
    """
    rx = dx/2
    ry = dy/2

    image = np.zeros([v, h])

    y, x = np.ogrid[:v, :h]

    # translate center of ellipse
    y -= yc
    x -= xc

    # needed to rotate ellipse
    sinphi = np.sin(phi)
    cosphi = np.cos(phi)

    r2 = ((x*cosphi-y*sinphi)/rx)**2 + ((-x*sinphi-y*cosphi)/ry)**2
    image = np.exp(-2*r2)

    scale = max_value/np.max(image)
    image *= scale

    if noise > 0:
        image += np.random.normal(offset, noise, size=(v, h))

        # after adding noise, the signal may exceed the range 0 to max_value
        np.place(image, image > max_value, max_value)
        np.place(image, image < 0, 0)

    return image


def ellipse_arrays(xc, yc, dx, dy, phi, npoints=200):
    """
    Return x,y arrays to draw a rotated ellipse.

    Parameters
    ----------
    xc: float
        horizontal center of beam
    yc: int
        vertical center of beam
    dx: float
        horizontal diameter of beam
    dy: float
        vertical diameter of beam
    phi: float
        angle that elliptical beam is rotated [radians]

    Returns
    -------
    x,y : two arrays of points on the ellipse
    """
    t = np.linspace(0, 2*np.pi, npoints)
    a = dx/2*np.cos(t)
    b = dy/2*np.sin(t)
    xp = xc + a*np.cos(phi) - b*np.sin(phi)
    yp = yc - a*np.sin(phi) - b*np.cos(phi)
    return xp, yp


def plot_image_and_ellipse(image, xc, yc, dx, dy, phi, scale=1):
    """
    Draw the image, an ellipse, and center lines.

    Parameters
    ----------
    image: 2D array
        image with beam spot
    xc: float
        horizontal center of beam
    yc: int
        vertical center of beam
    dx: float
        horizontal diameter of beam
    dy: float
        vertical diameter of beam
    phi: float
        angle that elliptical beam is rotated [radians]
    scale: float
        factor to increase/decrease ellipse size
    """
    v, h = image.shape
    xp, yp = ellipse_arrays(xc, yc, dx, dy, phi)
    xp *= scale
    yp *= scale
    xcc = xc * scale
    ycc = yc * scale
    dxx = dx * scale
    dyy = dy * scale
    ph = phi * 180/np.pi

    # show the beam image with actual dimensions on the axes
    plt.imshow(image, extent=[0, h*scale, v*scale, 0], cmap='gray')
    plt.plot(xp, yp, ':y')
    plt.plot([xcc, xcc], [0, v*scale], ':y')
    plt.plot([0, h*scale], [ycc, ycc], ':y')
    plt.title('c=(%.0f,%.0f), (dx,dy)=(%.1f,%.1f), $\phi$=%.1f°' %
              (xcc, ycc, dxx, dyy, ph))
    plt.xlim(0, h*scale)
    plt.ylim(v*scale, 0)
    plt.colorbar()


def basic_beam_size_naive(image):
    """
    Slow but simple implementation of ISO 1146 beam standard.

    This is the obvious way to calculate the moments.  It is slow.
    
    The returned parameters are::

        `xc`,`yc` is the center of the elliptical spot.

        `dx`,`dy` is the width and height of the elliptical spot.

        `phi` is tilt of the ellipse from the axis [radians]

    Parameters
    ----------
    image: (2D array)
        image with beam spot in it
        
    Returns
    -------
    array: 
        [xc, yc, dx, dy, phi]
    """
    v, h = image.shape

    # locate the center just like ndimage.center_of_mass(image)
    p = 0.0
    xc = 0.0
    yc = 0.0
    for i in range(v):
        for j in range(h):
            p += image[i, j]
            xc += image[i, j]*j
            yc += image[i, j]*i
    xc = int(xc/p)
    yc = int(yc/p)

    # calculate variances
    xx = 0.0
    yy = 0.0
    xy = 0.0
    for i in range(v):
        for j in range(h):
            xx += image[i, j]*(j-xc)**2
            xy += image[i, j]*(j-xc)*(i-yc)
            yy += image[i, j]*(i-yc)**2
    xx /= p
    xy /= p
    yy /= p

    # compute major and minor axes as well as rotation angle
    dx = 2*np.sqrt(2)*np.sqrt(xx+yy+np.sign(xx-yy)*np.sqrt((xx-yy)**2+4*xy**2))
    dy = 2*np.sqrt(2)*np.sqrt(xx+yy-np.sign(xx-yy)*np.sqrt((xx-yy)**2+4*xy**2))
    phi = 2 * np.arctan2(2*xy, xx-yy)

    return xc, yc, dx, dy, phi


def draw_beam_figure():
    """
    Draw a simple astigmatic beam.

    A super confusing thing is that python designates the top left corner as
    (0,0).  This is usually not a problem, but one has to be careful drawing
    rotated ellipses.  Also, if the aspect ratio is not set to be equal then
    the major and minor radii are not orthogonal to each other!
    """
    theta = 30*np.pi/180
    xc = 0
    yc = 0
    dx = 50
    dy = 25
    xp, yp = ellipse_arrays(xc, yc, dx, dy, theta)

    plt.figure(num=None, figsize=(6, 6), dpi=75)

    plt.axes().set_aspect('equal')
    plt.plot(xp, yp, color='black', lw=2)
    sint = np.sin(theta)/2
    cost = np.cos(theta)/2
    plt.plot([xc-dx*cost, xc+dx*cost], [yc+dx*sint, yc-dx*sint], ':b')
    plt.plot([xc+dy*sint, xc-dy*sint], [yc+dy*cost, yc-dy*cost], ':r')

    # draw axes
    plt.annotate("x'", xy=(-25, 0), xytext=(25, 0),
                 arrowprops=dict(arrowstyle="<-"), va='center', fontsize=16)
    
    plt.annotate("y'", xy=(0, 25), xytext=(0, -25),
                 arrowprops=dict(arrowstyle="<-"), ha='center', fontsize=16)

    plt.annotate(r'$\phi$', xy=(13, -2.5), fontsize=16)
    plt.annotate('', xy=(15.5, 0), xytext=(
        14, -8.0), arrowprops=dict(arrowstyle="<-", connectionstyle="arc3,rad=-0.2"))

    plt.annotate(r'$d_x$', xy=(-17, 7), color='blue', fontsize=16)
    plt.annotate(r'$d_y$', xy=(-4, -8), color='red', fontsize=16)

    plt.xlim(-30, 30)
    plt.ylim(30, -30)  # inverted to match image coordinates!
    plt.axis('off')
    plt.show()
