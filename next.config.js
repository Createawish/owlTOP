module.exports = {
    images: {
        domains: ['courses-top.ru']
    },
    webpack(config) {
        config.module.rules.push({
            loader: '@svgr/webpack',
            test: /\.svg$/,
        });

        return config;
    },
};