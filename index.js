const express = require('express');
const cors = require('cors')
const helmet = require('helmet')
const convertRouter = require('./src/routes/convert.routes');

const PORT = 5002;

const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/", convertRouter);

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
