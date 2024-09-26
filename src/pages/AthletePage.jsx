import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../components/AppContext';

const AthletePage = () => {
    const [athlete, setAthlete] = useState({})
    const param = useParams();
    console.log(param);
    
    const id = param.id
    const app = useContext(AppContext);

    useEffect(() => {
        axios.get(`http://localhost:3005/athletes/${id}`)
        .then((res) => setAthlete(res.data))
        .catch((err) => console.error(err))
    },[]) 
    
    return (
        <>
            <Header/>
            <div className={`section-athlete ${app.theme === "dark" ? "dark" : ""}`}>
                <Link to="/">Accueil</Link>
                {athlete && 
                <div className="flex-athlete">
                    <div className="img-container">
                    <img src={athlete.image} alt={`image de ${athlete.name}`} />
                    </div>

                    <div className="description-container">
                        <p>{athlete.name}</p>
                        <p>{athlete.sport}</p>
                        <div className='container_medal'>
                            <img src="./medaille-dor.png" alt="img médaille d'or" />
                            <p> {athlete.goldenMedal}</p>
                        </div>
                        <div className='container_medal'>
                            <img src="./medaille-dargent.png" alt="img médaille d'or" />
                            <p>{athlete.silverMedal}</p>
                        </div>
                        <div className='container_medal'>
                            <img src="./medaille-de-bronze.png" alt="img médaille d'or" />
                            <p>{athlete.bronzeMedal}</p>
                        </div>
                    </div>
                </div>}
            </div>

       </>
    );
};

export default AthletePage;