const path = require('path');

module.exports = {
    entry: [
            'react-hot-loader/patch',
         './src/index.js'
    ],
        output: {
        path: path.resolve('/home/wojji/Desktop/Kodilla/module-16/zadanie-16-7/', 'build/'), publicPath: "/build/",
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
};