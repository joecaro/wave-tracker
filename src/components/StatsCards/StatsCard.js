import React from "react";
import { InfoCardContainer } from "./StatsCardElements";
import InfoCards from "../InfoCards/InfoCards";
import SmallGraph from "../SmallGraph/SmallGraph";

const StatsCard = (props) => {
  return (
    <React.Fragment>
      <InfoCardContainer isDisplayed={props.isDisplayed}>
        <InfoCards
          graphData={props.graphData}
          data={props.data}
          cards={props.cards}
        />
      </InfoCardContainer>
    </React.Fragment>
  );
};

export default StatsCard;
