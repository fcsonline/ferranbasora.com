const withPlugins = require("next-compose-plugins");
const withOffline = require('next-offline')
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([withOffline, optimizedImages]);
