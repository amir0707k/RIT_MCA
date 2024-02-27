// var x = 10;

// console.log(x);
// x = "vikas";
// console.log(x);
// let y = 2;
// console.log(y);
// y = "ram";
// console.log(y);
// const z = 20;
// console.log(z);
// z = 56; //Because in the const we are not modify or update to value
// var y = 20;
// function name() {
//     console.log("inside");
//     var x = 10;
//     console.log(x);
//     console.log(y);
// }
// name();
// console.log("outside");
// console.log(y);

// console.log(x);

// function abc() {
//   if (true) {
//     const x = 20;
//     console.log(x);
//   }
//   console.log(x);
// }
// abc();
// console.log(x);

//          scope           hoisting        reassignment
// var      functional      allowed              yes
// let      block           not allowed          yes
// const    block           not allowed          no

// function outer(){
//     var x=10;
//     if(true){
//         var y = 20;
//         console.log(x+y)
//     }
//     console.log(x);
//     console.log(y)
// }

// outer();

// console.log(x);
// var x = 20;
// console.log(x);

// // hoisted version

// console.log(x);
// const x = 20;
// console.log(x);

console.log(x);
// var x = 5;

// //HOisted version
// var x;
// console.log(x);
// x = 5;



let x = 5;



function abc(){
    var x = 20;
    if(x){
        var x = 34;
        console.log(x)
    }
    console.log(x);

}

abc();