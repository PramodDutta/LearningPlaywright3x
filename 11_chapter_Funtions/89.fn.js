//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 

function name1() {
    console.log("Hi")
}
name1();


// IIFE
(function(){
    console.log("Anonymous Fun");
})();

(function () {
    console.log("Staging")
})();

//Arrow Crazy

(() => {
    console.log("Setup complete");
})();
