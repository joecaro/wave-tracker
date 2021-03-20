import styled from "styled-components";

export const InfoCard = styled.span`
  width: 40%;
  height: ${({ listLength, index }) =>
    listLength <= 2 || index === 0 ? "88%" : "40%"};
  margin: auto 5%;
  border-radius: ${({ listLength }) => (listLength <= 2 ? ".75rem" : ".5rem")};
  box-shadow: inset 0 0 10px #ffffff44;
  background-color: #fff;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.3);
  display: flex;
  flex-wrap: wrap;
`;

export const InfoIcon = styled.img`
  position: absolute;
  height: 40px;
  width: 40px;
  margin: 10px;
  border-radius: 20px;
  border: 1px solid #ffffff88;
  background-color: #69d6e8;
`;

export const InfoCardTitle = styled.h4`
  position: absolute;
  margin-left: 15%;
  margin-top: 0;
  font-size: 0.8rem;
  color: #888;
  filter: drop-shadow(0 0 1px #00000022);
`;

export const Info = styled.section`
  width: 70%;
  height: ${({ index }) => (index === 0 ? "40%" : "70%")};
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 30%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  color: black;
  filter: drop-shadow(0 0 1px #00000022);
`;

export const Label = styled.p`
  color: #888;
  filter: drop-shadow(0 0 1px #00000022);
  font-size: 0.5em;
  display: inline;
  margin-right: 10%;
`;

export const InfoTextGrid1 = styled.p`
  height: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  grid-row: 1;
  grid-column: 1/3;
`;

export const InfoTextGrid2 = styled.p`
  height: 1rem;
  font-size: 0.5rem;
  grid-row: 2;
  margin: 0 5%;
`;
export const InfoTextGrid3 = styled.p`
  height: 1rem;
  font-size: 0.5rem;
  grid-row: 2;
  margin: 0 5%;
`;
