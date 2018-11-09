import { objectsArrayMerge } from './object'

const array = {
  flattenizeArray(array) {
    return [...[].concat.apply([], array)]
  },
  arrayToObject(name, array, propertyName = 'uuid') {
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

    let allIds = array.map(item => item.uuid)

    let result = {}

    let firstKey = 'by' + propertyName.replace(/^\w/, c => c.toUpperCase())

    let secondKey = 'all' + propertyName.replace(/^\w/, c => c.toUpperCase())

    result[name] = {}

    result[name][firstKey] = Object.values(array).reduce((obj, row) => {
      // allIds.push(row[propertyName])

      row = Object.entries(row)
        .map(val => {
          // console.log('VAL: ', val)

          if (Array.isArray(val[1]) && val[1].every(item => typeof item === 'object')) {
            val[1] = val[1].map(item => item[propertyName])
          }

          // console.log('RETURNED VAL: ', val)
          return val
        })
        .reduce(function (prev, curr) {
          prev[curr[0]] = curr[1]
          return prev
        }, {})

      // console.log('ROW: ', row)
      return ((obj[row[propertyName]] = row), obj)
    }, {})

    result[name][secondKey] = allIds

    anotherParameters = [...new Set(anotherParameters)]
    console.log('Another Parameters: ', anotherParameters)
    if (anotherParameters.length > 0) {
      let anotherObjects = this.flattenizeArray(
        anotherParameters.map(parameter => {
          let objectsArray = this.flattenizeArray(array.map(item => item[parameter]))

          let objects = this.transformArrayToObjs(parameter, objectsArray, propertyName)

          return objects
        })
      )

      console.log('Another Objects: ', anotherObjects)

      let objectsMerge = objectsArrayMerge(anotherObjects)

      result = Object.assign(result, objectsMerge)
    }
    return result
  }
}

export default array
