import { flattenizeArray, transformArrayToObjs } from './array'

const object = {
  /**
   * Clone object without reference
   *
   * @private
   * @param {Object} [obj] The original object.
   * @returns {Object} Returns the cloned object.
   */
  deepClone(obj) {
    const clone = Object.assign({}, obj)

    Object.keys(clone).forEach(
      key =>
        (clone[key] =
          typeof obj[key] === 'object' ? this.deepClone(obj[key]) : obj[key])
    )
    return Array.isArray(obj)
      ? (clone.length = obj.length) && Array.from(clone)
      : clone
  },
  /**
   * Convert array of object to single object
   *
   * @private
   * @param {Array} [arr] The array.
   * @returns {Object} Returns the object.
   */
  objectsArrayMerge(arr) {
    return flattenizeArray(arr.map(item => Object.entries(item))).reduce(
      function(prev, curr) {
        prev[curr[0]] = curr[1]
        return prev
      },
      {}
    )
  },
  /**
   * Remove object by key (uuid)
   *
   * @private
   * @param {Object} [objs] The object with keys of uuid.
   * @param {String} [uuid] The string index (uuid).
   * @returns {Object} Returns the new object, by removing the object from the key passed by uuid parameter.
   */
  removeByUuid: (objs, uuid) =>
    transformArrayToObjs(Object.values(objs).filter(obj => obj.uuid !== uuid))
}

export default object
