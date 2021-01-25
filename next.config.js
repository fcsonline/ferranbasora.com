const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')
const withMDX = require('@next/mdx')

module.exports = withPlugins([withOffline, withMDX])
