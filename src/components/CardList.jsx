import React from 'react';
import Card from './Card';
import styles from './styles/CardList.module.css';

const CardList = ({ filterMonster }) => (
    <div className={styles.cardlist}>
        {filterMonster.map((monsters) => (
            <Card key={monsters.id} monster={monsters} />
        ))}
    </div>
);

export default CardList;
