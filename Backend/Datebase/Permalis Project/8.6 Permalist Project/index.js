import express from "express";
import bodyParser from "body-parser";
import pg from "pg";



const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// إعداد الملفات الثابتة
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "Alialialh.50pg",
  port: 5432,
});
db.connect();

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

async function checkAllItems() {
  const result = await db.query("SELECT * FROM item ORDER BY id ASC");
  return result.rows;
}

app.get("/", async (req, res) => {
  try {
    const items = await checkAllItems();
    res.render("index", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});
app.post("/add", async (req, res) => {
  const input = req.body.newItem;
  
  if (!input || input.trim() === "") {
    return res.status(400).send("Item title cannot be empty");
  }

  try {
    await db.query("INSERT INTO item (title) VALUES ($1)", [input]);
    res.redirect("/");
  } catch (err) {
    console.error("Error inserting new item:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/edit", async (req, res) => {
  const editTitle = req.body.updatedItemTitle;
  const editTitleId = req.body.updatedItemId;
  try { 
    await db.query("UPDATE item SET title = $1 WHERE id = $2", [editTitle ,editTitleId]);
    res.redirect("/");
  } catch (err) {
    console.error("Error inserting new item:", err);
    res.status(500).send("Internal Server Error");
  }
  });

app.post("/delete", async (req, res) => {
  const deleteItemId = req.body.deleteItemId;
  try { 
    await db.query("DELETE FROM item WHERE id = $1", [deleteItemId]);
    res.redirect("/");
  } catch (err) {
    console.error("Error inserting new item:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
