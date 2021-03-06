import React from "react";
import { Avatar, Box, Typography, useTheme } from "@material-ui/core";
const PrrtyBox = () => {
  const theme = useTheme();
  return (
    <Box
      marginTop="1rem"
      width="250px"
      height="5rem"
      bgcolor="white"
      style={{
        borderTopLeftRadius: "125px",
        borderBottomLeftRadius: "125px",
        cursor: "pointer",
      }}
      display="flex"
      flexDirection="row"
      alignItems="center"
    >
      <Avatar
        style={{
          margin: "0.3rem",
          width: "4.5rem",
          height: "4.5rem",
          backgroundColor: theme.palette.avatar.main,
        }}
      >
        J
      </Avatar>
      <Box color="black" marginLeft="0.5rem">
        <Typography style={{ fontSize: "0.8rem" }}>Prrty Group Name</Typography>
        <Typography
          style={{ fontSize: "0.8rem", color: theme.palette.primary.main }}
        >
          Hosted by you!
        </Typography>
      </Box>
    </Box>
  );
};

export default PrrtyBox;
