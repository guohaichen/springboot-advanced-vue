module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    }
}
