import styled from "styled-components";

export const Header = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h3`
  width: 8rem;
  text-align: center;
  color: ${({ isSelected }) => (isSelected ? "#ffd930" : "#fff")};
  top: 0;
  margin: 0 auto;
`;

export const GraphDetails = styled.div`
  margin: 0 auto -30px;
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

export const GraphText = styled.p`
  font-size: 0.68rem;
  color: ${({ currentTime }) => (currentTime >= 19 ? "#fff" : "#000")};
  z-index: 10;
`;
export const TideGraphText = styled.p`
  font-size: 0.68rem;
  margin: 7px 10em 10px -10em;
  color: #fff;
  z-index: 10;
`;

export const GraphContainer = styled.div`
  position: absolute;
  bottom: 0vh;
`;
