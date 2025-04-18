import express from "express";
import { connectDB } from "./config/db.js";

import ProductRoutes from  './routes/product.route.js'

const app = express();

app.use(express.json());

app.use("/api/product" ,  ProductRoutes);

let port = 4000;

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on the port ${port}`);
});
