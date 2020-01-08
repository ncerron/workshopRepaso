import React from 'react'
import {Container, Title, Image, DescriptionContainer, ColumnContainer, Text} from './style'

export default function Card(props) {
    {console.log(props)}
    return (
      <Container>
        <ColumnContainer >
          <Title>{props.name}</Title>
          <Image src={props.image} />
        </ColumnContainer>

        <ColumnContainer marginTop={"50px"} >
          <DescriptionContainer>
            <Text color={"black"}>Lugar: </Text>
            <Text>{props.location}</Text>
          </DescriptionContainer>

          <DescriptionContainer>
            <Text color={"black"}>Precio: </Text>
            <Text>{props.price}</Text>
          </DescriptionContainer>

        </ColumnContainer>
      </Container>
    );
}
