import React, { useState } from "react";
import Box from "@mui/material/Box";
import Inputs from "../components/Calculator/Inputs";
import Rates from "../services/Rates";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";

const Calculator = () => {
  const [intRate, setIntRate] = useState("");
  const [typeIn, setTypeIn] = useState("");
  const [typeOut, setTypeOut] = useState("");
  const [decimals, setDecimals] = useState(14);

  console.log(decimals);
  return (
    <Box m={{ xs: 2, sm: 3, md: 4, lg: 5 }} mt={{ xs: 0, sm: 1, md: 2, lg: 3 }}>
      <Inputs
        onChange={(intRate, typeIn, typeOut) => {
          setIntRate(intRate);
          setTypeIn(typeIn);
          setTypeOut(typeOut);
        }}
      />
      {intRate !== "" && typeIn !== "" && typeOut !== ""
        ? Rates(intRate, typeIn, typeOut, decimals)
        : ""}
      <br />
      <IconButton onClick={() => {setDecimals(decimals + 1)}}>
        <AddCircleIcon />
      </IconButton>
    </Box>
  );
};

export default Calculator;
