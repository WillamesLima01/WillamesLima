import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Principal.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const Principal = () => {    
    return (
        <div className={styles.menu}>            
           <div className="dropdown"> {/* Substitua class por className aqui */}
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    P4
                </a>

                <ul className="dropdown-menu"> {/* Substitua class por className aqui */}
                    <li><Link className="dropdown-item" to="/inventory/listar-produtos">Inventário</Link></li> {/* Substitua class por className aqui */}
                    <li><a className="dropdown-item" href="#">Fardamento</a></li>  {/* Substitua class por className aqui */}
                </ul>
            </div>                 
                    
            <Link to="/veterinary/listar-equino">Seção Veterinária</Link>  
            <Link to="/setor-ecoterapia">Ecoterapia</Link>                                
        </div>
    )
}

export default Principal;
