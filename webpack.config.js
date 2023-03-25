// const path = require("path");
// module.exports = {
//     // 入口文件
//     entry: "./src/main.js",
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.vue$/,
//                 loader: 'vue-loader'
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//             },
//             {
//                 test: /\.(jpg|JGP|png|eot|svg|ttf|woff|woff2|gif)$/,
//                 loader: 'url-loader',
//                 options: {
//                     limit: 4096, //4096字节以上生成文件，否则base64
//                     name: '[name].[ext]'
//                 }
//             },
//         ]
//     }
// }
