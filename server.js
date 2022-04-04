require('./models/db');

const express = require('express');
const path = require('path');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const employeeController = require('./controllers/employeeController');
const {allowInsecurePrototypeAccess} = require("@handlebars/allow-prototype-access");

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({handlebars: allowInsecurePrototypeAccess(Handlebars) ,extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');
app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/employee', employeeController);