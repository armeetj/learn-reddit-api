//node.js
//@Armeet Singh Jatyani 2019
//basic code: learning how to perform requests, etc.
const https = require('https');
const fs = require('fs');

https.get('https://www.reddit.com/r/memes/new.json?sort=new', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        data = JSON.parse(data);
        console.log(data);
        fs.writeFile('request.json', (JSON.stringify(data)), function err(){
            
        });
        
        console.log("author: " + data.data.children[0].data.author_fullname);
        console.log("title: " + data.data.children[0].data.title)
        console.log("url: " + data.data.children[0].data.url);
        console.log("permalink: " + "https://reddit.com" + data.data.children[0].data.permalink)
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});