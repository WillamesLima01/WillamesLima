import React, { useEffect, useState } from 'react';
import axios from '../../api';
import { useParams } from 'react-router-dom';
import styles from './Ecotherapy.module.css';

const PractitionerDetailsData = () => {
    const { id } = useParams();
    const [practitioner, setPractitioner] = useState({
        name: '', 
        birthDate: '', 
        contact: '', 
        email: '', 
        education: '', 
        responsible: '',
        address: {
            zipcode: '', 
            street: '', 
            number: '', 
            neighborhood: '', 
            city: '', 
            state: '', 
            country: ''
        }
    });

    useEffect(() => {
        axios.get(`/practitioners/${id}`)
            .then(response => {
                const { name, birthDate, contact, email, education, responsible, practitionerAddressRequest } = response.data;
                const { zipcode, street, number, neighborhood, city, state, country } = practitionerAddressRequest;
                setPractitioner({
                    name, 
                    birthDate, 
                    contact, 
                    email, 
                    education, 
                    responsible,
                    address: {
                        zipcode, 
                        street, 
                        number, 
                        neighborhood, 
                        city, 
                        state, 
                        country
                    }
                });
            })
            .catch(error => {
                console.error('Ocorreu um erro: ', error);
            });
    }, [id]);  

    return (
        <div className={`${styles.container} mt-5`}>
            <h1 className={styles.cabeca}>Dados do Praticante</h1>

            <section>
                <div className={styles.styloData}>
                    <div className={styles.praticanteDados}>
                        <div className={styles.formgroupservice}>
                            <label htmlFor="name" className={styles.corFonte}>Nome</label>
                            <p id="name">{practitioner.name}</p>
                        </div>
                        
                        <div className={styles.formgroupservice}>
                            <label htmlFor="birthDate" className={styles.corFonte}>Data Nascimento</label>
                            <p id="birthDate">{practitioner.birthDate}</p>
                        </div>

                        <div className={styles.formgroupservice}>
                            <label htmlFor="contact" className={styles.corFonte}>Contato</label>
                            <p id="contact">{practitioner.contact}</p>
                        </div>

                        <div className={styles.formgroupservice}>
                            <label htmlFor="email" className={styles.corFonte}>Email</label>
                            <p id="email">{practitioner.email}</p>
                        </div>

                        <div className={styles.formgroupservice}>
                            <label htmlFor="education" className={styles.corFonte}>Escolaridade</label>
                            <p id="education">{practitioner.education}</p>
                        </div>  

                        <div className={styles.formgroupservice}>
                            <label htmlFor="responsible" className={styles.corFonte}>Responsável</label>
                            <p id="responsible">{practitioner.responsible}</p>
                        </div>

                        <div className={styles.formgroupservice}>
                            <label htmlFor="zipcode" className={styles.corFonte}>CEP</label>
                            <p id="zipcode">{practitioner.address.zipcode}</p>
                        </div>

                        <div className={styles.formgroupservice}>
                            <label htmlFor="street" className={styles.corFonte}>Logradouro</label>
                            <p id="street">{practitioner.address.street}</p>
                        </div>
                        <div className={styles.formgroupservice}>
                            <label htmlFor="number" className={styles.corFonte}>Número</label>
                            <p id="number">{practitioner.address.number}</p>
                        </div>
                        <div className={styles.formgroupservice}>
                            <label htmlFor="neighborhood" className={styles.corFonte}>Bairro</label>
                            <p id="neighborhood">{practitioner.address.neighborhood}</p>
                        </div>
                        <div className={styles.formgroupservice}>
                            <label htmlFor="city" className={styles.corFonte}>Cidade</label>
                            <p id="city">{practitioner.address.city}</p>
                        </div>
                        <div className={styles.formgroupservice}>
                            <label htmlFor="state" className={styles.corFonte}>Estado</label>
                            <p id="state">{practitioner.address.state}</p>
                        </div>
                        <div className={styles.formgroupservice}>
                            <label htmlFor="country" className={styles.corFonte}>País</label>
                            <p id="country">{practitioner.address.country}</p>
                        </div>
                    </div>
                </div>
            </section>      
        </div>
    );
};

export default PractitionerDetailsData;
