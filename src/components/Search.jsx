import React from "react";
import Card from "../components/Card/Card";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Search({ search}) {
  return (
    <div>
      {search.length > 0
        ? search.map(item => (
            <Link  key={item.id}
              to={{
                pathname: `/edit/${item.id}`,
                state: {
                  name: item.name,
                  price: item.price,
                  location: item.location,
                  img: item.img
                }
              }}
            >
              <Card
                name={item.name}
                price={item.price}
                location={item.location}
                image={item.img}
              ></Card>
            </Link>
          ))
        : `No se encontraron Propiedades en ${history.state.state.barrio}`}
    </div>
  );
}
const mapStateToProps = state => ({
  search: state.search
});

export default connect(mapStateToProps, null)(Search);
