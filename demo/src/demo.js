import {doRecursivelyIterate} from '../../src/lib.js'

import './demo.html'

function main() {
    doRecursivelyIterate(
        [0,1], 1, false, 
        (v, data, depth) => {console.log(`doRecursivelyIterate, eachCb - v, data, depth:`, v, data, depth)}, 
        doRecursivelyIterate,
    )
}

main()

export default main