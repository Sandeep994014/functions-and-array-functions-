// 

const arr = [2 , 4, 5,5  ,6, 6,6 , 7]

function evenNum( even) {
  return even % 2 === 0 ;
}

let evenOutput = arr.filter(evenNum);
console.log(evenOutput)

let removeDublicate = evenOutput.filter((value , index) => evenOutput.indexOf(value)=== index)
console.log(removeDublicate);

let doubleNumber = removeDublicate.map((x) => x * 2)
console.log(doubleNumber)


let addNumbers = doubleNumber.reduce((accumulator, currentValue)=>{
 return accumulator + currentValue
},10)

console.log(addNumbers)