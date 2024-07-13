import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { makeExecutableSchema } from '@graphql-tools/schema';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from '../graphql';



const  app =express();

// This `app` is the returned value from `express()`.
const httpServer = createServer(app);

// ...
const server = new ApolloServer({
  schema,
});



