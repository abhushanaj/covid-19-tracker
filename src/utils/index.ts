import numeral from "numeral";

/* utility to pretty print values */
export const prettyPrintNumber=(value:number)=>{
	const formattedNumber= value ? numeral(value).format("0.0 a") : '0';
	return formattedNumber
}