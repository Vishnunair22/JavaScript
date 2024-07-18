// printing numbers from 1 to 10
for(let i = 1;i <= 10; i++){
    console.log(i);
}
// printing even numbers
for(let i = 2;i <= 10;i+=2){
    console.log(i);
}
// printing numbers in reverse
for(let i = 10;i >= 0; i-=1){
    console.log(i);
}
// itterating through arrays
const colors = ['blue','green','red','yellow'];
for(let i = 0;i < colors.length;i++){
    console.log(colors[i]);
}
// nesting for loops
let seatingChart = [['John','Sam','Hardy'],['Eddy','William','Leo'],['Jerry','Alex','Greg']]
for(i = 0;i < seatingChart.length;i++){
    let row = seatingChart[i];
    for(j = 0;j < row.length;j++){
        console.log(row[j]);
    }
}