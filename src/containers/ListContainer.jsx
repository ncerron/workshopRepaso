import React, { Component } from "react";
import { connect } from "react-redux";
import List from "../components/List";
import { fetchProperties } from "../redux/actions";

class ListContainer extends Component {
    
  componentDidMount() {
    this.props.showProperties();
  }

  render() {
    return <List properties={this.props.properties}/>;
  }
}

const mapStateToProps = state => ({
  properties: state.properties
});
const mapDispatchToProps = dispatch => {
  return {
    showProperties: () => {
      dispatch(fetchProperties());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
