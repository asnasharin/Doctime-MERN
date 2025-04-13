import dotenv from 'dotenv';
dotenv.config();
import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';



const cookieParser = require("cookie-parser");
import session, { MemoryStore } from "express-session";
import dependencies from './frameworks/config/dependencies';
import { routes } from './adapters/Router';

const expressConfig = (app: Express) => { 


  const server = http.createServer(app);

  const store = new MemoryStore();

  app.use(bodyParser.json({ limit: "5000mb" }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser(process.env.COOKIEPARSERSECRET));
  app.use(express.static("public/"));

  app.use(
    cors({
      origin: ["http://localhost:5173", "http://localhost:8000", ],
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
  );


 


  app.use("/", routes(dependencies))
 


};

export default expressConfig;


