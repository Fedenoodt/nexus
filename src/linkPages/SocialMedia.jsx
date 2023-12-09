import { Link } from "react-router-dom";
import  Header  from './Header'
function SocialMedia () {
    return <div className="mainBox"><div className="container">
        <Header />
        <div>
            <h2>Redes Sociales</h2>
            <ul>
                <li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html"><a href="https://www.linkedin.com/in/federico-noodt-molins-182a30134/" target="_blank">LinkedIn Fedenoodt</a> ►</a></li>
                <li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html"><a href="https://www.facebook.com/" target="_blank">Facebook</a> ►</a></li>
                <li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html"><a href="https://www.instagram.com/?hl=es-la" target="_blank">Instagram</a> ►</a></li>
                <li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html"><a href="https://twitter.com/home" target="_blank">Twitter</a> ►</a></li>
                <li><a href="https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html"><a href="https://www.tiktok.com/foryou" target="_blank">TikTok</a> ►</a></li>
                <li><a><Link to='/'>Volver ◄◄◄</Link></a></li>
            </ul>
        </div>
    </div></div>
}

export default SocialMedia