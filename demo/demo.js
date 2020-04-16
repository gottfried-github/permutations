const {doRecursivelyIterate, makeRecursivelyIterate} = require("../src/lib")

function useMakeRecursivelyIterate() {
  const p = []

  const rIterator = makeRecursivelyIterate((v, data, depth, cb) => {
    console.log('v: ', v, 'data: ', data, 'depth: ', depth)
    cb((v) ? [data].concat(v) : [data])
  })

  rIterator([0,1,2], 2, true, (v) => {p.push(v); console.log(v)}, rIterator)

  console.log(p);
  return p
}

/*
function useMakeRecursivelyIterate() {
  const p = []

  const rIterator = makeRecursivelyIterate((v, data, depth, cb) => {
    console.log('v: ', v, 'data: ', data, 'depth: ', depth)
    cb((v) ? [data].concat(v) : [data])
  })

  rIterator([0,1,2], 2, true, (v) => {p.push(v); console.log(v)})

  console.log(p);
  return p
}

*/

module.exports = {
  useMakeRecursivelyIterate
}
