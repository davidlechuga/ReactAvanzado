import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql'
//SCHEMA
import schema from './schema';
// RESOLVERS
import resolvers from './resolver'
const root = resolvers;

// express aplication
const app = express();

app.get('/', (req,res) => {
    res.send('Todo listo')
});

app.use('/graphql', graphqlHTTP({
    // que schema se esta utilizando
    schema,
    // el resolver se pasama como rootValue
    rootValue: root,
    //utilizar graphiql
    graphiql: true
}))

app.listen (8080, () => {
     console.log("listennig on port 8080")
})
