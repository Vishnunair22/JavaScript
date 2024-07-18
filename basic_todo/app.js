const todoList = [];
// user input
let todo = prompt("Enter your ToDo item");
while(todo.toLowerCase() !== 'q' && todo.toLowerCase() !== 'quit'){
    if(todo.toLowerCase() === 'list'){
        console.log("*******************");
        for(let i = 0; i < todoList.length; i++){
            console.log(todoList[i]);
        }
        console.log("*******************");
    }
    else if(todo.toLowerCase() === 'delete'){
        let index = parseInt(prompt("Enter the index of the value to delete"));
        let clearItem = todoList.splice(index,1);
        console.log(`Deleted index ${index} value value ${clearItem} `);
    }
    else {
        todoList.push(todo);
    }
    todo = prompt("Enter your next ToDo item");
}
// quitting the app
console.log('Quitting the app');
