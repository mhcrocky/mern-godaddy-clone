import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./database/connection";
import router from "./router/route";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

const port = 5000;

app.get("/", (req, res) => {
  res.status(201).json("Get Request success");
});

app.use("/api", router);

connectDB()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log("Server is running on port : ", port);
      });
    } catch (err) {
      console.log("Cannot connect to server : ", err);
    }
  })
  .catch((err) => {
    console.log("Invalid dabatase connection : ", err);
  });
