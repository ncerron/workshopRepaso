import React from "react";
import Card from "../components/Card/Card";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Order({ properties }) {
  return (
    <div>
      {console.log(properties)}
      {properties.length > 0
        ? properties.map(item => (
            <Link
              to={{
                pathname: `/edit/${item.id}`,
                state: {
                  name: item.name,
                  price: item.price,
                  location: item.location,
                  img: item.img
                }
              }}
              key={item.id}
            >
              <Card
                key={item.id}
                name={item.name}
                price={item.price}
                location={item.location}
                image={item.img}
              ></Card>
            </Link>
          ))
        : "No se encontraron Propiedades"}
    </div>
  );
}
const mapStateToProps = state => ({
  properties: state.properties
});

export default connect(mapStateToProps, null)(Order);
