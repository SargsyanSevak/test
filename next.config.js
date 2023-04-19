const { config } = require('process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  test : /\.svg$/,
  use : [{
    loader :'@svgr/webpack',
    options:{
      icon:true
    }
  }]
}
module.exports = nextConfig
