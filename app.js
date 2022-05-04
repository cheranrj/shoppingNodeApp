// const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// app.set('view engine', 'pug');
// app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// const routes = require('./routes');

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
