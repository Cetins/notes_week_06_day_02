const Taxi = function (manufacturer, model) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.passengers = []

};

Taxi.prototype.numberOfPassengers = function () {
    return this.passengers.length;
};

Taxi.prototype.addPassenger = function (passenger) {
    this.passengers.push(passenger);
};

module.exports = Taxi;