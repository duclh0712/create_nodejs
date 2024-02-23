const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;

const route = require("./routes");
const db = require("./config/db");

const handlebars = require("express-handlebars");

const morgan = require("morgan");

// log http request
app.use(morgan("combined"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");


db.connect();

route(app);

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
