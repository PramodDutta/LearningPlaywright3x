function getStatus(code) {
    if (code >= 200 && code < 300) {
        return "Success";
    } else if (code >= 400 && code < 500) {
        return "client error";
    } else if (code >= 500) {
        return "server error";
    } else {
        return "unknown";
    }
}

getStatus(200); 
getStatus(404);
getStatus(500); 


// Returns nothing → undefined
function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}

logTest("Hi this is a a log");


function aaa() {
    return [2, 2, 3, 5, 4];
    /// return {"name : pramod"}; - object
}