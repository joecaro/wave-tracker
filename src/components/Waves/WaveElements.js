import styled from "styled-components";

export const WaveMenu = styled.div`
  position: fixed;
  z-index: 5;
  transition: 0.3s ease-in-out;
  bottom: ${({ isOpen }) => (isOpen ? "70vh" : 0)};
`;

export const MenuIcon = styled.div`
  position: fixed;
  font-size: 2rem;
  color: gray;
  z-index: 6;
  bottom: 4.5vh;
  right: 10vw;
  width: 2rem;
  height: 2rem;
`;
