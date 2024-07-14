let day = prompt("Enter the name of a day");
day = day.toLowerCase();
switch(day){
    case "monday":
        console.log("It's a working day.How sad!");
        break;
    case "tuesday":
            console.log("It's a working day.How sad!");
            break;
    case "wednesday":
                console.log("It's a working day.How sad!");
                break;
    case "thursday":
                console.log("It's a working day.How sad!");
                break;
    case "friday":
        console.log("Yeh!It is Friday.The weekend is ahead.");
        break;
    case "saturday":
        console.log("It's the weekend.Let's enjoy.");
        break;
        case "sunday":
            console.log("It's the weekend.Let's enjoy.");
            break;
    default:
        console.log("Sorry this choice is not available.");
        break;
}