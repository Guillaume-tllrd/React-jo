import axios from 'axios';
import React from 'react';

const Card = (props) => {
    function handleAthleteDelete(){
        axios.delete("http://localhost:3005/athletes/" + props.athlete.id);
        window.location.reload();
    }
    return (
        <div className='card'>
            <div className='img_card'>
            <img src={props.athlete.image} alt={`image de ${props.athlete.name}`} />
            </div>
            <section className='description_card'>
                <p>{props.athlete.name}</p>
                <p>{props.athlete.sport}</p>
                <p>Médaille d'or:{props.athlete.goldenMedal}</p>
                <p>Médaille d'argent:{props.athlete.silverMedal}</p>
                <p>Médaille de bronze: {props.athlete.bronzeMedal}</p>
                
                <button onClick={() => {
                  if (window.confirm("Voulez-vous vraiment supprimer cet athlète?")) {
                    handleAthleteDelete();
                    }
                }}
                >
                Supprimer
                </button>
            </section>
        </div>
    );
};

export default Card;