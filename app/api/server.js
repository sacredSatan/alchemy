import express from 'express';

const app = express();
app.get('/', (req, res) => {
    res.send('It is working!');
});

app.listen(5000, () => console.log('App running on port 5000'));
