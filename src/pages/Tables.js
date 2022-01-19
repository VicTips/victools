import React, { useState } from "react";
import Inputs from "../components/AmortizationTable/Inputs";
import AmortizationTable from "../components/AmortizationTable/AmortizationTable";
import Box from "@mui/material/Box";
import Rows from "../services/Rows";

const Tables = () => {
  const [loan, setLoan] = useState("");
  const [gradient, setGradient] = useState("");
  const [nper, setNper] = useState("");
  const [rate, setRate] = useState("");
  const [type, setType] = useState("");
  let rows = new Rows(loan, nper, rate);

  return (
    <Box m={{ xs: 2, sm: 3, md: 4, lg: 5 }} mt={{ xs: 0, sm: 1, md: 2, lg: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Inputs
          onChange={(loan, gradient, nper, rate, type) => {
            setLoan(loan);
            setGradient(gradient);
            setNper(nper);
            setRate(rate);
            setType(type);
          }}
        />
      </Box>
      <Box mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
        <AmortizationTable
          rows={
            type === "fixed"
              ? rows.pmtFixed()
              : type === "variable"
              ? rows.pmtVariable()
              : type === "linearGrowth"
              ? rows.linearGrowth(gradient)
              : rows.linearDecay(gradient)
          }
        />
      </Box>
    </Box>
  );
};

export default Tables;
