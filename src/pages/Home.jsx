import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';

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
            <div>
                {dataAthlete.map((athlete) => (
          <ul key={athlete.id}>
            {athlete.image} 
          </ul>
        ))}</div>
        </div>
    );
};

export default Home;