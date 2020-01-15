import React from "react";
import { Link } from "react-router-dom";
import {
  Image,
  DescriptionContainer,
  ColumnContainer,
  Text,
  Input,
  ModalContainer,
  CloseModal,
  Button,
  Label,
  Background
} from "./style";

export default function CardEdit(props){
  return props.property? (
    <ModalContainer>
      <DescriptionContainer justifyContent="flex-end">
        <CloseModal onClick={props.handleHideModal}>X</CloseModal>
      </DescriptionContainer>

      <form /* onSubmit={handleSubmit} */>
        <Background>
          <ColumnContainer>
            <Input
              width="300px"
              name="name"
              onChange={props.handleInputName}
              defaultValue={props.property.name}
            ></Input>

            {props.selectedFile === "" ? (
              <Image
                onChange={props.handleSelectFile}
                src={`/images/properties/${props.property.img}`}
                width={"200px"}
                height={"150px"}
                marginTop={"40px"}
              />
            ) : (
              <Image
                onChange={props.handleSelectFile}
                src={props.selectedFile}
                width={"200px"}
                height={"150px"}
                marginTop={"40px"}
              />
            )}
            <Label For="file" marginTop={"-30px"}>
              Elija una imagen
              <Input
                type="file"
                onChange={props.handleSelectFile}
                name="img"
                accept=".jpg,.png"
              ></Input>
            </Label>
          </ColumnContainer>

          <ColumnContainer>
            <DescriptionContainer marginTop={"70px"}>
              <Text color={"black"}>Lugar: </Text>
              <Input
                marginLeft={"9px"}
                name="location"
                defaultValue={props.property.location}
                onChange={props.handleInputLocation}
              ></Input>
            </DescriptionContainer>

            <DescriptionContainer>
              <Text color={"black"}>Precio: </Text>
              <Input
                name="price"
                onChange={props.handleInputPrice}
                defaultValue={props.property.price}
              ></Input>
            </DescriptionContainer>

            <DescriptionContainer
              marginTop={"140px"}
              justifyContent={"flex-end"}
            >
              <Link to={"/add"}>
                <Button>Agregar</Button>
              </Link>
              
                <Button onClick={props.handleDelete}>Eliminar</Button>
              
              
                <Button onClick={props.handleUpdate}>Guardar</Button>
             
            </DescriptionContainer>
          </ColumnContainer>
        </Background>
      </form>



      
    </ModalContainer>
  ) : (
    "Problemas al mostrar la Propiedad"
  );
}
