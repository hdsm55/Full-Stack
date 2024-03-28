import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";



const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;



app.get("/", (req, res) => {
  var day = new Date;
  var day1 = day.getDay();
  console.log(day1);
  let theDay = "";
  if (day1 >= 1 && day1 <= 5) {
    theDay = "weekday";
  } else {
    theDay = "weekend";
  }

  res.render("index.ejs", { theDay }); 
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
