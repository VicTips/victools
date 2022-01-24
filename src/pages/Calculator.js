import React, { useState } from "react";
import Box from "@mui/material/Box";
import Inputs from "../components/Calculator/Inputs";
import Rates from "../services/Rates";

const Calculator = () => {
  const [intRate, setIntRate] = useState("");
  const [typeIn, setTypeIn] = useState("");
  const [typeOut, setTypeOut] = useState("");

  return (
    <Box m={{ xs: 2, sm: 3, md: 4, lg: 5 }} mt={{ xs: 0, sm: 1, md: 2, lg: 3 }}>
      <Inputs
        onChange={(intRate, typeIn, typeOut) => {
          setIntRate(intRate);
          setTypeIn(typeIn);
          setTypeOut(typeOut);
        }}
      />
      {intRate !== "" && typeIn !== "" && typeOut !== "" ? Rates(intRate, typeIn, typeOut) : ""}
    </Box>
  );
};

export default Calculator;
