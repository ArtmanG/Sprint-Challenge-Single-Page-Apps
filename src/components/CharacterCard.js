import React from "react";

// export default function CharacterCard() {
//   return <span>todo: character</span>;
// }

const CharacterCard = props => {
  return (
    <span>
      <Cards key={props.id}>
          <NamePlate>
              <CharacterName>
                  <NewH2>{props.name}</NewH2>
              </CharacterName>
          </NamePlate>
          <DescPlate>
              <Descriptions>
                  <p>Status: {props.status}</p>
                  <p>Species: {props.species}</p>
                  <p>Gender: {props.gender}</p>
              </Descriptions>
          </DescPlate>
      </Cards>
    </span>
  )
}

export default CharacterCard;