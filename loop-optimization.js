/* globals alert, console */
var treasureChest = {
  goldCoins: 10000,
  magicalItem: "Crown of Speed",
  necklaces: [
    "ruby",
    "pearl",
    "sapphire",
    "diamond"
  ],
  openLid: function () {
    alert("Creeeeak!");
  }
};

console.log("You've found the following necklaces:");
var list = treasureChest.necklaces;
for(var i = 0, x = treasureChest.necklaces.length; i < x; i++) {
  console.log(list[i]);
}

Array.prototype.countType = function (type) {
  //Do stuff
};

Array.prototype.removeAll = function (item) {
  //Do more stuff
};

for(var p in list) {
  console.log(list[p]); // => Includes new Array methods in addition to indices (they've become enumerable)
}
// Use normal for-loop instead if the array has had methods added onto it.