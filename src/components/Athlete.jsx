import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Card from "./Card";
import AppContext from './AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownWideShort, faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';
const Athlete = () => {
    
    const app = useContext(AppContext);
    const [isVisible, setIsVisible] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedInput, setSelectedInput] = useState("");
    const select = ["Athlétisme", "Aviron", "Badminton", "Basket-ball", "Boxe", "Canoë-kayak", "Cyclisme", "Équitation", "Escrime", "Football", "Golf", "Gymnastique", "Haltérophilie", "Handball", "Hockey sur gazon", "Judo", "Karaté", "Lutte", "Natation", "Pentathlon moderne", "Rugby à sept", "Skateboard", "Surf", "Taekwondo", "Tennis", "Tennis de table", "Tir", "Tir à l'arc", "Triathlon", "Voile", "Volleyball"];

    const [dataAthlete, setDataAthlete] = useState([]);
    const [medalFilters, setMedalFilters] = useState({
        gold: false,
        silver: false,
        bronze: false,
    });
   
    useEffect(() => {
        axios
            .get("http://localhost:3005/athletes")
            .then((res) => setDataAthlete(res.data)) 
            
    },[]);

    function handleCheckboxChange(medal){
        setMedalFilters((prevFilters) => ({
            ...prevFilters,
            [medal]: !prevFilters[medal],
        }));
    };
    const filteredAthletes = dataAthlete.filter((athlete) => {
        if (selectedInput && !athlete.sport.includes(selectedInput)) return false;

        // Vérification des médailles
        if (medalFilters.gold && athlete.goldenMedal <= 0) return false;
        if (medalFilters.silver && athlete.silverMedal <= 0) return false;
        if (medalFilters.bronze && athlete.bronzeMedal <= 0) return false;

        // Filtre de recherche par nom
        if (search && !athlete.name.toLowerCase().includes(search.toLowerCase())) return false;

        return true;
    });

    const totalGoldmedals = dataAthlete.reduce((sum, athlete) => (sum + Number.parseInt(athlete.goldenMedal)), 0);
    const totalSilvermedals = dataAthlete.reduce((sum, athlete) => (sum + Number.parseInt(athlete.silverMedal)), 0);
    const totalBronzemedals = dataAthlete.reduce((sum, athlete) => (sum + Number.parseInt(athlete.bronzeMedal)), 0);

    return (
        <section className={`athlete_section ${app.theme === "dark" ? "dark" : ""}`}>
            <div className='medal-count'>
                <span className='circle gold'>{totalGoldmedals}</span>
                <span className='circle silver'>{totalSilvermedals}</span>
                <span className='circle bronze'>{totalBronzemedals}</span>
            </div>
            <div className="total-medal">
                <span>Total : </span>
                <span>{totalBronzemedals + totalGoldmedals
                + totalSilvermedals}</span>
            </div>
            <button id='togglebtnfilter' onClick={() => setIsVisible(!isVisible)}>
                <span>
                    {isVisible ? <FontAwesomeIcon icon={faArrowUpWideShort} /> : <FontAwesomeIcon icon={faArrowDownWideShort} />}
                    Filtrer
                </span>
            </button>
            {isVisible && (
            <section className='filter_section'>
                <input type="search" value={search} placeholder='Rechercher un athlète' onChange={(e) => setSearch(e.target.value)}/>
                <select  id="sports" onChange={(e) => setSelectedInput(e.target.value)}>
                    <option selected disabled>Sélectionnez une discipline</option>
                    {select.map((discipline) => (
                        <option key={discipline} value={discipline}>{discipline}</option>
                    ))}
                </select>
                <div className="medal-input-container">
                    <label htmlFor="GoldMedalInput"><span className='circle gold'>O</span></label>
                <input type="checkbox" id="GoldMedalInput" checked={medalFilters.gold} 
                    onChange={() => handleCheckboxChange('gold')}  />
                <label htmlFor="SilverMedalInput"><span className='circle silver'>A</span></label>
                <input type="checkbox" name="" id="SilverMedalInput" checked={medalFilters.silver} 
                    onChange={() => handleCheckboxChange('silver')}  />
                <label htmlFor="BronzeMedalInput"><span className='circle bronze'>B</span></label>
                <input type="checkbox" name="" id="BronzeMedalInput" checked={medalFilters.bronze} onChange={() => handleCheckboxChange('bronze')}/>
                </div>
            </section>
            )}
            {selectedInput && (
                <button id='cancelbtn' onClick={() => setSelectedInput("")}>Annuler la recheche</button>
            )}

            <ul>
            {filteredAthletes.map((athlete) => (
                    <Card key={athlete.id} athlete={athlete} />
                ))}
            </ul>
        </section>
    );
};

export default Athlete;
