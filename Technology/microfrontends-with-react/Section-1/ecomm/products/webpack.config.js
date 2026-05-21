const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer : {
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap', //we expose the bootstrap file instead of the index file, because it's where we export the mount function for the CONTAINER.
            },
            shared: ['faker'],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
};  