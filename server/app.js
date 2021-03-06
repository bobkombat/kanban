require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('./router');
const errorHandler = require('./middlewares/errorHandler.js');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('hello worlds');
})
app.use(routes);
app.use(errorHandler)

app.listen(port, () => console.log(`listeing at port ${port}`))
