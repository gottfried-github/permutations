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

function exampleMakeRecursivelyIterate() {
  const edges = []
  const makeEdges = makeRecursivelyIterate((v, data, depth, eachCb) => {
    eachCb((v) ? [data].concat(v) : [data])
  })

  makeEdges([0,1,2], 1, true, (v) => {
    edges.push(v)
  }, makeEdges)

  console.log(edges);


  const trails = []
  const makeTrails = makeRecursivelyIterate((v, data, depth, eachCb) => {
    if (!v) return eachCb([data])

    console.log((v[0][0] === data[1]), `${data}-${v[0]}`);
    if (v[0][0] === data[1]) eachCb([data].concat(v))
  })

  makeTrails(edges, edges.length-1, true, (v) => {
    console.log(v);
    trails.push(v)
  }, makeTrails)
  return trails
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
  useMakeRecursivelyIterate, exampleMakeRecursivelyIterate
}
