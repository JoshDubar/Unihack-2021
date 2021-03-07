import React from "react";
import { Box, Typography, styled } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import PrrtyBox from "./PrrtyBox";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const PrrtySection = () => {
  const theme = useTheme();

  const StyledScrollBar = styled(PerfectScrollbar)`
    color: ${theme.palette.secondary.main};
    background: ${theme.palette.primary.main};
    & .ps__thumb-y,
    .ps__thumb-y:hover {
      background-color: ${theme.palette.secondary.main};
    }
  `;

  return (
    <StyledScrollBar options={{ suppressScrollX: true }}>
      <Box
        id="your-prrties"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        color="white"
      >
        <Typography
          style={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            marginLeft: true ? "0" : "2  rem",
          }}
        >
          YOUR PRRTIES
        </Typography>
        {false ? (
          <Typography
            style={{
              margin: "1rem 0 0 0",
              whiteSpace: "wrap",
              overflow: "hidden",
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          >
            You're not in any PRRTIES yet!
          </Typography>
        ) : (
          <Box marginLeft="2rem">
            {[1, 2, 3, 4, 5, 6, 7].map((val) => (
              <PrrtyBox />
            ))}
          </Box>
        )}
      </Box>
    </StyledScrollBar>
  );
};

export default PrrtySection;
