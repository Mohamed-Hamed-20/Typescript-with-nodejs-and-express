import express from "express";
import { bootstrap } from "./src/index.routes";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });
console.log(process.env.port);

const app = express();

bootstrap(app, express);
