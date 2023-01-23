const express=require("express");
const bodyparser=require("body-parser");
const ejs=require("ejs");
var app=express();
app.set('view engine', 'ejs');

var newLists=[];
var lists=[];

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){
  var kindoff;
  var d=new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  kindoff=d.toLocaleDateString("en-US",options);
   res.render("todo.ejs",{
    kindof:kindoff, 
   
  newToDo:newLists

})
 
});


app.post("/",function(req,res){
     var list=req.body.newitem;
     if(list===""){

    }else{
     newLists.push(list);
    }
  res.redirect("/");
    
});
app.get("/work",function(req,res){
  
  
  res.render("work.ejs",{
    newToDo:lists
  })
})
app.post("/work",function(req,res){
var item=req.body.newitem;
lists.push(item);
res.redirect("/work");
 
});








app.listen(3000,function(){
console.log("server is running on port 3000");
})