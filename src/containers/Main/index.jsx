import React, { Component } from "react";
import { Switch, Route} from "react-router-dom";
import { Side, Container, Section, MiddleContainer } from "./style";
import ListContainer from "../ListContainer";
import Order from "../../components/Order"
import Sidebar from "../Sidebar/Sidebar"
import CardAddContainer from "../Card/CardAddContainer"
import CardEditContainer from "../Card/CardEditContainer"
import Search from "../../components/Search"
export default class index extends Component {
  
  render() {
    return (
      <Container>
        <Side >
          <Sidebar ></Sidebar>
        </Side>
        <Section> 
            <Switch>
              <Route exact path="/" component={ListContainer} />
              <Route exact path="/resultado" component={ListContainer} />
              <Route exact path="/order" component={Order} />
              <Route exact path="/search" component={Search} />
             <Route exact path="/add" component={CardAddContainer} />
             <Route exact path="/edit/:id" component={CardEditContainer} />
            </Switch>
        </Section>
      </Container>
    );
  }
}
