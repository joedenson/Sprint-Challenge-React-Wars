import React, { useState, useEffect } from 'react';
import SwCard from './SwCard';
import axios from 'axios';


const SwList = () => {

    const [info, setInfo] = useState([]);

    useEffect(() => {

        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                console.log(response);
                const collection = response.data.results;
                console.log(collection);
                setInfo(collection);
            })
            .catch(error => {
                console.log('No data received', error);
            })


    }, []);

    return (

        <div className="sw-card">
            {info.map(item => {
                return <SwCard name={item.name} height={item.height} mass={item.mass} birthYear={item.birth_year} key={item.name} />
            })}
        </div>
    );

}

export default SwList;
