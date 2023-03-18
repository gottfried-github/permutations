import permutations from '../../src/lib.js'

import './demo.html'

function main() {
    const _permutations = []
    permutations([0,1,2], 2, false, permutation => _permutations.push(permutation))

    console.log(_permutations)
}

main()

export default main