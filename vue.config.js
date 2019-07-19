// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': { // 匹配所有以 '/api'开头的请求路径
//         target: 'http://localhost:5000', // 代理目标的基础路径
//         changeOrigin: true, // 支持跨域
//         pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
//           '^/api': ''
//         }
//       }
//     }
//   }
// }
module.exports = {
  css: {
      loaderOptions: {
        postcss: {
          // 这是rem适配的配置  注意： remUnit在这里要根据lib-flexible的规则来配制，如果您的设计稿是750px的，用75就刚刚好。
          plugins: [
            require("postcss-px2rem")({
              remUnit: 75
            })
          ]
      }
    }
  }
}