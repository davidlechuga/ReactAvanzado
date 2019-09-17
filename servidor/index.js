import express from 'express';
//graphql
import {ApolloServer} from 'apollo-server-express'

//tyDEFS
import {typeDefs} from './data/schema' ; //  importar  los DEFS
import {resolvers} from './data/resolver';

const app = express ();
const server = new ApolloServer({typeDefs,resolvers});

server.applyMiddleware({app});

app.listen({port:4000}, () => 
    console.log(`El servidor esta corriendo en http://localhost:4000${server.graphqlPath}`
))
