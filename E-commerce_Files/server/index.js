const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const cors = require('cors');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const multer = require('multer');
//const uuid = require('uuid/v4');
const { v4: uuid_v4 } = require('uuid');
var bodyParser = require('body-parser');

const { mongoose } = require('./database');

//////////////////////////////////////////////// Initializations ///////////////////////////////////////////////////////////
const app = express();
require('./config/passport');
// ///////////////////////////////////////////// Settings ///////////////////////////////////////////////////////////////////
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));

app.set('view engine', '.hbs');



///////////////////////////////////////////////// Middlewares ////////////////////////////////////////////////////////////////
//app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

/////////////////////////////////////////////////  Upload Images,Files /////////////////////////////////////////////////////////////
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/img/uploads'),
  filename: (req, file, cb, filename) => {
      console.log(file);
      cb(null, uuid_v4() + path.extname(file.originalname));
  }
}) 
app.use(multer({storage}).single('image'));

///////////////////////////////////////////////// Global Variables ///////////////////////////////////////////////////////////
app.use((req, res, next) => {
   res.locals.success_msg = req.flash('success_msg');
   res.locals.error_msg = req.flash('error_msg');
   res.locals.error = req.flash('error');
   res.locals.user = req.user || null;
   next();
 });
////////////////////////////////////////////////////////// cors //////////////////////////////////////////////////////////
//app.use(morgan('dev'));
//app.use(express.json());
app.use(bodyParser.json());

app.use(cors({origin: 'http://localhost:4200'}));  
(express.json());

/////////////////////////////////////////////////////// Routes ///////////////////////////////////////////////////////////
 app.use('/api/shop', require('./routes/shop.routes'));
 app.use('/api/user', require('./routes/user.routes'));
 //app.use('/api/admin', require('./routes/admin.routes'));

 // Admin
 app.use( '/admin',require('./routes/admin_new.routes'));

////////////////////////////////////////////////////// Static Files  /////////////////////////////////////////////////////
app.use(express.static(path.join(__dirname, 'public')));

 ///////////////////////////////////////////////////// starting the server ///////////////////////////////////////////////
 app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
    });