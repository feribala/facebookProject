const Password = (props) => {
    return ( 
        <input className={`mainPasswordStyle ${props.className}`} type="password" placeholder={props.text}></input>
     );
}
 
export default Password;