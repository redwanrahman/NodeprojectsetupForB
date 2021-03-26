const express = require("express");
const path = require("path");//html path declear korar jonno use
const app = express();
require("./db/conn"); //conn.js join korar jonno use kora

const port = process.env.PORT || 3000;

//html path join koranor jonno use
const static_path = path.join(__dirname, "../public");

//html path join koranor jonno use
app.use(express.static(static_path));

app.get("/", (req,res) => {
    res.send("hello form Bangladesh")
});

app.listen(port, () => {
    console.log(`server on running port no ${port}`);
})