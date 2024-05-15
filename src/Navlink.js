import { NavLink } from "react-router-dom";
const Button = (props) => {
    return ( 
      <NavLink to={props.text} className={`mainLinkStyle ${props.className}`}>{props.text}</NavLink>
     );
}

export default Button;