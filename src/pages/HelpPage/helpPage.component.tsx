import React from "react";

/* Styling */
import "./helpPage.styles.scss";

interface Props{

}

const HelpPage:React.FC<Props>=(props)=>{
	return (
		<div className="u-container help-page">
			<h1>Welcomr to help page!!!</h1>
		</div>
	)
}

export default HelpPage;