import {permutations, doPermutations} from '../../src/lib.js'

import './demo.html'

function main() {
    const _permutations = permutations([0,1], 1, false)

    console.log(_permutations)
}

main()

export default main