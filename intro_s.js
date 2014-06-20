/**
 * define vars
 */
var names = ['Bob', 'Sally', 'John', 'Betty'];
var message = "Hello, ";


console.log(message + names[3]);
names.forEach(function(theName){
    console.log(theName);
});
names.push('Jane');//Jane enters array
console.log(names);

names.push('Jane');//Jane enters array again
console.log(names);

names.pop(); //Jane leaves
console.log(names);
names = [];
console.log(names);
console.log('redefine: '+ names);

arr = [1,2,3];
while(arr.length){
    var item = arr.pop()
};
//obj has unique id
var playground = {
    name: 'WD World',
    location: 'Orlando',
    rides: ['Splash Mtn', 'Big Thunder Mtn', 'It\'s a small world after all'],
    cost: 'You don\'t want to know'
};
console.log(playground);
console.log('playground cost: ' + playground.cost);
playground.cost = 'Wow';
console.log(playground);

