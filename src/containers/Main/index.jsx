import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Sidebar, Container, Section, MiddleContainer } from "./style";
import ListContainer from "../ListContainer";

export default class index extends Component {
  render() {
    return (
      <Container>
        <Sidebar></Sidebar>
        <Section>
         
          <MiddleContainer>
            
            
            <Switch>
              <Route exact path="/" component={ListContainer} />



            </Switch>
          </MiddleContainer>
        </Section>
      </Container>
    );
  }
}
