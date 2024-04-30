import React, { useEffect, useState } from 'react';
import imgChanfro from '../../assets/imgChanfro.jpg';
import imgLadoDireito from '../../assets/imgLadoDireito.jpg';
import imgLadoEsquerdo from '../../assets/imgLadoEsquerdo.jpg';
import resenhaDescritiva from '../../assets/resenhaDescritiva.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Veterinary.module.css';
import axios from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';

const EquineForm = () => {
    const [equine, setEquine] = useState({ name: '', birthDate: '', coat: '', inclusion: '', record: '', local: '', sex: '',
                                            imagem1: '', imagem2: '', imagem3: '', imagem4: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if(id) {
            axios.get(`/equines/${id}`)
            .then(response => {
                setEquine(response.data);
            })
            .catch(error => console.error("Erro ao buscar dados equino", error));
        } else {
            setEquine({ name: '', birthDate: '', coat: '', inclusion: '', record: '', local: '', sex: '',
                        imagem1: '', imagem2: '', imagem3: '', imagem4: '' });
        }       
    }, [id]);

    function handleChange(event) {
        const { name, value } = event.target
        setEquine(prevState => ({...prevState, [name] : value}))
    }

    function handleSubmit(event) {
        event.preventDefault();
        const method = id ? 'put' : 'post';
        const url = id ? `/equines/${id}` : '/equines';

        axios[method](url, equine)
        .then(() => {
            alert(`Dados ${id ? 'atualizado' : 'adicionado'} com sucesso!`);
            navigate('/listar-equino');
        })
        .catch(error => (console.error("Ocorreu um erro: ", error)))
    }

    function handleImageClick(event) {
        const imgName = event.target.name;

        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';

        input.onchange = function (e) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = function (e) {
                setEquine(prevState => ({ ...prevState, [imgName]: e.target.result }));
            };

            reader.readAsDataURL(file);
        };

        input.click();
    }
   
        
  return (
    <>
    <form className={`${styles.container} mt-5`} onSubmit={handleSubmit}>
        
        <h1 className={styles.cabeca}>Cadastro de Equino</h1>

        <section className={styles.etapa1}>
            <div className={styles.formgroup}>
                <label htmlFor="name">Nome</label>
                <input type='text' className={styles.formControl} id="name" name="name" value={equine.name} onChange={handleChange} required />
            </div>

            <form class="form-floating">
                <input type="Date" class="form-control" id="floatingInputValue" placeholder={'name@example.com'} value="test@example.com"/>
                <label for="floatingInputValue">Input with value</label>
            </form>
            
            <div className={styles.formgroup}>
                <label htmlFor="birthDate">Data Nascimento</label>
                <input type='date' className={styles.formControl} id="birthDate" name="birthDate" value={equine.birthDate} onChange={handleChange} required />
            </div>

            <div className={styles.formgroup}>
                <label htmlFor="coat">Pelagem</label>
                <input type='text' className={styles.formControl} id="coat" name="coat" value={equine.coat} onChange={handleChange} required />
            </div>

            <div className={styles.formgroup}>
                <label htmlFor="inclusion">Inclusão</label>
                <input type='text' className={styles.formControl} id="inclusion" name="inclusion" value={equine.inclusion} onChange={handleChange} required />
            </div>
              
            <div className={styles.formgroup}>
                <label htmlFor="record">Registro</label>
                <input type='text' className={styles.formControl} id="record" name="record" value={equine.record} onChange={handleChange} required />
            </div>  

            <div className={styles.formgroup}>
                <label htmlFor="local">Local</label>
                <select id="local" name="local" className={styles.formControl} value={equine.local} onChange={handleChange} required>
                    <option selected disabled value="">Selecione</option>
                    <option value="RPMont">RPMont</option>
                    <option value="3º EPMont">3º EPMont</option>
                </select>
            </div>

            <div className={styles.formgroup}>
                <label htmlFor="sex">Sexo</label>
                <select id="sex" name="sex" className={styles.formControl} value={equine.sex} onChange={handleChange} required>
                    <option selected disabled value="">Selecione</option>
                    <option value="macho">Macho</option>
                    <option value="femea">Fêmea</option>
                </select>
            </div>
        </section>
        
        <section className={styles.etapa2}>            

            <p>Obs: Click na imagem para adicionar</p> 
            
            <div className={styles.galeria}>  
             
                <span>
                    <img id='imagem1' name='imagem1' className={styles.imagem} src={equine.imagem1 || imgChanfro} alt='foto 1' onClick={handleImageClick} />
                </span>
                
                <span>
                    <img id='imagem2' name='imagem2' className={styles.imagem} src={equine.imagem2 || imgLadoDireito} alt='foto 2' onClick={handleImageClick} />
                </span>
                                
                <span>
                    <img id='imagem3' name='imagem3' className={styles.imagem} src={equine.imagem3 || imgLadoEsquerdo} alt='foto 3' onClick={handleImageClick} />
                </span>
                <span>
                    <img id='imagem4' name='imagem4' className={styles.imagem} src={equine.imagem4 || resenhaDescritiva} alt='foto 4' onClick={handleImageClick} />
                </span>         
                                             
            </div>  

            <div className="form-floating">
                <textarea className={`form-control ${styles.form_control}`} placeholder="Leave a comment here" name="resenha" id="resenha"></textarea>
                <label htmlFor="resenha">Resenha descritiva</label>
            </div>

            <div className={styles.resenhadescritiva}>
                <label className={styles.styloNomeResenha} htmlFor="resenha">Resenha descritiva</label>
                <textarea id="resenha" name="resenha" rows="7" cols="10"></textarea>
            </div>                     
        </section>

        <div className={styles.botao}>
            <button type="submit" className={`btn btn-success me-md-2`}>{id ? 'Editar' : 'Salvar'} dados</button>           
        </div>

    </form>
    
    </>
  )
}

export default EquineForm;
