let a = {
    id: '123',
    num:[1, 2, 'hello'],
    b: true
};

let s = JSON.stringify(a);
let b = JSON.parse(s);

console.log(typeof s);
console.log(b);

a = undefined;

let p = a && a['id']; // same as =>
// let p = undefined;
// if(a != undefined)
//     p = a['id'];
console.log(p);
