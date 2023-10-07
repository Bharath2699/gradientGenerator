// Style your elements here
import styled from 'styled-components/macro'

export const DirectionCardButton = styled.button`
  height: 35px;
  width: 70px;
  border-radius: 3px;
  background-color: white;
  outline: none;
  margin: 16px;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`

export const List = styled.li`
  list-style-type: none;
`
