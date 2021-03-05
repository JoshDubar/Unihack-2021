import React from "react";
import { Box, Typography, Avatar } from "@material-ui/core";

import Logo from "../../images/LogoYellow.png";
import styled from "styled-components";
import PrrtySection from "./PrrtySection";

const LogoImage = styled.img`
  width: 100%;
`;
const Prrty = () => {
  return (
    <Box
      display="flex"
      bgcolor="#fa448c"
      height="calc(100vh - 2rem)"
      width="250px"
      flexDirection="column"
      alignItems="center"
      padding="1rem"
    >
      <LogoImage src={Logo} alt="logo" />
      <Box color="secondary" position="relative" top="-0.5rem">
        <Typography>
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
        <Avatar style={{ backgroundColor: "#333", zIndex: 1 }}>J</Avatar>
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
          <Typography>Prrty user</Typography>
        </Box>
      </Box>
      <PrrtySection />
    </Box>
  );
};

export default Prrty;
