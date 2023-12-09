import { Link } from "react-router-dom";
import  Header  from './Header'
function Webs () {
    return <div className="mainBox"><div className="container">
    <Header />
	    <div>
				<h2>P&aacute;ginas Especiales</h2>
				<ul>
					<li><a href="https://fedenoodt.github.io/Pagina_personal/vida/inicio.html" target="_blank">Pagina Oficial de Fedenoodt ►</a></li>
					<li><a href="https://fedenoodt.github.io/Pagina_personal/vida/nexoGrupote.html" target="_blank">Nexo Grupote ►</a></li>
						<li><a><Link to='/Media'>Volver◄◄</Link></a></li>
				</ul>
		</div>
    </div></div>
}

export default Webs