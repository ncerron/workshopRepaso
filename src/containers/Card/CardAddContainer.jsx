import React, { Component } from "react";
import { connect } from "react-redux";
import CardAdd from "../../components/Card/CardAdd"
import {
  fetchCreate, fetchProperties
} from "../../redux/actions";
import axios from "axios"
import Swal from 'sweetalert2'

 class CardAddContainer extends Component {
   constructor(props) {
     super(props);
     this.state = {
       selectImage:"",
       selectedFile: "/images/icons/add.png",
       img: "add.png",
       name: "",
       location: "",
       price: 0
     };

     this.handleHideModal = this.handleHideModal.bind(this);
     this.handleSelectFile = this.handleSelectFile.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleInputLocation = this.handleInputLocation.bind(this);
     this.handleInputName = this.handleInputName.bind(this);
     this.handleInputPrice = this.handleInputPrice.bind(this);
   }

   handleInputName(event) {
     this.setState({ name: event.target.value.toLowerCase() });
   }
   handleInputLocation(event) {
     this.setState({ location: event.target.value.toLowerCase() });
   }
   handleInputPrice(event) {
     this.setState({ price: event.target.value });
   }
   handleHideModal() {
     this.props.history.goBack();
   }
   handleSelectFile(event) {
     this.setState({
       selectImage: event.target.files[0],
       selectedFile: URL.createObjectURL(event.target.files[0]),
       img: event.target.files[0].name
     });
   }

   handleSubmit(event) {
     event.preventDefault();
     const formData = new FormData();
     formData.append("img", this.state.selectImage);
     const config = {
       headers: {
         "content-type": "multipart/form-data"
       }
     };
     axios
       .post("/api/upload", formData, config)
       .catch(error => {console.log("error al cargar la imagen")});

     this.props.AddProperty(this.state);

     Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se agrego la propiedad',
      showConfirmButton: false,
      timer: 1000
    })

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

 const mapStateToProps = state => {
   return {
     properties: state.properties
   };
 };

 const mapDispatchToProps = dispatch => {
   return {
     AddProperty: input => {
       dispatch(fetchCreate(input));
     },
     showProperties: () => {
       dispatch(fetchProperties());
     }
   };
 };

 export default connect(mapStateToProps, mapDispatchToProps)(CardAddContainer);