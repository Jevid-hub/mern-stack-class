function sum(a, b) {
    return a + b;
  }

  console.log(sum(5, 3))
console.log(sum(10, 20))



function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
  
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
  }
  
 
  const nums = [1, 2, 3, 4, 5];
  console.log(calculateAverage(nums));





  
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
let a=area(7);
console.log(a);

function check(a){
if (a%2==0){
  return 'even'
}
else{
  return 'odd'
}
}
let ans=check(5);
consolee.log(ans);


let game = {
  name: 'racing'
  platforms: 'PC','Moobile'
}

  















