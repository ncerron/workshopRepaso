import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Side, Container, Section, MiddleContainer, AddButton } from "./style";
import ListContainer from "../ListContainer";
import Order from "../../components/Order"
import Sidebar from "../Sidebar/Sidebar"
import CardAddContainer from "../Card/CardAddContainer"
import CardEditContainer from "../Card/CardEditContainer"

export default class index extends Component {

  render() {
    return (
      <Container>
        <Side>
          <Sidebar></Sidebar>
        </Side>
        <Section> 
          <MiddleContainer history={this.props.history} >
            <Switch>
              <Route exact path="/" component={ListContainer} />
              <Route exact path="/order" component={Order} />
             <Route exact path="/add" component={CardAddContainer} />
             <Route exact path="/edit/:id" component={CardEditContainer} />
            </Switch>
          </MiddleContainer>
        </Section>
      </Container>
    );
  }
}
