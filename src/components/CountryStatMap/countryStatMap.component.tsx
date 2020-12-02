import React from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";

/* Styling */
import "./countryStatMap.styles.scss";

/* Constants */
import { caseTypeColors, CaseType } from "../../constants/index";



const buildMapData = (countries: any, caseType: CaseType) => {
  return countries.map((country: any) => {
		console.log(caseTypeColors[caseType]);
    return (
      <Circle
        key={country.country}
        center={[country.countryInfo.lat, country.countryInfo.long]}
        color={caseTypeColors[caseType].color}
        fillColor={caseTypeColors[caseType].color}
        fillOpacity={0.5}
        radius={Math.sqrt(country[caseType]) * 500}
      ></Circle>
    );
  });
};

interface Props {
  caseType: CaseType;
  mapZoom: number;
  mapCenter: [number, number];
  countries: any;
}

const CountryStatMap: React.FC<Props> = (props) => {
  const { caseType, mapZoom, mapCenter, countries } = props;

  console.table({ caseType, mapZoom, mapCenter });

  return countries.length > 0 ? (
    <MapContainer center={mapCenter} zoom={mapZoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {buildMapData(countries,caseType)};
    </MapContainer>
  ) : null;
};

export default CountryStatMap;
