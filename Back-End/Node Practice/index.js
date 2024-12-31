const fs = require("fs");

// fs.readFileSync("about.txt");


// fs.writeFile("contact.txt","Today is the Great day :",(err) => {
//     console.log("Task is completed");
// });

fs.readFile("contact.txt","utf-8",( err, data) => {
    console.log("Task is completed");
    console.log(err);
    console.log(data);
});

ram(data);
// let data = fs.readFileSync("about.txt");
// let yash = data.toString();  

// console.log(yash);




