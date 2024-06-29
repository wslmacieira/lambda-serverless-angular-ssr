const serverlessExpress = require('@codegenie/serverless-express')
const { server } = require("./dist/my-app/serverless/main");

let serverlessExpressInstance;

async function setup() {
    const app = await server();
    serverlessExpressInstance = serverlessExpress({ app });
}

export async function handler(event, context) {
    console.log(JSON.stringify({ event }));

    if (!serverlessExpressInstance) {
        await setup();
    }

    return serverlessExpressInstance(event, context);
}