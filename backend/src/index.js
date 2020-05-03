const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");

const router = require("./router");
const app = express();
app.use(cors());
if (process.env.NODE_ENV !== "production") require("dotenv").load;

app.use(express.json());
app.use(router);
app.use(errors());

app.listen(process.env.PORT || 3333);
