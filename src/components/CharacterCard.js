import React from "react";

// export default function CharacterCard() {
//   return <span>todo: character</span>;
// }

const CharacterCard = props => {
  return (
    <span>
      <div key={props.id}>
        <h2>{props.name}</h2>
        <p>Status: {props.status}</p>
        <p>Species: {props.species}</p>
        <p>Gender: {props.gender}</p>
      </div>
    </span>
  )
}

export default CharacterCard;