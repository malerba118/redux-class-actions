import React from "react";
import { connect } from "react-redux";

const Count = props => {
  return <h1>{props.count}</h1>;
};

const mapStateToProps = state => ({
  count: state
});

export default connect(mapStateToProps)(Count);
