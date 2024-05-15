import Navlink from "./Navlink"
import Divs from "./Divs";
import Component from "./Component";
import HiddenDiv from "./hiddenDiv";
import photo1 from "./photo1.png";
import photo2 from "./photo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import "./NewPage.css"
import { useState } from "react";
const NewPage = () => {
    const [visible1, setVisible1] = useState(false)
 

   
    return ( 
        <div className="allpage">
        <div className="header">
            <navbar>
                <ul className="navList">
                    <li className="navItem">
                        <h1><b>facebook</b></h1>
                    </li>
                    <li className="navItem">
                        <Navlink className="kaydol"text="Kaydol"/>
                    </li>
                    <li className="navItem">
                        <div>
                            Facebook'a Katıl veya Giriş Yap 
                            <button className="icon" onClick={()=>setVisible1(!visible1)}>
                            <FontAwesomeIcon icon={faCaretDown} />
                            </button>
                        </div>
                    </li>
                </ul>
            </navbar>
            {visible1 ? <HiddenDiv/> : null}
        </div>
        <div className="body">
            <div className="textpart">
                <b><Divs className="text1" text="Bir Sayfa Oluştur"/></b>
                <Divs className="text2" text="İşletmeni, kendini veya ortak hedefini Facebook'taki küresel insan topluluğuna duyur. Başlamak için bir Sayfa kategorisi seç."/>    
            </div>
            <div className="componentBox">
                <div>
                    <Component text1="İşletme veya Marka"
                    text2="Ürünlerini ve hizmetlerini sergile, markanı öne çıkar ve Facebook'ta daha fazla müşteriye eriş."
                    src={photo1}
                    />
                </div>
                <div>
                    <Component text1= "Topluluk veya Tanınmış Kişi"
                    text2="Topluluğun, kuruluşun, ekibin, grubun veya kulübündeki insanlarla bağlantı kur ve paylaşımda bulun."
                    src={photo2}
                    />
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default NewPage;
