import React, { Component } from "react";
import {
  Image,
  DescriptionContainer,
  ColumnContainer,
  Text,
  Input,
  ModalContainer,
  CloseModal,
  Save
} from "../../components/Card/style";

export default class CardAdd extends Component {
                 constructor(props) {
                   super(props);

                   this.hideModal = this.hideModal.bind(this);
                 }

                 hideModal() {
                   this.props.history.goBack();
                 }

                 render() {
                   return (
                     <ModalContainer>
                       <ColumnContainer>
                         <Input placeholder={"Ingrese Nombre"}></Input>
                         <Image
                           src="/images/icons/add.png"
                           width={"200px"}
                           height={"150px"}
                           marginTop={"40px"}
                         />
                       </ColumnContainer>

                       <ColumnContainer>
                         <DescriptionContainer
                           marginTop={"-20px"}
                           justifyContent={"flex-end"}
                         >
                           <CloseModal onClick={this.hideModal}>X</CloseModal>
                         </DescriptionContainer>

                         <DescriptionContainer marginTop={"70px"}>
                           <Text color={"black"}>Lugar: </Text>
                           <Input marginLeft={"9px"}></Input>
                         </DescriptionContainer>

                         <DescriptionContainer>
                           <Text color={"black"}>Precio: </Text>
                           <Input></Input>
                         </DescriptionContainer>

                         <DescriptionContainer
                           marginTop={"140px"}
                           justifyContent={"flex-end"}
                         >
                           <Save>Guardar</Save>
                         </DescriptionContainer>
                       </ColumnContainer>
                     </ModalContainer>
                   );
                 }
               }
