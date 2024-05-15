import Navlink from './Navlink';
import Email from './Email';
import Password from './password';
import './App.css';
import './LoginPage.css';
import logo from "./logo.png";

const Giriş = () => {
    return ( 
        <>
            <div className="container">
                <div  className="image">
                    <img src={logo} alt=''logo/>
                </div>
                <div className="whiteBox">
                    <div className="title">
                        <span>Facebook'a Giriş Yap</span>
                    </div>
                    <div>
                        <form>
                            <div className="redBox" >
                                <b>Giriş Bilgileri Yanlış</b>
                                <br></br>
                                <span>Geçersiz kullanıcı adı veya şifre</span>
                            </div>
                            <div className="login">
                                <Email className="width" text="E-posta Ve Ya Telefon Numarası"/>
                                <Password className="width" text="Password"/>
                            </div>

                            <Navlink className= "mavi" text = "Giriş Yap"/>

                            <Navlink className= "tag" text= "Şifrenı mı unuttun?"/>
                        </form>
                    </div>
                </div>
            </div>
            <footer>
                <div className='footer'></div>
            </footer>
        </>
     );
}
 
export default Giriş;