const {doRecursivelyIterate, recursivelyIterate} = require("../src/lib")

function recursivelyIterateUsage(data, depth, noRepeat, eachCb) {
  recursivelyIterate(data, depth, noRepeat, (v, data) => {
    eachCb(v)
  }, recursivelyIterate)
}

function doRecursivelyIterateUsage() {
  const p = []
  doRecursivelyIterate([0,1,2], 2, true, (v, data, depth) => {
    // console.log(
    //   "recursivelyIterate - data: ", data,
    //   ", v: ", v, ", depth: ", depth)

    p.push((v) ? [data].concat(v) : [data])
  }, recursivelyIterate)
}

/*
function demoRecursivelyIterate() {
  const one = []
  doRecursivelyIterate(["I", "want", "you", "me"], 2, true, (v) => {
    console.log(v); one.push(v)
  }, doRecursivelyIterate)
  console.log(one)

  const two = []
  doRecursivelyIterate([0,1,2], 1, true, (v) => {
    console.log(v); two.push(v)
  }, doRecursivelyIterate)
  console.log("set: [0,1,2]; length of permutation: 2. Idk how to calculate what the number of permutations should be here", two)
  // console.log((Math.pow(3,2) === two.length), two)

  const three = []
  doRecursivelyIterate([0,1], 4, null, (v) => {
    console.log(v); three.push(v)
  }, doRecursivelyIterate)

  console.log(`the set: [0,1]; length of permutation: 5; is the number of generated permutations correct: ${(Math.pow(2, 5) === three.length)}`, three)
}
*/

module.exports = {recursivelyIterateUsage}
