const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const plugins = [new ExtractTextPlugin('styles.css')]


module.exports = {
    entry: "./src/index.jsx",
        
    output: {
        filename: "app.js" ,
        path: __dirname + "/dist",
        // publicPath: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.

    resolve: {
        // Add resolvable extensions.
        extensions: [".jsx", ".js", ".json"],    
    },

    module: {
        rules: [

            {
                enforce: "pre",
                test: /.js[x]?$/,
                loader: "babel-loader",
                exclude:'/node_modules',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            },

            {
                test: /\.(scss|sass|css)$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'postcss-loader', options: {
                            plugins: (loader) => [
                              require('postcss-smart-import'),
                              require('autoprefixer'),
                            ]
                          }
                         },
                        'resolve-url-loader',
                        { loader: 'sass-loader', options: { sourceMap: true } }
                    ]
                })
            },
        
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                 loader: "url-loader?name=public/images/[name].[ext]"
                },
              // "file" loader makes sure assets end up in the `build` folder.
              // When you `import` an asset, you get its filename.
              {
                test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    },
    plugins: [new ExtractTextPlugin('styles.css')],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.

    devServer: {
        port: process.env.PORT || 8080,
        contentBase: './public',
        historyApiFallback: true
    }
};