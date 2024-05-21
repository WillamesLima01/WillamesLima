import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Principal.module.css'; 

const Principal = () => {
    return (
        <div className={styles.container}>           
            <div className={styles.menu}>                 
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-button']}>
                        Seção P4
                    </button>
                    <div className={styles['dropdown-content']}>
                        <Link className={styles['dropdown-item']} to="/inventory/listar-produtos">Inventário</Link>
                        <a className={styles['dropdown-item']} href="#">Fardamentos</a>
                        <a className={styles['dropdown-item']} href="#">Usuários</a>
                        <a className={styles['dropdown-item']} href="#">Relatório</a>
                    </div>
                </div>
                
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-button']}>
                        Seção Veterinária
                    </button>
                    <div className={styles['dropdown-content']}>
                        <Link className={styles['dropdown-item']} to="/veterinary/listar-equino">Equinos</Link>
                        <a className={styles['dropdown-item']} href="#">Usuários</a>
                        <a className={styles['dropdown-item']} href="#">Relatório</a>
                    </div>
                </div>
                
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-button']}>
                        Ecoterapia
                    </button>
                    <div className={styles['dropdown-content']}>
                        <Link className={styles['dropdown-item']} to="/ecotherapy">Praticantes</Link>
                        <a className={styles['dropdown-item']} href="#">Usuários</a>
                        <a className={styles['dropdown-item']} href="#">Relatório</a>
                    </div>
                </div>             
            </div>             
        </div>
    );
}

export default Principal
