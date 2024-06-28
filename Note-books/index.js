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
  connectionString: "postgres://postgres.njoejsszhredpnxlpelp:Alialialh.50@aws-0-eu-central-1.pooler.supabase.com:6543/postgres",
});

let books = [];

db.connect()
  .then(() => {
    console.log("Connected to the database successfully!");

    // تعديل الاستعلام لجلب البيانات من جدول معين
    return books =  db.query('SELECT * FROM books LIMIT 10'); // استبدل your_table_name باسم الجدول الذي تريد جلب البيانات منه
  })
  .then(res => {
    console.log("Query result:", res.rows); // طباعة البيانات في الكونسول
  })
  .catch(err => {
    console.error("Connection error", err.stack);
  })
  .finally(() => {
    db.end();
  });


  app.get("/", async (req, res) => {
    try {
      res.render("index", {
        books:books,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Error");
    }
  });

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
