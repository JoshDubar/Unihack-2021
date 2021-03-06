import React, { useState } from "react";
import { Box } from "@material-ui/core";
import PrrtySidebar from "./PrrtySidebar";
import PrrtyGroup from "./PrrtyGroup";
import NoPrrties from "./NoPrrties";
const PrrtyHome = () => {
  const [prrties, setPrrties] = useState([]);
  console.log(prrties);
  return (
    <Box display="flex" flexDirection="row">
      <PrrtySidebar />
      {prrties.length === 0 ? (
        <NoPrrties setPrrties={setPrrties} />
      ) : (
        <PrrtyGroup />
      )}
    </Box>
  );
};

export default PrrtyHome;
