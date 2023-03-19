# Description
Generate all possible permutations of given elements.

# Install
`npm i permutationsjs`

# Usage
```javascript
import permutations from 'permutationsjs'

const _permutations = []

permutations(
    [0,1], // the elements to permutate
    6, // the size of permutations
    false, // whether to avoid repetition of elements in the permutations
    permutation => _permutations.push(permutation) // a callback on each permutation
)
```

# Algorithm
While propagating, at each step wrap `eachCb` in a wrapper, mapping the input of the wrapper to each element in `data`. On backtrack, call the topmost wrapper with each element in `data`. 