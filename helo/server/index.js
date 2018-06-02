require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const control = require('./controller')
const session = require('express-session');

const {CONNECTION_URI, SESSION_SECRET} = process.env

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 60 * 24 * 14
    }
}))

app.post('/register', control.newUser)
app.post('/login', control.login)
app.get('/posts', control.allPosts)
app.get('/api/auth/me', control.refresh)
app.post('/api/auth/logout', control.logout)


massive(CONNECTION_URI).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log('Connection error-----------', err))

const PORT = 3500;
app.listen(PORT, () => {
    console.log(`Hey your server is up and working on port ${PORT}🚀`);
});