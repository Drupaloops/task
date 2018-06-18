const path = require('path')
const src = path.resolve(__dirname, 'src')
var ExtractTextPlugin = require('extract-text-webpack-plugin') //TODO: mini-css-extract-plugin instead

module.exports = {
    mode: 'development',
    entry: path.resolve(src, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        // open: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?minimize', 'postcss-loader', 'less-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: getPath => {
                return getPath('css/[name].css').replace('css/js', 'css')
            },
            allChunks: true
        })
    ]
}