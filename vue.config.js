const webpack = require("webpack");

module.exports = {
    chainWebpack: config => {
        config.module.rules.delete("eslint");
    },
    configureWebpack: {
        externals: {
            jquery: "jQuery",
            $: "jQuery",
        },
        output: {
            filename: "budget-primer-summary.[name].[hash:7].js",
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
            })
        ],
        optimization: {
            splitChunks: false
        },
    },
    css: {
        extract: false
    }
};
