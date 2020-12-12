module.exports = {
  lintOnSave: false,

  chainWebpack(config) {
    config.plugin('html').tap((args) => {
      const [firstArgs] = args;

      firstArgs.title = "Prison Mike's Blog";

      return args;
    });
  },
};
