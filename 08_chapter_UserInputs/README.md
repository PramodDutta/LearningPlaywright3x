# JavaScript User Input

This chapter demonstrates four common ways to accept user input in JavaScript.

| File | Environment | Input method | How to run |
|------|-------------|--------------|------------|
| `48_JS.js` | Browser | Built-in `prompt()` | Run from a browser page or console |
| `49_Node_UI.js` | Node.js | Built-in `readline` module | `node 08_UserInputs/49_Node_UI.js` |
| `50_Prompt.js` | Node.js | `prompt-sync` package | Install `prompt-sync`, then run the file |
| `51_Fs.js` | Node.js | `fs.readFileSync(0, "utf8")` | `node 08_UserInputs/51_Fs.js` |

## Interactive Node.js input with `readline`

`readline` is the easiest option when a user should type a value and press Enter:

```js
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    console.log("Hi", Number(input));
    rl.close();
});
```

## Reading standard input with `fs`

`readFileSync(0, "utf8")` reads all standard input and waits for an EOF signal. In an interactive terminal, type the value, press Enter, and then press `Ctrl+D` on macOS/Linux (`Ctrl+Z`, then Enter, on Windows).

```bash
node 08_UserInputs/51_Fs.js
```

```text
Enter the number!
15
Hi 15
```

For non-interactive use, pipe the value into the program:

```bash
printf '15\n' | node 08_UserInputs/51_Fs.js
```
