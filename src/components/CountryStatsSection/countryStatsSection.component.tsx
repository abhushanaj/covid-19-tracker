import React, { useState, useEffect } from "react";
import axios from "axios";

/* Styling */
import "./countryStatsSection.styles.scss";

/* Constants */
import { CaseType } from "../../constants/index";

/* Components */
import CountryStatMap from "../CountryStatMap/countryStatMap.component";

interface Props {}

const CountryStatsSection: React.FC<Props> = (props) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("IN"); //iso2 for India is IN
  const [selectedCaseType, setSelectedCaseType] = useState<CaseType>("cases");
  const [countriesInfo, setCountriesInfo] = useState<any>([]);
  const [mapZoom, setMapZoom] = useState<number>(4);
  const [mapCenter, setMapCenter] = useState<[number, number]>([20, 77]);

  /* Effect to get all country Statistics */
  useEffect(() => {
    try {
      axios.get("https://disease.sh/v3/covid-19/countries").then((resp) => {
        setCountriesInfo(resp.data);
      });
    } catch (err) {
      console.log("Errror", err);
    }
  }, []);


  const handleCaseTypeChange = (e: any) => {
    setSelectedCaseType(e.target.value);
  };

  const handleCountryChange = (e: any) => {
		const selectedCountry=e.target.value;
		setSelectedCountry(selectedCountry);
    try {
      axios
        .get(`https://disease.sh/v3/covid-19/countries/${selectedCountry}`)
        .then((resp) => {
          setMapZoom(3);
          setMapCenter([
            resp.data.countryInfo.lat,
            resp.data.countryInfo.long,
          ]);
          
        });
    } catch (err) {
			console.log("Err>>>",err);
		}
  };

  return (
    <div className="country-stats-section">
      <form className="globalStatsForm">
        <div className="select__input">
          <select
            name="countryName"
            id="countryName"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            {countriesInfo.map((country: any) => {
              return (
                <option key={country.country} value={country.countryInfo.iso2}>
                  {country.country}
                </option>
              );
            })}
          </select>
        </div>

        <div className="case-choice">
          <div className="input__group">
            <label htmlFor="cases">Cases</label>
            <input
              type="radio"
              name="caseType"
              value="cases"
              id="cases"
              checked={selectedCaseType === "cases"}
              onChange={handleCaseTypeChange}
            />
          </div>

          <div className="input__group">
            <label htmlFor="deaths">Deaths</label>
            <input
              type="radio"
              name="caseType"
              value="deaths"
              id="deaths"
              checked={selectedCaseType === "deaths"}
              onChange={handleCaseTypeChange}
            />
          </div>

          <div className="input__group">
            <label htmlFor="recovered">Recovered</label>
            <input
              type="radio"
              name="caseType"
              value="recovered"
              id="recovered"
              checked={selectedCaseType === "recovered"}
              onChange={handleCaseTypeChange}
            />
          </div>
        </div>
      </form>

      <div className="statistics-map">
        {!selectedCountry ? (
          <h1>Error loading the map</h1>
        ) : (
          <CountryStatMap
            caseType={selectedCaseType}
            mapZoom={mapZoom}
            countries={countriesInfo}
            mapCenter={mapCenter}
          />
        )}
      </div>
    </div>
  );
};

export default CountryStatsSection;
