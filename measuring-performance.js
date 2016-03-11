function Knight (name, regiment) {
  this.name = name;
  this.regiment = regiment;
    
  switch (regiment) {
    case 1:
		  this.weapon = "Broadsword";
		  break;
	  case 2:
		  this.weapon = "Claymore";
		  break;
	  case 3:
		  this.weapon = "Longsword";
		  break;
    case 5:
		  this.weapon = "War Hammer";
		  break;
	  case 6:
		  this.weapon = "Battle Axe";
		  break;
	  case 4:
	  case 7:
	  case 8:
		  this.weapon = "Morning Star";
		  break;
	  case "King":
		  this.weapon = "Excalibur";
		  break;
	  default:
		  alert(name + " has an incorrect " +
		        "regiment, Master Armourer!" +
			      "\n\nNo weapon assigned!");
  }
}

var firstRegimentNewbs = ["Grimble Horsehead", "Jark Winterborn", "Bunder Ropefist", "Ernst Breadbaker"];
var firstRegimentKnights = ["...tons of Knight objects..."];

var secondRegimentNewbs = ["Grimble Horsehead", "Jark Winterborn", "Bunder Ropefist", "Ernst Breadbaker",
                           "Grimble Horsehead", "Jark Winterborn", "Bunder Ropefist", "Ernst Breadbaker"];
var secondRegimentKnights = ["...tons of Knight objects..."];

console.time("Total completion time");

console.time("Time to add " + firstRegimentNewbs.length + " Knights");
for (var i = 0, x = firstRegimentNewbs.length; i < x; i++) {
  firstRegimentKnights.push(new Knight(firstRegimentNewbs[i], 1));
}
console.timeEnd("Time to add " + firstRegimentNewbs.length + " Knights");

console.time("Time to add " + secondRegimentNewbs.length + " Knights");
for (var i = 0, x = secondRegimentNewbs.length; i < x; i++) {
  secondRegimentKnights.push(new Knight(secondRegimentNewbs[i], 1));
}
console.timeEnd("Time to add " + secondRegimentNewbs.length + " Knights");
console.timeEnd("Total completion time");