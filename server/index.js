import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js"
import cors from "cors"


dotenv.config();
const app = express();

connectDB();


app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.json({ message: "Healthy" });
});



app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);



const port = process.env.PORT;

//server
app.listen(port, () => {

  console.log(`server connected on PORT ${port}`)
});