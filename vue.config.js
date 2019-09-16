// https://cli.vuejs.org/config/
const Dotenv = require('dotenv-webpack');
let dotenv = new Dotenv({
  systemvars: true
});
let variables = dotenv.definitions;
let domain = JSON.parse(variables['process.env.FRONT_APP_DOMAIN']);
let bucket = JSON.parse(variables['process.env.AWS_BUCKET']);

module.exports = {
  publicPath : `${domain}/${bucket}/`
}