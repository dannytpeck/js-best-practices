function SignalFire(ID, startingLogs) {
  this.fireID = ID;
  this.logsLeft = startingLogs;
}

// Move methods to the prototype so each SignalFire object doesn't create its own instance of the methods
SignalFire.prototype = {
  addLogs = function(numLogs) {
    this.logsLeft += numLogs;
  };
  
  lightFire = function() {
    alert("Whooooosh!");
  };
  
  smokeSignal = function(message) {
    if (this.logsLeft < this.message.length / 10) {
      alert("Not enough fuel to send " + 
           "the current message!");
    } else {
      this.lightFire();
      var x = this.message.length;
      for(var i = 0; i < x; i++) {
        alert("(((" + this.message[i] + ")))");
        if (i % 10 === 0 && i !== 0) {
          this.logsLeft--;
        }
      }
    }
  };
}

var fireOne = new SignalFire(1, 20);
var fireTwo = new SignalFire(2, 18);
var fireThree = new SignalFire(3, 24);

fireOne.addLogs(8);
fireTwo.addLogs(10);
fireThree.addLogs(4);

fireThree.smokeSignal("Goblins!");

///////////////////////////////////////////////////////////////////////////

var list = document.getElementById("kotwList");
var kotw = [
  "Jenna Rangespike",
  "Neric Farthing",
  "Darkin Stonefield"
]

// Not efficient, each new addition(appendChild) to the document causes a "reflow"
for (var i = 0, x = kotw.length; i < x; i++) {
  var element = document.createElement("li");
  element.appendChild(document.createTextNode(kotw[i]));
  list.appendChild(element);
}

// Instead, use a document fragment to insert additions all at once
var list = document.getElementById("kotwList"),
    kotw = [
  "Jenna Rangespike",
  "Neric Farthing",
  "Darkin Stonefield"
],
    fragment = document.createDocumentFragment(),
    element; // Moved variable declaration outside of for-loop so it doesn't get redeclared repeatedly

for (var i = 0, x = kotw.length; i < x; i++) {
  element = document.createElement("li");
  element.appendChild(document.createTextNode(kotw[i]));
  fragment.appendChild(element);
}

list.appendChild(fragment);

///////////////////////////////////////////////////////////////////////////

var knight = "Jenna Rangespike";
var action = " strikes the dragon with a ";
var weapon = "Halberd";

var turn = "";
turn += knight;
turn += action;
turn += weapon;
// Normal string concatenation is efficient enough in modern browsers for a small number of variables being concatenated

// ...but when your strings are in an array, it's much quicker to use .join
var newPageBuild = [ "<html>", "<body>", "<h1>", "...numerous other tags...", "</body>", "</html>" ];
var page = "";
for (var i = 0, len = newPageBuild.length; i < len; i++) {
  page = newPageBuild.join("\n");
}

