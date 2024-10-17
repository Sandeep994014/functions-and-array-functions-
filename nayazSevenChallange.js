// Difficulty: Easy
// Topics: Basic Programming, Date Handling
// Description: Write a program to check if a given year is a leap year.
// Example:
// Input: year = 2020
// Output: Leap Year
// Explanation: 2020 is divisible by 4 but not by 100, or it is divisible by 400, so it is a leap year.



function leaveYear(year) {
    // console.log(X%4===0?"Leap year":"Not A Leap year");
    return (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0)?"Leap year":"Not A Leap year";
    

    // if(X % 4 === 0){
    //     // console.log("leap year");
    //     return "leap year"        
    // }else{
    //     // console.log("Not a leap year")
    //     return "not a leap year"
    // }
}
// leaveYear(2020);
let result = leaveYear(2020);
console.log(result);
