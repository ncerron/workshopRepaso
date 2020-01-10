import React from "react";
import Card from "../components/Card/Card"
import {connect} from 'react-redux'

 function Order({ properties }) {
   return (
     <div>
       {console.log(properties)}
       {properties.length > 0
         ? properties.map(item => (
             <Card
               key={item.id}
               name={item.name}
               price={item.price}
               location={item.location}
               image={item.img}
             ></Card>
           ))
         : "No se encontraron propiedades"}
     </div>
   );
 }
const mapStateToProps = state => ({
  properties: state.properties
});

export default connect(mapStateToProps, null)(Order)
