dotenv.config()

import path from 'path'
import dotenv from 'dotenv';
import morgan from 'morgan'
import colors from 'colors';
import express from 'express';
import connectDB from './config/db.js';
import questionRoute from './routes/questionRoute.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
const app = express();

if( process.env.NODE_ENV === 'development' ) {
  app.use(morgan('dev'))
}

app.use(express.static('public'));


app.use(express.json());
connectDB()

app.use('/api/questions', questionRoute)
app.use('/api/users', userRoutes)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if( process.env.NODE_ENV === 'production' ) {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) => 
    res.sendFile(path.resolve( __dirname, 'frontend', 'build', 'index.html' ))
  )
  console.log('production')
}else {
  
  app.get('/', (req, res) => {
    res.send('API is running....')
  })

}


app.use(notFound)
app.use(errorHandler)

app.listen( process.env.PORT || 5000, function() {
    console.log(`Server running in ${ process.env.NODE_ENV } on port ${ process.env.PORT }`);
});
