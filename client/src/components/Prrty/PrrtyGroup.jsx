import React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  useTheme,
  Button,
} from "@material-ui/core";
import PrrtyGroupMember from "./PrrtyGroupMember";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const PrrtyHome = () => {
  const theme = useTheme();
  const [copied, setCopied] = useState(false);
  return (
    <Box padding="0 10rem" height="100vh" width="100%">
      <Grid
        container
        spacing={10}
        alignItems="center"
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <Grid item xs={6} style={{ height: "70%" }}>
          <Box
            border="1px solid black"
            borderRadius="3rem"
            height="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="0 2rem"
            position="relative"
          >
            <Box marginTop="-5rem">
              <Avatar
                style={{
                  width: "10rem",
                  height: "10rem",
                  fontSize: "5rem",
                  backgroundColor: theme.palette.primary.main,
                }}
              >
                P
              </Avatar>
            </Box>
            <Typography style={{ fontSize: "2rem", fontWeight: "bold" }}>
              Prrty Group Name
            </Typography>
            <Typography>
              <i>where we share</i>
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
              marginTop="2rem"
            >
              <Typography>dinner @ dragon hot pot</Typography>
              <Typography>$52.00</Typography>
            </Box>
            <Box
              width="80%"
              position="absolute"
              bottom="1rem"
              left="1rem"
              right="1rem"
            >
              <hr
                style={{ marginTop: "1rem", width: "100%" }}
                variant="middle"
                flexItem
              />
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
                marginTop="1rem"
              >
                <Typography>Total</Typography>
                <Typography>$52.00</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
              >
                <Typography>due in</Typography>
                <Typography>28 days</Typography>
              </Box>
            </Box>
          </Box>
          <CopyToClipboard
            onCopy={() => setCopy(true)}
            text={"http://localhost:3001/invite"}
          >
            <Button
              style={{
                backgroundColor: theme.palette.secondary.main,
                borderRadius: 9999,
                padding: "1rem",
                color: "white",
                fontWeight: "bold",
                width: "100%",
                fontSize: "1rem",
                margin: "1rem",
              }}
            >
              CREATE A PRRTY INVITE
            </Button>
          </CopyToClipboard>
        </Grid>
        <Grid item xs={6} style={{ height: "70%" }}>
          <Box height="100%">
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
              <Typography
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  paddingRight: "1rem",
                }}
              >
                <i>Amount owed</i>
              </Typography>
            </Box>

            <PerfectScrollbar>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((user) => (
                <PrrtyGroupMember user={user} key={`member__${user}`} />
              ))}
            </PerfectScrollbar>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PrrtyHome;
