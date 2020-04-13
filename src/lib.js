const {log, logG, logger} = require("../tools/logger").logger()

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

function doRecursivelyIterate(data, depth, noRepeat, eachCb, doRecursivelyIterate) {
  // console.log(`depth: ${depth}`)

  if (depth === -1) return

  // let prefix = ''
  // for (var x = 0; x < depth; x++) {
  //   prefix += '  '
  // }

  var i=0, len=data.length;
  for (i; i < len; i++) {

    if (depth === 0) {eachCb([data[i]]); continue}

    let dataArg = data
    if (noRepeat) {
      dataArg = [].concat(data); dataArg.splice(i, 1)
    }

    doRecursivelyIterate(dataArg, depth-1, noRepeat, (v) => {
      eachCb([data[i]].concat(v))
    }, doRecursivelyIterate)
  }
}

function recursivelyIterate(data, noRepeat) {
  permutations = []

  doRecursivelyIterate(data, data.length-1, noRepeat, (v) => {
    console.log(v); permutations.push(v)
  }, doRecursivelyIterate)

  console.log(permutations.length)
  return permutations
  // recursivelyIterate(data, data.length-1, null, (v) => {
  //   console.log(v)
  // }, recursivelyIterate)
}

}

function cartesianProductSync(arr) {
  const pairs = new Pairs()

  arr.forEach(left => arr.forEach(
    right => pairs.push(new Pair(left, right)))
  )

  return pairs
}

module.exports = {
  cartesianProductSync,
  recursivelyIterate, doRecursivelyIterate, // permutations,
  Pair, Pairs,
  logs: logger.logs, logger
}
