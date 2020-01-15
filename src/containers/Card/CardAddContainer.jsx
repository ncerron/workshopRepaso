import React, { Component } from "react";
import { connect } from "react-redux";
import CardAdd from "../../components/Card/CardAdd"
import {
  fetchCreate
} from "../../redux/actions";
import axios from "axios"

 class CardAddContainer extends Component {
   constructor(props) {
     super(props);
     this.state = {
       selectedFile: "/images/icons/add.png",
       img: "",
       name: "",
       location: "",
       price: "",
     };

     this.handleHideModal = this.handleHideModal.bind(this);
     this.handleSelectFile = this.handleSelectFile.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleInputLocation = this.handleInputLocation.bind(this);
     this.handleInputName = this.handleInputName.bind(this);
     this.handleInputPrice = this.handleInputPrice.bind(this);
   }

   handleInputName(event) {
     this.setState({ name: event.target.value });
   }
   handleInputLocation(event) {
     this.setState({ location: event.target.value });
   }
   handleInputPrice(event) {
     this.setState({ price: event.target.value });
   }
   handleHideModal() {
     this.props.history.goBack();
   }
   handleSelectFile(event) {
     this.setState({
       //para mostrarlo en el form
       selectedFile: URL.createObjectURL(event.target.files[0]),
       img: event.target.files[0].name,
     })
   }

   handleSubmit() {
     event.preventDefault();
     const formData = new FormData();
     formData.append('img',this.state.select);
     const config = {
         headers: {
             'content-type': 'multipart/form-data'
         }
     };
     axios.post("/api/upload",formData,config)
         .then((response) => {
             //alert("The file is successfully uploaded");
         }).catch((error) => {
     });
     this.props.AddProperty(this.state);
     this.props.history.push("/");
   }

   render() {
     return (
       <CardAdd
         handleHideModal={this.handleHideModal}
         handleSelectFile={this.handleSelectFile}
         handleSubmit={this.handleSubmit}
         handleInputLocation={this.handleInputLocation}
         handleInputName={this.handleInputName}
         handleInputPrice={this.handleInputPrice}
         selectedFile={this.state.selectedFile}
       ></CardAdd>
     );
   }
 }
 const mapDispatchToProps = dispatch => {
   return {
     AddProperty: input=> {
       dispatch(fetchCreate(input))
     }
   };
 };

 export default connect(null, mapDispatchToProps)(CardAddContainer);