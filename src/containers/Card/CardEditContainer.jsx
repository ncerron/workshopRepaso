import React, { Component } from "react";
import { connect } from "react-redux";
import CardEdit from "../../components/Card/CardEdit";
import { fetchDelete, fetchUpdate } from "../../redux/actions";
import axios from "axios";
import Swal from "sweetalert2";

class CardEditContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: "",
      selectImage:"",
      img: this.props.location.state.img,
      name: this.props.location.state.name,
      location: this.props.location.state.location,
      price: this.props.location.state.price
    };

    this.handleHideModal = this.handleHideModal.bind(this);
    this.handleSelectFile = this.handleSelectFile.bind(this);
    this.handleInputLocation = this.handleInputLocation.bind(this);
    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputPrice = this.handleInputPrice.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
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
      selectedFile: URL.createObjectURL(event.target.files[0]),
      img: event.target.files[0].name,
      selectImage: event.target.files[0]
    });
  }

  handleDelete() {
    event.preventDefault();
    this.props.DeleteProperty(this.props.match.params.id);
    Swal.fire({
      title: "",
      text: "Se elimino la propiedad",
      icon: "success",
      confirmButtonColor: "#856bb7",
      confirmButtonText: "Ok"
    }).then(result => {
      if (result.value) {
        this.props.history.push("/");
      }
    });
  }

  handleUpdate() {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", this.state.selectImage)
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .post("/api/upload", formData, config)
      .catch(error => {console.log("error al cargar la imagen")});

    this.props.UpdateProperty(this.props.match.params.id, this.state);
    Swal.fire({
      title: "",
      text: "Se acutalizo la propiedad",
      icon: "success",
      confirmButtonColor: "#856bb7",
      confirmButtonText: "Ok"
    }).then(result => {
      if (result.value) {
        this.props.history.push("/");
      }
    });
  }

  render() {
    return (
      <CardEdit
        property={this.state}
        handleHideModal={this.handleHideModal}
        handleSelectFile={this.handleSelectFile}
        handleSubmit={this.handleSubmit}
        handleInputLocation={this.handleInputLocation}
        handleInputName={this.handleInputName}
        handleInputPrice={this.handleInputPrice}
        selectedFile={this.state.selectedFile}
        handleDelete={this.handleDelete}
        handleUpdate={this.handleUpdate}
      ></CardEdit>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    DeleteProperty: input => {
      dispatch(fetchDelete(input));
    },
    UpdateProperty: (input, p) => {
      dispatch(fetchUpdate(input, p));
    }
  };
};

export default connect(null, mapDispatchToProps)(CardEditContainer);
