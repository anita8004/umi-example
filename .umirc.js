
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      disableCSSModules: true, // 禁用css modules
      dva: {
        immer: true // 是否啟用dva-immer
      },
      dynamicImport: false,
      title: 'umi-example',
      dll: false,
      targets: {
        ie: 11, // 兼容瀏覽器最低版本
      },
      locale: {
        default: 'zh-TW' // i18n預設語系
      },
      routes: { // 若要手動配置路由，可在這裡添加
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
      links: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Permanent+Marker|Acme|Noto+Sans+TC|Bitter|Material+Icons' }
      ]
    }]
  ],
}
