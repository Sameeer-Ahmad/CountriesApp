const express = require("express");

const cors = require("cors");
const { userRouter } = require("./routes/user.routes");
const { connectToDB } = require("./config/db");


const app = express();

app.use(cors());


require("dotenv").config();

const PORT = process.env.PORT;
app.use(express.json());
app.use("/user",userRouter)

app.listen(PORT, async () => {
  try {
    await connectToDB();
    console.log(`server is running on port ${PORT}`);
  } catch(err) {
    console.log(err);
  }
});
