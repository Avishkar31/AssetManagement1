const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 8080;

const assetRoute = require('./routes/asset');
// const expenseRoute = require('./routes/expense');
// const groupRoute = require('./routes/group');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.get('/', (req, res, next) => {
    return res.json('Missing end point in the request URL');
});

app.use('/asset', assetRoute);
// app.use('/expense', expenseRoute);
// app.use('/group', groupRoute);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message || 'Something went wrong';
    return res.status(status).json({ message: message });
});

mongoose.connect('mongodb+srv://admin:admin@cluster0.0bvrulr.mongodb.net/assets')
    .then(() => {
        app.listen(PORT, (err) => {
            const msg = !err ? 'Listing on port ' + PORT : 'Error Ocuured : ' + err;
            console.log(msg);
        })
    }).catch(err => console.log('Database connectivity failed ', err));


// const asset = {
//     issuedTo: "Subham ******",
//     deskLocation: "",
//     type: "Laptop",
//     model: "Latitude 7440",
//     nodeName: "DI21NP*****",
//     serialNumber: "JSS****",
//     allocation: "Permanent/Temporary",
//     period: "",
//     assessories: {
//         "CPU": 1,
//         "LCD Monitor": 0,
//         "Docking Station": 0,
//         "Keyboard": 1,
//         "Mouse": 1,
//         "Power Adapter (Laptop)": 1,
//         "Power Adaptor (Docking station)": 0,
//         "Laptop Bag": 1,
//     },
//     issuingPerson: "----"
// }
