pyocd-wireless
==============

[![](https://img.shields.io/pypi/v/pyocd-wireless.svg)](https://pypi.org/project/pyocd-wireless/)


A wireless programming and debugging tool based on pyocd

`pyocd-wireless` uses [Pitaya Go](https://github.com/makerdiary/pitaya-go) as a Bluetooth LE debug probe,
which is just like a CMSIS-DAP probe using BLE instead of USB.

## Requirements
+ [pyocd](https://github.com/mbedmicro/pyOCD/)
+ [bleak](https://github.com/hbldh/bleak)
+ Python 3.6 if using Windows 10 (version 16299 or greater)


## Install
```
pip install pyocd-wireless
```

## Run
```
pyocd-wireless -h
```


