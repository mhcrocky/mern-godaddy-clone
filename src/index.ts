import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./database/connection";
import router from "./router/route";
import path from 'path';
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");


const port = process.env.PORT || 5000;


app.use("/api", router);

app.use(express.static(path.join(__dirname, '../frontend/dist')))

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../frontend/dist') });
});
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
