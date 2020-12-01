import numeral from "numeral";

/* utility to pretty print values */
export const prettyPrintNumber = (value: number) => {
  const formattedNumber = value ? numeral(value).format("0.0 a") : "0";
  return formattedNumber;
};

/* Utility to sort data */

export const sortCases = (data: any) => {
  return data.sort((a:any, b:any) => b.cases - a.cases);
};
