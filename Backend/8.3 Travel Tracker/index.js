import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Alialialh.50pg",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT country_code FROM visited_countries");
    let countries = []
    result.rows.forEach(row => {
      // console.log(row.country_code);
      countries.push(row.country_code);
    });
    res.render("index.ejs", { countries: countries,
      total: countries.length });
    // console.log(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
  }
});

app.post("/add", async (req, res) => {
  let country = req.body.country.trim();
  const NewCountry =  await db.query(`INSERT INTO visited_countries (country_code) VALUES ('${country}')`);
  res.redirect("/");
  });
  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
