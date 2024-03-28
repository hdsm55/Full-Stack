import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var namea = "";

// app.use(bodyParser.urlencoded({ extended: true }));



app.get("/submit", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// const name = (req, res, next) => {
 
//   next();
// };

// app.use(name);

// app.post("/submit", (req, res) => {
//   res.send(
//     namea = req.body["street"] + req.body["pet"]
//     );
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
