import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  height: 12vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: -1vh;
  height: 13vh;
  width: 100vw;
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.5);
  /* filter: blur(5px); */
`;
export const WindContainer = styled.div`
  border-radius: 1rem;
  height: 50%;
  width: 90vw;
  margin: 0 10px;
  z-index: 2;
  display: flex;
`;

export const WeatherContainer = styled.div`
  border-radius: 1rem;
  height: 80%;
  width: 80vw;
  margin: auto 10px;
  display: flex;
  overflow-y: hidden;
  z-index: 2;
`;

export const WeatherItem = styled.span`
  margin: auto 1rem;
  font-weight: 600;
`;

export const WeatherText = styled.p`
  margin: 0;
  font-weight: 600;
  /* color: #000; */
  color: #fff;
  filter: drop-shadow(1px 1px 3px #00000055);
`;

export const Icon = styled.div`
  width: fit-content;
  height: 80%;
  padding-left: 10px;
  font-size: 4rem;
  color: #fff;
  margin: auto;
`;
