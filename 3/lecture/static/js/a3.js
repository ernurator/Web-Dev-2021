console.log(2 == '02'); // true because they were converted to one data type
console.log(2 === '2'); // trying to check data types as well

let a = [1, 2, 3, 4];
a.push(55);
console.log(a.pop());
console.log(a.indexOf(11));

a.find(function(v) {
    if (v == 2)
        console.log('hi');
});

let b = a.slice(2, 4); // start, end, step, does not changes original array
console.log(b);

a.splice(2, 1); // remove 1 elem from pos 2, changes the orgignal array
console.log(a);

let c = a.map(function(v){
    return v + 5;
});
console.log(c);

let d = c.filter(function(v) {
    return v > 6;
})
console.log(d);

let e = c.reduce(function(sum, val) { // sum - accumulator, val - element
    return sum + val;
}, 0); // 0 - initial val of accumulator
console.log(e);

// for (let i = 0; i < a.length; i++) {
//     const el = a[i];
//     console.log(el);
// }

// for (let v of a) {
//     console.log(v); // changes of v wouldn't affect the array
// }

// a.forEach(function (v) {
//     console.log(v);
// });

// let i = 0;
// while (i < a.length) {
//     console.log(a[i]);
//     i++;
// }



