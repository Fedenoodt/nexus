import { Link } from "react-router-dom";
import  Header  from './Header'
function Media () {
    return <div className="mainBox"><div className="container">
        <Header />
        <div>
            <h2>Medios audiovisuales</h2>
                <ul>
                    <li><a><Link to='/Media/Radio'>Radio ►</Link></a></li>
                    <li><a><Link to='/Media/Twitch'>Twitch ►</Link></a></li>
                    <li><a><Link to='/Youtube'>Youtube ►</Link></a></li>
                    <li><a><Link to='/Media/Streaming'>Streaming ►</Link></a></li>
                    <li><a><Link to='/Media/Games'>Juegos ►</Link></a></li>
                    <li><a><Link to='/'>Volver ◄◄◄</Link></a></li>
                </ul>
        </div>
    </div></div>
}

export default Media