let myVariable = 10; 
console.log(myVariable); 


//3variable hosting
myVariable = 20; 
console.log(myVariable); 



//4converting string into a number
let str = "123";
let num = Number(str);
console.log(num); 


//6boolean value into a string
let booleanValue = true;
let stringValue = String(booleanValue);
console.log(stringValue);


//9type of variable 
let age = 25;
console.log(typeof age)


//10if else
let number = 10 
if (number > 0) {
    console.log("the number is positive")
}
else if (number < 0) {
    console.log("the number is negative" )
}



//11
let a = 10;
if (a) {
    console.log("True");
} else {
    console.log("False");
}




//12 if-else statement in a single line
let x = 5;
let result = (x % 2 === 0) ? "Even" : "Odd";
console.log(result);



//13
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





let factorial=(fact)=>{
    let b=1;
    for(let j;j<=fact;j++){
      b*=j;
    }
    return b;

}
console.log(factorial(2));

function fact(f){
    let a=1;
    for (let i=1;i<=f;i++){    
        a*=i;
        
    }
    return a;
}
let as=fact(5);
console.log(as);

function area(radius){
    let pi;
    pi=22/7;
    if(radius<0){
        return 'enter a positive number';
    }
 
    else {
return pi*radius*radius;
    }
}
let p=area(7);
console.log(p);

function check(a){
if (a%2==0){
    return 'even'
}
else{
    return 'odd'
}
}
