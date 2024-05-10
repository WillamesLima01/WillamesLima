import React from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from '../../api';
import { useParams } from "react-router-dom";
import imgChanfro from '../../assets/imgChanfro.jpg';
import imgLadoDireito from '../../assets/imgLadoDireito.jpg';
import imgLadoEsquerdo from '../../assets/imgLadoEsquerdo.jpg';
import resenhaDescritiva from '../../assets/resenhaDescritiva.jpg';
import styles from './Veterinary.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const EquineDescriptiveReview = () => {
    const [equine, setEquine] = useState({ name: '', birthDate: '', coat: '', inclusion: '', record: '', local: '', sex: '', situation: '', imagem1: '', imagem2: '', imagem3: '', imagem4: '', descricao: '' });       
    const [description, setDescription] = useState(''); 
    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`/equines/${id}`)
        .then(Response => {
            setEquine(Response.data)
        })
        .catch(error => console.error('Ocorreu um erro: ', error));
    }, [id]);    
    
    function handleChange(event) {
        const { name, value } = event.target
        setEquine(prevState => ({ ...prevState, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();       

        axios.post(`/equines/${id}`, equine)
        .then(() => {
            alert('adicionado com sucesso!');
            navigate('/veterinary/listar-equino');
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
            <div className={`${styles.container} mt-5`}>
                <h1 className={styles.cabeca}>Resenha Descritiva</h1>
    
                <section >
                    <div className= {styles.styloData}>
                        <div className= {styles.equineData}>
                            <div className={styles.formgroupservice}>
                                <label htmlFor="name" className= {styles.corFonte}>Nome</label>
                                <p id="name">{equine.name}</p>
                            </div>
                            
                            <div className={styles.formgroupservice}>
                                <label htmlFor="birthDate" className= {styles.corFonte}>Data Nascimento</label>
                                <p id="birthDate">{equine.birthDate}</p>
                            </div>
            
                            <div className={styles.formgroupservice}>
                                <label htmlFor="coat" className= {styles.corFonte}>Pelagem</label>
                                <p id="coat">{equine.coat}</p>
                            </div>
            
                            <div className={styles.formgroupservice}>
                                <label htmlFor="inclusion" className= {styles.corFonte}>Inclusão</label>
                                <p id="inclusion">{equine.inclusion}</p>
                            </div>
                            
                            <div className={styles.formgroupservice}>
                                <label htmlFor="record" className= {styles.corFonte}>Registro</label>
                                <p id="record">{equine.record}</p>
                            </div>  
            
                            <div className={styles.formgroupservice}>
                                <label htmlFor="local" className= {styles.corFonte}>Local</label>
                                <p id="local">{equine.local}</p>
                            </div>
            
                            <div className={styles.formgroupservice}>
                                <label htmlFor="sex" className= {styles.corFonte}>Sexo</label>
                                <p id="sex">{equine.sex}</p>
                            </div>

                            <div className={styles.formgroupservice}>
                                <label htmlFor="situation" className= {styles.corFonte}>Situação</label>
                                <p id="situation">{equine.situation}</p>
                            </div>

                        </div>
                    </div>

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
                                
                    </section>
    
                    <div className={styles.resenhadescritiva}>
                        <label htmlFor="description" className= {styles.corFonte}>Descrição da resenha</label>
                        <textarea 
                            id="descricao" 
                            name="descricao" 
                            rows="7" 
                            cols="10" 
                            value={description} 
                            onChange={handleChange}
                        />
                    </div>  
                </section>
    
                <div className={styles.botao}>
                    <button type="submit" className={`btn btn-success me-md-2`}>Salvar dados</button>
                </div>                
    
            </div>
        </>
    );
}

export default EquineDescriptiveReview