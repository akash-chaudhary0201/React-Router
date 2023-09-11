const express = require('express');
const app = express();
const port = 4000;

// Sample JSON data
const users = [
    {
        name: 'Akash',
        email: 'akashjaat12300@gmail.com',
        phone: 9528070386,
    },
    {
        name: 'Gaurav',
        email: 'gauravjaat12300@gmail.com',
        phone: 9520070386,
    },
    {
        name: 'Peter',
        email: 'peterjaat12300@gmail.com',
        phone: 9008070386,
    },
];

// Define a route to return the JSON data
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`API server is running on port ${port}`);
});
