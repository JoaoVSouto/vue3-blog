module.exports = {
  lintOnSave: false,

  chainWebpack(config) {
    config.plugin('html').tap((args) => {
      const [firstArgs] = args;

      firstArgs.title = "Prison Eloi's Blog";

      return args;
    });
  },
};
