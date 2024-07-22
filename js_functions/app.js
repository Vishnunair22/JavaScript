const students = {names:['Athul','Madhu','Anoop'],
    ages:[24,25,30]
}
console.log(`${students.names[2]} is ${students.ages[2]} years old`);
function sayHello(){
    for(let i = 0;i < students.names.length;i++){
        console.log(`Hello ${students.names[i]} who is ${students.ages[i]} years old.`)
    }
}
sayHello();
// passing multiple parameters
function climate(country,weather){
    console.log(`${country} is ${weather} now.`);
    }
climate('India','Hot');
// rolling a dice
function dieCast(){
    let face = Math.floor(Math.random() *6) + 1;
    console.log(`You got a ${face}`);
}
dieCast();

