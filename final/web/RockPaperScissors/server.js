const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // MySQL 사용자 이름
  password: "MySQL 비밀번호", // MySQL 비밀번호
  database: "rock_paper_scissors", // 데이터베이스 이름
  multipleStatements: true,
  // 다음 라인을 추가하여 'mysql_native_password'를 사용하도록 지정합니다.
  authSwitchHandler: function ({ pluginName, options, callback }) {
    if (pluginName === "caching_sha2_password") {
      return Buffer.from([0x01]); // 'mysql_native_password'
    }
  },
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// 서버 종료 시 db 연결 종료
process.on("SIGINT", () => {
  db.end((err) => {
    if (err) {
      console.error("MySQL disconnection error:", err);
    } else {
      console.log("Disconnected from MySQL");
      process.exit();
    }
  });
});

app.post("/saveResult", (req, res) => {
  const { left, right } = req.body;
  const query = `INSERT INTO results (left_option, right_option) VALUES (${left}, ${right})`;

  if (db.state === "disconnected") {
    console.log("Reconnecting to MySQL...");
    db.connect((err) => {
      if (err) {
        console.error("MySQL reconnection error:", err);
      } else {
        console.log("Reconnected to MySQL");
        executeQuery(query, res);
      }
    });
  } else {
    executeQuery(query, res);
  }
});

function executeQuery(query, res) {
  db.query(query, (err, result) => {
    if (err) {
      console.error("MySQL query error:", err);
      res.status(500).send("Error executing MySQL query");
    } else {
      res.status(200).send("Query executed successfully");
    }
  });
}

app.get("/getResults", (req, res) => {
  const query = "SELECT * FROM results";

  db.query(query, (err, results) => {
    if (err) {
      console.error("MySQL query error:", err);
      res.status(500).send("Error retrieving results from database");
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
