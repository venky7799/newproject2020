const path =require("path");


module.exports={
    devServer:{
        contentBase:path.resolve(__dirname,"./src"),
        historyApiFallback: true,
    },
    mode:"development",
    entry: path.resolve(__dirname,"./src/index.js"),
    output:{
      filename:"bundle.js"
  },
    module:{
      rules: [
        { test: /\.(js)$/, use: 'babel-loader' },
        { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
        {
          test: /\.scss$/,
          
          exclude: /node_modules/,
          use: [
              {
                  loader: 'style-loader',
              },
              {
                  loader: 'css-loader',
                  options: {
                      sourceMap: true,
                  },
              },
              {
                  loader: 'sass-loader',
                  options: {
                      sourceMap: true,
                  },
              },
          ],
      },
      
      ]
    },
    resolve: {
        extensions: [".js", ".scss", ".css"]
      },
   
   
};