import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send(`
        <h1>Hello</h1>
        <h2>lol</h2>
        <h2>test</h2>`);
});

app.get('/find-by-isbn-author', (req, res) => {
    res.send(
        'Book: ' + req.query.bookName + '\n'+
        'Author: ' + req.query.author + '\n'+
        'ISBN: ' + req.query.isbn + '\n' +
        'Year Published: ' + req.query.yearPublished + '\n'
    );
});

app.get('/find-by-author', (req, res) => {
    res.send(
        'Book: ' + req.query.bookName + '\n'+
        'Author: ' + req.query.author + '\n'+
        'ISBN: ' + req.query.isbn + '\n' +
        'Year Published: ' + req.query.yearPublished + '\n'
    );
});


app.post('/add-book', (req, res) => {
    res.send('Received a POST request from ' + req.body.name);
});

app.listen(3000, () => { console.log('Server started at port 3000') });