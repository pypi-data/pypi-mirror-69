# PyDigiPio

![Python package](https://github.com/EinarArnason/PyDigiPio/workflows/Python%20package/badge.svg)

Python module for Raspberry Pi GPIO

## The What

This is a python module to interface with the digital inputs and output of the Raspberry Pi GPIO. Nothing more, nothing less.

## The Why

Sometimes you just need digital I/O on the Raspberry Pi (and possibly other device, untested so far). This library provides direct access without the need of complex libraries.

## The How

Install from PyPi:

```bash
pip install PyDigiPio
```

Usage:

```python
import PyDigiPio

# Sets pin assigned to GPIO 1 as output
PyDigiPio.configure_pin(1, 'out')

# Set GPIO 1 HIGH
PyDigiPio.write_to_pin(1, True)
# Set GPIO 1 LOW
PyDigiPio.write_to_pin(1, False)

# Sets pin assigned to GPIO 2 as input
PyDigiPio.configure_pin(2, 'in')
# Get state of GPIO 2
PyDigiPio.read_from_pin(2)
```

OSError exception is thrown if GPIO device is configured incorrectly

## The Who

Einar Arnason  
<https://github.com/EinarArnason/>  
<https://www.linkedin.com/in/einararnason/>
