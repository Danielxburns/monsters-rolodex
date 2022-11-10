import React from 'react';
import { Card } from '../card/card.component';
import { Monster } from '../../App';

import './card-list.styles.css';

type CardListProps = {
  monsters: Monster[];
};

export const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
