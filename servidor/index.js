import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql'
//SCHEMA
import {schema} from './data/schema';


// express aplication
const app = express();

app.get('/', (req,res) => {
    res.send('Todo listo')
});

app.use('/graphql', graphqlHTTP({
    // que schema se esta utilizando
    schema,
   
    //utilizar graphiql
    graphiql: true
}))

app.listen (8080, () => {
     console.log("listennig on port 8080")
})
