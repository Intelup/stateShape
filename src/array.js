import pluralize from 'pluralize'

const array = {
  /**
   * Creates a new array with all sub-array elements concatenated
   *
   * @private
   * @param {Array} [array] The array.
   * @returns {Array} Returns the array.
   */
  flattenizeArray(array) {
    return [...[].concat.apply([], array)]
  },

  /**
   * Convert array of object to single object
   *
   * @private
   * @param {Array} [array] The array.
   * @returns {Object} Returns the object.
   */
  objectsArrayMerge(array) {
    return this.flattenizeArray(array.map(item => Object.entries(item))).reduce(function (prev, curr) {
      prev[curr[0]] = curr[1]
      return prev
    }, {})
  },

  /**
   * Creates an object from nested data (objects array)
   *
   * @private
   * @param {String} [name] The elements name.
   * @param {Array} [array] The array of objects to shape.
   * @param {String} [propertyName] The property name to filter elements.
   * @returns {Object} Returns the object.
   */
  objectsArrayShape(name, array, propertyName = 'uuid') {
    let anotherParameters = this.flattenizeArray(
      array.map(item =>
        Object.entries(item)
          .map(val => {
            if (Array.isArray(val[1]) && val[1].every(item => typeof item === 'object')) {
              return val[0]
            }
            return null
          })
          .filter(x => x)
      )
    )

    let allIds = array.map(item => item[propertyName])

    let result = {}

    let firstKey = 'by' + propertyName.replace(/^\w/, c => c.toUpperCase())

    let secondKey = 'all' + pluralize(propertyName.replace(/^\w/, c => c.toUpperCase()))

    result[name] = {}

    result[name][firstKey] = Object.values(array).reduce((obj, row) => {

      row = Object.entries(row)
        .map(val => {

          if (Array.isArray(val[1]) && val[1].every(item => typeof item === 'object')) {
            val[1] = val[1].map(item => item[propertyName])
          }

          return val
        })
        .reduce(function (prev, curr) {
          prev[curr[0]] = curr[1]
          return prev
        }, {})

      return ((obj[row[propertyName]] = row), obj)
    }, {})

    result[name][secondKey] = allIds

    anotherParameters = [...new Set(anotherParameters)]
    if (anotherParameters.length > 0) {
      let anotherObjects = this.flattenizeArray(
        anotherParameters.map(parameter => {
          let objectsArray = this.flattenizeArray(array.map(item => item[parameter]))

          let objects = this.objectsArrayShape(parameter, objectsArray, propertyName)

          return objects
        })
      )

      let objectsMerge = this.objectsArrayMerge(anotherObjects)

      result = Object.assign(result, objectsMerge)
    }
    return result
  }
}

export default array
