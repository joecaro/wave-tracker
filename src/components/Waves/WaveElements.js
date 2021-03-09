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

export const WhiteBackground = styled.div`
position: absolute;
background-color: ${({currentTime}) => (currentTime >= 19 ? "#fff" : "#fff")};
bottom: -94vh;
width: 100vw;
height: 100vh;
text-align: center;
overflow: wrap;
`

export const MenuList = styled.div`
`

export const MenuItem = styled.div`
width: fit-content;
margin: 10vh auto;
padding: 4px;
border-radius: 4px;
text-align: center;
display: block;
font-weight: 600;
font-size: 1.5rem;
:hover {
  background-color: #aaa;
}
`