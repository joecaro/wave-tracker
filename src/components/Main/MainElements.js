import styled, { keyframes } from "styled-components";

const JiggleAnimation = keyframes`
  0% 
  {
    background-color: white  
  }
  10% 
  {
    background-color: blue  
  }
  20% 
  {
    background-color: white  
  }
  30% 
  {
    background-color: blue  
  }
  40% 
  {
    background-color: white  
  }
  100% 
  {
    background-color: white  
  }

`;

export const MainContainer = styled.ul`
  position: absolute;
  top: 11vh;
  width: 100vw;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const TideContainer = styled.li`
  width: 100vw;
  height: 28vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TideWindow = styled.div`
  position: absolute;
  width: 90%;
  height: 26vh;
  top: 1vh;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const WaveContainer = styled.li`
  width: 100vw;
  height: 28vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const WaveWindow = styled.div`
  position: absolute;
  width: 90%;
  height: 26vh;
  top: 31vh;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const Card = styled.span`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80%;
  max-width: 691px;
  border-radius: 0.75rem;
  background-color: #f5f5f5;
  /* background-image: linear-gradient(#42a6d3, #11567b); */
  /* box-shadow: inset 0 0 200px rgba(255, 255, 255, 0.5); */

  transition: 0.2s;
`;

export const Graph = styled.div`
  position: absolute;
  bottom: ${({ isDisplayed }) => (isDisplayed ? 0 : "-80%")};
  width: 100%;
  height: 80%;
  max-width: 560px;
  border-radius: 1.5rem;
  background-color: white;
  transition: ease-in-out 0.2s;
`;

export const CardTitle = styled.div`
  position: absolute;
  top: -2.3rem;
  right: 8%;
  height: 2.3rem;
  width: 30%;
  border-radius: 10px 10px 0 0;
  background-color: #777;
  /* background-image: linear-gradient(-10deg, #c6a558 20%, #fff5bf 120%); */
  text-align: left;
`;

export const Title = styled.p`
  margin: 4px 10px;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-block;
  filter: drop-shadow(0 0 2px #00000033);
`;

//Buttons
export const ShowTideGraphButton = styled.span`
  position: absolute;
  height: 1.4rem;
  width: 1.7rem;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 3;
  animation-delay: 1s;
  transform: ${({ isDisplayed }) => (isDisplayed ? "rotate(-180deg)" : "0")};
  transition: 0.3s;
  :hover {
    cursor: pointer;
  }
`;

export const ShowWaveGraphButton = styled.span`
  position: absolute;
  height: 1.4rem;
  width: 1.7rem;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 3;
  animation-delay: 1s;
  transform: ${({ isDisplayed }) => (isDisplayed ? "rotate(-180deg)" : "0")};
  transition: 0.3s;
  :hover {
    cursor: pointer;
  }
`;

export const ButtonElementBottom = styled.div`
  position: absolute;
  width: 100%;
  height: ${({ isDisplayed }) => (isDisplayed ? "4px" : "3px")};
  bottom: ${({ isDisplayed }) => (isDisplayed ? "50%" : "0")};
  background-color: white;
  transform: ${({ isDisplayed }) => (isDisplayed ? "rotate(-45deg)" : "0")};
  transition: 0.4s;
  animation-name: ${JiggleAnimation};
  animation-duration: 5s;
  animation-delay: 2s;
`;

export const ButtonElementSide = styled.div`
  position: absolute;
  width: ${({ isDisplayed }) => (isDisplayed ? "4px" : "3px")};
  height: ${({ isDisplayed }) => (isDisplayed ? "1.7rem" : "1.4rem")};
  left: ${({ isDisplayed }) => (isDisplayed ? "45%" : "0")};
  top: ${({ isDisplayed }) => (isDisplayed ? "-5px" : "0")};
  background-color: white;
  transform: ${({ isDisplayed }) => (isDisplayed ? "rotate(-45deg)" : "none")};
  transition: 0.4s;
  animation-name: ${JiggleAnimation};
  animation-duration: 5s;
  animation-delay: 2s;
`;

export const ButtonElementLine = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 45%;
  background-color: ${({ isDisplayed }) =>
    isDisplayed ? "transparent" : "white"};
  transform: rotate(-45deg);
  animation-name: ${JiggleAnimation};
  animation-duration: 5s;
  animation-delay: 2s;
`;
