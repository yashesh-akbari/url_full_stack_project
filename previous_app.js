import express from "express"
import path from "path";
import fs from "fs/promises"

let app=express();
let arr=[];
let obj={};
let port=process.env.port || 3000;

app.use(express.urlencoded({extended:true}))

let filepath=path.join(import.meta.dirname,"public","index.html")
let errorfilepath=path.join(import.meta.dirname,"views","error404.html")
let storelinkspath=path.join(import.meta.dirname,"views","links.json")

app.get("/",(req,res)=>{
  res.sendFile(filepath);
})

app.post("/formsubmission",async (req,res)=>{
       obj={
    url:req.body.user.url,
    shortcode:req.body.user.shortcode
  }
  arr.push(obj)
   try{
    let result=await fs.writeFile(storelinkspath,JSON.stringify(arr),"utf-8");
    console.log(`data is save sucessfuly`,result);
  }catch(error){
    console.log(error);
  }
  // console.log(req.body);
  res.redirect("/");
})

app.get("/links",async (req,res)=>{
  try{
    let readfile=await fs.readFile(storelinkspath,"utf-8")
    // return res.json(JSON.parse(readfile))
    res.json(JSON.parse(readfile));
  }catch(error){
    console.log(error);
  }
})

app.use((req,res)=>{
  res.status(404).sendFile(errorfilepath);
})

app.listen(port,()=>{
  console.log(`server is running at http://localhost:${port}`);
})