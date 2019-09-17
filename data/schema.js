import {resolvers} from './resolver';
import {impotSchema, importSchema} from 'graphql-import';
import {makeExecutableSchema} from 'graphql-tools';

const typeDefs = importSchema('data/schema.graphql')
 const schema = makeExecutableSchema({typeDefs, resolvers});

 export {schema};