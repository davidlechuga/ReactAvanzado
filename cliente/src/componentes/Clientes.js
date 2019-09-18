import React from 'react';
// QUERY es para consultar base de datos
import {Query} from 'react-apollo'; 
// importar los CLIENTES_QUERYS 
import { CLIENTES_QUERY } from '../queries';

const Contactos = () => {
    return (
      <Query query={CLIENTES_QUERY}>
        {({ loading, error, data}) => {
          if (loading) {
            return (<div>Loading...</div>);
          }
          if (error) {
            console.error(error);
            return (<div>Error!</div>);
          }
          console.log(data.getClientes);

          return ( 
            <React.Fragment>
            <h3 className="text-center">  Listado de Clientes </h3>
            <ul className="list-group" > 
               {data.getClientes.map(item => {
                 return (
                  <li key={item.id} className="list-group-item">
                  <div  className="row justify-content-between align-items-center">
                      <div className="col-md-8 d-flex justify-content-between align-items-center"> 
                           {item.nombre} {item.apellido}   
                      </div>
                      <div className="col-md-4 d-flex justify-content-end">
                        <a className="btn btn-success d-block d-md-inline-block" href="{#}">
                          Editar cliente
                        </a>
                      </div>
                  </div>
                  </li>
                 )  
               })}
           </ul>
           </React.Fragment>
           )
        }}
      </Query>
    );
   };




export default Contactos;
