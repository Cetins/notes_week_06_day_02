const assert = require('assert');
const Taxi = require('../taxi.js');

describe('Taxi', function () {

    let taxi; //has to be a let to allow resetting back for every test

    beforeEach(function () {
        taxi = new Taxi('Toyota', 'Prius');
    });
    
    it('should have a manufacturer', function () {
        const actual = taxi.manufacturer;
        assert.strictEqual(actual, 'Toyota');
    });

    it('should have a model', function () {
        const actual = taxi.model;
        assert.strictEqual(actual, 'Prius');
    });

    describe('passengers', function () {
        it('should start with no passengers', function () {
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, []);
        });

        it('should be able to return the number of passengers', function () {
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 0);
        });

        it('should be able to add a passenger', function () {
            taxi.addPassenger('John');
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 1);
        });
    });

});

// xit will skip a test
// when comparing two arrays deepStrictEqual has to be used