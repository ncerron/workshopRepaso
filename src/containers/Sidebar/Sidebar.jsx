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
  fetchByNameA,
  fetchByPrice,
  fetchByPriceA,
  fetchSearch
} from "../../redux/actions";


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      nombre: "nombre_desc",
      precio: "precio_desc",
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
              if (this.state.nombre === "nombre_asc") {
                this.props.showOrderA();
                this.setState({ nombre: "nombre_desc" });
              } else {
                this.props.showOrder();
                this.setState({ nombre: "nombre_asc" });
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
              if (this.state.precio === "precio_asc") {
                this.props.showByPriceA();
                this.setState({ precio: "precio_desc" });
              } else {
                this.props.showByPrice();
                this.setState({ precio: "precio_asc" });
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

        <Select value={this.state.value} onChange={this.handleChange}>
          {this.state.barrio.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
          <option value="" disabled selected>
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
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  searchValues:state.search
});

const mapDispatchToProps = dispatch => {
  return {
    showOrder: () => {
      dispatch(fetchByName());
    },
    showOrderA: () => {
      dispatch(fetchByNameA());
    },
    showProperties: () => {
      dispatch(fetchProperties());
    },
    showByPrice: () => {
      dispatch(fetchByPrice());
    },
    showByPriceA: () => {
      dispatch(fetchByPriceA());
    },
    search: value => {
      dispatch(fetchSearch(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
