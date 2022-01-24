import React from 'react';
import './styles/Card.module.css';

const Card = ({ monster }) => (
    <div className={StyleSheet.cardcontainer}>
        <img
            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
            alt="monster"
        />
        <h1>{monster.name}</h1>
        <p>{monster.email}</p>
    </div>
);

export default Card;
