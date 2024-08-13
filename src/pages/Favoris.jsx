import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Card from '../components/Card';

const Favoris = () => {

    const [favListData , setFavListData] = useState([]);

    useEffect(() => {
      let athletesId = window.localStorage.athletes ? window.localStorage.athletes.split(",") : [];
      
      athletesId.forEach(id => {
          axios
          .get(`http://localhost:3005/athletes/${id}`)
          .then((res) => {
              setFavListData(prevData => {
                  if (!prevData.some(athlete => athlete.id === res.data.id)) {
                    // pour éviter les doublons cette ligne vérifie si il n' y a pas athlete.id qui avec la même id dans la data et si c'est le cas alors il est ajouté au tableau
                      return [...prevData, res.data]; //destructuration du array avec tous les élément de prevdata + res.data
                  }
                  return prevData;
              });
          })
          .catch(err => console.log(err));
      });
  }, []);
 
    return (
        <>
        <Header/>
        <h2>Mes favoris</h2>
        <div className="result">
          {console.log(favListData)}
       {favListData.length > 0 && favListData.map((athlete) => (
        <Card key={athlete.id} athlete={athlete} />
       ))}
      </div>
        
        </>
    );
};

export default Favoris;