import React from 'react';
import { Link } from 'react-router-dom';
//import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';
import { FaHome } from "react-icons/fa";

const NavBar = () => {
   // const location = useLocation();    
    //const retorno = location.pathname === "/add-equino"? "/listar-equino": "/";
   // const isRoot = location.pathname === "/";    
   //alert(location.pathname)

        return (
            <nav className={styles.menu}>
                <div>                    
                    <Link to="/inventory/listar-produtos" className={styles.menuLink}>Material Patrimonial</Link>   
                    <Link to="/inventory/listar-coleteBalistico" className={styles.menuLink}>Colete Balistico</Link>  
                    <Link to="/inventory/listar-pistola" className={styles.menuLink}>Armamento Pistola</Link>  
                    <Link to="/inventory/listar-armaLonga" className={styles.menuLink}>Arma Longa</Link> 
                    <Link to="/"><FaHome title='Início' className={styles.csImg}/></Link>                              
                </div>
            </nav>   
        );
}

export default NavBar;