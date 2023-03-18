# Description
Generate all possible permutations of given elements.

# Algorithm
While propagating, wrap `eachCb` in a wrapper, mapping the input of the wrapper to each item in `data`. On backtrack, call the topmost wrapper with each item in `data`. 