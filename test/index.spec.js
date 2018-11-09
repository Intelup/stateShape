/* global describe, it, before */

import chai from 'chai'
import stateshape from '../lib/stateshape'

chai.expect()

const expect = chai.expect

let original
let modified

describe('Cloning an object', () => {
  before(() => {
    original = {
      name: 'John',
      age: '32'
    }
  })
  describe('when I clone', () => {
    it('should return the same parameters', () => {
      modified = stateshape.object.deepClone(original)
      expect(original.name).to.be.equal(modified.name)
      expect(original.age).to.be.equal(modified.age)
    })
  })
})

describe('Flattening an array', () => {
  before(() => {
    original = [[1, 2, 3], [4, 5]]
  })
  describe('when I flatten', () => {
    it('should return flat array', () => {
      modified = stateshape.array.flattenizeArray(original)
      expect(original).to.not.be.equal(modified)
      expect(modified).to.be.an('array').that.includes(4)
    })
  })
})
