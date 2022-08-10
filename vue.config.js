const ImageminPlugin = require('imagemin-webpack-plugin').default
const ImageminMozjpeg = require('imagemin-mozjpeg')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {

    devServer: {    port: 1234,   // 端口号  
    },


    publicPath: "./",
 

    configureWebpack: {
        externals: {
            'echarts':'echarts',
        },

        plugins: [
            new ImageminPlugin({
                disable: process.env.NODE_ENV !== 'production',
                test: /\.(jpe?g|png|gif|svg)$/i,
                plugins: [
                    ImageminMozjpeg({
                        quality: 70
                    })
                ]
            }),
            new BundleAnalyzerPlugin()
        
        ]
    }
}
