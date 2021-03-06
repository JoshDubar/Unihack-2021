import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  TextField,
  Box,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"

const ContainerBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const LoginForm = () => {
  const { login } = useAuth()
  return (
    <ContainerBox>
      <Grid>
        <Paper
          elevation={10}
          style={{
            height: "100%",
            width: "280px",
            padding: "3rem",
            color: "#fa448c",
          }}
        >
          <Grid align="center">
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              variant="h1"
              style={{ fontSize: "2em", fontWeight: 200, marginTop: "1rem" }}
              weight
            >
              Sign In
            </Typography>
            <Box style={{ marginTop: "1rem" }}>
              <TextField
                label="Email"
                placeholder="Enter email"
                fullWidth
                required
              />
              <TextField
                style={{ marginTop: "0.5rem" }}
                label="Password"
                type="password"
                placeholder="Enter password"
                fullWidth
                required
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              className="login-button"
              style={{ marginTop: "1rem" }}
            >
              Sign In
            </Button>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "1rem",
                fontSize: "1em",
              }}
            >
              <Typography>Don't have an account?</Typography>
              <Link to="/signup">Sign Up</Link>
            </Box>
          </Grid>
        </Paper>
      </Grid>
    </ContainerBox>
  );
};

export default LoginForm;
