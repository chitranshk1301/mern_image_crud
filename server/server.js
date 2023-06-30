const express = require('express');
const morgan = require('morgan');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const { protect } = require('./auth/auth');
const { createNewUser, signin } = require('./controllers/user');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
dotenv.config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({message: 'nope'})
});

// user routes
app.post('/user', createNewUser)
app.post('/signin', signin)

// image routes
app.use('/api', protect, require('./routes/post'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    }
);

