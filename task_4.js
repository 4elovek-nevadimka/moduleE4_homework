function ElectricalAppliance(power) {
  this.power = power
}

ElectricalAppliance.prototype.switchOn = function() {
  console.log('State: switched ON')
  console.log(`Power consumption: ${this.power} Watt`)
}

ElectricalAppliance.prototype.switchOff = function() {
  console.log('State: switched OFF')
}

// Tea kettle
function Kettle(power) {
  this.power = power
  this.waterVolume = 0.0
}

Kettle.prototype = new ElectricalAppliance()

Kettle.prototype.hasWater = function() {
  return this.waterVolume > 0.0
}

Kettle.prototype.pourWater = function(value) {
  this.waterVolume = value
}

// Vacuum cleaner
function VacuumCleaner(power) {
  this.power = power
  this.isContainerFull = true
}

VacuumCleaner.prototype = new ElectricalAppliance()

VacuumCleaner.prototype.cleanContainer = function(value) {
  this.isContainerFull = false
}


const teaKettle = new Kettle(900);
teaKettle.switchOn();
if (!teaKettle.hasWater()) {
  teaKettle.pourWater(1)
}
console.log(`teaKettle has ${teaKettle.waterVolume} liter`)

const vacuumCleaner = new VacuumCleaner(1800);
vacuumCleaner.switchOn();
if (vacuumCleaner.isContainerFull) {
  vacuumCleaner.cleanContainer()
}
console.log('vacuumCleaner container is empty')

vacuumCleaner.switchOff()
teaKettle.switchOff()