import React, { useState } from "react";
import Inputs from "../components/AmortizationTable/Inputs";
import AmortizationTable from "../components/AmortizationTable/AmortizationTable";
import Box from "@mui/material/Box";
import Rows from "../services/Rows";

const Tables = () => {
  const [loan, setLoan] = useState("");
  const [nper, setNper] = useState("");
  const [rate, setRate] = useState("");
  const [type, setType] = useState("");
  let rows = new Rows(loan, nper, rate);

  function Type(type, linearGradient) {
    if (type === "fixed") {
      return rows.pmtFixed();
    } else if (type === "variable") {
      return rows.pmtVariable();
    } else if (type === "linearGrowth") {
      return rows.linearGrowth(linearGradient);
    }
  }

  return (
    <Box m={{ xs: 2, sm: 3, md: 4, lg: 5 }} mt={{ xs: 0, sm: 1, md: 2, lg: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Inputs
          onChange={(loan, nper, rate, type) => {
            setLoan(loan);
            setNper(nper);
            setRate(rate);
            setType(type);
          }}
        />
      </Box>
      <Box mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
        <AmortizationTable
          rows={Type(type, 100000)}
        />
      </Box>
    </Box>
  );
};

export default Tables;
