import React, { useState } from "react";
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
import { useFormik } from "formik";
import * as yup from "yup";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import { useAuth } from "../../contexts/AuthContext";
import { Alert, AlertTitle } from "@material-ui/lab";
import { connect } from "react-redux";
import { retrieveUserData } from "../../actions/sendUserData";

const ContainerBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const validationSchema = yup.object({
  email: yup
    .string("Enter email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string("Enter password").required("Password is required"),
});

const LoginForm = ({ updateUser }) => {
  const theme = useTheme();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { login, currentUser } = useAuth();

  const ErrorAlert = () => (
    <Alert
      severity="error"
      style={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "0 !important",
      }}
    >
      <AlertTitle>Login Unsuccessful</AlertTitle>
    </Alert>
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await login(values.email, values.password)
        .then(() => {
          setError(false);
          setLoading(false);
          retrieveUserData(currentUser.uid, history, updateUser);
          history.push("/home");
        })
        .catch(() => {
          setError(true);
        });
    },
  });
  return !currentUser ? (
    <ContainerBox>
      <Grid>
        <Paper
          elevation={10}
          style={{
            height: "100%",
            width: "280px",
            padding: "3rem",
            color: theme.palette.primary.main,
          }}
        >
          <Grid align="center">
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            {error && <ErrorAlert />}
            <Typography
              variant="h1"
              style={{ fontSize: "2em", fontWeight: "bold", marginTop: "1rem" }}
            >
              Sign In
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Box style={{ marginTop: "1rem" }}>
                <TextField
                  label="Email"
                  placeholder="Enter email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  fullWidth
                  required
                />
                <TextField
                  style={{ marginTop: "0.5rem" }}
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  fullWidth
                  required
                />
              </Box>
              <Button
                disabled={loading}
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
            </form>
          </Grid>
        </Paper>
      </Grid>
    </ContainerBox>
  ) : (
    <Redirect to="/home" />
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
