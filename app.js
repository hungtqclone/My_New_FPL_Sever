let createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let usersRouter = require('./routes/users');
// session,cookies
const session = require('express-session');
const mongoose = require('mongoose');

// API
// http://localhost:3000/user/api
let UserAPIRouter = require('./routes/api/UserAPI')

// http://localhost:3000/news/api
let NewsAPIRouter = require('./routes/api/NewsAPI')

//http://localhost:3000/subject/api
let SubjectAPIRouter = require('./routes/api/SubjectAPI')

//http://localhost:3000/scheduleStudy/api
let ScheduleStudyAPIRouter = require('./routes/api/ScheduleStudyAPI')

//http://localhost:3000/scheduleExam/api
let ScheduleExamAPIRouter = require('./routes/api/ScheduleExamAPI')

//http://localhost:3000/category/api
let CategoryAPIRouter = require('./routes/api/CategoryAPI')

//http://localhost:3000/chat/api
let ChatAPIRouter = require('./routes/api/ChatAPI')

//http://localhost:3000/message/api
let MessageAPIRouter = require('./routes/api/MessageAPI')

//http://localhost:3000/gofpt/api
let GoFPTAPIRouter = require('./routes/api/GoFPTAPI')

// CPANEL

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// API 
// http://localhost:3000/user/api
app.use('/user/api', UserAPIRouter);

// http://localhost:3000/news/api
app.use('/news/api', NewsAPIRouter);

//http://localhost:3000/scheduleStudy/api
app.use('/scheduleStudy/api', ScheduleStudyAPIRouter);

//http://localhost:3000/scheduleExam/api
app.use('/scheduleExam/api', ScheduleExamAPIRouter);

// http://localhost:3000/subject/api
app.use('/subject/api',SubjectAPIRouter)

// http://localhost:3000/category/api
app.use('/category/api',CategoryAPIRouter)

// http://localhost:3000/category/api
app.use('/gofpt/api',GoFPTAPIRouter)

// http://localhost:3000/chat/api
app.use('/chat/api',ChatAPIRouter)

// http://localhost:3000/message/api
app.use('/message/api',MessageAPIRouter)








//C Panel
//http:localhost:3000/users
app.use('/users', usersRouter);







// khai bao thong tin cua session
app.use(session({
  secret: 'iloveyou',//bi mat.
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));

mongoose.connect('mongodb+srv://nguyenvanson2622003:abc123456@cluster0.iuwkypv.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
