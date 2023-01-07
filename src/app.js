import express from "express";
import { pool } from "./db.js";
import { PORT } from "./config.js";
const app = express();

app.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM  users");
  //res.send("Welcome to Server");
  res.json(rows);
});

app.get("/ping", async (req, res) => {
  const [result] = await pool.query(`SELECT "hello world" as RESULT`);
  //console.log(result[0]);
  //res.send("Welcome to Server");
  res.json(result[0]);
});

app.get("/create", async (req, res) => {
  const result = await pool.query('INSERT INTO users(name) VALUES("John")');
  res.json(result);
});

app.listen(PORT);
console.log("server", PORT);
