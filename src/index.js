import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import 'bootstrap';
import './bootstrap/css/bootstrap.min.css';
import './CSSs/owl.theme.default.css';
import './CSSs/owl.theme.green.css';
import './CSSs/estilo.css';
import TelaInicial from './componentes/TelaInicial';
import Pessoas from './componentes/Pessoas';
import Documentos from './componentes/Documentos';
import Monografias from './componentes/Monografias';
import Artigos from './componentes/Artigos';
import Teste from './componentes/Teste';

import Login from './componentes/admin/Login';
import Admin from './componentes/admin//admin';
import TelaInicialAdmin from './componentes/admin/TelaInicialAdmin';
import EditarPessoas from './componentes/admin/EditarPessoas';
import EditarProjetosMonografias from './componentes/admin/EditarProjetosMonografias';
import EditarProjetosArtigos from './componentes/admin/EditarProjetosArtigos';
import LinksIntranet from './componentes/admin/LinksIntranet';


const Routes = (
	<div>
	  <Route path="/" component={App}>
	    <IndexRoute component={TelaInicial}/>
	    <Route path="/pessoas" component={Pessoas} />
	    <Route path="/documentos" component={Documentos} />
	    <Route path="/monografias" component={Monografias} />
	    <Route path="/artigos" component={Artigos} />
	    <Route path="/teste" component={Teste} />
	  </Route>

	  <Route path="/login" component={Login} />
	  <Route path="/admin" component={Admin}>
	  	<IndexRoute component={TelaInicialAdmin} />
	  	<Route path="/editar-pessoas" component={EditarPessoas} />
	  	<Route path="/editar-projetos-monografias" component={EditarProjetosMonografias} />
	  	<Route path="/editar-projetos-artigos" component={EditarProjetosArtigos} />
	  	<Route path="/editar-links" component={LinksIntranet} />
	  </Route>
  </div>
);

ReactDOM.render(
  <Router history={browserHistory} routes={Routes} onUpdate={() => window.scrollTo(0, 0)} />,
  document.getElementById('root')
);