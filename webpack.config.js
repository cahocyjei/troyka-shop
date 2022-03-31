const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    mode:'development',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js',
        publicPath:'/'
    },
    devtool: 'inline-source-map',
    
    resolve:{
        extensions:['.js','.jsx'],
    },
    module:{   
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
              
            { 
                test: /\.html$/,
                use:[
                    {
                        loader:'html-loader',
                    }
                ]
            },
            {
                test:/\.(css|scss|sass)$/i,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                      use: [
                         {
                        loader: 'file-loader',
                           options: {
                                 name: 'asset/[hash]-[name].[ext]',
                               },
                         },
                    ],
            },

        ],
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        })
    ],
    devServer: {
        historyApiFallback:true,
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3005,
      },
}