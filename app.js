const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req,res){
  res.send()

});

app.listen(3000, function(){
  console.log("server is running on port 3000");
});
