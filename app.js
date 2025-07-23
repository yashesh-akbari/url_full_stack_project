import express from "express"
import path from "path";
import fs from "fs/promises"
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/test")

let urlSchema=mongoose.Schema({
  url:String,
  shortcode:String
}
)

let url_model=new mongoose.model("url_model",urlSchema)

let app=express();
let arr=[];
let obj={};
let port=process.env.port || 3000;

app.use(express.urlencoded({extended:true}))
app.use(express.json())

let filepath=path.join(import.meta.dirname,"public","index.html")
let errorfilepath=path.join(import.meta.dirname,"views","error404.html")
// let storelinkspath=path.join(import.meta.dirname,"views","links.json")

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
    // let result=await fs.writeFile(storelinkspath,JSON.stringify(arr),"utf-8");
    let result=await url_model.create(arr)
    console.log(`data is save sucessfuly`,result);
  }catch(error){
    console.log(error);
  }
  // console.log(req.body);
  res.redirect("/");
})

app.get("/links",async (req,res)=>{
  try{
    // let readfile=await fs.readFile(storelinkspath,"utf-8")
    // return res.json(JSON.parse(readfile))
    // res.json(JSON.parse(readfile));
  
    let readfile=await url_model.find();
    // console.log(readfile);
    res.json(readfile);
  }catch(error){
    console.log(error);
  }
})

app.post("/links",async (req,res)=>{
  let {url,shortcode}=req.body;
  try {
    let newdata=await url_model.create({url,shortcode})
    res.json(newdata)
  } catch (error) {
    console.log(error);
  }
})

app.put("/links/:id",async (req,res)=>{
  let {url,shortcode}=req.body;
  try {
    let updated=await url_model.findByIdAndUpdate(req.params.id,{url,shortcode},{new:true})
    res.json(updated)
  } catch (error) {
    console.error(error);
  }
})

app.delete("/links/:id",async (req,res)=>{
  try{
    let deletefile=await url_model.findByIdAndDelete(req.params.id)
    res.json(deletefile)
  }catch(error){
    console.error(error);
  }
})

app.get("/links")

app.use((req,res)=>{
  res.status(404).sendFile(errorfilepath);
})

app.listen(port,()=>{
  console.log(`server is running at http://localhost:${port}`);
})