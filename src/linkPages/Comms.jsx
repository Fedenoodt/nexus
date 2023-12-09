import { Link } from "react-router-dom";
import  Header  from './Header'
function Comms () {
    return <div className="mainBox"><div className="container">
    <Header />
    <div>
    <h2>Comunicaciones</h2>
    <ul>
        <li><a href="https://web.telegram.org/#/im" target="_blank">Telegram ►</a></li>
        <li><a href="https://web.whatsapp.com/" target="_blank">Whatsapp ►</a></li>
        <li><a> <Link to='/'>Volver ◄◄◄</Link></a></li>
    </ul>
</div>

    </div></div>
}

export default Comms