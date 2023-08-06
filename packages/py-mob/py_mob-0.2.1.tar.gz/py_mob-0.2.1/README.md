#### Introduction

As an attempt to mimic the mob R package (https://CRAN.R-project.org/package=mob), the py\_mob is a collection of python functions that would generate the monotonic binning and perform the WoE (Weight of Evidence) transformation used in consumer credit scorecard developments. 

Being a piecewise constant transformation in the context of logistic regressions, the WoE has also been employed in other use cases, such as consumer credit loss estimation, prepayment, and even fraud detection models. In addition to monotonic binning and WoE transformation, Information Value and KS statistic of each independent variables is also calculated to evaluate the variable predictiveness. 

Different from other python packages for the same purpose, the py\_mob package is very lightweight and the underlying computation is driven by the built-in python list or the numpy array. Functions would return lists of dictionaries, which can be easily converted to other data structures, such as pandas.DataFrame or astropy.table. 

Currently, four different monotonic binning algorithms are implemented, namely qtl\_bin(), bad\_bin(), iso\_bin(), and rng\_bin. For details, see below.

 
#### Installation

```python
pip3 install py_mob
```


#### Core Functions

```
py_mob
   |-- qtl_bin()  : An iterative discretization based on quantiles of X.  
   |-- bad_bin()  : A revised iterative discretization for records with Y = 1.
   |-- iso_bin()  : A discretization algorthm driven by the isotonic regression between X and Y. 
   |-- rng_bin()  : A revised iterative discretization based on the equal-width range of X.  
   |-- summ_bin() : Generates the statistical summary for the binning outcome. 
   |-- view_bin() : Displays the binning outcome in a tabular form. 
   `-- cal_woe()  : Applies the WoE transformation to a numeric vector based on the binning outcome.
```
