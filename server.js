var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');


new WebpackDevServer(webpack(config), {
    contentBase: "./build",
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    },
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
}).listen(config.port, 'localhost', function(err) {
    if (err) {
        console.log(err);
    }

    console.log('🌎  Server is listening at localhost:' + config.port);
});