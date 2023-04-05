let arr = ['morgen', 'nikolay', 'alexander', 'yulduz', 'timati']
// найти самое длинное имя 
let name = ``
for (let i = 0; i < arr.length; i++) {
    if (name.length<arr[i].length) {
        name=arr[i]
    }
}
console.log(name);


let numbers = [2,4,1,4,7,3,2,7,9,3,2]

let even = numbers.filter(item => item % 2 === 0) // четные  
let odd = numbers.filter(item => item % 2 !== 0) // не четные


console.log(even);
console.log(odd);