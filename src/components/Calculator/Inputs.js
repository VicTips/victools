import React, { useState } from "react";
import Box from "@mui/material/Box";
import { FormatPercentage } from "../../services/CustomFormats";
import TextField from "@mui/material/TextField";
import { typesList } from "../../services/Types";
import MenuItem from "@mui/material/MenuItem";

function Inputs() {
  const [intRate, setIntRate] = useState("");
  const [typeIn, setTypeIn] = useState("");
  const [typeOut, setTypeOut] = useState("");

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { width: "23ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="intRate"
        focused
        placeholder="1.5%"
        variant="outlined"
        label="Tasa de interés"
        color="primary"
        margin="normal"
        onChange={(e) => setIntRate(e.target.value)}
        InputProps={{
          inputComponent: FormatPercentage,
        }}
      />
      <TextField
        id="typeIn"
        focused
        select
        placeholder="Seleccione"
        label="Tipo de tasa ingresada"
        color="primary"
        margin="normal"
        value={typeIn}
        onChange={(e) => setTypeIn(e.target.value)}
        style={{textAlign: 'center'}}
      >
        {typesList.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="typeOut"
        focused
        select
        label="Tipo de tasa deseada"
        color="primary"
        margin="normal"
        value={typeOut}
        onChange={(e) => setTypeOut(e.target.value)}
        style={{textAlign: 'center'}}
      >
        {typesList.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default Inputs;
