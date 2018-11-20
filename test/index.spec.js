/* global describe, it, before */

import chai from 'chai'
import stateshape from '../lib/stateshape'

chai.expect()

const expect = chai.expect

let original
let modified1
let modified2

describe('Do some magic with array of objects', () => {
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
      modified1 = stateshape.array.objectsArrayMerge(original)
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
  describe('when I pass an array of objects to shape', () => {
    it('should return an object', () => {
      modified2 = stateshape.array.objectsArrayShape('persons', modified1.persons, 'name')
      expect(modified2).to.be.an('object')
      expect(modified2.persons.byName.John.name).to.be.equal(
        modified1.persons.map(person => person.name).find(name => name === 'John')
      )
    })
  })
  describe('when I pass an key to delete', () => {
    it('should return an object without that key', () => {
      modified1 = stateshape.object.removeByKey(modified2.persons.byName, 'John', 'name')
      expect(modified1).to.be.an('object')
      expect(modified1).to.not.have.any.keys('John')
      expect(modified1).to.have.any.keys('Mary')
    })
  })
})

describe('Do some magic with pure arrays', () => {
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
