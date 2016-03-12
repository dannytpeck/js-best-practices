function Knight (name, regiment) { this.name = name; this.regiment = regiment; switch (regiment) { case 1: this.weapon = "Broadsword"; break; case 2: this.weapon = "Claymore"; break; case 3: this.weapon = "Longsword"; break; case 5: this.weapon = "War Hammer"; break; case 6: this.weapon = "Battle Axe"; break; case 4: case 7: case 8: this.weapon = "Morning Star"; break; case "King": this.weapon = "Excalibur"; break; default: alert(name + " has an incorrect " + "regiment, Master Armourer!" + "\n\nNo weapon assigned!"); }}

function SpeedTest(testImplement, testParams, repetitions) {
  this.testImplement = testImplement;
  this.testParams = testParams;
  this.repetitions = repetitions || 10000;
  this.average = 0;
}

SpeedTest.prototype = {
  startTest: function() {
    var beginTime, endTime, sumTimes = 0;
    for (var i = 0, x = this.repetitions; i < x; i++) {
      beginTime = +new Date();
      this.testImplement(this.testParams);
      endTime = +new Date();
      sumTimes += endTime - beginTime;
    }
    this.average = sumTimes / this.repetitions;
    return console.log("Average execution across " +
                       this.reptitions + ": " +
                       this.average);
  }
}

var firstRegimentNewbs = ["Grimble Horsehead", "Jark Winterborn", "Bunder Ropefist", "Ernst Breadbaker"];
var firstRegimentKnights = ["...tons of Knight objects..."];
var listsForTests = [firstRegimentNewbs, firstRegimentKnights];

var noBP = function (listOfParams) {
  for (var i = 0; i < listsForTests[0].length; i++) {
    var newGuy = new Knight(listsForTests[0][i], 1);
    listsForTests[1].push(newGuy);
  }
};

var noBPtest = new SpeedTest(noBP, listsForTests, 100000); // not passing in third argument, so reps will be 10,000
noBPtest.startTest();

var BP = function (listOfParams) {
  for (var i = 0, x = listsForTests[0].length; i < x; i++) {
    listsForTests[1].push(new Knight(listsForTests[0][i], 1));
  }
};

var BPtest = new SpeedTest(BP, listsForTests, 100000); // not passing in third argument, so reps will be 10,000
BPtest.startTest();