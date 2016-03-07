var armory = {
    addSword: function (sword) {
        this.swords = this.swords || [ ];
        this.swords.push(sword);
    }
};

//short-circuiting: first truthy value from left-to-right is taken
var result1 = undefined || 42;
console.log(result1);
var result2 = 0 || ["Sweet", "array"];
console.log(result2);
var result3 = "" || {type: "ring", stone: "diamond"};
console.log(result3);

//when all values are falsy, it'll take the result furthest to the right
var result4 = undefined || ""; // => ""
var result5 = "" || undefined; // => undefined

//&& operator takes the rightmost truthy value or the first falsy value
var result6 = undefined && 42;
var result7 = 0 && ["Sweet", "array"];
var result8 = "" && {type: "ring", stone: "diamond"};

//when all values of truthy, returns the last truthy value found(opposite of ||)
var result9 = "King" && "Arthur";
var result10 = "Arthur" && "King";

//useful in contingent assignment
armory.retrieveSword = function (request) {
    return (this.swords.indexOf(request) >= 0) ?
        this.swords.splice(this.swords.indexOf(request), 1)[0] :
        alert("No " + request + ", baby!");    
};

armory.addSword("Broadsword");
armory.addSword("Claymore");
armory.addSword("Scimitar");
armory.addSword("Katana");

var armoryIsOpen = true;
var isKnight = true;
var weapon = armoryIsOpen && 
             isKnight && 
             armory.retrieveSword("Claymore");
console.log(weapon); // =>last truthy value, so "Katana"
