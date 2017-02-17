var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: debug ? "inline-sourcemap" : false,
    entry: {
        app: "./app/index.js",
        // vendor: ['lodash']
    },
    // externals: {
    //     'jquery': 'jQuery'
    // },
    module: {
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: 'css-loader',
                    publicPath: path.resolve(__dirname, 'dist')
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['es2015', { modules: false }]
                    ],
                    plugins: ['syntax-dynamic-import']
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: "[chunkhash].[name].js"
        filename: "[name].js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            // names: ['vendor', 'manifest'],
            minChunks: function(module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'manifest', chunks: ['vendor'] }),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false, compress: { warnings: false } }),
        new ExtractTextPlugin({
            filename: "bundle.css",
            disable: false,
            allChunks: true
        })
    ],
};


//DedupePlugin has been removed from Webpack2
//new webpack.optimize.DedupePlugin(),

//OccurrenceOrderPlugin is now on by default
//new webpack.optimize.OccurenceOrderPlugin(),