# -*- coding: utf-8 -*-
from setuptools import setup

packages = \
['plotcp']

package_data = \
{'': ['*']}

install_requires = \
['matplotlib>=3.2.1,<4.0.0', 'numpy>=1.18.4,<2.0.0']

setup_kwargs = {
    'name': 'plotcp',
    'version': '0.3.0',
    'description': 'Python package for drawing transformations of functions of a complex variable of the whole grid or a given area',
    'long_description': "# PlotComplexPlane\n\nPython library for plotting complex functions transformations\n\n## It can...\n\n- *plot complex planes (both transformed and original)*\n- *plot transformations of specific areas (both transformed and original)*\n- *plot lines parallel to real or imaginary axis (both transformed and original)*\n\n## How to use\n\n### **First**\n\nimport plotcp\n\n```python\nfrom plotcp import *\n```\n\n### **Second**\n\ndefine a callable complex function:\n\n```python\ndef f(z):\n    return (z+1)/z\n```\n\n### **Optionally**\n\nfind edges of your specific area. For example: |z|=2\n\n```python\ncircle = [2*(cos(x)+1j*sin(x) for x in np.linspace(0, 2*pi)]\n```\n\n### **Finally**\n\nchoose what you want to see and call plotcp\n\nparameter |description |type\n-|-|-\nfun |your predefined function f(z) |Callable[[complex], complex]\nx_bound |real plot bounds |Tuple[left: int, right: int]\ny_bound |imaginary plot bounds |Tuple[top: int, bottom: int]\nn_steps |how many nodes will be on each line (bigger value - smoother lines - more time to compute) |int\ngrid_step |spaces between lines parallel to axis |int\ninit_points |array of your areas points |optional iterator\nfaxis |what to display: 'origin', 'transform' or 'both' (named constants, correspondingly: Faxis.ORIG, Faxis.TRANSFORM, Faxis.BOTH) |Faxis(Enum.Flag)\nreim |which part to display: 'real', 'imag' or 'both' (named constants, correspondingly: Reim.RE, Reim.IM, Reim.BOTH) (**only works with grid lines, and not areas**) |Reim(Enum.Flag)\ninits |what to display: 'origin', 'transform' or 'both' (named constants, correspondingly: Inits.ORIG, Inits.TRANSFORM, Inits.BOTH) |Inits(Enum.Flag)\ninits_only |show initial points only? transformed or not |bool\nparam polar |use polar grid parametrization instead of cartesian|bool\n\n```python\nax = plotcp(f, (-4, 4), (-4, 4), init_points=[circle], faxis=Faxis.TRANSFORM,\n            reim=Reim.IM, inits=Inits.BOTH)\n```\n",
    'author': 'ZetZet',
    'author_email': 'dmesser@yandex.ru',
    'maintainer': None,
    'maintainer_email': None,
    'url': 'https://github.com/ZettZet/plotcp',
    'packages': packages,
    'package_data': package_data,
    'install_requires': install_requires,
    'python_requires': '>=3.8,<4.0',
}


setup(**setup_kwargs)
