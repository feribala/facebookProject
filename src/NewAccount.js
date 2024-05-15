import logo from "./logo.png";
import Day from "./day";
import Month from './Month';
import Year from './Year';
import Navlink from "./Navlink"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import "./NewAccount.css";
const Kaydol = () => {
    return ( 
        <div className="container">
            <div  className="image">
                <img src={logo} alt=''logo/>
            </div>
            <div className="middleWhiteBox">
                <div>
                    <div className="bold"><b>Yeni Bir Hesap Oluştur</b></div>
                    <div style={{color:"#606770"}}>Hızlı ve kolaydır.</div>
                </div>
                <div className="justLine"></div>
                <div className="flexInput">
                    <input className="inputk" placeholder="Adın"></input>
                    <input className="inputk" placeholder="Soyadın"></input>
                </div>
                <input className="size" placeholder="Cep telefonu numarası ve ya e-posta"></input>
                <input className="size" placeholder="Yeni şifre"></input>
                <div className="fontAwesome">
                    Doğum Tarihi
                    <a><FontAwesomeIcon icon={faQuestionCircle}/></a>
                </div>
                <div className="takvim">
                    <Day/>
                    <Month/>
                    <Year/>
                </div>
                <div className="fontAwesome">
                    Cinsiyet
                    <a><FontAwesomeIcon icon={faQuestionCircle}/></a>
                </div>
                <div className="cinsiyet">
                    <div className="ortakStyleCinsiyet">
                        Kadın
                        <input type="radio"></input>
                    </div>
                    <div className="ortakStyleCinsiyet">
                        Erkek
                        <input type="radio"></input>
                    </div>
                    <div className="ortakStyleCinsiyet">
                        Özel
                        <input type="radio"></input>
                    </div>
                </div>
                <div className="metin">
                    Hizmetimizi kullanan kişiler senin iletişim bilgilerini Facebook'a yüklemiş olabilir.
                    <Navlink className="maviLink" text=" Daha fazla bilgi al. "/> <br></br>
                    <br></br>
                    Kaydol düğmesine tıklayarak, <Navlink className="maviLink" text=" Koşullarımızı"/> , 
                    <Navlink className="maviLink" text=" Gizlilik İlkemizi "/>  ve 
                    <Navlink className="maviLink" text=" Çerezler İlkemizi "/>  kabul etmiş olursun. Bizden SMS Bildirimleri alabilir ve bu bildirimleri istediğin zaman durdurabilirsin.
                </div>
                <Navlink className="kaydolYeşil" text="Kaydol"/>
                <br></br>
                <br></br>
                <Navlink  className='sonLink' text="Hesabın zaten var mı?"/>
                
            </div>
        </div>
     );
}
 
export default Kaydol;