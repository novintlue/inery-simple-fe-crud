const webpack = require('webpack'); 

module.exports = function override(config) { 
		const fallback = config.resolve.fallback || {}; 
		Object.assign(fallback, { 
            https:require.resolve("https-browserify"),
            util:require.resolve("node-util"),
            crypto: require.resolve("crypto-browserify"),
            http: require.resolve("stream-http"),
            buffer: require.resolve("buffer"),
            url:require.resolve("url"),
            fs:require.resolve("browser-fs-access"),
            stream:require.resolve("stream-browserify")
    });
    config.resolve.fallback = fallback; 
    config.plugins = (config.plugins || []).concat([ 
        new webpack.ProvidePlugin({ 
         process: 'process/browser', 
       Buffer: ['buffer', 'Buffer']
     }),
     new webpack.DefinePlugin({
      'process.env.PRIVATE_KEY': JSON.stringify(process.env.PRIVATE_KEY.toString()),
      'process.env.URL': JSON.stringify(process.env.URL.toString())
     })
    ]) 
    return config;
}
