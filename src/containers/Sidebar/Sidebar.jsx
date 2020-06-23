import React, { Component } from "react";
import { Link } from "react-router-dom";
import createStore from "../../redux/store";
import {
  Container,
  Header,
  Search,
  Text,
  Image,
  Select,
  SearchBtn
} from "./style";
import { connect } from "react-redux";
import {
  fetchByName,
  fetchByPrice,
  fetchSearch
} from "../../redux/actions";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      nombre: true,
      precio: true,
      barrio: [
        "Belgrano",
        "Recoleta",
        "Palermo",
        "Chacarita",
        "Retiro",
        "Almagro",
        "Once"
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSearch() {
    this.props.search(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <Container>
        <Link to="/">
          <Header>PropertyApp</Header>
        </Link>
        <Link to="/order">
          <Search
            onClick={() => {
              this.setState(state=>({nombre:!state.nombre}))
              if (this.state.nombre === true) {
                this.props.showOrder("asc");
              } else {
                this.props.showOrder("desc");
              }
              if (createStore.getState().properties.length > 0) {
                let properties_store = createStore.getState().properties;
                localStorage.setItem("LS", JSON.stringify(properties_store));
              }
            }}
          >
            <Image src="/images/icons/flechas.svg" />
            <Text>Nombre</Text>
          </Search>
        </Link>

        <Link to="/order">
          <Search
            onClick={() => {
              this.setState(state=>({precio:!state.precio}))
              if (this.state.precio === true) {
                this.props.showByPrice("asc");
              } else {
                this.props.showByPrice("desc");
              }
              if (createStore.getState().properties.length > 0) {
                let properties_store = createStore.getState().properties;
                localStorage.setItem("LS", JSON.stringify(properties_store));
              }
            }}
          >
            <Image src="/images/icons/flechas.svg" />
            <Text>Precio</Text>
          </Search>
        </Link>
      <div>
      <Select value={this.state.value} onChange={this.handleChange} selected>
          {this.state.barrio.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
          <option value="" >
            Barrios
          </option>
        </Select>
        <Link
          to={{
            pathname: `/search`,
            state: {
              barrio: this.state.value
            }
          }}
        >
          <SearchBtn onClick={this.handleSearch}>Buscar</SearchBtn>
        </Link> 
      </div>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  searchValues:state.search
});

const mapDispatchToProps = dispatch => {
  return {
    showOrder: value => {
      dispatch(fetchByName(value));
    },
    showProperties: () => {
      dispatch(fetchProperties());
    },
    showByPrice: value => {
      dispatch(fetchByPrice(value));
    },
    search: value => {
      dispatch(fetchSearch(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
