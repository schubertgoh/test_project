import express from "express";
import cors from "cors";
import "./loadEnvironment.js";
import "express-async-errors";
import user from "./controllers/user.controller.mjs";
import item from "./controllers/item.controller.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load  routes
app.use("/user", user);
app.use("/item", item)

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});