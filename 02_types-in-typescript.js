// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'brown';
var favouriteQuote = "I'm not old, I'm only ".concat(age);
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// Object
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuples
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size[2]; // Medium
var Size2;
(function (Size2) {
    Size2[Size2["Small"] = 1] = "Small";
    Size2[Size2["Medium"] = 2] = "Medium";
    Size2[Size2["Large"] = 3] = "Large";
})(Size2 || (Size2 = {}));
;
var sizeNumber = Size.Small; // 1
// ANY - !!!!!!!!!! BE CAREFUL
var whatever = 'aghhhhhhhhhhh nooooooooooo!!!';
whatever = 5;
whatever = true;
whatever = Size.Small;
whatever = basket;
// VOID
var sing = function () {
    console.log('lalalalallala');
};
// NEVER
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robot) {
    console.log('FIGHT!');
};
// Equivalent to write
var fightRobotArmy2 = function (robot) {
    console.log('FIGHT!');
};
fightRobotArmy({ count: 1, type: 'dragon' });
var dog = {};
dog.count;
