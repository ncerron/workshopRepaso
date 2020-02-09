import React from "react";
import Card from "../components/Card/Card";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Order(props) {
  let properties = ""
  if (!props.properties.length>0) {
    properties = JSON.parse(localStorage.getItem("LS"))
  }else{
    properties= props.properties
  }
  return (
    <div>
      { properties.length > 0
        ? properties.map(item => (
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
        : "No se encontraron Propiedades"}
    </div>
  );
}
const mapStateToProps = state => ({
  properties: state.properties
}); 

export default connect(mapStateToProps, null)(Order);
