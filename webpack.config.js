var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        "xxx":['./src/app.js']
    },
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/assets/",
        filename: 'app.bundle.js'
    },
    module:{
        loaders:[
            {
                include:[
                    path.resolve(__dirname, "src"),
                ],
                test: /\.js$/,
                loader: 'babel-loader',
                query:{
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {inline:true},
    devtool: 'source-map'
}