# Matplotlib Format Pi

![Upload Python Package](https://github.com/k-donn/format-pi/workflows/Upload%20Python%20Package/badge.svg?branch=master&event=push)

Create locator and formatter instances for multiples of pi on the axes of a matplotlib graph.

The `MultiplePi` class provides methods to seamlessly tell matplotlib to format tick labels as multiples of pi.

In addition, the `MultiplePi` class allows a user to change the denominator of the base provided.

Multiples of π/2, 3, 4, ... can be represented if needed.

## Examples

Simply, the instance can be asssigned a denominator of pi then passed to matplotlib.

```python
import matplotlib.pyplot as plt
import numpy as np

from matplot_fmt_pi import MultiplePi

fig = plt.figure(figsize=(4*np.pi, 2.4))
axes = fig.add_subplot(111)
x = np.linspace(-2*np.pi, 2*np.pi, 512)
axes.plot(x, np.sin(x))

axes.grid(True)
axes.axhline(0, color='black', lw=2)
axes.axvline(0, color='black', lw=2)
axes.set_title("MultiplePi formatting")

pi_manager = MultiplePi(2)
axes.xaxis.set_major_locator(pi_manager.locator())
axes.xaxis.set_major_formatter(pi_manager.formatter())

plt.tight_layout()
plt.show()
```

The parameters can also be modified to adjust the output to something more sophisticated.

```python
import matplotlib.pyplot as plt
import numpy as np

from matplot_fmt_pi import MultiplePi

fig = plt.figure()
axes = fig.add_subplot(111)
tau = np.pi*2
x = np.linspace(-tau/60, tau*8/60, 512)
axes.plot(x, np.exp(-x)*np.cos(60*x))

axes.grid(True)
axes.axhline(0, color='black', lw=2)
axes.axvline(0, color='black', lw=2)
axes.set_title("MultiplePi formatting")

major_pi_manager = MultiplePi(60, base=tau, symbol=r"\tau")
minor_pi_manager = MultiplePi(240, base=tau, symbol=r"\tau")

axes.xaxis.set_major_locator(major_pi_manager.locator())
axes.xaxis.set_major_formatter(major_pi_manager.formatter())
axes.xaxis.set_minor_locator(minor_pi_manager.locator())

plt.tight_layout()
plt.show()
```

## Meta

Inspired by [this](https://stackoverflow.com/questions/40642061/how-to-set-axis-ticks-in-multiples-of-pi-python-matplotlib) post on StackOverflow.
