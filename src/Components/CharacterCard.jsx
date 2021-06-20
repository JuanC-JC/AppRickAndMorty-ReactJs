import React from 'react'

function CharacterCard(props){

    const character = props.character

    return(
        <li className="col-6 col-md-3">
          <div className="CharacterCard" style={{backgroundImage: `url(${character.image})`}}>
            <div className="CharacterCard__name-container text-truncate">
              {character.name}
            </div>
          </div>
        </li>
    )
    
}


export default CharacterCard