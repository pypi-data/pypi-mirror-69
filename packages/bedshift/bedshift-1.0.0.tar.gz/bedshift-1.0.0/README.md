# Bedshift

Install with: `pip install --user .`

## Command line

Run with: `bedshift -b BEDFILE` or `./bedshift.sh` if running bedshift on multiple bedfiles with a set of parameters, which are editable in bedshift.sh.

See: `bedshift --help` for parameters.

## Python

```py
import bedshift

bedshifter = bedshift.Bedshift('tests/test.bed')
bedshifter.all_perturbations(addrate=0.3, addmean=320.0, addstdev=20.0, 
							 shiftrate=0.3, shiftmean=-10.0, shiftstdev=120.0, 
							 cutrate=0.1, 
							 mergerate=0.11, 
							 droprate=0.03)
# can also run single operations: shift, add, cut, merge, drop

bedshifter.to_bed('test_output.bed')
```




## Development

test changes:

```
pip install --user .

./run-tests.sh
```

if the tests complete, then bedshift is working properly
