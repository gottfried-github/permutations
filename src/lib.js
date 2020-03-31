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

function cartesianProductSync(arr) {
  const pairs = new Pairs()

  arr.forEach(left => arr.forEach(
    right => pairs.push(new Pair(left, right)))
  )

  return pairs
}

module.exports = {
  cartesianProductSync,
  Pair, Pairs,
  logs: logger.logs, logger
}
