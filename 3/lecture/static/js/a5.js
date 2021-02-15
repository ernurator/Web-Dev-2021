// -[] Hoisting (поднятие)

console.log(a); // error if a is 'let'
var a = 2;

// var a;
// console.log(a);
// a = 2;

console.log(sum(2, 4));

function sum(a, b) {
    return a + b;
};


// -[] Callback

// let i = 0;
// function show(){
//     console.log(i++);
// }
// setInterval(show, 1000); // every 1000 ms
// setTimeout(show, 4000); // after 4000 ms

function f1(callback) {
    setTimeout(function() {
        console.log('f1 func');
        callback();
    }, 2000);
}
function f2() {
    console.log('f2 func');
}

f1(f2);
// f2();
