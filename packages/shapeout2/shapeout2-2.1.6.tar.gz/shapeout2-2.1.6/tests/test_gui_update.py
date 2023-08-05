import os
import socket

import pytest
from shapeout2.gui import update


with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    try:
        s.connect(("www.python.org", 80))
        NET_AVAILABLE = True
    except socket.gaierror:
        NET_AVAILABLE = False


@pytest.mark.xfail(os.getenv("APPVEYOR") in ["true", "True"],
                   reason="does not always run on Appveyor")
@pytest.mark.xfail(os.getenv("TRAVIS") == "true",
                   reason="does not always run on travisCI")
@pytest.mark.skipif(not NET_AVAILABLE, reason="No network connection!")
def test_update_basic():
    mdict = update.check_release(ghrepo="ZELLMECHANIK-DRESDEN/ShapeOut2",
                                 version="2.0.0a1")
    assert mdict["errors"] is None
    assert mdict["update available"]
    mdict = update.check_release(ghrepo="ZELLMECHANIK-DRESDEN/ShapeOut2",
                                 version="8472.0.0")
    assert mdict["errors"] is None
    assert not mdict["update available"]
