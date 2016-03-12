function countEntries(KnightResponses, value) {
  var count = 0, x = KnightResponses.length;
  for (var i = 0; i < x; i++) {
    if (KnightResponses[i] === value) {
      count++;
    }
  }
  return count;
}

var fields = ["Jason Millhouse", "1", "12", true, true, false];
var numCompletedTasks = countEntries(fields, true);
console.log(numCompletedTasks);

function LeatherArmor(bodyStyle, numBuckles, numSpaulders) {
  this.bodyStyle = bodyStyle;
  this.numBuckles = numBuckles;
  this.numSpaulders = numSpaulders;
}
LeatherArmor.prototype = Object.create(Armor.prototype);

function ChainMail(metal, linkDiameter, hasHood, skirtLength) {
  this.metal = metal;
  this.linkDiameter = linkDiameter;
  this.hasHood = hasHood;
  this.skirtLength = skirtLength;
}
ChainMail.prototype = Object.create(Armor.prototype);

function Knight(armor) {
  this.armor = armor;
}

var armorList = [ new LeatherArmor(),
                  new ChainMail(),
                  new LeatherArmor(),
                  new ChainMail()
                ];
var newbs = [ new Knight(), new Knight() ];

function assignKnightsArmor(knights, armorAvail) {
  var x = knights.length;
  var y = armorAvail.length;
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      if (armorAvail[j] instanceof ChainMail) {
        knights[i].armor = armorAvail.splice(j, 1)[0];
        y--; //adjust cached length
        break;
      }
    }
  }
}

assignKnightsArmor( newbs, armorList );
console.log( newbs[0] );

function Armor(location) {
  this.location = location;
}
Armor.prototype = {
  putOn: function() {
    alert("Your armor is on.");
  }
}

var kingsMail = new ChainMail("gold", 2, true, 36);
console.log(kingsMail instanceof ChainMail);