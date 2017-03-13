function writeIt() {
    var lesson = new Date().getHours
    var timeOfDay;
// The code use if statement to determine the time of day and does two things: it writes a greeting on the screen and set the value of the timeOfDay variable. 
    if(lesson >= 7 && lesson < 12){
        document.write("Good Morning!");
        timeOfDay="morning";
    } else if (lesson >= 12 && lesson < 18) {
        document.write("Good Day!");
        timeOfDay="day";
    } else {
        document.write("Good Night");
        timeOfDay="night";
    }
// Now add a switch statement that uses the value of timeOfDay to determine what image to display in the web page. 
    switch(timeOfDay){
        case "morning":
        case "day":
            document.write("<img src='day.png' />");
            break;
        case "night": 
            document.write("<img src='night.png' />");
            break;
        default:
            document.write("<img src='day.png' />");
    }
    
}