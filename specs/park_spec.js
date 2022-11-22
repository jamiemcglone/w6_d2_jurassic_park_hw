const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let jurassicPark;
  let tRex;
  let bronchosaurus;
  
  beforeEach(function () {
    jurassicPark = new Park("Jurassic Park", 100);
    tRex = new Dinosaur("T-Rex", "carnivore", 1000);
    bronchosaurus = new Dinosaur("Bronchosaurus", "herbivore", 2000);
  })

  it('should have a name', function () {
    const actual = jurassicPark.name;
    assert.strictEqual(actual, "Jurassic Park")
  });

  it('should have a ticket price', function () {
    const actual = jurassicPark.ticketPrice;
    assert.strictEqual(actual, 100)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = jurassicPark.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
