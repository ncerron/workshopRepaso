import React from "react";
import Card from "./Card/Card";
import { Link } from "react-router-dom";

export default function list({ properties }) {
  return (
    <div>
      {properties && properties.length > 0
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
