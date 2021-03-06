import React from "react";
import { Box } from "@material-ui/core";
import PrrtySidebar from "./PrrtySidebar";
import PrrtyGroup from "./PrrtyGroup";
const PrrtyHome = () => {
  return (
    <Box display="flex" flexDirection="row">
      <PrrtySidebar />
      <PrrtyGroup />
    </Box>
  );
};

export default PrrtyHome;
