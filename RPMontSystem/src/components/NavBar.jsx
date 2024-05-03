import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import styles from './NavBar.module.css';

const NavBar = () => {
    const location = useLocation();
    const path = location.pathname;
    const isInventoryRoute = path.startsWith("/inventory");
    const isEcotherapyRoute = path.startsWith("/ecotherapy");

    // Função para renderizar os links com base nas rotas
    const renderLinks = () => {
        if (isInventoryRoute) {
            return (
                <React.Fragment>
                    <Link to="/inventory/listar-produtos" className={styles.menuLink}>Material Patrimonial</Link>
                    <Link to="/inventory/listar-coleteBalistico" className={styles.menuLink}>Colete Balístico</Link>
                    <Link to="/inventory/listar-pistola" className={styles.menuLink}>Armamento Pistola</Link>
                    <Link to="/inventory/listar-armaLonga" className={styles.menuLink}>Arma Longa</Link>
                    <Link to="/"><FaHome title='Início' className={styles.csImg}/></Link>
                </React.Fragment>
            );
        } else if (isEcotherapyRoute) {
            return (
                <React.Fragment>                    
                    <Link to="/ecotherapy/listar-pacientes" className={styles.menuLink}>Listar Pacientes</Link>
                    <Link to="/ecotherapy/listar-colaboradores" className={styles.menuLink}>Listar Colaboradores</Link>
                    <Link to="/ecotherapy/relatorio" className={styles.menuLink}>Relatório</Link>
                    <Link to="/"><FaHome title='Início' className={styles.csImg}/></Link>
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
