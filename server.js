import express from 'express';
import { appendFileSync } from 'node:fs';

function isEmpty(field){
    if(field === "" || field === null){
        return true;
    }
    return false;
    //return true if field is null or empty string
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


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
        'Book: ' + req.query.book + '\n'+
        'Author: ' + req.query.author + '\n'+
        'ISBN: ' + req.query.isbn + '\n' +
        'Year Published: ' + req.query.yearPublished + '\n'
    );
});


app.post('/add-book', (req, res) => {
    var bookAdded = false;
    bookName = req.body.bookName;
    isbn = req.body.isbn;
    author = req.body.author;
    yearPublished = req.body.yearPublished;

    if(!isEmpty(bookName) || !isEmpty(isbn) || !isEmpty(author) || !isEmpty(yearPublished)){
        var book = bookName + "," + isbn + "," + author + "," + yearPublished + "\n";
        appendFileSync(books.txt, "book");
        bookAdded = true;
        console.log("success: ", bookAdded);
    }else{
        console.log("success: ", bookAdded);
    }

    if(bookAdded){
        res.send('Book successfully added.');
    }else{
        res.send('Failed to add book.');
    }
});

app.listen(3000, () => { console.log('Server started at port 3000') });