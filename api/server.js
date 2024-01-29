import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoute from "./routes/authRoute.js";
import catRoute from "./routes/catRoute.js";
import productRoute from "./routes/productRoute.js"
import cors from "cors"


//configuring dotenv
dotenv.config();
const host = process.env.Host;
const port = process.env.Port;

//Connecting to mongoDb
connectDB();

//object
const app = express();

//middlewares
app.use(cors())
app.use(morgan("dev"));
app.use(express.json()); // used to parse json bodies

//routes

app.use("/api/v1/auth", authRoute);
app.use("/api/v1", catRoute)
app.use("/api/v1", productRoute)


app.listen(port, () => {
  console.log(`Server is started on ${host}:${port} `.bgWhite.black);
});
