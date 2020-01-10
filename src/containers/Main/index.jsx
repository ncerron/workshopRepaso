import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Side, Container, Section, MiddleContainer, AddButton } from "./style";
import ListContainer from "../ListContainer";
import Order from "../../components/Order"
import Sidebar from "../Sidebar/Sidebar"
import CardAdd from "../../containers/Card/CardAdd"
import { Link } from "react-router-dom";


export default class index extends Component {

  render() {
    return (
      <Container>
        <Side>
          <Sidebar></Sidebar>
        </Side>
        <Section>
         <Link to={"/add"}><AddButton >Agregar Propiedad</AddButton></Link> 
          <MiddleContainer>
            <Switch>
              <Route exact path="/" component={ListContainer} />
              <Route path="/order" component={Order} />
             <Route path="/add" component={CardAdd} />
            </Switch>
          </MiddleContainer>
        </Section>
      </Container>
    );
  }
}
