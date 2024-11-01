import React from 'react'
import { useDrag } from 'react-dnd';
import './piece.css';


export default function Piece({ name, position, color }) {

    const [{ isDragging }, drag] = useDrag(() => ({ 
        type: 'piece',
        item: { name, position },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div 
        ref={drag} 
        className="piece" 
        style={{
            top: position.y,
            left: position.x,
            backgroundColor: color,
            opacity: isDragging ? 0.5 : 0.9,
        }}
        >
        <span className="piece-name">{name}</span>
        </div>
    );
}

