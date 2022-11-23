const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
  }

  Park.prototype.addDinosaur = function (dinosaur) {
      this.dinosaurs.push(dinosaur);
  }

  Park.prototype.removeDinosaur = function (dinosaur) {
    index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
  }

  Park.prototype.mostPopularDino = function () {
    let mostPopular = 0;
    let dino;
    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > mostPopular) {
          mostPopular = dinosaur.guestsAttractedPerDay;
          dino = dinosaur
        }
    }
    return dino
  }

  Park.prototype.findAllOfSpecies = function (species) {
    let allOfThatSpecies = [];
    for (const dinosaur of this.dinosaurs) {
      if (dinosaur.species === species) {
        allOfThatSpecies.push(dinosaur);
      }
    }
    return allOfThatSpecies
  }
  module.exports = Park;