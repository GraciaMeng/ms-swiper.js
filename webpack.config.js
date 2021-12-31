const webpack = require('webpack');
const pkg = require('./package.json');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let config = {
    target: "web",
    entry: {
        'ms-swiper': "./src/index.ts",
        css: './src/css.ts',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'msSwiperjs',
        libraryTarget: 'umd',
        clean: true,
        environment: {
            arrowFunction: false,
            bigIntLiteral: false,
            const: false,
            destructuring: false,
            dynamicImport: false,
            forOf: false,
            module: false
        }
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        fallback: {
            fs: false,
            path: false
        },
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            __VERSION__: JSON.stringify(pkg.version)
        }),
        new MiniCssExtractPlugin({
            filename: "style/[name].css",
        })
    ],

    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'ms-swiper-styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [{
                test: /\.(ts|js)$/,
                use: 'ts-loader',
                exclude: /node-modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            },
            {
                test: /\.css/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                exclude: /node-modules/
            },
        ]
    }
};

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        config.output.filename = 'ms-swiper.min.js';
    }

    return config;
};