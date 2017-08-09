'use strict'

/**
 * Converts an iterable, an object, or a primitive into an iterator.
 * @param  {any} thingToConvert
 * @return {object}
 */
module.exports = function (thingToConvert) {
  // Turn undefined/NaN into an empty iterator
  if (typeof thingToConvert === 'undefined' || thingToConvert === null || Number.isNaN(thingToConvert)) {
    return {
      next () { return {done: true} },
    }
  }

  // Turn a primitive into an iterator
  if (typeof thingToConvert !== 'object') {
    let done = false
    return {
      next () {
        if (done) {
          return {done: true}
        } else {
          done = true
          return {
            value: thingToConvert,
            done: false,
          }
        }
      },
    }
  }

  // Turn an Array, Set, Map, etc. into an iterator
  if (Symbol.iterator in thingToConvert) {
    return thingToConvert[Symbol.iterator]()
  }

  // Turn an object into an iterator
  let nextIndex = 0
  const keys = Object.keys(thingToConvert)
  const iterator = {
    next () {
      let key
      if (nextIndex < keys.length) {
        key = keys[nextIndex++]
        return {
          value: [key, thingToConvert[key]],
          done: false,
        }
      } else {
        return {done: true}
      }
    },
  }
  iterator[Symbol.iterator] = () => iterator
  return iterator
}
