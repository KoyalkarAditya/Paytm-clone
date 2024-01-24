const express = require("express");
const cors = require("cors");
const app = express();
const rootRouter = require("./routes/index");
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use("/api/v1", rootRouter);
app.listen(PORT, () => {
  console.log("listing at port" + PORT);
});
