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

    Object.keys(clone).forEach(key => (clone[key] = typeof obj[key] === 'object' ? this.deepClone(obj[key]) : obj[key]))
    return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone
  },
  /**
   * Remove object by key
   *
   * @private
   * @param {Object} [objs] The original object.
   * @param {String} [value] The key value to remove.
   * @param {String} [keyName] The key name to filter (default: uuid).
   * @returns {Object} Returns the new object, by removing the object from the key passed by value parameter.
   */
  removeByKey: (objs, value, keyName = 'uuid') =>
    Object.values(Object.values(objs).filter(obj => obj[keyName] !== value)).reduce(
      (obj, row) => {
        obj[row[keyName]] = row
        return obj
      },
      {}
    )
}

export default object
