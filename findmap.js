const ar=[1,2,3,4,5,6,7,8,9,10]
const numbers=arr.find(num => num > 5)
console.log(numbers) // output=6

//filter method
const fillterNumbers = arr.filter((num) => num > 5)
console.log(fillterNumbers)


const result=arr.map((num)=>num/5)
console.log(result)

const method=arr.map((num)=>num-2)
console.log(method)

const arr=[1,2,3]
const newArr=[4,5,6,arr[0],arr[1],arr[2]]
console.log(newArr)

const Arr = [5, 6,...arr];
console.log("New array (before spread operator):", newArr)







