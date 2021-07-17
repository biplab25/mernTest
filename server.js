const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: `${__dirname}/config.env` });
const app = require("./app");

const server = app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}`);
});

const DB = process.env.DB.replace("<PASSWORD>", process.env.DB_PASSWORD);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    })
    .then((con) => console.log("Databse connected"))
    .catch((err) => {
        console.log(err.message, err.code, err.codeName);
    });
