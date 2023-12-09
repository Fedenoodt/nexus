import { Link } from "react-router-dom";
import  Header  from './Header'
function Twitch () {
    return <div className="mainBox"><div className="container">
    <Header />
    <div>
					<h2>Twitch</h2>
					<ul>
						<li><a href="https://www.twitch.tv/" target="_blank">Twitch ►</a></li><br />		
						<li><a href="https://www.twitch.tv/4fungamingg" target="_blank">4fungamingg ►</a></li>
						<li><a href="https://www.twitch.tv/abyls" target="_blank">Abyls ►</a></li>
						<li><a href="https://www.twitch.tv/auronplay" target="_blank">auronplay ►</a></li>
						<li><a href="https://www.twitch.tv/elperitaafk" target="_blank">eLPeritaAFK ►</a></li>			
						<li><a href="https://www.twitch.tv/elrichmc" target="_blank">ElRichMC ►</a></li>	
						<li><a href="https://www.twitch.tv/ibai" target="_blank">Ibai ►</a></li>	
						<li><a href="https://www.twitch.tv/nuvia_ouo" target="_blank">Nuvia_OuO ►</a></li>	
						<li><a href="https://www.twitch.tv/polispol1" target="_blank">polispol1 ►</a></li>
						<li><a href="https://www.twitch.tv/tanizen" target="_blank">Tanizen ►</a></li>		
						<li><a><Link to='/Media'>Volver◄◄</Link></a></li>
					</ul>
            <a className = "inicio"><h2><Link to='/'>◄◄◄◄◄ Volver al inicio ◄◄◄◄</Link></h2></a>
				</div>
			<footer>
				<hr />
				<p class = "tip"><b>TIP:</b> Recordar el uso de el "Programador de tareas de Windows" para hacer que un stream, o lista de Youtube se 
				encienda de manera automática.</p>
			</footer>
		
    </div></div>
}

export default Twitch