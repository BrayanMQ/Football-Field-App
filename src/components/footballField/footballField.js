import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import './footballField.css';
import Piece from '../piece/piece';

const players = [
  { name: '1', position: { x: 100, y: 200 } },
  { name: '2', position: { x: 150, y: 250 } },
];

export default function FootballField() {
    return (
    <div className="football-field">
      {players.map((player, index) => (
        <Piece 
          key={index} 
          name={player.name} 
          position={player.position} 
        />
      ))}
    </div>
    )
  }