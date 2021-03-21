import styled from "styled-components";

export const Header = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled.div`
  width: fit-content;
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  top: 0;
  margin: 0 auto;
  /* filter: drop-shadow(0 0 1px #00000033); */
`;

export const GraphDetails = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const GraphText = styled.div`
  font-size: 0.68rem;
  color: #000;
  z-index: 10;
  margin-bottom: 0;
  margin-top: 0;
`;
export const TideGraphText = styled.p`
  font-size: 0.68rem;
  margin: 7px 10em 0px -10em;
  color: #000;
  z-index: 10;
`;

export const GraphContainer = styled.div`
  margin: auto;
  border-radius: 5px;
  width: 100%;
  height: 90%;
  margin-top: -100%;
  background-color: white;
  transform: ${({ isSelected }) =>
    isSelected ? `scale(1, 1)` : `scale(0, 0)`};
  transition: 0.2s;
`;

export const Selector = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${({ isSelected }) => (isSelected ? "#00aaff66" : "#000")};
  border: 1px solid #fff;
  border-radius: 5px;
  margin: 0 auto;
  /* display: inline-block; */
`;

export const GraphReference = styled.span`
  height: ${({ graph }) => (graph === "wave" ? `10px` : `5px`)};
  width: ${({ graph }) => (graph === "wave" ? `2px` : `5px`)};
  border-radius: ${({ graph }) => (graph === "wave" ? `0` : `5px`)};
  background-color: ${({ graph }) =>
    graph === "wave" ? `00ffaa` : graph === "swell" ? `0044ffa` : `00aaaa`};
`;
