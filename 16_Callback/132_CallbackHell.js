// Real QA Scenario: E2E Login Flow app.vwo.com

function openBrowser(callback){
    console.log("opening the browser");
    setTimeout(function () {
        console.log("Step 1 - browser starting...");
        callback();
    }, 500);
}

function goToLoginPage(callback) {
    setTimeout(function () {
        console.log("Step 2: Login page loaded");
        callback();
    }, 500);
}

function enterCredentials(callback) {
    setTimeout(function () {
        console.log("Step 3: Credentials entered");
        callback();
    }, 500);
}

function clickLogin(callback) {
    setTimeout(function () {
        console.log("Step 4: Login button clicked");
        callback();
    }, 500);
}

// // THIS IS CALLBACK HELL 👇
openBrowser(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function(){
                console.log("Test is Complete!")
            })
        })
    })
})