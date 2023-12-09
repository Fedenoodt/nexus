import { Link } from "react-router-dom";
import  Header  from './Header'
function Obsolet () {
    return <div className="mainBox"><div className="container">
        <Header />
        <div>
            <h2>Accesos Obsoletos</h2>
            <ul>
                <li><a href="https://plataforma.coderhouse.com/cursos" target="_blank">Coder House - Plataforma E-Learning ►</a></li>
                <li><a href="https://pdb.redarg.ar/home" target="_blank">Profesorado Don Bosco ►</a></li>
                <li><a href="https://github.com/Fedenoodt/JavaScript/tree/main" target="_blank">GitHub - JavaScript ►</a></li>
                <li><a href="https://fedenoodt.github.io/Pagina_personal/javascript-es.7.pdf" target="_blank">Manual-Informatica.com - JavaScript ►</a></li>
                <li><a href="https://www.youtube.com/watch?v=z95mZVUcJ-E&t=2756s" target="_blank">Soy Dalto - JavaScript ►</a></li>
                
                
                <li><a><Link to='/'>Volver ◄◄◄</Link></a></li>
            </ul>
        </div>
    </div></div>
}

export default Obsolet