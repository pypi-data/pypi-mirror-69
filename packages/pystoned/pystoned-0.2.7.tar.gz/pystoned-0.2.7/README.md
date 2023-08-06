# StoNED-Python

`StoNED-Python` project provides the python codes for estimating Convex Nonparametric Least Square (`CNLS`), Stochastic Nonparametric Envelopment of Data (`StoNED`), and other different `StoNED`-related variants. It allows the user to estimate the CNLS/StoNED models in an open-access environment rather than in commercial software, e.g., GAMS, MATLAB. The `StoNED-Python` project is built based on the [PYOMO](http://www.pyomo.org/). 

# Authors
 + [Timo Kuosmanen](https://people.aalto.fi/timo.kuosmanen), Professor, Aalto University School of Business.
 + [Sheng Dai](https://www.researchgate.net/profile/Sheng_Dai8), Ph.D. candidate, Aalto University School of Business.

# To do list
- [x]  `CNLS`/`StoNED`
   - [x] variables returns to scale (`VRS`) model
   - [x] constant returns to scale (`CRS`) model
   - [x] Additive composite error term
   - [x] Multiplicative composite error term
   - [x] Residuals decomposition by method of moments(`MoM`) 
   - [x] Residuals decomposition by quasi-likelihood estimation(`QLE`)
   - [x] Residuals decomposition by nonparametric kernel deconvolution (`NKD`)
- [x] `StoNEZD` (contextual variables)
- [x] Convex quantile regression (`CQR`)
- [x] Convex expectile regression (`CER`)
- [x] Isotonic CNLS (`ICNLS`)
- [ ] Isotonic convex quantile regression (`ICQR`)
- [ ] Isotonic convex expectile regression (`ICER`)
- [x] Corrected convex nonparametric least squares (C<sup>2</sup>NLS)
- [x] `StoNED` with multiple outputs
- [ ] Representation of `StoNED`-related frontier/quantile function
   - [ ] one input and one output
   - [ ] two inputs and one output 
   - [ ] three inputs and one output 