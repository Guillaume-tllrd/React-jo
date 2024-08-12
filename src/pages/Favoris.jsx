import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Card from '../components/Card';

const Favoris = () => {

    const [favListData , setFavListData] = useState([]);

    useEffect(() => {
        let athletesId = window.localStorage.athletes.split(",") ? window.localStorage.athletes : [];
    //    console.log(athletesId);
    //    dois divisier par athlete pour le mettre dans le get 

        for ( let i = 0; i> athletesId.length; i++){
            axios
            .get(`http://localhost:3005/athletes/${athletesId}`)
            .then((res) => console.log(res.data))
        }
    },[])
    return (
        <>
        <Header/>
        <h2>Mes favoris</h2>
        <div className="result">
        {favListData.length > 0 ? (
          favListData.map((athlete) => <Card athlete={athleteId} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
        
        </>
    );
};

export default Favoris;