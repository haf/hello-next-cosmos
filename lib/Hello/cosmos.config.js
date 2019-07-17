var webpack = require('webpack');
module.exports = {
  webpack: (config, { env }) => {
    return {
      ...config,
      plugins: [
        ...(config.plugins || []),
        new webpack.ProvidePlugin({
          'React': 'react'
        })
      ]
    }
  }
}