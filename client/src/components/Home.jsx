import React from "react";
import { Box, Button, Typography, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import LogoPink from "../images/LogoPink.png";
const Home = () => {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <img
        src={LogoPink}
        alt="logo pink"
        width="40%"
        style={{ marginTop: "4rem" }}
      />
      <Typography
        style={{ fontSize: "50px", position: "relative", top: "-2rem" }}
      >
        The new way to share!
      </Typography>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <Button
          style={{
            borderRadius: "9999px",
            width: "15rem",
            height: "5rem",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "white",
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          LOG IN
        </Button>
      </Link>

      <Typography style={{ margin: "1rem 0", fontSize: "2rem" }}>
        <i>or</i>
      </Typography>
      <Link to="/signup" style={{ textDecoration: "none" }}>
        <Button
          style={{
            borderRadius: "9999px",
            border: "1px solid black",
            width: "15rem",
            height: "5rem",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
          }}
        >
          SIGN UP
        </Button>
      </Link>
    </Box>
  );
};

export default Home;
