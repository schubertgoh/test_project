import User from '../models/user.model.mjs'
import Item from '../models/item.model.mjs'
import mongoose from 'mongoose';
import "../loadEnvironment.js";

const param = process.env.ATLAS_URI || "";
console.log('Now initing DB' + param)
mongoose
    .connect(param, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((error) => console.log(error));

/* drop users collections */
mongoose.connection.dropCollection('users', function (err) {
    /* show messages */
    if (err) {
        if (err.code === 26) console.log('-- users collection does not exists');
        else throw err;
    }
    else console.log("-- users collection dropped");

    /* insert data of users */
    User.create(userData, function (err, users) {
        if (err) throw err;
        console.log(users + '\n-- users inserted successfully');
    });
});


/* drop item collections */
mongoose.connection.dropCollection('items', function (err) {
    if (err) {
        if (err.code === 26) console.log('-- items collection does not exists');
        else throw err;
    }
    else console.log("-- items collection dropped");


    Item.create(itemData, function (err, items) {
        if (err) throw err;
        console.log(items + '\n-- items inserted successfully');
    });
    /* insert post */
});// END drop collections

/* data to be inserted */
const userData = [
    {
        firstName: 'Tom',
        lastName: 'Lee',
        email: "tomlee@domain.com",
        password: "password1",
        active: true
    },
    {
        firstName: 'Bon',
        lastName: 'Tan',
        email: "bobtan@domain.com",
        password: "password1",
        active: true
    },
];

const itemData = [
    {
        name: 'Apple',
        desc: 'This is an apple',
        code: "APPL3",
        photo: "apple.jpg",
    },
    {
        name: 'Orange',
        desc: 'This is an orange',
        code: "OR4NG3",
        photo: "orange.jpg",
    },
    {
        name: 'Banana',
        desc: 'This is a banana',
        code: "B4N4N4",
        photo: "banana.jpg",
    }
];
