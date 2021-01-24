import express from 'express'
import path from 'path'
import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'
import { MongoClient } from 'mongodb'
import template from './../template'
//comment out before building for production
import devBundle from './devBundle'

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})


app.listen(config.port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})

// Database Connection 
