const studentData = {
    names: ['Vishnu', 'Shaan', 'Anoop', 'Ajith'],
    classes: ['A1', 'A2', 'A3', 'A4'],
    marks: [20, 19, 17, 18]
};

// Log the studentData object
console.log(studentData);

// Accessing and logging object values
for (let key in studentData) {
    console.log(studentData[key]);
}

// Iterating over the values in the object and logging each array element
const values = Object.values(studentData);
for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values[i].length; j++) {
        console.log(values[i][j]);
    }
}
