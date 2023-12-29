// LIBRARIES //
const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');

const PORT = process.env.PORT || 3000;
const MONGO_URL =
  'mongodb+srv://dbUser:8ubNiYGkCIg32REc@cuppies.9gr1pj3.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(MONGO_URL);

const DB = client.db('cuppies');

DB.collection('users')
  .find({})
  .toArray()
  .then((data) => console.log(data));

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World',
  });
});

app.get('/users', (req, res) => {
  DB.collection('users')
    .find({})
    .toArray()
    .then((users) => {
      res.status(200).json({
        users,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: res.message,
      });
    });
});

app.post('/users', (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: 'Hello World',
  });
  // try {
  //   const {name, email, password} = req.body;

  //   // Проверка на уникальность email
  //   DB.collection('users')
  //     .findOne({email: email})
  //     .then((user) => {
  //       if (user) {
  //         res.status(400).json({
  //           message: 'Email already exists',
  //         });
  //       } else {
  //         const newUser = {
  //           name,
  //           email,
  //           password,
  //         };

  //         DB.collection('users')
  //           .insertOne(newUser)
  //           .then(() => {
  //             res.status(201).json({
  //               message: 'User created successfully',
  //             });
  //           })
  //           .catch((err) => {
  //             res.status(500).json({
  //               message: res.message,
  //             });
  //           });
  //       }
  //     })
  //     .catch((err) => {
  //       res.status(500).json({
  //         message: res.message,
  //       });
  //     });
  // } catch (err) {
  //   res.status(500).json({
  //     message: res.message,
  //   });
  // }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
