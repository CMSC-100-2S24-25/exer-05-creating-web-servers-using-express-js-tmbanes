import needle from 'needle';

needle.get('http://localhost:3000/', (err, res) => {
    console.log(res.body); // prints the body of the response message. In this case, “Hello”
});

needle.post(
    'http://localhost:3000/add-book',
    { book: 'bookName, isbn, author, year published' },
    (err, res) => {
        console.log(res.body) // prints the server’s response “Received a POST request.”
    }
);