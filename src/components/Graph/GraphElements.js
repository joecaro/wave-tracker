import styled from 'styled-components'

export const GraphText = styled.div`
position: absolute;
  right: 10vw;
  font-size: 0.75rem;
  color: ${({currentTime}) => (currentTime >= 19 ? '#fff' : '#000')}
`