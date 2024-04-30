import axios from '../../api'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './Inventory.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const HeritageMaterialForm = () => {
    const [product, setProduct] = useState({ code: '', description: '', observation: '', sectionProd: '' })
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            axios.get(`/products/${id}`)
                .then(response => {
                    setProduct(response.data)
                })
                .catch(error => console.error('Erro ao buscar Produto', error))
        } else {
            setProduct({ code: '', description: '', observation: '', sectionProd: '' })
        }
    }, [id])

    function handleChange(event) {
        const { name, value } = event.target
        setProduct(prevState => ({ ...prevState, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        const method = id ? 'put' : 'post'
        const url = id ? `/products/${id}` : '/products'

        axios[method](url, product)
            .then(() => {
                alert(`Produto ${id ? 'atualizado' : 'adicionado'} com sucesso!`)
                navigate("/inventory/listar-produtos")
            })
            .catch(error => console.error("Ocorreu um erro: ", error))
    }

    return (
        <div className={`${styles.container} mt-5`}>
            <h2>{id ? 'Editar' : 'Adicionar'} Material</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formgroup}>
                    <label htmlFor="code">Código</label>
                    <input type='text' className={styles.formControl} id="code" name="code" value={product.code}
                        onChange={handleChange} required />
                </div>
                <div className={styles.formgroup}>
                    <label htmlFor="description">Descrição</label>
                    <input type='text' className={styles.formControl} id="description" name="description" value={product.description}
                        onChange={handleChange} required />
                </div>
                <div className={styles.formgroup}>
                    <label htmlFor="observation">Observação</label>
                    <input type='text' className={styles.formControl} id="observation" name="observation" value={product.observation}
                        onChange={handleChange} required />
                </div>
                <div className={styles.formgroup}>
                    <label htmlFor="sectionProd">Seção</label>
                    <input type='text' className={styles.formControl} id="sectionProd" name="sectionProd" value={product.sectionProd}
                        onChange={handleChange} required />
                </div>

                <button type='submit' className="btn btn-success">{id ? 'Atualizar' : 'Adicionar'}</button>
            </form>
        </div>
    )
}

export default HeritageMaterialForm
