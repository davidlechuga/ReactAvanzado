import React, {Component, Fragment} from 'react';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EditarCliente from './componentes/EditarCliente';
import NuevoCliente from './componentes/NuevoCliente';  //  importamos aqui porque seran parte del router en el Switch

// importar componentes
import Header from './componentes/Header';
import Clientes from './componentes/Clientes';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError:({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

 class App extends Component {  //  usar el componente de REACT
  render(){
    return (
      <ApolloProvider client= {client}>
        <Router>
          <Fragment>
            <Header/>
              <div className="container">
                <Switch>
                  <Route exact path="/" component= {Clientes}/>  
                  <Route exact path="/cliente/editar/:id" component={EditarCliente} />
                  <Route exact path="/cliente/nuevo" component= {NuevoCliente} />
                </Switch> 
              </div>
          </Fragment>
        </Router> 
      </ApolloProvider>
    ); 
    };
}

export default App;
