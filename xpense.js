const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const sequelize = require('./util/database')

const app = express();
const trackerRoutes = require('./routes/expense')

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

app.use('/expense',trackerRoutes);

sequelize.sync()
.then((result) => {
    app.listen(4000);
})
.catch(err => console.log(err))
