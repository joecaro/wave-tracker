import styled from "styled-components";

export const GraphText = styled.div`
  font-size: 0.75rem;
  color: ${({ currentTime }) => (currentTime >= 19 ? "#fff" : "#000")};
  margin: auto 7.2vw;
`;

export const Header = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const HeaderTitle = styled.h3`
  color: ${({ currentTime }) => (currentTime >= 19 ? "#fff" : "#fff")};
  margin: 10px 5.2vw;
`;

export const GraphDetails = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
`;
