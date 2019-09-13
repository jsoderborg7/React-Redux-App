import React from 'react';
import {Card} from 'semantic-ui-react';

const CharacterCard = props =>{
  console.log("character card", props);
  return(
    <Card className="cardContainer">
      <Card.Content className="contentContainer">
        <Card.Header className="name">{props.name}</Card.Header>
        <Card.Meta className="role">Role: {props.role}</Card.Meta>
        <Card.Description className="house">House: {props.house}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default CharacterCard;