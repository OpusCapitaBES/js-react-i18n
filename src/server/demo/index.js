const path = require('path');
const express = require('express');

const app = express();

require('@opuscapita/react-showroom-server').makeLocalScan(path.resolve(__dirname, '../../client/components'));

const webpackConfig = require('../../../demo.webpack.config.js');
app.use(
  require('webpack-dev-middleware')(
    require('webpack')(webpackConfig), {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    }
  )
);

app.use('/styles',
  express.static(path.join(__dirname, '../../../node_modules/@opuscapita/styles/dist/npm')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/demo/index.html'));
});

// launch application
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.listen(port, host, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`The server is running at http://${host}:${port}/`);
});
