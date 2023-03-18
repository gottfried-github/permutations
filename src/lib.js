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
            console.log('eachCb, item, data:', item, data)
            eachCb([item, ...data])
        })
    }
}

export {
    permutations
}
