# Description
Generate all possible permutations of given elements.

# Algorithm
While propagating, wrap `eachCb` in a wrapper, mapping the input of the wrapper to each element in `data`. On backtrack, call the topmost wrapper with each element in `data`. 