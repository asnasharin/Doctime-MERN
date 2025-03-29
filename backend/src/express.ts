import dotenv from "dotenv"
dotenv.config()
import express, { Express } from "express"
import cors from "cors"
import bodyParser from "body-parser"
import http from "http"



const expressConfig = (app: Express) => {

    const server = http.createServer(app)
}

export default expressConfig;