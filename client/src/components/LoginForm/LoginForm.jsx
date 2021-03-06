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
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios"
// import { Alert, AlertTitle } from '@material-ui/lab';

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
  password: yup
    .string("Enter password")
    .min(8, "Password should be of minimum 8 characters in length")
    .required("Password is required"),
});

const LoginForm = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login, currentUser } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await login(values.email, values.password)
      .then(() => {
        alert(JSON.stringify(values, null, 2));
        setError("");
        setLoading(false);
      })
      .catch(err => setError("There is no user account with this email")
      )
    },
  });


  return (
    <ContainerBox >
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
                  error={
                    formik.touched.email && Boolean(formik.errors.email)
                  }
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
  );
};

export default LoginForm;
