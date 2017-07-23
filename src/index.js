import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import 'bootstrap';
import './bootstrap/css/bootstrap.min.css';
import './CSSs/estilo.css';
import TelaInicial from './componentes/TelaInicial';
import Pessoas from './componentes/Pessoas';
import Documentos from './componentes/Documentos';
import Teste from './componentes/Teste';

import Admin from './componentes/admin//admin';
import TelaInicialAdmin from './componentes/admin/TelaInicialAdmin';
import EditarPessoas from './componentes/admin/EditarPessoas';


const Routes = (
	<div>
	  <Route path="/" component={App}>
	    <IndexRoute component={TelaInicial}/>
	    <Route path="/pessoas" component={Pessoas} />
	    <Route path="/documentos" component={Documentos} />
	    <Route path="/teste" component={Teste} />
	  </Route>

	  <Route path="/admin" component={Admin}>
	  	<IndexRoute component={TelaInicialAdmin} />
	  	<Route path="/editar-pessoas" component={EditarPessoas} />
	  </Route>
  </div>
);

ReactDOM.render(
  <Router history={browserHistory} routes={Routes} onUpdate={() => window.scrollTo(0, 0)} />,
  document.getElementById('root')
);