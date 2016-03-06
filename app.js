var isArthur = true;
var isKing = false;
var isArcher = true;
var weapon;
var helmet;

console.log("Current weapon: " + (isArthur && isKing ? "Excalibur" : "Longsword"));

isArthur && isKing ? alert("Hail Arthur, King of the Britons!") : 
                     alert("Charge on, ye Knight, for the glory of the King!");

isArthur && isKing ? function() {
                     //one IIFE
                     }()
                     :
                     function() {
                     //another IIFE
                     }()

// Nested terniaries, don't do this too often for readability
isArthur && isKing ? (weapon = "Excalibur", helmet = "Goosewhite")
                     :
                     isArcher ? (weapon = "Longbow", helmet = "Mail Helm")
                              : (weapon = "Longsword", helmet = "Iron Helm");

console.log("Current weapon " + weapon + "\nCurrent helmet " + helmet);