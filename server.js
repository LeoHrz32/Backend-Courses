if(process.env.NODE_ENV === 'development'){
  require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./src/db/config');
const bodyparser = require('body-parser');


const PORT = process.env.PORT || 3000; 


const app = express(); 
app.use(bodyparser.json());
app.use(morgan('dev'));
app.use(cors());
connectDB();





app.get('/', (req, res) => {
  res.send('API Gateway');
});

const routeInstructor = require('./src/instructor/instructorRoute')
app.use('/api', routeInstructor);

const routeAprendiz = require('./src/apprentice/apprenticeRoute')
app.use('/api', routeAprendiz);

const routeCourse = require('./src/course/courseRoute')
app.use('/api', routeCourse);






app.listen(PORT, () => {
  console.log(`API Gateway escuchando en el puerto ${PORT}`);
});
