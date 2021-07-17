const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const postRouter = require("./routes/postRouter");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/posts", postRouter);
app.use(express.static(`${__dirname}/client/build`));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
module.exports = app;
