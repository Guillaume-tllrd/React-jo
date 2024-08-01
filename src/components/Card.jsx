import axios from 'axios';
import React, { useState } from 'react';

const Card = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editGoldMedal, setEditGoldMedal] = useState("");
    const [editSilverMedal, setEditSilverMedal] = useState("");
    const [editBronzeMedal, setEditBronzeMedal] = useState("");

    function handleAthleteEdit(){
        const data = {
            name: props.athlete.name,
            sport: props.athlete.sport,
            goldenMedal: editGoldMedal ? editGoldMedal : props.athlete.goldenMedal,
            silverMedal: editSilverMedal ? editSilverMedal : props.athlete.silverMedal,
            bronzeMedal: editBronzeMedal ? editBronzeMedal : props.athlete.bronzeMedal,
            image: props.athlete.image,
        }
        axios.put("http://localhost:3005/athletes/" + props.athlete.id, data).then(() => {setIsEditing(false)});
        window.location.reload();
    }
    function handleAthleteDelete(){
        axios.delete("http://localhost:3005/athletes/" + props.athlete.id);
        window.location.reload();
    }
    return (
        <div className='card'>
            <div className='img_card'>
            <img id="photo_athlete" src={props.athlete.image} alt={`image de ${props.athlete.name}`} />
            </div>
            <section className='description_card'>
                <p>{props.athlete.name}</p>
                <p>{props.athlete.sport}</p>
                
                {isEditing ? (
                <input type="number" defaultValue={editGoldMedal ? editGoldMedal : props.athlete.goldenMedal} onChange={(e) => setEditGoldMedal(e.target.value)}/>
                ) : (
                <div className='container_medal'>
                    <img src="./medaille-dor.png" alt="img médaille d'or" />
                    <p> {props.athlete.goldenMedal}</p>
                </div>
                )
                }

                {isEditing ? (
                <input type="number" defaultValue={editSilverMedal ? editSilverMedal : props.athlete.silverMedal} onChange={(e) => setEditSilverMedal(e.target.value)} />
                ) : (
                    <div className='container_medal'>
                        <img src="./medaille-dargent.png" alt="img médaille d'or" />
                        <p>{props.athlete.silverMedal}</p>
                    </div>
                 )
                }
                
                {isEditing ? (
                <input type="number" defaultValue={editBronzeMedal ? editBronzeMedal : props.athlete.bronzeMedal} onChange={(e) => setEditBronzeMedal(e.target.value)} />
                ) : (
                <div className='container_medal'>
                    <img src="./medaille-de-bronze.png" alt="img médaille d'or" />
                    <p>{props.athlete.bronzeMedal}</p>
                </div> )
                }
                <div className="btn_container">
                {isEditing ? (
                    <button className='btn_card confirm' onClick={() => handleAthleteEdit()}>Valider</button>
                ) : (
                <button className='btn_card edit' onClick={() => setIsEditing(true)}>Modifier</button>
                )}
                 <button className='btn_card delete' onClick={() => {
                  if (window.confirm("Voulez-vous vraiment supprimer cet athlète?")) {
                    handleAthleteDelete();
                    }
                }}
                >Supprimer</button>
                </div>
                
                
            </section>
        </div>
    );
};

export default Card;