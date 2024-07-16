import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiReturnArrow } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import styles from './NavBar.module.css';

const NavBar = () => {
    const location = useLocation();
    const path = location.pathname;
    const isInventoryRoute = path.startsWith("/inventario");
    const isEcotherapyRoute = path.startsWith("/ecoterapia");      
    const retorno = location == '/ecoterapia/add-praticante'? '/ecoterapia' : '/ecoterapia/listar-praticantes';
    //alert(path)
    // Função para renderizar os links com base nas rotas
    const renderLinks = () => {
        if (isInventoryRoute) {
            return (
                <React.Fragment>
                    <Link to="/inventario/listar-produtos" className={styles.menuLink}>Material Patrimonial</Link>
                    <Link to="/inventario/listar-coleteBalistico" className={styles.menuLink}>Colete Balístico</Link>
                    <Link to="/inventario/listar-pistola" className={styles.menuLink}>Armamento Pistola</Link>
                    <Link to="/inventario/listar-armaLonga" className={styles.menuLink}>Arma Longa</Link>
                    <Link to="/"><FaHome title='Início' className={styles.csImg}/></Link>
                </React.Fragment>
            );
        } else if (isEcotherapyRoute) {
            return (
                <React.Fragment>                    
                    <Link to="/ecoterapia/listar-praticantes" className={styles.menuLink}>Listar Praticantes</Link>
                    <Link to="/ecoterapia/listar-profissionais" className={styles.menuLink}>Listar Profissionais</Link>
                    <Link to="/ecoterapia/relatorio" className={styles.menuLink}>Relatório</Link>  
                    <Link to="/ecoterapia/consultar-praticante" className={styles.menuLink}>Consultar Praticante</Link>
                    <Link to="/ecoterapia/consultar-profissional" className={styles.menuLink}>Consultar Profissional</Link>                    
                    <Link to="/"><FaHome title='Início' className={styles.csImg}/></Link>
                    <Link to={retorno}><GiReturnArrow  title='Retornar' className={styles.retornoImg}/></Link> 
                </React.Fragment>
            );
        } 
    };

    return (
        <nav className={styles.menu}>
            <div>
                {renderLinks()}
            </div>
        </nav>
    );
}

export default NavBar;
