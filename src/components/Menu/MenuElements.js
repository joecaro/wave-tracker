import styled from "styled-components";

export const MenuContainer = styled.div`
  position: absolute;
  top: 90vh;
  height: 25vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
`;

export const MenuBackground = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #ffffff22;
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
`;

export const MenuButton = styled.div`
  font-size: 2.5rem;
  margin: 3rem;
  margin-top: 1rem;
  color: white;
`;
