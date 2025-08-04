const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.set({ "Content-Type": "text/html; charset=utf-8" });
  res.send("헬로 Express");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
