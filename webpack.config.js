
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, 'src/index.jsx'),
    },
    output: {
        publicPath: '.',
        path: __dirname + '/dist',
        filename: '[name].[chunkhash].js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    devServer: {
        host: '0.0.0.0',
        port: 8088,
        historyApiFallback: true,
    },
    watchOptions: {
        aggregateTimeout: 1,
        ignored: /node_modules/,
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-0'],
                plugins: ['transform-runtime'],
            },
        }, {
            test: /\.html$/,
            loader: 'html-loader',
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader!postcss-loader!less-loader',
            }),
        }, {
            test: /\.(png|svg|jpg|ico)$/,
            loader: 'file-loader?name=./img/[hash].[ext]',
        }, {
            test: /\.(ttf|woff|woff2|otf|eot)$/,
            loader: 'file-loader?name=./fonts/[hash].[ext]',
        }],
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname),
            verbrose: true,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
        }),
        new ExtractTextPlugin({
            filename: '[name].[chunkhash].css',
            allChunks: false,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
        }),
    ],
}
