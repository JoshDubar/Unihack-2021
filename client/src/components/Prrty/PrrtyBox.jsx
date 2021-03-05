import React from "react";
import { Avatar, Box, Typography } from "@material-ui/core";
const PrrtyBox = () => {
  return (
    <Box
      marginTop="1rem"
      width="250px"
      height="5rem"
      bgcolor="white"
      style={{
        borderTopLeftRadius: "125px",
        borderBottomLeftRadius: "125px",
      }}
      display="flex"
      flexDirection="row"
      alignItems="center"
    >
      <Avatar style={{ margin: "0.3rem", width: "4.5rem", height: "4.5rem" }}>
        J
      </Avatar>
      <Box color="black" marginLeft="0.5rem">
        <Typography style={{ fontSize: "0.8rem" }}>Prrty Group Name</Typography>
        <Typography style={{ fontSize: "0.8rem", color: "sandybrown" }}>
          Hosted by you!
        </Typography>
      </Box>
    </Box>
  );
};

export default PrrtyBox;
