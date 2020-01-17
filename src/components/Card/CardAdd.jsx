import React, { Component } from "react";
import {
  Image,
  DescriptionContainer,
  ColumnContainer,
  Text,
  Input,
  ModalContainer,
  CloseModal,
  Label,
  Background,
  Button
} from "../../components/Card/style";

export default function CardAdd({
  handleHideModal,
  handleSelectFile,
  handleSubmit,
  handleInputLocation,
  handleInputName,
  handleInputPrice,
  selectedFile
}) {
  return (
    <ModalContainer>
      <DescriptionContainer justifyContent="flex-end">
        <CloseModal onClick={handleHideModal}>X</CloseModal>
      </DescriptionContainer>

      <form onSubmit={handleSubmit}>
        <Background>
          <ColumnContainer>
            <Input
              placeholder={"Ingrese Nombre"}
              name="name"
              onChange={handleInputName}
            ></Input>
            <Image
              //onChange={handleSelectFile}
              //name="selected"
              src={selectedFile}
              width={"200px"}
              height={"150px"}
              marginTop={"40px"}
            />
            <Label For="file" marginTop={"-30px"}>
              {" "}
              Elija una imagen
              <Input
                type="file"
                //className="upload"
                //id="file"
                onChange={handleSelectFile}
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
                onChange={handleInputLocation}
              ></Input>
            </DescriptionContainer>

            <DescriptionContainer>
              <Text color={"black"}>Precio: </Text>
              <Input name="prices" onChange={handleInputPrice} type="number"></Input>
            </DescriptionContainer>

            <DescriptionContainer
              marginTop={"140px"}
              justifyContent={"flex-end"}
            >
              <Button>Guardar</Button>
            </DescriptionContainer>
          </ColumnContainer>
        </Background>
      </form>
    </ModalContainer>
  );
}
