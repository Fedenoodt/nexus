import { Link } from "react-router-dom";
import  Header  from './Header'
import  { ClockConfiguration, DarReloj }  from '../Services/ClockConfiguration'
function Clock () {
    <ClockConfiguration />
    return <div>
        <center>
	    <a><Link to='/'><img className="Emblema" src="https://fedenoodt.github.io/746732_Bravo/Emblema.png" /></Link></a>
        <h2 className = "megaReloj" id="hora"><DarReloj /></h2>
        <a><Link to='/'><h2> Volver </h2></Link></a>
        </center>
    </div>
}

export default Clock