const config = {
    entry: `${ __dirname }/src/app.js`,
    output: {
      filename: 'bundle.js',
      path: `${ __dirname }/dist/scripts`
    },
    mode: 'development'
  };
  
  module.exports = config;