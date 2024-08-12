import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LikeIcon = ({athleteId}) => {
    console.log(athleteId)

    function addStorage(){
        // on déclare une var si il y quelques chose dans la boite athletes local storage tu me l'affiche en mettant des virgules sinon tableau vide
        let storedData = window.localStorage.athletes ? window.localStorage.athletes.split(",") : [];
        // si il n'y a pas de athleteId (passé en string car de base c un number) dans le tableau alors tu me fais un push de athleteId en gros on s'assure qu'il n'y a pas de double et ensuite on le push
        if(!storedData.includes(athleteId.toString())){
            storedData.push(athleteId);
            // dans le localStorage la boite va s'appeler movies:
            window.localStorage.athletes = storedData
        }
    }
    const deleteStorage = () => {
        // on récupère la data qui est stockée
        let storedData = window.localStorage.athletes.split(",");
        // tous les id qui ne sont pas égaux à movie.id tu les gardes donc tu supprimes celui qui a le mm id et après on refait un stockage
        let newData = storedData.filter((id) => id != athleteId)
        window.localStorage.athletes = newData;
    }
    return (
        <div>
            <button onClick={() => addStorage()}>coeur</button>
            <button onClick={() =>deleteStorage()}> pas coeur</button>
        </div>
    )
};

export default LikeIcon;