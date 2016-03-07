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

var soldier = new Knight("Timothy", 2);
console.log(soldier.weapon);

var soldier2 = new Knight("Richard", 4);
console.log(soldier2.weapon);

var king = new Knight("Arthur", "King");
console.log(king.weapon);

var soldier3 = new Knight("Jerome", 12);

//fall-through allows hierarchical code execution, least common properties first, most common properties, last

function ceremonialDagger(knight, rank) {
  this.length = 8;
  this.owner = knight;
  switch(rank) {
    case "King": this.diamond = 1;
    case "High Constable": this.amethyst = 2;
    case "Field Marshal": this.sapphires = 4;
    case "Captain": this.emeralds = 1;
    case "Knight": this.rubies = 6;
  }
}

var marshalsDagger = new ceremonialDagger("Timothy", "Field Marshal");
console.log(marshalsDagger);

var kingsDagger = new ceremonialDagger("Arthur", "King");
console.log(kingsDagger);