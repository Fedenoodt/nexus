import { Link } from "react-router-dom";
import  Header  from './Header'
function Minecraft () {
    return <div className="mainBox"><div className="container"><Link to=''></Link>
    <Header />
    <div>
	<h2>Minecrafteo</h2>
		<ul>
			<li><a href="https://docs.google.com/document/d/1b4P51y2acdchT11xjx-eywD-BodEp82eL3X0F1yKB3I/edit" target="_blank">Salvamundos ►</a></li>
			<hr />
			<li><a href="https://fedenoodt.github.io/Pagina_personal/ocio/La_Fortaleza/IPLaFortaleza.html" target="_blank">La Fortaleza ►</a></li>
			<li><a href="https://fedenoodt.github.io/Pagina_personal/ocio/odtu.html" target="_blank">Organización Dispar de Tierras Unidas ►</a></li>
            <li><a><Link to='/Media/Games'>Volver ◄◄◄</Link></a></li>
        </ul>
        <a className = "inicio"><h2><Link to='/'>◄◄◄◄◄ Volver al inicio ◄◄◄◄</Link></h2></a>
    </div>
    </div></div>
}

export default Minecraft