const Park = function (name, ticketPrice, collectionOfDinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
};


Park.prototype.addDinosaur = function(dinosaur){
  this.collectionOfDinosaurs.push(dinosaur)
}


Park.prototype.removeDinosaur = function(){
  this.collectionOfDinosaurs.pop()
}

Park.prototype.findMostVisitor = function(){
  let dinoWithMostVisitors = this.collectionOfDinosaurs[0];
  for (let dinosaur of this.collectionOfDinosaurs){
    if (dinosaur.guestsAttractedPerDay > dinoWithMostVisitors.guestsAttractedPerDay){
      dinoWithMostVisitors = dinosaur;
    }
  }
  return dinoWithMostVisitors;
}

Park.prototype.findSpecies = function(species){
  let dinoSpecies = [];
  for (let dinosaur of this.collectionOfDinosaurs){
    if (dinosaur.species === species ) {
      dinoSpecies.push(dinosaur)
    }
  }
  return dinoSpecies;
}

Park.prototype.totalNumberOfVisitorPerDay = function () {
  let dailyVisitor=0;
  for (let dinosaur of this.collectionOfDinosaurs){
    dailyVisitor += dinosaur.guestsAttractedPerDay;
  }
  return dailyVisitor
};

Park.prototype.totalNumberOfVisitorPerYear = function() {
  let dailyVisitor=0;
  for (let dinosaur of this.collectionOfDinosaurs){
    dailyVisitor += dinosaur.guestsAttractedPerDay;
  }
  const yearlyVisitors = dailyVisitor *365
  return yearlyVisitors
};
Park.prototype.revenuePerYear = function() {
  let dailyVisitor=0;
  for (let dinosaur of this.collectionOfDinosaurs){
    dailyVisitor += dinosaur.guestsAttractedPerDay;
  }
  const yearlyVisitors = dailyVisitor *365;
  const revenuePerYear = yearlyVisitors * this.ticketPrice
  return revenuePerYear
};



module.exports = Park;
