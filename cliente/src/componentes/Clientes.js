import React from 'react';
// QUERY es para consultar base de datos
import {Query} from 'react-apollo'; 
// importar los CLIENTES_QUERYS 
import { CLIENTES_QUERY } from '../queries';




const Contactos = ()  => {

<Query query={CLIENTES_QUERY}> 
    {({loading, error, data})=> { 
        if (loading) return "cargando...";
        if (error) return `Error! ${error.message}`;
        console.log(data.getClientes);

        return (
            <fragment>
             <h3 className="text-center">  Listado de Clientes </h3>
             <ul className="list-group" > 
                {data.getClientes.map(item => {
                    <li key={item.id} className="list-group-item">
                        <div  className="row justify-content-between align-items-center">
                            <div className="col-md-8 d-flex justify-content-between align-items-center"> 
                                 {item.nombre} {item.apellido}   
                            </div>
                        </div>
                    </li>
                })}
            </ul>
            </fragment>
        )
    }}
</Query>
}
export default Contactos;
