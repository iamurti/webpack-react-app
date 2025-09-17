const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ruleForJavascript = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',{
                    "runtime": "automatic"
                }
            ]
        ]
    }
}

const ruleForStyles = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}

const rules = [ruleForJavascript, ruleForStyles];

module.exports = (env, args) => {
    const isProduction = args.mode === 'production';
    return {
        output: {
            filename: isProduction ? '[name].[contenthash].js' : '[name].js',
            path: path.resolve(__dirname, 'build'),
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html')
            })
        ],
        module: { rules },
        devServer: {
            open: true,
            port: 3000
        }
    }
    
}