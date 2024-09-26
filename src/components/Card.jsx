import axios from 'axios';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LikeIcon from './LikeIcon'
const Card = ({athlete}) => {
    const location = useLocation();
    const [isEditing, setIsEditing] = useState(false);
    const [editGoldMedal, setEditGoldMedal] = useState("");
    const [editSilverMedal, setEditSilverMedal] = useState("");
    const [editBronzeMedal, setEditBronzeMedal] = useState("");
    const basePath = location.pathname.includes(`/favoris/${athlete.id}`)
   ? `/favoris/${athlete.id}` // Already in category path, only add the ID
   : `${athlete.id}`;
    function handleAthleteEdit(){
        const data = {
            name: athlete.name,
            sport: athlete.sport,
            goldenMedal: editGoldMedal ? editGoldMedal : athlete.goldenMedal,
            silverMedal: editSilverMedal ? editSilverMedal : athlete.silverMedal,
            bronzeMedal: editBronzeMedal ? editBronzeMedal : athlete.bronzeMedal,
            image: athlete.image,
        }
        axios.put("http://localhost:3005/athletes/" + athlete.id, data).then(() => {setIsEditing(false)});
        window.location.reload();
    }
    function handleAthleteDelete(){
        axios.delete("http://localhost:3005/athletes/" + athlete.id);
        window.location.reload();
    }
    return (
        <div className='card'>
            <div className='img_card'>
            <Link id='a-card' to={`${basePath}`}><img id="photo_athlete" src={athlete.image} alt={`image de ${athlete.name}`} /></Link>
            </div>
            <section className='description_card'>
                <p>{athlete.name}</p>
                <p>{athlete.sport}</p>
                
                {isEditing ? (
                <input type="number" defaultValue={editGoldMedal ? editGoldMedal : athlete.goldenMedal} onChange={(e) => setEditGoldMedal(e.target.value)}/>
                ) : (
                <div className='container_medal'>
                    <img src="./medaille-dor.png" alt="img médaille d'or" />
                    <p> {athlete.goldenMedal}</p>
                </div>
                )
                }

                {isEditing ? (
                <input type="number" defaultValue={editSilverMedal ? editSilverMedal : athlete.silverMedal} onChange={(e) => setEditSilverMedal(e.target.value)} />
                ) : (
                    <div className='container_medal'>
                        <img src="./medaille-dargent.png" alt="img médaille d'or" />
                        <p>{athlete.silverMedal}</p>
                    </div>
                 )
                }
                
                {isEditing ? (
                <input type="number" defaultValue={editBronzeMedal ? editBronzeMedal : athlete.bronzeMedal} onChange={(e) => setEditBronzeMedal(e.target.value)} />
                ) : (
                <div className='container_medal'>
                    <img src="./medaille-de-bronze.png" alt="img médaille d'or" />
                    <p>{athlete.bronzeMedal}</p>
                </div> )
                }
                <LikeIcon athleteId={athlete.id} />
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