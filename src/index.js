/**
 * @param {Array} data elements which to permutate
 * @param {Number} depth depth of the recursion: correspondingly, the size of resulting permutations
 * @param {Boolean} noRepeat whether to avoid repetition of elements in the permutations
 * @param {Function} eachCb callback fires on each permutation
*/
function permutations(data, depth, noRepeat, eachCb) {
    if (depth === 0) {
        for (const item of data) {
            eachCb([item])
        }
        
        return
    }
    
    for (const [i, item] of data.entries()) {
        const _data = [...data]
        
        if (noRepeat) _data.splice(i, 1)
        
        permutations(_data, depth-1, noRepeat, (data) => {
            eachCb([item, ...data])
        })
    }
}

export default permutations
