import dotenv from 'dotenv'
dotenv.config()
import http from 'http'
import serverConfig from './server'
import connectDb from './config/db'
import config from './config/config'
import express from "express"
import expressConfig from './express'


const app = express()
const server = http.createServer(app);

connectDb(config)

expressConfig(app)

serverConfig(server, config).startServer()