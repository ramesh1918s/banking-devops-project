const express = require("express");
const app = express();

app.use(express.json());

// health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

// create user (demo)
app.post("/users", (req, res) => {
  const user = req.body;

  res.json({
    message: "User created successfully",
    user,
  });
});

app.listen(3000, () => {
  console.log("User service running on port 3000");
});