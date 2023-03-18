function doRecursivelyIterate(data, depth, noRepeat, eachCb, doRecursivelyIterate) {
  console.log(`doRecursivelyIterate, depth:`, depth);
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

export {
  makeRecursivelyIterate, doRecursivelyIterate
}
