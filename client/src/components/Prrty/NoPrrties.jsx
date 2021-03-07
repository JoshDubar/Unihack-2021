import React from "react";
import { Box, Button, Typography, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import Cat from "../../images/Cat.png";
const NoPrrties = ({ setPrrties }) => {
  const theme = useTheme();
  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center">
      <img src={Cat} alt="sad-cat" width="40%" />
      <Typography style={{ position: "relative", top: "-2rem" }}>
        Oh no, you don't have anyone to share with! :(
      </Typography>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          style={{
            backgroundColor: theme.palette.secondary.main,
            borderRadius: 9999,
            padding: "1rem",
            color: "white",
            fontWeight: "bold",
            width: "25rem",
            fontSize: "1.5rem",
          }}
          onClick={() => setPrrties((prrties) => [...prrties, "prrty"])}
        >
          CREATE A PRRTY
        </Button>
      </Link>
      <Typography style={{ fontSize: "1rem", marginTop: "1rem" }}>
        <i>or receive an invite from another PRRTY Host!</i>
      </Typography>
    </Box>
  );
};

export default NoPrrties;
