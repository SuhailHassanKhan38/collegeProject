const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

connectDB();
console.log("connected to MongoDb Successfully");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/test", require("./routes/testRoutes"));

app.use("/api/v1/auth", require("./routes/authROutes"));

app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));

app.use("/api/v1/analytics", require("./routes/AnalyticsRoute"));

app.use("/api/v1/admin", require("./routes/AdminRoutes"));

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.listen(PORT, () => {
  console.log(
    `Node Server running in ${process.env.DEV_MODE}  Modern Port  ${process.env.PORT}`
      .bgBlue.white
  );
});
