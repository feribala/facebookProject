const Atags = (props) => {
    return ( 
        <a href="#" className={`mainTagStyle ${props.className}`}>{props.text}</a>
     );
}
 
export default Atags;