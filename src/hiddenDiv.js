import Navlink from "./Navlink"
const HiddenDiv = () => {
    return ( 
        <div >
            <form className="hiddenDiv">
                <div><label>E-posta veya telefon</label></div>
                <div><input></input></div>
                <div><label>Şifre</label></div>
                <div><input></input></div>
                <div><a>Hesabını mı unuttun?</a></div>
                <div><button className="bluebutton">Giriş Yap</button></div>
                <div><div>Facebook'a katılmak istiyor musun?</div></div>
                <div><Navlink className="kaydol"text="Kaydol"/></div> 
            </form>
        </div>
     );
}
 
export default HiddenDiv;