import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import AppContext from '../components/AppContext';

const Ajout = () => {
    const [name, setName] = useState("");
    const [sport, setSport] = useState("");
    const [goldenMedal, setGoldenMedal] = useState("");
    const [silverMedal, setSilverMedal] = useState("");
    const [bronzeMedal, setBronzeMedal] = useState("");
    const [genre, setGenre] = useState("");
    const [image, setImage] = useState("");
    const app = useContext(AppContext);

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
        setGenre("");
        setImage("");
    }
    return (
        <>
        <Header /> 
        <div class={`form-container ${app.theme === "dark" ? "dark" : ""}`}>
           <h1>Ajouter un nouveau médaillé:</h1>
           <form className={`form_ajout`} onSubmit={handleFormSubmit}>
                <label htmlFor="name">Nom</label>
                <input id='name' type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                
                <label htmlFor="sport">Discipline</label>
                <select id="sport" onChange={(e) => setSport(e.target.value)} value={sport}>
                    <option value="" disabled selected>Sélectionnez une discipline</option>
                    <option value="Athlétisme">Athlétisme</option>
                    <option value="Aviron">Aviron</option>
                    <option value="Badminton">Badminton</option>
                    <option value="Basket-ball">Basket-ball</option>
                    <option value="Boxe">Boxe</option>
                    <option value="Canoë-kayak">Canoë-kayak</option>
                    <option value="Cyclisme">Cyclisme</option>
                    <option value="Équitation">Équitation</option>
                    <option value="Escrime">Escrime</option>
                    <option value="Football">Football</option>
                    <option value="Golf">Golf</option>
                    <option value="Gymnastique">Gymnastique</option>
                    <option value="Haltérophilie">Haltérophilie</option>
                    <option value="Handball">Handball</option>
                    <option value="Hockey sur gazon">Hockey sur gazon</option>
                    <option value="Judo">Judo</option>
                    <option value="Karaté">Karaté</option>
                    <option value="Lutte">Lutte</option>
                    <option value="Natation">Natation</option>
                    <option value="Pentathlon moderne">Pentathlon moderne</option>
                    <option value="Rugby à sept">Rugby à sept</option>
                    <option value="Skateboard">Skateboard</option>
                    <option value="Surf">Surf</option>
                    <option value="Taekwondo">Taekwondo</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Tennis de table">Tennis de table</option>
                    <option value="Tir">Tir</option>
                    <option value="Tir à l'arc">Tir à l'arc</option>
                    <option value="Triathlon">Triathlon</option>
                    <option value="Voile">Voile</option>
                    <option value="Volleyball">Volleyball</option>
                </select>

                <label htmlFor="golden medal">Médaille d'or</label>
                <input id='golden medal' type="number" min="0" onChange={(e) => setGoldenMedal(e.target.value)} value={goldenMedal}/>

                <label htmlFor="silver medal">Médaille d'argent</label>
                <input id='silver medal' type="number" min="0" onChange={(e) => setSilverMedal(e.target.value)} value={silverMedal}/>
                
                <label htmlFor="bronze medal">Médaille de bronze</label>
                <input id='bronze medal' type="number" min="0" onChange={(e) => setBronzeMedal(e.target.value)} value={bronzeMedal}/>
                
                <label htmlFor="genre">Genre</label>
                <select name="" id="genre" onChange={(e) => setGenre(e.target.value)} value={genre}>
                    <option value="" disabled selected>Genre</option>
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                </select>

                <label htmlFor="image">Image</label>
                <input id='image' type="text" onChange={(e) => setImage(e.target.value)} value={image}/>

                <input type="submit" value="Ajouter"/>
           </form>
        </div>
        </>
    );
};

export default Ajout;