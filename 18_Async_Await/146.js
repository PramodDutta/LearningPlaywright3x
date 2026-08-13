getToken.then(function (token) {
    return getUser(token);
}).then(function (user) {
    console.log(user);
});

async function run(){
    let token = await getToken();
    let user = await getUser();
}

