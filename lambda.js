const serverlessExpress = require('@codegenie/serverless-express')
const app = require("./dist/my-app/serverless/main");

exports.handler = serverlessExpress({ app: app.server })