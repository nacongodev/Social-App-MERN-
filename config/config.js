// will define some server-side configuration￾related variables that will be used in the code but should not be hardcoded
// as a best practice

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/socialdb'
}

export default config

// env: To differentiate between development and production modes
// port: To define the listening port for the server
// jwtSecret: The secret key to be used to sign JWT
// mongoUri: The location of the MongoDB database instance for the
// project
