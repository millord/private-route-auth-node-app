const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("tiny"));

// routes middlewares
app.use("/api/user", authRoutes);
app.use("/api/post", postRoutes);

// connect to db
mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(`DB connected...`)
);

// start the server
app.listen(process.env.PORT, () =>
  console.log(`Server runnin on port ${process.env.PORT}`)
);
