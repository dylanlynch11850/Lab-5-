const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//sending Json back, get api to listen for requests then send back response with json in it 
//sending tects back 
app.get('/', (req, res) => {
  res.send('Hello World!, welcome')
})

//sends back htp response, sends text box back 
app.get('/test', (req, res)=>{
res.sendFile(__dirname + '/index.html')
})

app.post('/name', (req, res)=>{
    console.log(req.body);
    res.send('Hello '+req.body.fname+ ' ' +req.body.lname+' from POST method');
})


app.get('/name', (req, res)=>{
    console.log(req.query.Fname);
    res.send('Hello '+req.query.fname+ ' ' +req.query.lname);
})

app.get('/api/books', (req, res) =>{

    const books = [
        {
            "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        
    ];
    
    //res is for response 
    res.status(200).json({
        mybooks:books

    });

})

//sending texts back 
app.get('/datarep', (req, res)=>{
    res.send('Hello From DataRep')
})


//This is how you define a name, name is now a paramater.
//server is sending it back down 
app.get('/Hello/:name', (req, res)=>{
    console.log(req.params.name);
    res.send('Hello'+req.params.name);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})