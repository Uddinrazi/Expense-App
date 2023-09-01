const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const sequelize = require('./util/database')

const app = express();
const trackerRoutes = require('./routes/expense')

app.use(cors())
app.use(bodyParser.json())

app.use('/expense',trackerRoutes);

sequelize.sync()
.then((result) => {
    app.listen(3000);
})
.catch(err => console.log(err))
