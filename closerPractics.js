// function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y(){
//             console.log(a , b)
//         }
//         y()
//     }
//     x()
// }
// z()


// function x() {
//     console.log("hello")
//         for (var i=0; i<=5; i++) {
//             setTimeout(() => {
//             console.log(i)
//         }, [i*1000]);
//     }
//  }
//   x();


function outer() {
    let b = 10;
    function inner() {
        console.log(b);   
    }
     inner();
}
outer(); 
