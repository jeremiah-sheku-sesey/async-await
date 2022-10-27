let stocks={
    fruits:['apple', 'banana', 'grapes', 'strawberry'],
    liquid:['water', 'ice'],
    holder:['cone', 'cup', 'stick'],
    toppings:['chocolate', 'peanuts']
};

let isShopOpen= true;

//making a promise

let time=(ms)=>{
    return new Promise( (resolve, reject)=>{
       if(isShopOpen){
        setTimeout(()=>{
            // resolve(console.log('Which topping would you like to have'))
            resolve()},ms)
       }else{
            reject(console.log('Shop is closed'))
       }
       
    })
};


// Async || Await with promise.
async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.fruits[3]}`)

        await time(3000)
        console.log('Start the production')

        await time(2000)
        console.log('Cut the fruit')

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`)

        await time(2000)
        console.log( `ice cream place on ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[1]} was selected`)

        await time(2000)
        console.log('Serve ice cream')

    }catch(err){  
        console.log('customer left', err)
    }finally{
        console.log('Thank you! and you are welcome next time.') 
    }
}

kitchen();