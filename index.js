const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');
const routes = require('./src/routes/palette.route');
const connectToDatabase = require('./src/database/database');

app.use(express.json());
app.use(cors());

connectToDatabase();
app.use('/palettes', routes);

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
