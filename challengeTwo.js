// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data 
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can 
// actually be the returned value of a function! So you can just call a function as array 
// values (so don't store the tip values in separate variables first, but right in the new 
// array) �



//  code goes here logic for one is sucess but for array faild !
// let totalTip;
// var billValue = 1000;

// const calcTip = function(billValue) {
//     if(billValue >= 50 && billValue <=300){
//         totalTip = billValue * (0.15);
//         // console.log(totalTip)
//        return totalTip + billValue;
        
//     }else if(billValue > 300){
//         totalTip = billValue * (0.20);
//         // console.log(totalTip)
//        return totalTip + billValue;
//     }else{
//      return billValue;
//     }
// }

// let totalTips = calcTip(billValue);
// console.log(totalTips);


// logic faild !

// decleration of variable
// let totalTip;
// let bills = [100 ,222 ,333]
// const calcTip = function (bills) {
//     for (let i = 0; i < bills.length; i++) {
//         if (bills >=50 && bills <=300) {
//             totalTip = bills * (0.15);
//             return totalTip + bills;
//         } else {
//             totalTip = bills * (0.20);
//             return totalTip + bills
//         }    
//     }
// }
// let totalTips = calcTip(bills);
// console.log(totalTips);


let bills = [100, 222, 333, 1000];
let totalTip;

const calcTip = function(bills) {
    let totalTips = []; 
    for (let i = 0; i < bills.length; i++) {
        let bill = bills[i]; 

        if (bill >= 50 && bill <= 300) {
            totalTip = bill * 0.15; 
        } else {
            totalTip = bill * 0.20; 
        }
        totalTips.push(totalTip + bill); 
    }
    return totalTips; 
}

let totalTips = calcTip(bills);
console.log(totalTips); 




