import express from "express";
import { HomeIndex } from "../controllers/indexCon.js";

export const indexRt = express.Router();
    indexRt.get("/", HomeIndex);












