// npm init -y     (package json) 
// npm i express      (node modules) 
// npm i ejs            (ejs install) 
// touch index.js           (index.js file)

const express=require("express");
const app=express();


const port=8080;
// npm install -g nodemon  (install)


app.set("view engine","ejs");
app.get("/",(req,res)=>{
    // res.send("this is root"); array,html,strings
    res.render("home.ejs");  //automatically express views folder ma sa home.ejs file dhondta

})

app.listen(port,()=>{
    console.log("listening");
})