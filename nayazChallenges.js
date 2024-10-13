// Solve this :
 
// Print the second largest number out of this array [6, 12, 4, 24, 1, 9]
let array = [6, 12, 4, 24, 1, 9]
console.log(array.length)
console.log(array)
const largestNumber = function(array) {
    let rearrangeArray = array.sort((a,b)=> a-b)
    console.log(rearrangeArray);
    // let secLastNumber = rearrangeArray.length-1
    // return secLastNumber
    
    let secLastNumber = rearrangeArray[rearrangeArray.length-2]
    return secLastNumber

    
}
let outPut = largestNumber(array);
console.log(outPut)