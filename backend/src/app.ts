// import dotenv from 'dotenv'
// dotenv.config()
// import http from 'http'
// import serverConfig from './server'
// import connectDb from './config/db'
// import config from './config/config'
// import express from "express"
// import expressConfig from './express'


// const app = express()
// const server = http.createServer(app);

// connectDb(config)

// expressConfig(app)

// serverConfig(server, config).startServer()


import dotenv from 'dotenv'
dotenv.config()
import http from 'http'
import serverConfig from './server'
import connectDb from './config/db'
import { routes } from './adapters/Router'
import config from './config/config'
import expresscofig from './express'
import express from 'express'
import dependencies from './frameworks/config/dependencies'

import session, { SessionOptions, MemoryStore, SessionData } from "express-session";



const app = express()
const server = http.createServer(app)

connectDb(config)
const store = new MemoryStore();


const sessionOptions: SessionOptions = {
  secret: process.env.SESSION_SECRET_KEY || 'defaultSecretKey',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 60 * 60 * 1000, // 30 minutes
    httpOnly: true,
  },
  store: store,
};

// Apply session middleware
app.use(session(sessionOptions));


// Configure Express
expresscofig(app);



// Define session interfaces
declare module 'express-session' {
  interface Session {
    userData?: {
      name: string;
      email: string;
      password: string;
    };
    doctorData?: {
      name: string;
      email: string;
      password: string;
    };
    doctorProfile?: {
      phone: string;
      specialization: string;
      street: string;
      city: string;
      state: string;
      zipcode: string;
      fees: number;
      image: string;
    };
    kycData?: {
      certificateImage: string;
      qualificationImage: string;
      aadhaarNumber: string;
      experienced: boolean;
      yearsOfExperience: number;
      hospitalName: string;
    };
    Otp?: string;
  }
}


app.use('/api', routes(dependencies))

serverConfig(server, config).startServer()



