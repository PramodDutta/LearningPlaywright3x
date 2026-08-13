let order = new Promise(function(resolve, reject){

        let foodready = false;
        if(foodready){
            resolve("Pizza is delivered!");
        }
        else{
            reject("Order cancelled");
        }


});

console.log(order);