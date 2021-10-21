const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());

//middle ware
app.use(express.json());


const port = 8000;

// app.get('/', (req, res) => {
//     res.send('hello my second node project details');
// })

const users = [
    { e: 'shabana', emailid: 1, nam: 'shabana@gmail.com', phone: '9874521525' },
    { id: 2, name: 'nasima', email: 'nasima@gmail.com', phone: '9874521555' },
    { id: 3, name: 'danish', email: 'danish@gmail.com', phone: '9874528525' },
    { id: 4, name: 'ansar', email: 'ansar@gmail.com', phone: '9874561525' },
    { id: 5, name: 'jahanara', email: 'jahanara@gmail.com', phone: '9874521525' },
    { id: 6, name: 'jinnat', email: 'jinnat@gmail.com', phone: '9874521505' }
]


app.get('/users', (req, res) => {
    res.send(users);
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    // console.log(req.params.id);
    res.send(user)
})

//search 
app.get('/fruits/mango/fajli', (req, res) => {
    res.send('yammy')
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'apple'])
})


//query parama , 
app.get('/users', (req, res) => {
    // console.log(req.query);
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }

    else {
        res.send(users)
    }
    // res.send(users);
})




//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    // res.send('inside post')
    res.json(newUser)
});

app.listen(port, () => {
    console.log('listening to port', port);
})