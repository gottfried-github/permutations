function doPermutations(data, depth, noRepeat, eachCb, permutations) {
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
        }, permutations)
    }
}

function permutations(data, depth, noRepeat) {
    const permutations = []
    
    doPermutations(data, depth, noRepeat, (data) => {
        permutations.push(data)
    }, doPermutations)
    
    return permutations
}

export {
    permutations, doPermutations
}
