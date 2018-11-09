/* eslint-disable */

const stateShape = {
  object: {
      deepClone (obj) {
          const clone = Object.assign({}, obj)
          Object.keys(clone).forEach(
              key => (clone[key] = typeof obj[key] === 'object' ? this.deepClone(obj[key]) : obj[key]),
          )
          return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone
      },

      objectsArrayMerge(arr) {
          return stateShape.array.flattenizeArray(arr.map(item => (
              Object.entries(item)
          ))).reduce(function(prev,curr){prev[curr[0]]=curr[1];return prev;},{})
      },

      removeByUuid: (objs, uuid) => transformArrayToObjs(Object.values(objs).filter(obj => obj.uuid !== uuid))
  },

  array: {
      flattenizeArray (array) {
          return [
              ...[].concat.apply(
                  [], array
              )
          ]
      },
      transformArrayToObjs (name, array, propertyName = 'uuid') {
          let anotherParameters = this.flattenizeArray(
              array.map(item => (
                      Object.entries(item).map(val => {
                          if(Array.isArray(val[1]) && val[1].every(item => (typeof item == 'object'))){
                              return val[0]
                          }
                          return null
                      }).filter(x => x)
                  )
              )
          )

          let allIds = array.map(item => item.uuid)

          let result = {}
          result[name] = {
              byUuid: Object.values(array).reduce((obj, row) => {
                  // allIds.push(row[propertyName])

                  row = Object.entries(row).map(val => {
                      // console.log('VAL: ', val)

                      if(Array.isArray(val[1]) && val[1].every(item => (typeof item == 'object'))){
                          val[1] = val[1].map(item => item[propertyName])
                      }

                      // console.log('RETURNED VAL: ', val)
                      return val
                  }).reduce(function(prev,curr){prev[curr[0]]=curr[1];return prev;},{})

                  // console.log('ROW: ', row)
                  return ((obj[row[propertyName]] = row), obj)
              }, {}),

              allIds: allIds
          }

          anotherParameters = [...new Set(anotherParameters)]
          console.log('Another Parameters: ', anotherParameters)
          if (anotherParameters.length > 0){
              let anotherObjects = this.flattenizeArray(
                  anotherParameters.map(parameter => {
                      let objectsArray = this.flattenizeArray(array.map(item => item[parameter]))

                      let objects = this.transformArrayToObjs(parameter, objectsArray, propertyName)

                      return objects
                  })
              )

              console.log('Another Objects: ', anotherObjects)

              let objectsMerge = stateShape.object.objectsArrayMerge(anotherObjects)

              result = Object.assign(result, objectsMerge)
          }
          return result
      }

  }
}

module.exports = stateShape
