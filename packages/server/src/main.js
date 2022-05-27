import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.start().then(() => {
    server.applyMiddleware({
        app,
        cors: {
            origin: '*',
        },
        bodyParserConfig: true,
    })
});


const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const HOSTNAME =
    // process.env.HOSTNAME || 
    '127.0.0.1';

app.listen(PORT, HOSTNAME, () => {
    console.log(`server is listening at http://${HOSTNAME}:${PORT}`)
});