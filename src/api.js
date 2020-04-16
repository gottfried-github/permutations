const {log, logger} = require("./helpers").logger()
const {doRecursivelyIterate, makeRecursivelyIterate} = require('./lib')
// const {prettifyProduct} = require("./helpers")

const libLogger = require('./lib').logger
libLogger.onLog((...args) => {
  log(...args)
})
libLogger.silent = true

function trails(vertices) {
  const edges = []

  recursivelyIterate(vertices, 1, true, (v) => {
    edges.push(v)
  })
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

// get all possible paths
// path definition: if exactly one of the visited vertices occurs in a walk
function paths(edges) {

}

// create a graph from given vertices, wherein every vertice is
// adjacent to every other vertice
function connectAll(vertices) {
  return cartesianProductSync(vertices)
}

/*
function allPossibleGraphs(vertices) {
  // all possible edges
  const edges = cartesianProductSync(vertices)

  // all possible permutations of the edges
  const graphs = cartesianProductSync(edges)

  log(
    'edges', edges, 'graphs', graphs
  )
}
*/

function permutations(arr) {

}

class Pair extends Array {
  constructor(l, r) {
    super(l, r)
  }
}

class Pairs extends Array {
  constructor(...pairs) {
    pairs.forEach((pair) => {if (pair instanceof Pair) throw new Error()})
    super(...pairs)
  }
}

function cartesianProductSync(arr) {

  const pairs = new Pairs()
  recursivelyIterate(arr, 1, null, (v) => {
    pairs.push(new Pair(v[0], v[1]))
  })

  return pairs
}

function* CartesianProduct(arr) {

}

// function cartesianProduct(arr) {
//   return prettifyProduct(cartesianProductSync(arr))
// }

function recursivelyIterate(data, depth, noRepeat, eachCb) {
  const _recursivelyIterate = makeRecursivelyIterate((v, data, depth, eachCb) => {
    eachCb((v) ? [data].concat(v) : [data])
  })

  _recursivelyIterate(data, depth, noRepeat, eachCb, _recursivelyIterate)
}

module.exports = {
  cartesianProductSync, trails,
  recursivelyIterate,
  log, logs: logger.logs
}
