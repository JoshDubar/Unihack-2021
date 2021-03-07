import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";
import PrrtySidebar from "./PrrtySidebar";
import PrrtyGroup from "./PrrtyGroup";
import NoPrrties from "./NoPrrties";
import { Redirect, useHistory } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { retrieveUserData } from "../../actions/sendUserData";
const PrrtyHome = ({ user, groups, updateUser }) => {
  const history = useHistory();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser && !user.username) {
      retrieveUserData(currentUser.uid, history, updateUser);
    }
  }, [currentUser, history, updateUser, user]);
  return currentUser ? (
    <Box display="flex" flexDirection="row">
      <PrrtySidebar />
      {groups.length === 0 ? <NoPrrties /> : <PrrtyGroup />}
    </Box>
  ) : (
    <Redirect exact to="/" />
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch({ type: "LOGIN", payload: user }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrrtyHome);
