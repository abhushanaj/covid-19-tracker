import React  from "react";

/* Styling */
import "./countryStatsTable.styles.scss"


interface Props{

}

const CountryStatsTable:React.FC<Props>=()=>{
	return (
		<div className="country-stats-table">
			<h4>Today's Cases</h4>
			<div className="table">

				<tr>
					<td><img src="https://disease.sh/assets/img/flags/af.png" alt=""/> <span>Afghanistan</span></td>
					<td>0</td>
				</tr>

			</div>
		</div>
	)
}


export default CountryStatsTable;