import React, { useState } from 'react';

const Filter = () => {
    const [selectedInput, setSelectedInput] = useState("");
    const select = ["Athlétisme", "Aviron", "Badminton", "Basket-ball", "Boxe", "Canoë-kayak", "Cyclisme", "Équitation", "Escrime", "Football", "Golf", "Gymnastique", "Haltérophilie", "Handball", "Hockey sur gazon", "Judo", "Karaté", "Lutte", "Natation", "Pentathlon moderne", "Rugby à sept", "Skateboard", "Surf", "Taekwondo", "Tennis", "Tennis de table", "Tir", "Tir à l'arc", "Triathlon", "Voile", "Volleyball"];


    return (
        <section className='filter_section'>
            <select id="sports" onChange={(e) => console.log(e.target.value)}>
                {select.map((discipline) => (
                    <option key={discipline}  value={discipline === selectedInput}>{discipline}</option>
                ))}
            </select>
            
        </section>
        
    );
};

export default Filter;