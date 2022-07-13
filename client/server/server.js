const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const app = express();
const HOST = "0.0.0.0";
const PORT = process.env.PORT || 8080;

const republic = process.env.PWD === "/usr/src/app" ? "./public" : "../public";

app.use("/", express.static(path.join(__dirname, republic)));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
        "Access-Control-Allowed-Methods",
        "DELETE, GET, OPTIONS, POST, PUT"
    );
    next();
});

/**
 * GET (Request) listener
 */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, republic, "./index.html"));
});
app.get("/transportation/:studentNumber?", (req, res) => {
    console.log("I want transportation, possibly with a studentNumber");
    res.sendFile(path.join(__dirname, republic, "./index.html"));
});
app.get("/notFound", (req, res) => {
    console.log("Not Found Page");
    res.sendFile(path.join(__dirname, republic, "./index.html"));
});

app.listen(PORT, HOST, () => {
    console.log(`Server ${HOST} is listening on this port: ${PORT}`);
    console.log("static is here: ", path.join(__dirname, republic));
});
