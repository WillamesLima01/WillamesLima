import axios from '../../api'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaPenClip } from 'react-icons/fa6';
import styles from './Inventory.module.css'

const HeritageMaterialList = () => {
    const[products, setProducts] = useState([]);    
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/products')
        .then(Response => {            
            setProducts(Response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    }, []);

    const fetchProducts = () => {
        axios.get('/products')
        .then(Response => {            
            setProducts(Response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error))
    }

    function deleteProduct(id){
        axios.delete(`products/${id}`)
        .then(() => {
            alert("Produto excluído com sucesso!")
            fetchProducts()
        })
    }

  return (
    <div className={styles.container} mt-5>     
        <h2 className="mb-4">Lista de Material Patrimonial</h2> 
        <button onClick= {() => navigate('/add-produto')} className="btn btn-primary mb-2">Adicionar Material</button>

        <table className={styles.table}>
            <thead>
                <tr>
                    <th>código</th>
                    <th>descrição</th>
                    <th>observação</th>
                    <th>seção</th>     
                    <th>ações</th>                  
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => (
                        <tr key={product.id}>
                            <td>{product.code}</td>
                            <td>{product.description}</td>
                            <td>{product.observation}</td>
                            <td>{product.sectionProd}</td>

                            <td className={styles.btAcao}>
                                <button title='editar' className="btn btn-sm btn-warning me-md-2" onClick={() => navigate(`/editar-produto/${product.id}`)}>
                                    <FaPenClip  className= {styles.btEditar}/>
                                </button>
                                <button title='excluir' onClick={() => deleteProduct(product.id)} className="btn btn-sm btn-danger me-md-2">
                                    <FaRegTrashAlt className= {styles.btExcluir}/>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default HeritageMaterialList