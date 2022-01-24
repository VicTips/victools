import React from "react";
import Box from "@mui/material/Box";
import Inputs from "../components/Calculator/Inputs";

const Calculator = () => {
  return (
    <Box m={{ xs: 2, sm: 3, md: 4, lg: 5 }} mt={{ xs: 0, sm: 1, md: 2, lg: 3 }}>
      <Inputs />
    </Box>
  );
};

export default Calculator;
