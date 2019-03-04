import React from 'react';
import "./MemoryCard.css";

const MemoryCard = props => (
	<div 
	className="allCards col-3" 
	key={props.id}
	onClick={() => props.handleClick(props.id, props.clicked)}
	>
		<img 
		id={props.name}
		src={props.image}
		alt={props.name}
		/>
	</div>
);

export default MemoryCard;