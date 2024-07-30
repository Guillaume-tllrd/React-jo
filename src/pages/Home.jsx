import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Card from '../components/Card';
import Filter from '../components/Filter';


const Home = () => {
  const [dataAthlete, setDataAthlete] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/athletes")
      .then((res) => setDataAthlete(res.data)) 
      .catch((err) => console.error(err)); 
  }, []);

    return (
        <div>
            <Header/>
            <Filter />
            <ul>{dataAthlete.map((athlete) => (
           <Card key={athlete.id} athlete={athlete} />
        ))}</ul>
                
        </div>
    );
};

export default Home;