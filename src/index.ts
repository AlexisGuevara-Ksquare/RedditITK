import express from "express";
import { dbConnect } from "./DB/connection";
import router from "./routes";
import "./models/associations";

const main = async () => {
  const app = express();

  app.use(express.json());
  app.use("/", router);

  await dbConnect();

  app.listen(5000, () => console.log("Server running on port 5000"));
};

main();
