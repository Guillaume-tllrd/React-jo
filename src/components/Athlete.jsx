import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Card from "./Card";
import AppContext from './AppContext';

const Athlete = () => {
    
    const app = useContext(AppContext);

    const [selectedInput, setSelectedInput] = useState("");
    const select = ["Athlétisme", "Aviron", "Badminton", "Basket-ball", "Boxe", "Canoë-kayak", "Cyclisme", "Équitation", "Escrime", "Football", "Golf", "Gymnastique", "Haltérophilie", "Handball", "Hockey sur gazon", "Judo", "Karaté", "Lutte", "Natation", "Pentathlon moderne", "Rugby à sept", "Skateboard", "Surf", "Taekwondo", "Tennis", "Tennis de table", "Tir", "Tir à l'arc", "Triathlon", "Voile", "Volleyball"];

    const [dataAthlete, setDataAthlete] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3005/athletes")
            .then((res) => setDataAthlete(res.data)) 
            .catch((err) => console.error(err)); 
    }, []);

    const totalGoldmedals = dataAthlete.reduce((sum, athlete) => (sum + Number.parseInt(athlete.goldenMedal)), 0);
    const totalSilvermedals = dataAthlete.reduce((sum, athlete) => (sum + Number.parseInt(athlete.silverMedal)), 0);
    const totalBronzemedals = dataAthlete.reduce((sum, athlete) => (sum + Number.parseInt(athlete.bronzeMedal)), 0);

    return (
        <section className={`athlete_section ${app.theme === "dark" ? "dark" : ""}`}>
            <div className='medal-count'>
                <img src="./medaille-dor.png" alt="" />
                <span>{totalGoldmedals}</span>
                <img src="./medaille-dargent.png" alt="" />
                <span>{totalSilvermedals}</span>
                <img src="./medaille-de-bronze.png" alt="" />
                <span>{totalBronzemedals}</span>
            </div>
            <div className="total-medal">
                <span>Total : </span>
                <span>{totalBronzemedals + totalGoldmedals
                + totalSilvermedals}</span>
            </div>
            <section className='filter_section'>
                <select className={app.theme === "dark" ? "dark" : ""} id="sports" onChange={(e) => setSelectedInput(e.target.value)}>
                    <option selected disabled>Sélectionnez une discipline</option>
                    {select.map((discipline) => (
                        <option key={discipline} value={discipline}>{discipline}</option>
                    ))}
                </select>
            </section>
            {selectedInput && (
                <button id='cancelbtn' onClick={() => setSelectedInput("")}>Annuler la recheche</button>
            )}
            <ul>
                {dataAthlete
                    .filter((athlete) => athlete.sport && athlete.sport.includes(selectedInput))
                    .map((athlete) => (
                        <Card key={athlete.id} athlete={athlete} />
                    ))}
            </ul>
        </section>
    );
};

export default Athlete;
