let age = prompt("Enter your age");
if(age >= 10){
    if(age <= 15){
        console.log("Your ticket price is 15$.");
    }
    else if(age <= 18){
        console.log("Your ticket price is 20$.");
    }
    else{
        console.log("Your ticket price is 25$.");
    }
}
else{
    console.log("You are not old enough for this ride.")
}