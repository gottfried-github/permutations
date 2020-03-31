const {log, logger} = require("../tools/logger").logger()

function prettifyProduct(product) {
  
}

function* CartesianProduct(arr) {

}

function cartesianProductSync(arr) {
  const pairs = []

  arr.forEach(iLeft => arr.forEach(
    iRight => pairs.push([iLeft, iRight]))
  )

  return pairs
}

module.exports = {logs: logger.logs, cartesianProductSync}
