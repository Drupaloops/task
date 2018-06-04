const path = require('path')
const src = path.resolve(__dirname, 'src')

module.exports = {
    mode: 'production',
    entry: path.resolve(src, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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