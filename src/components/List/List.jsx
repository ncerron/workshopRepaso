import React from "react";
import Card from "../Card/Card"

export default function list({ properties }) {
  return (
    <div className="container">
    {properties &&
      properties.map(item => (
        <Card key={item.id} name={item.name} price={item.price} location={item.location} image={item.img} ></Card>
        
      ))}
  </div>
  );
}
/*  <div className="container">
      {properties &&
        properties.map(item => (
          <div key={item.id}>
            <div> {item.name}</div>
            <div> {item.price}</div>
            <div> {item.location}</div>
            <img src={item.img} />
          </div>
        ))}
    </div> */