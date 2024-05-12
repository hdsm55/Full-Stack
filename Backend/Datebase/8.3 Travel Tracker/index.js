// import express from "express";
// import bodyParser from "body-parser";
// import pg from "pg";

// const app = express();
// const port = 3000;

// const db = new pg.Client({
//   user: "postgres",
//   host: "localhost",
//   database: "world",
//   password: "Alialialh.50pg",
//   port: 5432,
// });

// db.connect();
// let countryCodes = []; // Array to store country codes

// db.query("SELECT country_code FROM visited_countries", (err, res) => {
//   if (err) {
//     console.error("Error executing query", err.stack);
//   } else {
//     countryCodes = res.rows.map(row => row.country_code); // Extracting country codes
//     console.log(countryCodes);
//   }
// });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

// app.get("/", async (req, res) => {
//   res.render("index.ejs", { 
//     total: countryCodes.length,
//     countries: countryCodes
//   });
// });

// app.post("/add", async (req, res) => {
//   var country = req.body.country;
//   console.log(country) // Corrected
//   await db.query(`SELECT country_code FROM countries WHERE country_name = '${country}'`, async (err, result) => {
//     if (err) {
//       console.error("Error executing query", err.stack);
//     } else {
//       if (result.rows.length > 0) {
//         // Country exists
//         var countryCode = res.rows.map(row => row.country_code);
//         console.log(countryCode)
//         // countryCodes.push(result.rows[0]);
//         await db.query("INSERT INTO visited_countries(country_code)values($1)",[countryCode], (err, res) => {
//           if (err) {
//             console.error("Error executing query", err.stack);
//           } else {
//             countryCodes = res.rows.map(row => row.country_code); // Extracting country codes
//             console.log(countryCodes);
//           }
//         });
//       } else {
//         // Country doesn't exist
//         console.log("Country doesn't exist");
//       }
//     }
//     res.render("index.ejs", {
//       total: countryCodes.length,
//       countries: countryCodes
//     });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });




import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

// Database connection
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Alialialh.50pg",
  port: 5432,
});

// Connect to the database
db.connect()
  .then(() => console.log("Connected to the database"))
  .catch(err => console.error("Error connecting to the database", err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT country_code FROM visited_countries");
    const countryCodes = result.rows.map(row => row.country_code);
    res.render("index.ejs", { total: countryCodes.length, countries: countryCodes });
  } catch (err) {
    console.error("Error fetching visited countries", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/add", async (req, res) => {
  const country = req.body.country;
  try {
    const result = await db.query("SELECT country_code FROM countries WHERE country_name = $1", [country]);
    if (result.rows.length > 0) {
      const countryCode = result.rows[0].country_code;
      await db.query("INSERT INTO visited_countries(country_code) VALUES ($1)", [countryCode]);
      res.redirect("/");
    } else {
      console.log("Country doesn't exist");
      res.status(404).send("Country not found");
    }
  } catch (err) {
    console.error("Error adding country", err);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
