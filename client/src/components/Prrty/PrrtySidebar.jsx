import React, { useEffect, useState } from "react";
import { Box, Typography, Avatar } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Logo from "../../images/LogoYellow.png";
import styled from "styled-components";
import PrrtySection from "./PrrtySection";
import { connect } from "react-redux";
import { retrieveUserGroups } from "../../actions/sendUserData";
import { useHistory } from "react-router";

const LogoImage = styled.img`
  width: 100%;
`;
const PrrtySidebar = ({ groups, user }) => {
  const history = useHistory();
  const [userGroups, setUserGroups] = useState([]);
  useEffect(() => {
    if (!userGroups) {
      const getUserGroups = async () => {
        const data = await retrieveUserGroups(user.uid);
        setUserGroups(data);
      };
      getUserGroups();
    }
  }, [userGroups, user]);
  console.log(userGroups);
  const theme = useTheme();
  return (
    <Box
      display="flex"
      bgcolor={theme.palette.primary.main}
      height="calc(100vh - 2rem)"
      width="250px"
      flexDirection="column"
      alignItems="center"
      padding="1rem"
    >
      <LogoImage src={Logo} alt="logo" />
      <Box position="relative" top="-0.5rem">
        <Typography style={{ color: theme.palette.text.dark }}>
          <i>The new way to share!</i>
        </Typography>
      </Box>
      <Box
        marginTop="1rem"
        display="flex"
        flexDirection="row"
        alignItems="center"
        marginBottom="1.5rem"
      >
        <Avatar
          style={{ backgroundColor: theme.palette.avatar.main, zIndex: 1 }}
        >
          {user.username.charAt(0).toUpperCase()}
        </Avatar>
        <Box
          bgcolor="white"
          width="8rem"
          height="1.8rem"
          position="relative"
          left="-1rem"
          zIndex={0}
          style={{
            borderBottomRightRadius: "5rem",
            borderTopRightRadius: "5rem",
          }}
          padding="0 1.5rem"
          display="flex"
          alignItems="center"
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          <Typography>{user.username}</Typography>
        </Box>
      </Box>
      <PrrtySection groups={groups} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PrrtySidebar);
