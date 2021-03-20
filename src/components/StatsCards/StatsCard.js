import React from "react";
import { InfoCardContainer } from "./StatsCardElements";
import InfoCards from "../InfoCards/InfoCards";

const StatsCard = (props) => {
  return (
    <React.Fragment>
      <InfoCardContainer isDisplayed={props.isDisplayed}>
        <InfoCards data={props.data} cards={props.cards} />
      </InfoCardContainer>
    </React.Fragment>
  );
};

export default StatsCard;
