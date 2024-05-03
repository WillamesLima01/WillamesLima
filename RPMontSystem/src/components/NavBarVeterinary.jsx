import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { GiCavalry, GiReturnArrow } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import styles from './NavBar.module.css';

const NavBarVeterinary = () => {

    const location = useLocation();    
    const retorno = location.pathname === "/veterinary/add-equino"? "/veterinary/listar-equino": "/";
    // Definindo a rota de retorno estática
    //const retorno = "/"; // Defina a rota desejada aqui

    return (
        <nav className={styles.menuVt}>
            <div className={styles.NavBarVt}>
                <GiCavalry className={styles.cvImg} />                            
                <Link to="/"><FaHome title='Início' className={styles.csImg}/></Link>   
                <Link to={retorno}><GiReturnArrow  title='Retornar' className={styles.retornoImg}/></Link>               
            </div>
        </nav>
    );   
}

export default NavBarVeterinary;
