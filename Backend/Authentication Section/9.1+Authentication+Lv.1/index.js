import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "Alialialh.50pg",
  port: 5432,
});
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const username = req.body.username; // Assuming you are storing email
  const password = req.body.password;
  console.log(username, password);
  try {
    const check = await db.query("SELECT * FROM users WHERE email = $1", [
      username,
    ]);
    if (check.rows.length > 0) {
      res.status(500).send("Not successfully, email is already registered");
    } else {
      const newUser = await db.query(
        "INSERT INTO users (email, password) VALUES ($1, $2)",
        [username, password]
      );
      res.render("secrets.ejs");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred");
  }
});

app.post("/login", async (req, res) => {
  const username = req.body.username; // Assuming you are storing email
  const password = req.body.password;
  console.log(username, password);
  try {
    // Corrected the query to match email and password correctly
    const check = await db.query("SELECT * FROM users WHERE email = $1 AND password = $2", [
      username, password
    ]);
    if (check.rows.length > 0) {
      res.render("secrets.ejs");
    } else {
      res.status(500).send("Not successfully, username and password are not correct");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
