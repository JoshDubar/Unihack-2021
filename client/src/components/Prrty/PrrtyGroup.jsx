import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import PrrtyGroupMember from "./PrrtyGroupMember";

const PrrtyHome = () => {
  return (
    <Box padding="0 10rem" height="100vh" width="100%">
      <Grid
        container
        spacing={6}
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={6} style={{ height: "70%" }}>
          <Box
            border="1px solid black"
            borderRadius="3rem"
            height="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {/* <Box position="relative" top="-4.5rem">
              <Avatar style={{ width: "9rem", height: "9rem" }}>PG</Avatar>
            </Box> */}
            <Typography>Prrty Group Name</Typography>
            <Typography>Prrty Group Name</Typography>
            <Typography>Prrty Group Name</Typography>
            <Typography>Prrty Group Name</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} style={{ height: "70%" }}>
          <Box border="1px solid black" height="100%">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              marginLeft="1rem"
              marginBottom="1rem"
            >
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
              >
                Prrty Members
              </Typography>
              <Typography style={{ fontSize: "1rem", fontWeight: "bold" }}>
                <i>Amount owed</i>
              </Typography>
            </Box>

            {[1, 2, 3, 4].map((name) => (
              <PrrtyGroupMember key={`member__${name}`} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PrrtyHome;
