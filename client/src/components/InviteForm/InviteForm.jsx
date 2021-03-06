import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import Logo from "../../images/LogoYellow.png";
import { useTheme } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";

const LogoImage = styled.img`
  width: 100%;
`;

const ContainerBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const InviteForm = () => {
  const value = "joshdubz"
  const groupName = "YepCode"
  const theme = useTheme();
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
            <LogoImage src={Logo} alt="logo" />
            <Box style={{ marginTop: "1rem" }}>
              <Typography
                variant="h1"
                style={{ fontSize: "1em", fontWeight: 200, marginTop: "1rem" }}
                weight
              >
                {value} has invited you to share with
              </Typography>
              <Typography
                variant="h1"
                style={{ fontSize: "2em", fontWeight: 200, marginTop: "1rem" }}
                weight
              >
                <strong>{groupName}</strong>
              </Typography>
            </Box>
            <Button
              color="secondary"
              variant="contained"
              type="submit"
              fullWidth
              style={{ marginTop: "1rem" }}
            >
              JOIN THIS PRRTY
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </ContainerBox>
  )
};

export default InviteForm;
