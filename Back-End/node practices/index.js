// let chalk = require("chalk");
// let nodemon = require("nodemon");
let http = require("http");

// // import chalk from 'chalk';

// console.log(chalk.green.inverse("Hellosdsdfsdfsdd"));


// let Server = http.createServer((req, res)=>{
//    if(req.url === "/"){

//      res.end("Server is successfully uploaded");
//    }
//    else if( req.url === "/about"){   
//     res.end("Server is on about page");   

//    }else if(req.url === "/services"){   
//     res.end("Server is on services page");


//    }

  
// });
let Server = http.createServer((req,res) =>{
    if (req.url === "/"){
        res.end("serveer is successfully uploaded ")
    }
})

  Server.listen(800, "127.0.0.1", () =>{
    console.log("server is created successfully Now")  });

