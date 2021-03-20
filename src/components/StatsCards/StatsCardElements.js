import styled from "styled-components";

export const InfoCardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
  overflow: hidden;
  filter: ${({ isDisplayed }) => (isDisplayed ? `blur(10px)` : `none`)};
  transform: ${({ isDisplayed }) =>
    isDisplayed ? `scale(0.9, 0.9)` : `scale(1, 1)`};
  transition: 0.3s;
`;
