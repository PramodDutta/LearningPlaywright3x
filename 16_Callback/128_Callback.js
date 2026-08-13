function placeOrder(item, callback){
    console.log("Order Placed....");
    callback();
}

// Define
function print() {
    console.log("Normal Fn - Done with the order");
}
// First Way
placeOrder("Burger", print);

// Sencond Way Anoy
placeOrder("Burger", function(){
    console.log("Order is ready!, pick it up!");
})

// Third Way - Arrow Fn
placeOrder("Burger", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});


// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });


test('has title', async ({ page }) => {

});
