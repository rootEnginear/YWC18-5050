const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProduction ? "/YWC18-5050" : "",
  assetPrefix: isProduction ? "/YWC18-5050" : "",
};
