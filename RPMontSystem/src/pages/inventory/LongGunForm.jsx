import axios from '../../api';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Inventory.module.css'

const LongGunForm = () => {
    const[longGun, setlongGun] = useState({series: '', description: '', brand: '', caliber: '', charger: '', observation: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if(id) {
            axios.get(`/longGuns/${id}`)
            .then(Response => {
                setlongGun(Response.data)
            })
            .catch(error => console.error("Ocorreu um erro: ", error));
        } else {
            setlongGun({series: '', description: '', brand: '', caliber: '', charger: '', observation: ''});
        }        
    }, [id]);

    function handleChange(event) {
        const { name, value } = event.target;
        setlongGun(prevState => ({...prevState, [name]: value}));
    }

    function handleSubmit(event) {
        event.preventDefault()
        const method = id ? 'put' : 'post'
        const url = id ? `/longGuns/${id}` : '/longGuns'

        axios[method](url, longGun)
        .then(() => {
            alert(`dados ${id ? 'atualizados' : 'Cadastrados'} com sucesso!`)
            navigate("/listar-armaLonga")
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    }

  return (
    <div className={`${styles.container} mt-5`}>
        <h2>{id ? 'Editar' : 'Cadastrar'} Arma Longa</h2>

        <form onSubmit={handleSubmit}>
            <div className={styles.formgroup}>
                <label htmlFor="series">Nº Série</label>
                <input type='text' className={styles.formControl} id="series" name="series" value={longGun.series}
                    onChange={handleChange} required />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="description">Descrição</label>
                <input type='text' className={styles.formControl} id="description" name="description" value={longGun.description}
                    onChange={handleChange} required />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="brand">Marca</label>
                <input type='text' className={styles.formControl} id="brand" name="brand" value={longGun.brand}
                    onChange={handleChange} required />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="caliber">Calibre</label>
                <input type='text' className={styles.formControl} id="caliber" name="caliber" value={longGun.caliber}
                    onChange={handleChange} required />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="charger">Qtde carregador</label>
                <input type='text' className={styles.formControl} id="charger" name="charger" value={longGun.charger}
                    onChange={handleChange} required />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="observation">Observação</label>
                <input type='text' className={styles.formControl} id="observation" name="observation" value={longGun.observation}
                    onChange={handleChange} required />
            </div>

            <button type='submit' className='btn btn-success'>{id ? 'Atualizar' : 'Adicionar'}</button>
        </form>
        
    </div>
  )
}

export default LongGunForm