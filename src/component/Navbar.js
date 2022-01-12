import React,{useState} from "react";
import "./navbar.css";

const Navbar=()=>{
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return(
        <>
           <nav className={colorChange ?"navbar navbar-expand-md  navbar-dark desN":"navbar navbar-expand-md  navbar-dark "}>

            <a className="navbar-brand" href="#">Navbar</a>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-2">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item mr-2">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item mr-2">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item mr-2">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item mr-2">
                    <a className="nav-link" href="#">Link</a>
                </li>
                </ul>
            </div>
</nav>

   
    
        </>
    )

}
export default Navbar;