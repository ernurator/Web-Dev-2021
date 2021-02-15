// function declaration
function greeting() {
    console.log('hello');
}
greeting();

// function expression
let greeting2 = function() {
    console.log('hello2');
};
greeting2();

// arrow function (like lambdas)
let square = (a) => a * a;
console.log(square(9), typeof square);

let mult = (a, b) => {
    let c = a * b;
    return c;
};
console.log(mult(3, 4));


let student = {
    id: '20BD23456',
    s_name: 'Student1',
    show: function() {
        // console.log(this.id + ' ' + this.s_name);
        console.log(`${this.id} ${this.s_name}`);
    }
};
student.show();
