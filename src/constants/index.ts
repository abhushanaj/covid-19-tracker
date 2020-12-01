export const GLOBAL_STATS_URL="https://disease.sh/v3/covid-19/all";

export type CaseType ="recovered" | "deaths" | "cases";

export type GlobalStatsSummary={
  "updated": number,
  "cases": number,
  "todayCases": number,
  "deaths": number,
  "todayDeaths": number,
  "recovered": number,
  "todayRecovered": number,
  "active": number,
  "critical": number,
  "casesPerOneMillion": number,
  "deathsPerOneMillion": number,
  "tests": number,
  "testsPerOneMillion": number,
  "population": number,
  "oneCasePerPeople": number,
  "oneDeathPerPeople": number,
  "oneTestPerPeople": number,
  "activePerOneMillion": number,
  "recoveredPerOneMillion": number,
  "criticalPerOneMillion": number,
  "affectedCountries": number
}
