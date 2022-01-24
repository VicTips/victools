import {
  DAY360,
  DAY365,
  MONTH,
  BIMESTER,
  TRIMESTER,
  SEMESTER,
  ANNUAL,
  NDAY360,
  NDAY365,
  NMONTH,
  NBIMESTER,
  NTRIMESTER,
  NSEMESTER,
} from "./Types";

export default function Rates(intRate, typeIn, typeOut) {
  let annualEA = "";
  let result = "";

  if (intRate !== "" && !isNaN(intRate)) {
    switch (typeIn) {
      case DAY365:
        annualEA = ((1 + intRate / 100) ** 365 - 1) * 100;
        break;
      case DAY360:
        annualEA = ((1 + intRate / 100) ** 360 - 1) * 100;
        break;
      case MONTH:
        annualEA = ((1 + intRate / 100) ** 12 - 1) * 100;
        break;
      case BIMESTER:
        annualEA = ((1 + intRate / 100) ** 6 - 1) * 100;
        break;
      case TRIMESTER:
        annualEA = ((1 + intRate / 100) ** 4 - 1) * 100;
        break;
      case SEMESTER:
        annualEA = ((1 + intRate / 100) ** 2 - 1) * 100;
        break;
      case ANNUAL:
        annualEA = intRate;
        break;
      case NDAY365:
        annualEA = ((1 + intRate / 365 / 100) ** 365 - 1) * 100;
        break;
      case NDAY360:
        annualEA = ((1 + intRate / 360 / 100) ** 360 - 1) * 100;
        break;
      case NMONTH:
        annualEA = ((1 + intRate / 12 / 100) ** 12 - 1) * 100;
        break;
      case NBIMESTER:
        annualEA = ((1 + intRate / 6 / 100) ** 6 - 1) * 100;
        break;
      case NTRIMESTER:
        annualEA = ((1 + intRate / 4 / 100) ** 4 - 1) * 100;
        break;
      case NSEMESTER:
        annualEA = ((1 + intRate / 2 / 100) ** 2 - 1) * 100;
        break;
      default:
        break;
    }
  }

  if (annualEA !== "") {
    switch (typeOut) {
      case DAY365:
        result = (1 + annualEA / 100) ** (1 / 365) - 1;
        break;
      case DAY360:
        result = (1 + annualEA / 100) ** (1 / 360) - 1;
        break;
      case MONTH:
        result = (1 + annualEA / 100) ** (1 / 12) - 1;
        break;
      case BIMESTER:
        result = (1 + annualEA / 100) ** (1 / 6) - 1;
        break;
      case TRIMESTER:
        result = (1 + annualEA / 100) ** (1 / 4) - 1;
        break;
      case SEMESTER:
        result = (1 + annualEA / 100) ** (1 / 2) - 1;
        break;
      case ANNUAL:
        result = annualEA / 100;
        break;
      case NDAY365:
        result = ((1 + annualEA / 100) ** (1 / 365) - 1) * 365;
        break;
      case NDAY360:
        result = ((1 + annualEA / 100) ** (1 / 360) - 1) * 360;
        break;
      case NMONTH:
        result = ((1 + annualEA / 100) ** (1 / 12) - 1) * 12;
        break;
      case NBIMESTER:
        result = ((1 + annualEA / 100) ** (1 / 6) - 1) * 6;
        break;
      case NTRIMESTER:
        result = ((1 + annualEA / 100) ** (1 / 4) - 1) * 4;
        break;
      case NSEMESTER:
        result = ((1 + annualEA / 100) ** (1 / 2) - 1) * 2;
        break;
      default:
        break;
    }
  }

  if (typeIn === typeOut && typeOut !== "" && !isNaN(intRate)) {
    result = intRate / 100;
  }

  const DECIMALS = 14;
  let formatter = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumSignificantDigits: DECIMALS,
    maximumSignificantDigits: DECIMALS,
  });

  return formatter.format(result);
}
