import React from 'react';
import { Monster } from '../../App';
import './card.styles.css';

type CardProps = {
  monster: Monster;
};

export const Card = ({ monster }: CardProps) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    ></img>
    <h2> {monster.name} </h2>
    <p> {monster.email} </p>
  </div>
);
