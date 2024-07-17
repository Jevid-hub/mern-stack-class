let multi = (a,b) => {
    return a * b
}
let result = multi (2,2)
console.log(result)


//call back function 
function greet(name) {
    console.log('hello' + name)  
}



function operation (a,b,add,sub,mil,div) {
    add(a,b)
    sub(a,b)
    mil(a,b)
    div(a,b)
}
function add(a,b) {
    console.log(a+b)
}
function sub(a,b) {
    console.log(a-b)
}
function mil(a,b) {
    console.log(a*b)
}
function div(a,b) {
    console.log(a/b)
}

operation(10,20,add,sub,mil,div)



