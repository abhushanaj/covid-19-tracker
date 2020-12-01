import React from "react";

/* Styling */
import "./infobox.styles.scss";

/* Constants */
import {CaseType} from "../../constants/index";

interface Props {
	caseType: CaseType
}

const InfoBox: React.FC<Props> = (props) => {

	const {caseType}=props;
  return (
    <div className={`infobox infobox--${caseType}`}>
      <h3 className="u-category">{caseType.toUpperCase()}</h3>
      <h3 className={`u-imp-stat u-${caseType}`}>23000</h3>
      <h3 className="u-history-stat">230000 in total</h3>
    </div>
  );
};

export default InfoBox;
