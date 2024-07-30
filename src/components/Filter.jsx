import React from 'react';

const Filter = () => {
    return (
        <section className='filter_section'>
           <select id="sport" >
                    <option value="" disabled selected>Sélectionner une discipline</option>
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
                <select name="" id="genre" >
                    <option value="" disabled selected>Genre</option>
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                </select>
        </section>
    );
};

export default Filter;