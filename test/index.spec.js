/* global describe, it, before */

import chai from 'chai'
import stateshape from '../lib/stateshape'

chai.expect()

const expect = chai.expect

let original
let modified1
let modified2

describe('Cloning an object', () => {
  before(() => {
    original = [
      {
        city: 'Piracicaba',
        country: 'Brazil'
      },
      {
        persons: [
          {
            name: 'John',
            age: '32',
            pets: ['cat', 'dog']
          },
          {
            name: 'Mary',
            age: '28',
            pets: ['parrot']
          }
        ]
      }
    ]
  })
  describe('when I merge an array of objects', () => {
    it('should return one object', () => {
      modified1 = stateshape.object.objectsArrayMerge(original)
      expect(modified1).to.be.an('object')
    })
  })
  describe('when I clone', () => {
    it('should return an object with the same parameters', () => {
      modified2 = stateshape.object.deepClone(modified1)
      expect(modified2.city).to.be.equal(modified1.city)
      expect(modified2.country).to.be.equal(modified1.country)
    })
  })
  describe('when I pass an array of objects', () => {
    it('should return an object', () => {
      modified2 = stateshape.array.arrayToObject('persons', modified1.persons, 'name')
      console.log(modified2)
      // expect(modified2.city).to.be.equal(modified1.city)
      // expect(modified2.country).to.be.equal(modified1.country)
    })
  })
})

describe('Flattening an array', () => {
  before(() => {
    original = [[1, 2, 3], [4, 5]]
  })
  describe('when I flatten', () => {
    it('should return flat array', () => {
      modified1 = stateshape.array.flattenizeArray(original)
      expect(original).to.not.be.equal(modified1)
      expect(modified1)
        .to.be.an('array')
        .that.includes(4)
    })
  })
})
