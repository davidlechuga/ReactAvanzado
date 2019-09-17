import {buildSchema} from 'graphql';

const schema = buildSchema(`
type Cliente {
    id: ID
    nombre: String
    apellido: String
    empresa: String
    emails: [Email]
    edad: Int
    tipo: TipoCliente
    pedidos: [Pedido]
}

type Email {
    email: String
}

type Pedido {
    producto: String
    precio: Int
}
""" Asigna la Categoria del Cliente """
enum TipoCliente {
    BASICO 
    PREMIUM
}
type Query {
    getCliente(id:ID):Cliente
 }
input PedidoInput{
    producto: String
    precio: Int
}

input EmailInput {
    email: String
}
""" Campos para los clientes nuevos"""
input ClienteInput {
    id: ID
    nombre: String!
    apellido: String!
    empresa: String!
    emails : [EmailInput]
    edad: Int!
    tipo: TipoCliente!
    pedidos: [PedidoInput]
}

"""Mutations para crear nuevos clientes"""

type Mutation {
    """ Te permite crear nuevos clientes"""
    #Nombre del Resolver , Input con datos y valor que Retorna
crearCliente(input: ClienteInput) : Cliente
}
`);
export default schema;