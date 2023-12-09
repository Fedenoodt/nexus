import { Link } from "react-router-dom";
import firebase from "../Services/Firebase";
import  FireNews  from '../PagesComplements/News'
import  { ClockConfiguration, DarReloj }  from '../Services/ClockConfiguration'
function Header () {
    return <div className="mainBox"><div className="container">
	<ClockConfiguration />
    
	    <div>
	        <div id="header">
	            <a><Link to='/'><img className="Emblema" src="https://fedenoodt.github.io/746732_Bravo/Emblema.png" /></Link></a>
	            <div className = "atajos">
	                <a><Link to='/Clock'><div><h2 id="hora"><DarReloj /></h2></div></Link></a>
	                <a className = "imgAtajos" href="https://chat.openai.com/" target="_blank"><img className="imgAtajos" src="https://fedenoodt.github.io/746732_Bravo/GPT.jpg" /></a>
	                <a className = "imgAtajos" href="https://github.com/Fedenoodt/serviciosWindows" target="_blank"><img className="imgAtajos" src="https://fedenoodt.github.io/746732_Bravo/clock.png" /></a> <br />
	                <a className = "imgAtajos" href="https://github.com/Fedenoodt/I-Black-Hawk-Security-Informatics-Anonymous-Incorporation" target="_blank"><img className="imgAtajos" src="https://fedenoodt.github.io/746732_Bravo/Shield-PNG-Photos.png" /></a>
	                <a className = "imgAtajos" href="https://github.com/Fedenoodt/fedenoodt.github.io/tree/gh-pages" target="_blank"><img className="imgAtajos" src="https://fedenoodt.github.io/746732_Bravo/768px-Settings_(iOS).png" /></a>
		 	<a className = "imgAtajos" href="https://github.com/Fedenoodt/fedenoodt.github.io/blob/gh-pages/Pagina_personal/PyC/Libreta_faltas.txt" target="_blank"><img className="imgAtajos" src="https://fedenoodt.github.io/Pagina_personal/notas.png" /></a>
	                <script src = "https://fedenoodt.github.io/shelving/javascript/reloj.js"></script>
	            </div>
	            <br />
	            <h1>Nexo estratégico</h1>
	            <br />
	            <h1>Black Hawk Security Informatics Anonymous Incorporation</h1>
	            <hr />	
	            <h2> <span>~ Versión 46.2 ~</span> | <span>~ Ahora potenciado con React JS ~</span> </h2>
	            <hr />	 
	                <ul>
						<FireNews />
	                </ul>
	        </div>
	    </div>
	    <hr />
	    <hr />
	    <hr />
    </div></div>
}

export default Header