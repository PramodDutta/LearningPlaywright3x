function startBrowser() {
    let name = "edge";

    function installBrowser() {
        console.log(name);
        let fail = true;
        if (fail) {
            console.log('Failed!');
        }
    }

    return installBrowser;
}

const runTc = startBrowser();
runTc();

//installBrowser();