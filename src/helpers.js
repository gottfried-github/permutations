const {Logger} = require('../tools/logger')
const {Pairs, Pair} = require('./lib')

function prettifyProduct(pairs) {
  return stringifyProduct(groupIntoRows(pairs))
}

function groupIntoRows(pairs) {
  const rows = []

  let iLeft = null
  pairs.forEach((pair) => {
    if (pair[0] !== iLeft) {
      rows.unshift([pair])
      iLeft = pair[0]
    } else { rows[0].push(pair) }
  })

  return rows.reverse()
}

function stringifyProduct(rows) {
  const rowsStr = []
  rows.forEach((row) => {
    let str = ''
    row.forEach((pair, i) => {
      str +=
        (0 === i) ? `{${pair[0]}, ${pair[1]}},` :
        (row.length-1 === i) ? ` {${pair[0]}, ${pair[1]}}` :
        ` {${pair[0]}, ${pair[1]}},`
    })

    rowsStr.push(str)
  })

  return rowsStr
}

function logger() {
  const logger = new Logger()

  logger.log = new Proxy(logger.log, {
    apply(t, thisArg, args) {
      t.call(thisArg, ...args.map(arg =>
        (typeof(arg) === 'object' && arg instanceof Pairs)
          ? prettifyProduct(arg) : arg
      ))
    }
  })

  return {
    logger, log: logger.log.bind(logger)
  }
}

// class GraphLogger extends Logger {
//   logGraph(pairs, ...args) {
//     this.log(prettifyProduct(pairs), ...args)
//   }
//
//   constructor() { super() }
// }

module.exports = {
  prettifyProduct,
  groupIntoRows,
  stringifyProduct,
  Logger, logger,
  // GraphLogger,
}
