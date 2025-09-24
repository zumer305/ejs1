// npm init -y     (package json) 
// npm i express      (node modules) 
// npm i ejs            (ejs install) 
// touch index.js           (index.js file)




// ...................ejs(EMBEDDES JAVASCRIPT TEMPLATE) .......................................
const express=require("express");
const app=express();
const port=8080;
// npm install -g nodemon  (install)


app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"/views")); //bahir sa server run ho to error na aya means jidr file prhi us sa peechy folder means cd .. wahan s run krna



app.get("/",(req,res)=>{
    // res.send("this is root"); array,html,strings
    res.render("home.ejs");  //automatically express views folder ma sa home.ejs file dhondta

})




// --------------------------------------------------------------

app.listen(port,()=>{
    console.log("listening");
})

// ----------------------------------------------------------------------




// interpolation Syntax(embed krna java script ko jasy ham `${var}`)
// ejs.co             page 


app.get("/roler",(req,res)=>{
    let num=  Math.floor(Math.random()*6)+1;

    res.render("role.ejs",{num}); //num role.ejs ma bhja variable database syntax
})