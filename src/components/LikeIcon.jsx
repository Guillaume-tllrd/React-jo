import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

const LikeIcon = ({ athleteId }) => {
    const [liked, setLiked] = useState(false);

    // Utiliser useEffect pour initialiser l'état liked
    useEffect(() => {
        let storedData = window.localStorage.athletes ? window.localStorage.athletes.split(",") : [];
        // Si l'athleteId est dans le localStorage, on met liked à true
        if (storedData.includes(athleteId.toString())) {
            setLiked(true);
        }
    }, [athleteId]); // dépendance de useEffect, pour ne le faire qu'à l'arrivée de athleteId

    const addStorage = () => {
        let storedData = window.localStorage.athletes ? window.localStorage.athletes.split(",") : [];
        if (!storedData.includes(athleteId.toString())) {
            storedData.push(athleteId);
            window.localStorage.athletes = storedData;
        }
        setLiked(true); // On met à jour l'état liked après avoir ajouté l'athleteId au localStorage
    }

    const deleteStorage = () => {
        let storedData = window.localStorage.athletes.split(",");
        let newData = storedData.filter((id) => id !== athleteId.toString());
        window.localStorage.athletes = newData;
        setLiked(false); // On met à jour l'état liked après avoir supprimé l'athleteId du localStorage
        window.location.reload()
    }

    return (
        <div>
            {liked ? (
                <button onClick={deleteStorage}><FontAwesomeIcon icon={faHeartSolid} /></button>
            ) : (
                <button onClick={addStorage}><FontAwesomeIcon icon={faHeartRegular} /></button>
            )}
        </div>
    );
};

export default LikeIcon;