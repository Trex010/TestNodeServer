//MODULE IMPORT
const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

//SET UP FOR APP
const app = express();
// VIEW ENGINE
app.set('view engine', 'hbs');

//MIDDLE WARE
// app.use((req, res, next) => {
//   res.render('maintenace.hbs');
// });

//PUBLIC FOLDER
app.use(express.static(__dirname + '/public'));

//REGISTER Partials
hbs.registerPartials(__dirname + '/views/partials');

//REGISTER HELPER
hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

// GET METHOD
app.get('/',(req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website',
  });
});

// GET METHOD
app.get('/about',( req, res ) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    welcomeMessage: 'About Thien Dep Trai',
  });
});

// GET METHOD
app.get('/test',( req, res ) => {
  res.render('test.hbs', {
    pageTitle: 'Test Page',
    welcomeMessage: 'Welcome to Test Page',
  });
});

//LISTEN
app.listen(port,() => {
  console.log(`Server is running at port ${port}`);
});
