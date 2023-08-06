# ipyumbrella
Improved ipywidgets for collections.

```python
import ipyumbrella as uw
import matplotlib.pyplot as plt

for i in uw.Carousel().D.items(range(5), title=str):
    plt.plot(range(10 + i))
```

Making widgets in Jupyter is super helpful and it unlocks a lot of potential. But I often find that they can be really cumbersome to work with and I'm constantly writing wrapper functions to capture output, add them to tabs, and set the title (using the child index..... ugh).

This wraps much of that functionality up so that you can wrap a for loop without thinking and each iteration will output to a new tab, parsing the title from the iterable elements. WOW!


## Install

```bash
pip install ipyumbrella
```

## Usage
```python
import ipyumbrella as uw
import matplotlib.pyplot as plt
```

### Widgets
 - Carousel: sideways scrolling items of (default) width of 60%.
 - Tabs: same as ipywidgets
 - Accordion: same as ipywidgets

All of the described methods work for all widgets here. So you can interchange any of the widgets in the example.

#### Easily display while chaining
I come from Javascript so I've grown quite acustom to chaining. This is useful for example when wrapping an inline iterable. It means you can display a whole set of tabs without saving anything to a variable needlessly and without the extra line.
```python
# all equivalent
carousel = uw.Carousel().display()

carousel = uw.Carousel().D

carousel = uw.Carousel()
display(carousel)

carousel = uw.Carousel()
carousel # last line in cell
```


#### Iterable (`.items()`)
Create a right scrolling carousel of items. Useful when you're plotting like 20 graphs and doing them one on top of the other makes navigating the notebook insufferable.
```python
for i in uw.Carousel().D.items(range(5)):
    plt.plot(range(10 + i))
```

You can set the tab title using a function that takes the iterable as the first argument.
```python
for i in uw.Tabs().D.items(range(5), title='this is tab {}'.format):
    plt.plot(range(10 + i))
```

```python
for i in uw.Accordion().D.items(range(5), title='see: {}'.format):
    plt.plot(range(10 + i))
```

#### Function capturing (`@.function`)
This gives you a bit more flexibility than wrapping an iterable. Anything from this function will be added to it's own tab.
```python
@uw.Tabs().D.function(title='plotting {}'.format)
def tabfunc(i, j=100):
    plt.plot(range(10 + i, j))

tabfunc(5)
tabfunc(6, j=40)
```

#### Context Manager (`with .item():`)
This is the underlying mechanics for the other functions. What it does is, makes a new tab and append a ipywidgets.Output widget. It then uses the output widget to capture all output, like prints and plt.show() so it can display it in a tab.

```python
carousel = uw.Carousel().D
for i in range(5):
    with carousel.item():
        plt.plot(range(10 + i))
```

```python
acc = uw.Accordion().D
for i in range(5):
    with acc.item(title='Item {}'.format(i)):
        plt.plot(range(10 + i))
```

Internally, it's doing this.
```python
# manually add an output as a tab above
with tabs.append(uw.Output()):
    plt.plot(range(10 + i))
```
