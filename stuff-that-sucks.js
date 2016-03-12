//#1: with
var castle = {
  solders: 865,
  capacity: 3000,
  keep: {
    soldiers: 19,
    capacity: 40,
    drawbridge: {
      soldiers: 8,
      capacity: 20,
      open: function() {
        alert("rrrrrrrrrrrrrBANG!");
      },
      close: function() {
        alert("yunyunyunyunyunyunyunCLACK!");
      }
    }
  }
};

//instead of using with, cache your objects in variables
var reinforcements = 12;
var o = castle.keep.drawbridge;
if (o.capacity >= o.soldiers + reinforcements) {
  o.open();
  o.soldiers += reinforcements;
  alert("Drawbridge soldiers: " + o.soldiers);
}

//#2: eval
function assignRegimentMotto(number, motto) {
  eval("regiment" + number + ".motto = '" + motto + "'");
}
assignRegimentMotto(2, "The Best Of The Best"); //will work
assignRegimentMotto(1, "The King's Own"); //will be ruined by the apostrophe

//Use eval as little as possible
//Better to use an array in this case
var regiments = ['a bunch of ordered regiment objects'];
function assignRegimentMotto(number, motto) {
  regiments[number].motto = motto;
}

//#3: Leaving off {}
if(isKing)
  weapon = "Excalibur";
else
  weapon = "Longsword";
//what is new code needs to be added?
if(isKing) {
  weapon = "Excalibur";
  alert("Hail Arthur, King of the Britons!");
  removeFromArmory("Excalibur");
} else {
  weapon = "Longsword";
  alert("Charge on, Sir Knight!");
  removeFromArmory("Longsword");
}















