import React from "react";
import {
  Info,
  InfoCard,
  InfoCardTitle,
  InfoIcon,
  InfoTextGrid1,
  InfoTextGrid2,
  InfoTextGrid3,
  Label,
} from "./InfoCardElements";

const InfoCards = (props) => {
  return (
    <React.Fragment>
      {props.cards.map((element, index) => {
        if (index > 0) {
          return (
            <InfoCard key={element.name} index={index}>
              <InfoIcon src={element.icon} listLength={props.cards.length} />
              <InfoCardTitle>{element.name}</InfoCardTitle>
              <Info listLength={props.cards.length} index={index}>
                <InfoTextGrid1>
                  <Label>Height</Label>
                  {element.height}
                </InfoTextGrid1>
                <InfoTextGrid2 style={{ fontSize: ".7rem" }}>
                  {element.period}
                </InfoTextGrid2>
                <InfoTextGrid3 style={{ fontSize: ".7rem", fontWeight: "600" }}>
                  {element.direction}
                </InfoTextGrid3>
              </Info>
            </InfoCard>
          );
        } else
          return (
            <InfoCard key={element.name} index={index}>
              <InfoIcon src={element.icon} listLength={props.cards.length} />
              <InfoCardTitle>{element.name}</InfoCardTitle>
              <Info listLength={props.cards.length} index={index}>
                <InfoTextGrid1>
                  <Label>{element.name !== "Wind" ? `Height` : `Speed`}</Label>
                  {element.height}
                </InfoTextGrid1>
                <InfoTextGrid2 style={{ fontSize: ".7rem" }}>
                  {element.period}
                </InfoTextGrid2>
                <InfoTextGrid3 style={{ fontSize: ".7rem", fontWeight: "600" }}>
                  {element.direction}
                </InfoTextGrid3>
              </Info>
              <Info listLength={props.cards.length} index={index}>
                <InfoTextGrid1>
                  <Label>{element.nameSec}</Label>
                  {element.heightSec}
                </InfoTextGrid1>
              </Info>
            </InfoCard>
          );
      })}
    </React.Fragment>
  );
};
InfoCards.propTypes = {};

export default InfoCards;
