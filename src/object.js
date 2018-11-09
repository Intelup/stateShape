import { flattenizeArray, transformArrayToObjs } from './array'

const object = {
  deepClone(obj) {
    const clone = Object.assign({}, obj)

    Object.keys(clone).forEach(key => (clone[key] = typeof obj[key] === 'object' ? this.deepClone(obj[key]) : obj[key]))
    return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone
  },

  objectsArrayMerge(arr) {
    return flattenizeArray(arr.map(item => Object.entries(item))).reduce(function (prev, curr) {
      prev[curr[0]] = curr[1]
      return prev
    }, {})
  },

  removeByUuid: (objs, uuid) => transformArrayToObjs(Object.values(objs).filter(obj => obj.uuid !== uuid))
}

export default object
