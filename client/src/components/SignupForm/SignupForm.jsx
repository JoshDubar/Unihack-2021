import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  TextField,
  Box,
  Button,
  useTheme,
} from "@material-ui/core";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ContainerBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const validationSchema = yup.object({
  username: yup
    .string("Enter username")
    .min(3, "Username should be of minimum 3 characters in length")
    .required("Username is required"),
  email: yup
    .string("Enter email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter password")
    .min(8, "Password should be of minimum 8 characters in length")
    .required("Password is required"),
  confirmPassword: yup
    .string("Confirm password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignupForm = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        alert(JSON.stringify(values, null, 2));

        await signup(values.email, values.password);
        setLoading(false);
      }
      catch {
        console.log("error");
      }
    },
  });

  return (
    <ContainerBox bgcolor={theme.palette.primary.main}>
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
              Sign Up
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Box style={{ marginTop: "1rem" }}>
                <TextField
                  label="Username"
                  placeholder="Enter username"
                  id="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                  fullWidth
                  required
                />
                <TextField
                  label="Email"
                  placeholder="Enter email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  type="email"
                  style={{ marginTop: "0.75rem" }}
                  fullWidth
                  required
                />
                <TextField
                  style={{ marginTop: "0.75rem" }}
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
                <TextField
                  style={{ marginTop: "0.75rem" }}
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm password"
                  id="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
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
                Sign Up
              </Button>
            </form>

            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "1rem",
                fontSize: "1em",
              }}
            >
              <Typography>Already have an account?</Typography>
              <Link to="/login">Log in</Link>
            </Box>
          </Grid>
        </Paper>
      </Grid>
    </ContainerBox>
  );
};

export default SignupForm;
