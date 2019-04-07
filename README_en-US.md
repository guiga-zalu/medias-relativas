# Relative Means

Author: [Guilherme Alves Ceobaniuk Zaluchi](https://guilherme.zaluchi.com.br) <[guilherme@zaluchi.com.br](mailto:guilherme@zaluchi.com.br)>

Means are a very usefull statistic resource to measure a tendence, inclination or the variation of some function.
However, means are known by having no precision at data representation.
That's because it's a representation of the whole, with its variations, as if it were only one element repeated several times.

The proposed solution is the use of _relative means_.
_Relative Means_ are means relative to the own mean of the set.

+ The _low mean_ is the mean of the set of numbers that are lower than the mean of the whole set.
+ The _high mean_ is the mean of the set of numbers that are higher than the mean of the whole set.eto.
+ The _central mean_ is the mean of the set of numbers that are lower than the high mean, and higher than the low mean.

With these separations, and recursively re-applying the definitions, it is possible to reach more aproximated results for representations of big datasets of high variety.

Follow example of code (in the folde ```código```) for the relative means in the following languages:
+ JavaScript (CommonJS)
