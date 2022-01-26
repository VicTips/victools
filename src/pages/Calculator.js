import React, { useState } from "react";
import Box from "@mui/material/Box";
import Inputs from "../components/Calculator/Inputs";
import Rates from "../services/Rates";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const Calculator = () => {
  const [intRate, setIntRate] = useState("");
  const [typeIn, setTypeIn] = useState("");
  const [typeOut, setTypeOut] = useState("");
  const [decimals, setDecimals] = useState(8);

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
      {intRate !== "" && typeIn !== "" && typeOut !== "" ? (
        <Box>
          <Typography variant="h6" mt={1}>
            {Rates(intRate, typeIn, typeOut, decimals)}
          </Typography>

          <Typography variant="overline">Decimales </Typography>
          <IconButton
            onClick={() => {
              setDecimals(decimals - 1);
            }}
            disabled={decimals === 2 ? true : false}
            color="primary"
          >
            <RemoveCircleIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => {
              setDecimals(decimals + 1);
            }}
            disabled={decimals === 14 ? true : false}
            color="primary"
          >
            <AddCircleIcon fontSize="small" />
          </IconButton>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Calculator;
