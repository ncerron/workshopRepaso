import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      seleccion: 0,
      seleccionp: 0,
      barrio: [
        "Belgrano",
        "Recoleta",
        "Palermo",
        "Chacarita",
        "Retiro",
        "Almagro",
        "Once"
      ],
      
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
              if (this.state.seleccion === 0) {
                this.props.showOrder();
                this.setState({ seleccion: 1 });
                this.setState({ seleccionp: 0 });
              } else {
                this.props.showOrderA();
                this.setState({ seleccion: 0 });
                this.setState({ seleccionp: 0 });
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
              if (this.state.seleccionp === 0) {
                this.props.showByPrice();
                this.setState({ seleccion: 0 });
                this.setState({ seleccionp: 1 });
              } else {
                this.props.showByPriceA();
                this.setState({ seleccion: 0 });
                this.setState({ seleccionp: 0 });
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
        <Link  to={{
                pathname: `/search`,
                state: {
                  barrio: this.state.value,
                }
              }}>
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
