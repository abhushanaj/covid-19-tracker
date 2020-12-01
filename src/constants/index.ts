export const GLOBAL_STATS_URL="https://disease.sh/v3/covid-19/all";

export type CaseType ="recovered" | "deaths" | "cases";

export const GLOBAL_HISTORY_STAT_URL="https://disease.sh/v3/covid-19/historical/all?lastdays=120"

export const caseTypeColors={
	"deaths":{
		color:"#d35d6e",
		backgroundColor:"rgba(211, 93, 110, 0.5)"
	},
	"recovered":{
		color:"#5aa469",
		backgroundColor:"rgba(90, 164, 105, 0.5)"
	},
	"cases":{
		color:"#db6400",
		backgroundColor:"rgba(219, 100, 0, 0.5)"
	}
}