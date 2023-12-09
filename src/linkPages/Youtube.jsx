import { Link } from "react-router-dom";
import  Header  from './Header'
function Youtube () {
    return <div className="mainBox"><div className="container">
    <Header />
    <div>
					<h2>Youtube</h2>
					<ul>
						<li><a href="https://www.youtube.com/feed/library" target="_blank">Biblioteca Youtube</a></li><br />
						<li><a href="https://myactivity.google.com/u/1/product/youtube?hl=es-419&utm_medium=web&utm_source=youtube" target="_blank">Historial por reloj Youtube</a></li><br />
						<li><a href="https://www.youtube.com/user/xFaRgAnx" target="_blank">xFaRgAnx YT ►</a></li>
						<li><a href="https://www.youtube.com/@TheBraxXter" target="_blank">BraxXter ►</a></li>
						<li><a href="https://www.youtube.com/user/ElRichMC" target="_blank">ElRichMC - Minecraft & Gaming a otro nivel ►</a></li>
						<li><a href="https://www.youtube.com/user/HiperPiece" target="_blank">Hyper ►</a></li>
						<li><a href="https://www.youtube.com/channel/UCSJXasOBzUlztNbpkRDA53w" target="_blank">La Sombra del Imperio ►</a></li>
						<li><a href="https://www.youtube.com/channel/UCFR2oaNj02WnXkOgLH0iqOA" target="_blank">Auron ►</a></li>
						<li><a href="https://www.youtube.com/channel/UCaY_-ksFSQtTGk0y1HA_3YQ" target="_blank">Ibai Llanos ►</a></li>
						<li><a href="https://www.youtube.com/@TheWildProject" target="_blank">The Wild Project ►</a></li>
						<li><a href="https://www.youtube.com/user/AuronPlay" target="_blank">AuronPlay ►</a></li>
						<li><a href="https://www.youtube.com/user/SoyFarfadox" target="_blank">Farfadox</a></li>
						<li><a href="https://www.youtube.com/c/RaiCanGTA" target="_blank">Rai Can ►</a></li>
						<li><a href="https://www.youtube.com/user/danilirri" target="_blank">CodigoRojoARG ►</a></li>
						<li><a><Link to='/Media'>Volver◄◄</Link></a></li>
					</ul>
                    <a className = "inicio"><h2><Link to='/'>◄◄◄◄◄ Volver al inicio ◄◄◄◄</Link></h2></a>
				</div>
			<footer>
				<hr />
				<p class = "tip"><b>TIP:</b> Recordar el uso de "Youtube NonStop" para el cese de publicidad, y "SmartVideo For Youtube" para 
				nivelar el mínimo gráfico automático de los videos Youtube. Ambas como extenciones de Chrome y Firefox.</p>
			</footer>
		
    </div></div>
}

export default Youtube