module.exports = {
    presets: [
        ...
    ],
    plugins: [
        ...,
        [
            "@stylexjs/babel-plugin",
            {
                dev: process.env.NODE_ENV === "development",
                test: process.env.NODE_ENV === "test",
                runtimeInjection: false,
                genConditionalClasses: true,
                treeshakeCompensation: true,
                unstable_moduleResolution: {
                    type: "commonJS",
                },
            },
        ],
    ],
};