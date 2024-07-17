let number = 10 
if (number > 0) {
    console.log("the number is positive")
}
else if (number < 0) {
    console.log("the number is negative" )
}






let age=18
if(age>=18){
    console.log("you are eligible to vote")
}
else{
    console.log("you are not eligible to vote")
}






let dayNumber = 7;
function getDayOfWeek(dayNumber) {
    let day;
    switch(dayNumber) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thursday";
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "Invalid day number";
            break;
    }
    return day;
}
console.log(getDayOfWeek(dayNumber))     
           
       

 



let testString = "Hello"
function checkStringLength(stringlength) {

if (stringlength > 10) {
    return "the string is longer than 10 characters"
} else {
    return "the string is 10 characters or shorter"
}
}
console.log(checkStringLength(testString))




let year = 2024;
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return year + " is a leap year."
            } else {
                return year + " is not a leap year."
            }
        } else {
            return year + " is a leap year."
        }
    } else {
        return year + " is not a leap year."
    }
}
console.log(isLeapYear(year))





let score = 90
function determineGrade(score) {
    let grade;
    if (score >= 90 && score <= 100) {
        grade = "A";
    } else if (score >= 80 && score < 90) {
        grade = "B";
    } else if (score >= 70 && score < 80) {
        grade = "C";
    } else if (score >= 60 && score < 70) {
        grade = "D";
    } else if (score >= 0 && score < 60) {
        grade = "F";
    } else {
        grade = "Invalid score";
    }
    return grade;
}
console.log("The grade is: " + determineGrade(score))





 

