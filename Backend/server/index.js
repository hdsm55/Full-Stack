import  express  from "express";

const app = express()
const port = 3000


app.get("/",(req,res) => {
  res.send("hi hshosss")
})
  
app.get("/about",(req,res)=>{
  res.send("Its My")
  })

  app.get("/about",(req,res)=>{
    res.send("Its My")
    })


app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
