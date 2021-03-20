import styled from "styled-components";

export const Graph = styled.div`
  position: absolute;
  bottom: ${({ isDisplayed }) => (isDisplayed ? 0 : "-80%")};
  width: 100%;
  height: 80%;
  max-width: 691px;
  border-radius: 0.75rem;
  background-color: #efefef77;
  /* background-image: linear-gradient(170deg, #39c7fd, #36699d); */
  transition: ease-in-out 0.2s;
  display: flex;
  overflow: none;
`;
