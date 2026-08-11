let url = "https://app.vwo.com?app=pramod";
console.log(url.replace(/app/g, "qa"));

// Splitting & Joining
"pass,fail,skip".split(",");  // ["pass", "fail", "skip"]
"hello".split("");  // ["h","e","l","l","o"]

// Template literal (joining with format)
let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);
