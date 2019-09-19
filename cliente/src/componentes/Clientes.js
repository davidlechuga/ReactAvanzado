import React, {Fragment} from 'react';
// QUERY es para consultar base de datos
import {Query} from 'react-apollo'; 
// importar los CLIENTES_QUERYS 
import { CLIENTES_QUERY } from '../queries';
// importar LINK  de react-router-dom
import {Link} from 'react-router-dom'


const Contactos = () => {
    return (
      <Query query={CLIENTES_QUERY} pollInterval={500} >
        {({ loading, error, data, stopPolling, startPolling}) => {
          if (loading) {
            return (<div>Loading...</div>);
          }
          if (error) {
            console.error(error);
            return (<div>Error!</div>);
          }
          console.log(data.getClientes);

          return ( 
            <Fragment>
            <h3 className="text-center">  Listado de Clientes </h3>
            <ul className="list-group mt-4" > 
               {data.getClientes.map(item => {
                 return (
                  <li key={item.id} className="list-group-item">
                    <div  className="row justify-content-between align-items-center">
                        <div className="col-md-8 d-flex justify-content-between align-items-center"> 
                              {item.nombre} {item.apellido} - {item.empresa} 
                        </div>
                        <div className="col-md-4 d-flex justify-content-end">
                          <Link to={`/cliente/editar/${item.id}`} className="btn btn-success d-block d-md-inline-block" > 
                          Editar cliente
                          </Link>
                        </div>
                    </div>
                  </li>
                 )  
               })}
           </ul>
           </Fragment>
           )
        }}
      </Query>
    );
   };




export default Contactos;
