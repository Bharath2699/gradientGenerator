// Style your elements here
import styled from 'styled-components/macro'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 80%;
  background-image: linear-gradient(${props => props.linearGradient});
`
export const Heading = styled.h1`
  color: white;
  font-size: 25px;
  font-weight: bold;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TextContent = styled.p`
  color: white;
  font-size: 16px;
  font-family: Roboto;
`

export const DirectionList = styled.ul`display:flex;
justify-content;center;`

export const CustomContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 17px;
`

export const CustomLabel = styled.p`
  color: white;
  font-size: 15px;
  margin-bottom: 13px;
`

export const CustomInput = styled.input`
  height: 35px;
  width: 60px;
  outline: none;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  height: 35px;
  width: 70px;
  background-color: #00c9b7;
  border-radius: 7px;
  outline: none;
  cursor: pointer;
`
