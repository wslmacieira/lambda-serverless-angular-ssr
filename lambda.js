const serverlessExpress = require('@codegenie/serverless-express')
const { server } = require("./dist/my-app/serverless/main");

// const serverlessExpress = require('@codegenie/serverless-express')
// const { server } = require("../dist/my-app/serverless/main");

// exports.handler = serverlessExpress({ app: server })

let serverlessExpressInstance;

function setup() {
    serverlessExpressInstance = serverlessExpress({ app: server });
}

exports.handler = (event, context) => {
    // console.log(JSON.stringify({ event }));

    if (!serverlessExpressInstance) {
        console.log("Create ServerlessExpressInstance")
        setup();
    }

    return serverlessExpressInstance(event, context);
}