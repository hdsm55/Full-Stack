// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
import express from "express";
import axios from "axios";


const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  try {
    const result = axios.get(API_URL + "/random");
       res.render("index.ejs", {
        secret: JSON.stringify(result.data.secret),
        user: JSON.stringify(result.data.username)
      });
    }catch(error){
          res.render("index.ejs", { secret: JSON.stringify(error.response.data) });
      }
});

