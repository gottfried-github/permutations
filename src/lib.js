const {log, logG, logger} = require("../tools/logger").logger()

function doRecursivelyIterate(data, depth, noRepeat, eachCb, doRecursivelyIterate) {
  if (depth === -1) return

  var i=0, len=data.length;
  for (i; i < len; i++) {

    if (depth === 0) {
      // console.log(`doRecursivelyIterate - data[i]: ${data[i]}, depth: ${depth}`)
      // makeEachCb([data[i]], depth)(null);
      eachCb(null, data[i], depth)
      continue
    }

    let dataArg = data
    if (noRepeat) {
      dataArg = [].concat(data); dataArg.splice(i, 1)
    }

    doRecursivelyIterate(dataArg, depth-1, noRepeat, (v) => {
      // console.log(`doRecursivelyIterate - data[i]: ${data[i]}, v: ${v}, depth: ${depth}`)
      eachCb(v, data[i], depth)
    }, doRecursivelyIterate)
  }
}

function makeRecursivelyIterate(cb) {
  return (data, depth, noRepeat, eachCb, recursivelyIterate) => {
    doRecursivelyIterate(data, depth, noRepeat, (v, data, depth) => {
      cb(v, data, depth, eachCb)
    }, recursivelyIterate)
  }
}

/*
// same, but loop the resulting method onto itself
function makeRecursivelyIterate(cb) {
  const recursivelyIterate = (data, depth, noRepeat, eachCb, recursivelyIterate) => {
    doRecursivelyIterate(data, depth, noRepeat, (v, data, depth) => {
      cb(v, data, depth, eachCb)
    }, recursivelyIterate)
  }

  return (data, depth, noRepeat, eachCb) => {
    recursivelyIterate(data, depth, noRepeat, eachCb, recursivelyIterate)
  }
}
*/

function recursivelyIterate(data, depth, noRepeat, eachCb) {
  const _recursivelyIterate = makeRecursivelyIterate((v, data, depth, eachCb) => {
    eachCb((v) ? [data].concat(v) : [data])
  })

  _recursivelyIterate(data, depth, noRepeat, eachCb, _recursivelyIterate)
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

function* CartesianProduct(arr) {

}

function cartesianProductSync(arr) {
  // const pairs = new Pairs()
  //
  // arr.forEach(left => arr.forEach(
  //   right => pairs.push(new Pair(left, right)))
  // )
  //
  // return pairs

  const pairs = new Pairs()
  doRecursivelyIterate(arr, 1, null, (v) => {
    pairs.push(new Pair(v[0], v[1]))
  }, doRecursivelyIterate)

  return Pairs
}

function* CartesianProduct(arr) {

}

function permutations(arr) {

}

// function getTrails() {}

// get all possible paths
function paths(edges) {

}

// create a graph from given vertices, wherein every vertice is
// adjacent to every other vertice
function connectAll(vertices) {
  return cartesianProductSync(vertices)
}

module.exports = {
  cartesianProductSync,
  makeRecursivelyIterate, doRecursivelyIterate,recursivelyIterate, // permutations,
  Pair, Pairs,
  logs: logger.logs, logger
}
