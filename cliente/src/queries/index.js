import gql from "graphql-tag"; //  resalta el texto de la QUERy notation con colores

export const CLIENTES_QUERY = gql `{
    getClientes{
        id 
        nombre
        empresa
        apellido
    }
}`; 
