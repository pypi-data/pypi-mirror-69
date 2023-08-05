
try:
    import pyfftw.interfaces.numpy_fft as fft
except ImportError:
    import numpy.fft as fft


def cfftn(data, axes):
    """
    Centered fast fourier transform, n-dimensional

    :param data: complex input data
    :param axes: Axes along which to shift
    :return: fourier transformed data
    """
    return fft.fftshift(fft.fftn(fft.ifftshift(data, axes=axes), axes=axes, norm='ortho'), axes=axes)


def cifftn(data, axes):
    """
    Centered inverse fast fourier transform, n-dimensional

    :param data: complex input data
    :param axes: Axes along which to shift
    :return: inverse fourier transformed data
    """
    return fft.ifftshift(fft.ifftn(fft.fftshift(data, axes=axes), axes=axes, norm='ortho'), axes=axes)
