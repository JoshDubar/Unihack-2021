import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";
import PrrtySidebar from "./PrrtySidebar";
import PrrtyGroup from "./PrrtyGroup";
import NoPrrties from "./NoPrrties";
const PrrtyHome = ({ groups }) => {
  console.log(groups);
  return (
    <Box display="flex" flexDirection="row">
      <PrrtySidebar />
      {groups.length === 0 ? <NoPrrties /> : <PrrtyGroup />}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeColor: (color, index) =>
      dispatch({ type: "CHANGE_COLOR", payload: { color, index } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrrtyHome);
