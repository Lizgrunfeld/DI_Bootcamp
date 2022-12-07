const express = require('express');
const ganRoutes = require('./src/gans/routes');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/api/gans', ganRoutes);



app.listen(port, () => console.log(`app listening on port ${port}`));