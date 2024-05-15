import logo from './logo.png';
import './App.css';
import Navlink from './Navlink';
import Email from './Email';
import Password from './password';
function App() {

  return (
    <div className="App">
        <div>
            <div style={{padding:"72px 0 112px 0"}}>
                <div id='flex-container'>
                    <div className='originalLeft'>
                        <div>
                            <img src={logo}alt=''logo/>
                        </div>
                        <h2 style={{fontWeight:"600"}}>Facebook tanıdıklarınla iletişim kurmanı ve hayatında olup bitenleri paylaşmanı sağlar.</h2>
                    </div>
                    <div className='originalRight'>
                        <div style={{height:"456px"}}>
                            <div className='innerRight'>
                                <form>
                                    <div className='login'>
                                        <Email text="E-posta Ve Ya Telefon Numarası"/>
                                        <Password text="Password"/>
                                    </div> 
                                    <div>
                                        <Navlink
                                        className= "mavi" text= "Giriş Yap"/>
                                    </div>
                                    <div style={{marginTop:"16px"}}>
                                        <Navlink className= "tag" text= "Şifrenı mı unuttun?"/>
                                    </div>
                                    <div className='justLine'></div>
                                    <div className='main'>
                                        <Navlink className= "yeşil" text="Yeni Hesap Oluştur" />
                                    </div>
                                </form>
                            </div>
                                <div className='lastDiv'>
                                  Ünlü biri, marka veya işletme için 
                                  <Navlink className="mainTagStyle" text="Sayfa oluştur"/>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
  );
}

export default App;
