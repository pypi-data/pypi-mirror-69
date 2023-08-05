# example IPython magic

Extension for add two example magics in IPython shell or IPy kernel.

The code for the magics was taken from IPython docs:

https://ipython.readthedocs.io/en/stable/config/custommagics.html#defining-custom-magics

## Installation

`pip install example_magic`


## Usage

You can use it from IPython shell or in Jupyter lab/notebook with Python kernel:

```
In [1]: %load_ext example_magic                                       

In [2]: %abra                                                         
Out[2]: ''

In [3]: %%cadabra 
   ...: world 
   ...:                                                               
Out[3]: ('', 'world\n')
```
