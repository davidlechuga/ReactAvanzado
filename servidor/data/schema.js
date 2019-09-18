
import {importSchema} from 'graphql-import'; // importar el schema

const typeDefs = importSchema('data/schema.graphql') // importar el archivo 

 export {typeDefs}; //  exportar los DEFS
 