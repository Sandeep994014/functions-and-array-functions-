// function fetchData(url, callback) {
//     setTimeout(() => {
//         const data = `Response from ${url}`;
//         callback(data);
//     }, 2000); 
// }

// fetchData("https://api.example.com", (response) => {
//     console.log(response);
// })

// function greet(name , callback) {
//     console.log('hi' + ' ' + name);
//     callback();
// }

// function callMe() {
//     console.log('i am sandeep from callback ')
// }


// greet('sandeep' , callMe)

 function getCheese(callback) {
    setTimeout(()=>{
        const cheese = "🧀"
        console.log(cheese);
        return cheese;
        callback(cheese)
       
    },2000)

}

getCheese(callback());

 