  
import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  Box,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import PeopleIcon from "@material-ui/icons/People";
import { Link } from "react-router-dom";

const ContainerBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200vw;
  height: 200vh;
`;

const dummyData = {
  name: "Joshua",
  userName: "OneStabCat",
  emailAddress: "joshDubar@gmail.com",
  bsbNumber: "1234567"

}
const ProfileForm = () => {

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
              <PeopleIcon />
            </Avatar>
            <Box style={{ marginTop: "1rem" }}>
              <Typography
                variant="h1"
                style={{ fontSize: "1em", fontWeight: 200, marginTop: "1rem" }}
                weight
              >
                You have been invited to {value}'s group
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
              variant="contained"
              type="submit"
              fullWidth
              className="login-button"
              style={{ marginTop: "1rem" }}
            >
              Accept Invite
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </ContainerBox>
  );
};

export default ProfileForm;