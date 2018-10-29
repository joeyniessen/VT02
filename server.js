const express = require('express');


const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// DB Config & DB connection
const db = require('./config/keys').mongoURI;
async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(
        db,
        {
            useNewUrlParser: true
        }
    );
    return client.db('devconnecter').collection('test');
}

//test
app.get('/', (req, res) => res.send('Hello World!'));

// Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 9999;

app.listen(port, () => console.log(`Server running on port ${port}`));  