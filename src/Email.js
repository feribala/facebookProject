const Email = (props) => {
    return ( 
       <div>
        <input className={`mainEmailStyle ${props.className}`} type="text" placeholder={props.text}></input>
       </div>
     );
}
 
export default Email;