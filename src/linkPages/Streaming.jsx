import { Link } from "react-router-dom";
import  Header  from './Header'
function Streaming () {
    return <div className="mainBox"><div className="container">
    <Header />
    <div>
        <h2>Streaming</h2>
        <ul>
            <li><a href="https://www.primevideo.com/?ref_=dvm_pds_amz_ar_dc_s_g_mkw_sURBO2uG4-dc_pcrid_231825120471&mrntrk=slid__pgrid_42306243048_pgeo_1000073_x__ptid_kwd-45697133742" target="_blank">Amazon Prime Video ►</a></li>
            <li><a href="https://web.flow.com.ar/guia-de-tv?epg" target="_blank">Cablevision Flow ►</a></li>
            <li><a href="https://www.disneyplus.com/es-419/home" target="_blank">Disney+ ►</a></li>
            <li><a href="https://play.hbomax.com/" target="_blank">HBO Max ►</a></li>
            <li><a href="https://kick.com/" target="_blank">Kick ►</a></li>
            <li><a href="https://www.netflix.com/browse" target="_blank">Netflix ►</a></li>
            <li><a href="https://www.netflix.com/browse/genre/75436?bc=34399&so=yr" target="_blank">Netflix - Policiales ordenadas por a&ntilde;o ►</a></li>
            <li><a href="https://www.starplus.com/es-419/home" target="_blank">Star+ ►</a></li>

            <li><a><Link to='/Media'>Volver ◄◄◄</Link></a></li>
        </ul>
            <a className = "inicio"><h2><Link to='/'>◄◄◄◄◄ Volver al inicio ◄◄◄◄</Link></h2></a>
    </div>
    <footer>
        <hr />
        <p className = "tip"><b>TIP:</b> Recordar con respecto a Flow, que hay que usar directamente este acceso, e ingresar directo a "Guía de TV". 
            Flow es muy inestable como plataforma.</p>
    </footer>
		
    </div></div>
}

export default Streaming