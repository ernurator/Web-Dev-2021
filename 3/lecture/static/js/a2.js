var s_name = { // global variable
    name: 'Student1',
    age: 20,
    gpa: 3.9
};

function hi() { // new block (scope)
    if(s_name['gpa'] >= 3.5) { // new block
        // let a = s_name['age']; - local (exists only in this block)
        // var a = s_name['age']; - global (linked to prev parent obj)
        console.log('Hello ' + s_name['name']);        
    } else { // new block
        console.log('Student\'s gpa less than 3.5');
    }
    // console.log(a); - error if a is let, okay if a is var
}

hi();

