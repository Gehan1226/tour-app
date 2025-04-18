const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log("Middleware running ...");
  next();
});

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;