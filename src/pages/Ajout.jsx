import React from 'react';
import Header from '../components/Header';

const Ajout = () => {
    return (
        <div>
           <Header /> 
           <h1>Ajouter un nouveau médaillé:</h1>
           <form >
                <label htmlFor="name">Nom</label>
                <input id='name' type="text" />
                
                <label htmlFor="sport">Discipline</label>
                <input id='sport' type="text" />

                <label htmlFor="golden medal">Médaille d'or</label>
                <input id='golden medal' type="number" min="0"/>

                <label htmlFor="silver medal">Médaille d'argent</label>
                <input id='silver medal' type="number" min="0"/>
                
                <label htmlFor="bronze medal">Médaille de bronze</label>
                <input id='bronze medal' type="number" min="0"/>

                <label htmlFor="image">Image</label>
                <input id='image' type="file"/>

                <input type="submit" value="Ajouter"/>
           </form>
        </div>
    );
};

export default Ajout;