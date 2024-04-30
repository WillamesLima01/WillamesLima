import axios from '../../api';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Inventory.module.css'

const PistolGunForm = () => {
    const[gun, setGun] = useState({series: '', description: '', brand: '', caliber: '', charger: '', observation: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if(id) {
            axios.get(`/guns/${id}`)
            .then(Response => {
                setGun(Response.data)
            })
            .catch(error => console.error('Ocorreu erro ao buscar pistola: ', error));
        } else {
            setGun({series: '', description: '', brand: '', caliber: '', charger: '', observation: ''});
        }
    }, [id])

    function handleChange(event) {
        const { name, value } = event.target;
        setGun(prevState => ({...prevState, [name]:value}));
    }

    function handleSubmit(event){
        event.preventDefault()
        const method = id ? 'put' : 'post'
        const url = id ? `/guns/${id}` : '/guns'

        axios[method](url, gun)
        .then (() => {
            alert(`Dados ${id ? 'atualizados' : 'adicionados'} com sucesso!`)
            navigate("/listar-pistola")
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    }

  return (
    <div className={`${styles.container} mt-5`}>
        <h2>{id ? 'Editar' : 'Cadastrar'} pistola</h2>

        <form onSubmit={handleSubmit}>
            <div className={styles.formgroup}>
                <label htmlFor="series">Nº Série</label>
                <input type='text' className={styles.formControl} id="series" name="series" value={gun.series}
                    onChange={handleChange} required />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="description">Descrição</label>
                <input type='text' className={styles.formControl} id="description" name="description" value={gun.description}
                    onChange={handleChange} required />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="brand">Marca</label>
                <input type='text' className={styles.formControl} id="brand" name="brand" value={gun.brand}
                    onChange={handleChange} required />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="caliber">Calibre</label>
                <input type='text' className={styles.formControl} id="caliber" name="caliber" value={gun.caliber}
                    onChange={handleChange} required />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="charger">Qtde carregador</label>
                <input type='text' className={styles.formControl} id="charger" name="charger" value={gun.charger}
                    onChange={handleChange} required />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="observation">Observação</label>
                <input type='text' className={styles.formControl} id="observation" name="observation" value={gun.observation}
                    onChange={handleChange} required />
            </div>

            
            <button type='submit' className='btn btn-success'>{id ? 'Atualizar' : 'Adicionar'}</button>
        </form>
        
    </div>
  )
}

export default PistolGunForm