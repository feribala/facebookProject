import Divs from "./Divs"
const Component = (props) => {
    return ( 
        <div className="component">
            <img className="photos" src={props.src} alt=""/>
            <div className="text1">
                <b><Divs  text={props.text1}/></b>
            </div>
            <div className="text2">
                <Divs text= {props.text2} />
            </div>
            
            <button className="başla">başla</button>
        </div>
     );
}
 
export default Component;