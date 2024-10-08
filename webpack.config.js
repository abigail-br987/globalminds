module.exports = {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                // options
              },
            },
            'url-loader', // or 'file-loader' if you want to use it
          ],
        },
        // other rules
      ],
    },
  };