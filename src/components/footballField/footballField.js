import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import './footballField.css';
import Piece from '../Piece/piece';

export default function FootballField() {
  const [players, setPlayers] = useState([]);

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

  const addPlayer = () => {
    const newPlayer = {
      name: `Player ${players.length + 1}`, 
      position: { x: 50, y: 50 },           
      color: players.length % 2 === 0 ? 'blue' : 'red'
    };
    setPlayers([...players, newPlayer]);
  };

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

      <button onClick={addPlayer} className='add-player-button'>Agregar jugador</button>
      
    </div>

  );
}