import logo from "./logo.png"
import "./ForgetPage.css"

const ForgetPage = () => {
    return ( 
        <>
            <div className="head">
                <navbar>
                    <ul className="nav-list">
                        <li id="image" className="nav-item">
                            <img className="image=nav=item" src={logo} alt=""logo></img>
                        </li>
                        <li className="nav-item">
                            <input className="input" type="text" placeholder="E-posta ve ya telefon"></input>
                        </li>
                        <li className="nav-item">
                            <input className="input" type="password" placeholder="password"></input>
                        </li>
                        <li className="nav-item">
                            <button className="bluebutton" type="submit">Giriş Yap</button>
                        </li>
                        <li className="nav-item">
                            <a href="#">Hesabını mı unuttun?</a>
                        </li>
                    </ul>
                </navbar>
            </div>
            <div className="body">
                <div className="white-div">
                    <h4>Hesabını Bul</h4>
                    <hr></hr>
                    <h6>Hesabını aramak için lütfen e-posta adresini veya cep telefonu numaranı gir.</h6>
                    <input className= "bodies-input" type="text" placeholder="E-posta adresı ve ya cep telefonu numarası" autoFocus='1'></input>
                    <hr></hr>
                    <div className="submits">
                        <button type="submit" className="iptal">iptal</button>
                        <button className="bluebutton"  type="submit">Ara</button>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer"> </div>
            </footer>
        </>
     );
}
 
export default ForgetPage;