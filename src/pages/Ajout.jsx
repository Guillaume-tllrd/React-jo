import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';

const Ajout = () => {
    const [name, setName] = useState("");
    const [sport, setSport] = useState("");
    const [goldenMedal, setGoldenMedal] = useState("");
    const [silverMedal, setSilverMedal] = useState("");
    const [bronzeMedal, setBronzeMedal] = useState("");
    const [image, setImage] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:3005/athletes", {
            name,
            sport,
            goldenMedal,
            silverMedal,
            bronzeMedal,
            image,   
        });
        setName("");
        setSport("");
        setGoldenMedal("");
        setSilverMedal("");
        setBronzeMedal("");
        setImage("");
    }
    return (
        <div>
           <Header /> 
           <h1>Ajouter un nouveau médaillé:</h1>
           <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Nom</label>
                <input id='name' type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                
                <label htmlFor="sport">Discipline</label>
                <input id='sport' type="text" onChange={(e) => setSport(e.target.value)} value={sport} />

                <label htmlFor="golden medal">Médaille d'or</label>
                <input id='golden medal' type="number" min="0" onChange={(e) => setGoldenMedal(e.target.value)} value={goldenMedal}/>

                <label htmlFor="silver medal">Médaille d'argent</label>
                <input id='silver medal' type="number" min="0" onChange={(e) => setSilverMedal(e.target.value)} value={silverMedal}/>
                
                <label htmlFor="bronze medal">Médaille de bronze</label>
                <input id='bronze medal' type="number" min="0" onChange={(e) => setBronzeMedal(e.target.value)} value={bronzeMedal}/>

                <label htmlFor="image">Image</label>
                <input id='image' type="file" onChange={(e) => setImage(e.target.value)} value={image}/>

                <input type="submit" value="Ajouter"/>
           </form>
        </div>
    );
};

export default Ajout;