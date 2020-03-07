const express = require("express");
const Router = require("express-promise-router");
var bodyParser = require("body-parser");
const { Pool } = require("pg");

const connectionString =
  "postgresql://postgres:postgres@localhost:5432/twitter";

const app = express();
app.use(bodyParser.json());

const pool = new Pool({ connectionString });
const router = new Router();

router.get("/api/tweets", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM tweets ORDER BY id DESC");
  res.json(rows);
});

router.post("/api/tweets", async (req, res) => {
  const tweet = req.body;
  const { rows } = await pool.query("INSERT INTO tweets(author, tweet) VALUES($1, $2) RETURNING *", [
    tweet.author,
    tweet.tweet
  ]);
  res.json(rows[0]);
});

app.use(router);

app.listen(4000, () => console.log("Server started on 4000!"));
