import React from "react";
import { Box, Avatar, Typography, useTheme } from "@material-ui/core";

const PrrtyGroupMember = ({ user }) => {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      marginBottom="1rem"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" flexDirection="row" alignItems="center">
        <Avatar
          style={{
            backgroundColor: theme.palette.primary.main,
            width: "5rem",
            height: "5rem",
            marginRight: "1rem",
          }}
        />
        <Typography style={{ fontSize: "1rem", fontWeight: "bold" }}>
          {user}
        </Typography>
      </Box>
      <Box justifySelf="flex-end" paddingRight="1rem">
        <Typography style={{ color: "mediumseagreen" }}>$4.00</Typography>
      </Box>
    </Box>
  );
};

export default PrrtyGroupMember;
