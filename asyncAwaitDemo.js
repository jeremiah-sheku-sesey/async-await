let stock={
    fruits:['apple', 'banana', 'grapes', 'strawberry'],
    liquid:['water', 'ice'],
    holder:['cone', 'cup', 'stick'],
    toppings:['chocolate', 'peanuts']
};

let isShopClose=false;

//promise syntax

// let myPromiseSyntax=()=>{
//     return new Promise( (resolve, reject)=>{
//         if('condition is satisfied, execute'){
//             resolve(console.log('condition is satisfied'))
//         }else{
//             reject(console.log('condition is not satisfied'))
//         }
//     })
// }

// //calling mmyPromiseSyntax().
// and start our chaning.
// myPromiseSyntax()
// //.then(()=>{}) you can use it as manytimes as you wish depending on your program logic.
// .then(()=>{

// })
// .then(()=>{
    
// })
// .then(()=>{
    
// })
// .catch((err)=>{
//     console.log(err + 'this condition is never satisfied')
// })
// .finally(()=>{
//     console.log('Thank you')
// });

// Async || Await syntax.
async function order(){
    try{
        //waiting a function that does not exist, but it is just of tseting. 
        await abc;
    }catch(err){
        console.log(err + ' this condition is never satisfied')
    }finally{
        console.log('Thank you') 
    }
}

//calling the Async || Await first called.

// order();


// let use Async || Await with the .then(), .catch and .finally.
// we can also use the .then(), .catch and .finally chaning with Async || Await.
// //.then(()=>{}) you can use it as manytimes as you wish depending on your program logic.
//calling the Async || Await second call.

// order()
// .then(()=>{
//     console.log('Thank you i am the first .then() block') 
// })
// .then(()=>{
//     console.log('Thank you i am the second .then() block') 
// })
// .then(()=>{
//     console.log('Thank you i am the third .then() block') 
// })
// .catch((err)=>{
//     console.log(err + 'this condition is never satisfied')
// })
// .finally(()=>{
//     console.log('Thank you i am the finally block')
// });