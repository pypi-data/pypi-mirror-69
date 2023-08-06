# pandashape: a simpleish Python package for easy data cleanup and preparation of Pandas dataframes

I made `pandashape` because I've been finding I do a lot of the same repetitive cleanup for simple modeling with scikit-learn.
I've intentionally designed it to make data preparation expressive, concise, and easily repeatable - just put your use of 

## Getting started

Just install with pip!

`pip install pandashape`

## Using pandashape
Create your dataframe however you choose - from a CSV, `.txt.` file, random generation, whatever. Then make a PandaShaper and use
the expressive syntax to define a pipeline for cleanup:

```python
# import packages
import numpy as np
import pandas as pd
from pandashape import PandaShaper, Columns
from pandashape.transformers import CategoricalEncoder, NullColumnsDropper

# create your frame
my_df = pd.read_csv('./my_data.csv')

# wrap it in a shaper
shaper = PandaShaper(my_df)

# create a pipeline of transform operations (these will happen in order)
# and assign the output to a new (transformed) frame!
transformed_df = shaper.transform(
    {
        # drop columns that have 80% or less null data
        'columns': Columns.All,
        'transformers': [
            NullColumnsDropper(null_values=[np.nan, None, ''], threshold=0.8),
            ModeImputer()
        ]
    },
    {
        # CategoricalEncoder one-hot-encodes targeted categorical columns if they
        # have a number of values ≥ the breakpoint or label encodes them normally 
        'columns': ['Education', 'SES'], 
        'transformers': CategoricalEncoder(label_encoding_breakpoint=4)
    }
)

# inspect the new frame to see the fruits of your labors!
transformed_df.head()
```