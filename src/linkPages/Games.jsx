import { Link } from "react-router-dom";
import  Header  from './Header'
function Games () {
    return <div className="mainBox"><div className="container">
    <Header />
    <div>
				<h2>Juegos</h2>
					<ul>
						<li><a><Link to='/Media/Games/Minecraft'>Minecraft (Webs de informaci&oacute;n) ►</Link></a></li>
						<li><a href="https://flexboxfroggy.com/#es" target="_blank">FLEXBOX FROGGY ►</a></li>
						<li><a href="https://agar.io" target="_blank">Agar.io ►</a></li>
						<li><a href="https://www.geoguessr.com/trips" target="_blank">GeoGuessr ►</a></li>
						<li><a href="https://geotastic.net/home" target="_blank">Geotastic (Geoguessr gratuito recomendado de PolIsPol) ►</a></li>
						<li><a href="https://bair.es/pcu/rules" target="_blank">Normativa de GTAV bair.es Roleplay ►</a></li>
						<li><a><Link to='/Media'>Volver ◄◄◄</Link></a></li>
				</ul>
				<a className = "inicio"><Link to='/'><h2> Volver al inicio </h2></Link></a>
			</div>
    </div></div>
}

export default Games