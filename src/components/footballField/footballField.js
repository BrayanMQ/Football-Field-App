import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import './footballField.css';
import Piece from '../Piece/piece';

export default function FootballField() {
  const [players, setPlayers] = useState([
    { name: 'Player 1', position: { x: 100, y: 200 }, color: 'blue' },
    { name: 'Player 2', position: { x: 150, y: 250 }, color: 'blue'},
    { name: 'Player 3', position: { x: 300, y: 300 }, color: 'blue' },
    { name: 'Player 4', position: { x: 350, y: 350 }, color: 'blue' },
    { name: 'Player 5', position: { x: 400, y: 450 }, color: 'red' },
    // Add more players as needed
  ]);

  const [, drop] = useDrop(() => ({
    accept: 'piece',
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const index = players.findIndex(p => p.name === item.name);

      if (index >= 0 && delta) {
        const updatedPlayers = [...players];
        updatedPlayers[index] = {
          ...players[index],
          position: {
            x: players[index].position.x + delta.x,
            y: players[index].position.y + delta.y,
          },
        };
        setPlayers(updatedPlayers);
      }
    },
  }), [players]);

  return (
    <div className="football-field" ref={drop}>
      {players.map((player, index) => (
        <Piece 
          key={index} 
          name={player.name} 
          position={player.position}
          color={player.color} 
        />
      ))}
    </div>
  );
}