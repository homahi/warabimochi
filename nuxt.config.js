const parseArgs = require("minimist")
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
})

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  "3000"
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  "localhost"
module.exports = {
  srcDir: 'app',
  mode: 'spa',
  env: {
    baseUrl: process.env.BASE_URL ||
      `http://${host}:${port}`,
    firebaseProjectId: process.env.FIREBASE_PJ
  },
  head: {
    title: "わらびもち",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "勉強会の予定とか資料置き場になればいいなぁ"
      }
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#3B8070"
  },
  /*
   ** Build configuration
   */
  css: [],
  build: {},
  modules: [
    "@nuxtjs/axios",
    "~/modules/typescript.js",
    'nuxt-buefy'
  ],
  axios: {},
  plugins: ['~/plugins/firebase']
}