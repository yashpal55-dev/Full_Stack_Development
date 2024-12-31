const fs = require("fs");

//  fs.writeFileSync("about.txt","welocome to node");

// fs.appendFileSync("about.txt"," learn full stack ");
// 
fs.writeFile("contact.txt","today is the great day  :",(err) => {
            console.log("Task is completed");
});
fs.readFile("contact.txt","utf-8", (err,data) =>{
            console.log("Task is complete");
            console.log(err);
            
});
// let data = fs.readFileSync("about.txt","utf8");

// let yash =data.toString();

// console.log(data);



// });


// fs.unlinkSync("about.txt");
