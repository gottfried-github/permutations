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

function recursivelyIterate(data, depth, eachCb, recursivelyIterate) {
  // console.log(`depth: ${depth}`)

  if (depth === -1) return

  // let prefix = ''
  // for (var x = 0; x < depth; x++) {
  //   prefix += '  '
  // }

  var i=0, len=data.length;
  for (i; i < len; i++) {

    if (depth === 0) {eachCb([data[i]]); continue}


    recursivelyIterate(data, depth-1, (v) => {
      eachCb([data[i]].concat(v))
    }, recursivelyIterate)
  }
}

function tryRecursivelyIterate(data) {
  recursivelyIterate(data, data.length-1, (v) => {
    console.log(v)
  }, recursivelyIterate)
}

function cartesianProductSync(arr) {
  const pairs = new Pairs()

  arr.forEach(left => arr.forEach(
    right => pairs.push(new Pair(left, right)))
  )

  return pairs
}

module.exports = {
  cartesianProductSync, recursivelyIterate, tryRecursivelyIterate, // permutations,
  Pair, Pairs,
  logs: logger.logs, logger
}
