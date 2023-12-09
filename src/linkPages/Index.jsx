import { Link } from "react-router-dom";
import  Header  from './Header'
function Index () {
    return <div className="mainBox"><div className="container">
    <Header />
    <div>
			<h2>Accesos de emergencia</h2>
			<ul>
			    <li><a href="https://plataforma.ha.dev/enrollments" target="_blank">Hack Academy ►</a></li>
			    <li><a href="https://cursos.utnba.centrodeelearning.com/my/courses.php" target="_blank">UTN - Aula Virtual ►</a></li>
			    <li><a href="https://sigead.utnba.centrodeelearning.com//personas/panel" target="_blank">UTN - Centro de e-learning ►</a></li>
			    <li><a href="https://github.com/Fedenoodt/learningReact" target="_blank">UTN - learningReact ►</a></li>
			</ul>
			<hr />		
			<ul>
			    <li className="listaHorizontal"><a href="https://mail.google.com/mail/u/1/#inbox" target="_blank">Gmail ►</a></li>
			    <li className="listaHorizontal"><a href="https://github.com/" target="_blank">GitHub ►</a></li>
			    <li className="listaHorizontal"><a href="https://github.com/Fedenoodt/Trabajo" target="_blank">Trabajo ►</a></li>
			    <li className="listaHorizontal"><a href="https://drive.google.com/drive/u/1/my-drive" target="_blank">Drive ►</a></li>
			    <li className="listaHorizontal"><a href="https://app.diagrams.net/" target="_blank">Diagramas ►</a></li>
			    <li className="listaHorizontal"><a href="https://fedenoodt.github.io/Pagina_personal/Horario_de_Rutina.pdf" target="_blank">Horario ►</a></li>
			    <li className="listaHorizontal"><a href="https://fedenoodt.github.io/Pagina_personal/Esquema_Anual.png" target="_blank">Esquema Anual ►</a></li>
			    <li className="listaHorizontal"><a href="https://www.youtube.com/" target="_blank">Youtube ►</a></li>
			    <li className="listaHorizontal"><a href="https://www.smn.gob.ar/" target="_blank">Clima ►</a></li>
			    <li className="listaHorizontal"><a><Link to='/Tools'>M&aacute;s herramientas... ►</ Link></a></li>
			</ul>
			<hr />
			<h2>Links de acceso</h2>
			<ul>
			    <li><a href="https://feedly.com/i/my" target="_blank">Noticias ►</a></li>
			    <li><a><Link to='/Webs'>P&aacute;ginas Especiales ►</ Link></a></li>
			    <li><a href="https://www.youtube.com/playlist?list=PLOJvby8Q_tfGshu5XTZ23OWK8cRft5F8m" target="_blank">Jedi Order Playlist ►</a></li>
			    <li><a><Link to='/Media'>Medios audiovisuales ►</ Link></a></li>
			    <li><a><Link to='/Comms'>Comunicaciones ►</ Link></a></li>
			    <li><a><Link to='/SocialMedia'>Redes Sociales ►</ Link></a></li>
			</ul>
			<br />
	
		    </div>

    </div></div>
}

export default Index