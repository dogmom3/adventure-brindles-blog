const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


// require('dotenv').config();
// const express = require('express');
// const { create } = require('express-handlebars');
// // const cookieParser = require('cookie-parser');
// // const morgan = require('morgan');
// // const passport = require('passport');
// const moment = require('moment');
// // const helmet = require('helmet');
// const PORT = process.env.PORT || 3010;
// const app = express();
// const db = require('./models');
// const bodyparser = require('body-parser')


// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({
//     extended: true
// }))
// // app.use(cookieParser());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// // const exphbs = create({
// //   helpers: {
// //     getMapKey() {
// //       console.log("getting map key");
// //       return process.env.MAP_API_KEY;
// //     },
// //   },
// // });
// // app.engine("handlebars", exphbs.engine);
// app.set("view engine", "handlebars");

// if (app.get('env') !== 'test') {
// //   app.use(morgan('dev')); // Hook up the HTTP logger
// }

// app.use(express.static('public'));

// // require('./config/passport')(db, app, passport); // pass passport for configuration

// // Define our routes
// // app.use('/api', require('./routes/apiRoutes')(passport, db));
// app.use(require('./routes/htmlRoutes')(db));
// //get trees from excel file
// app.use(require('./routes/siteRoutes')(db));

// // Secure express app
// app.use(helmet.hsts({
//   maxAge: moment.duration(1, 'years').asMilliseconds()
// }));

// // catch 404 and forward to error handler
// if (app.get('env') !== 'development') {
//   app.use((req, res, next) => {
//     const err = new Error('Not Found: ' + req.url);
//     err.status = 404;
//     next(err);
//   });
// }

// const syncOptions = {
//   force: process.env.FORCE_SYNC === 'true'
// };

// if (app.get('env') === 'test') {
//   syncOptions.force = true;
// }

// db.sequelize.sync(syncOptions).then(() => {
//   if (app.get('env') !== 'test' && syncOptions.force) {
//     require('./db/seed')(db);
//   }

//   app.listen(PORT, () => {
//     console.log(`App listening on port: ${PORT}`);
//   });
// });

// module.exports = app;
