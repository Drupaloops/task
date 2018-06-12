const path = require('path')
const src = path.resolve(__dirname, 'src')

module.exports = {
    mode: 'development',
    entry: path.resolve(src, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        // port: 9000,
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
            }
        ]
    }
}