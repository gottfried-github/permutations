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
At each step of the recursion, [pick one element and map all other elements to it](https://github.com/gottfried-github/permutationsjs/blob/7da69eb12b54caa9d9f0601408088a3d2317ee88/src/index.js#L22).