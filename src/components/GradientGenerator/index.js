import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientContainer,
  Heading,
  TextContent,
  DirectionList,
  CustomContainer,
  CustomCard,
  CustomLabel,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    from: '#8ae323',
    to: '#014f7b',
    linearGradient: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  changeDirection = value => {
    this.setState({direction: value})
  }

  onGenerateGradient = () => {
    const {direction, from, to} = this.state
    this.setState({
      linearGradient: `to ${direction},${from},${to}`,
    })
  }

  onChangeFrom = event => {
    this.setState({from: event.target.value})
  }

  onChangeTo = event => {
    this.setState({to: event.target.value})
  }

  render() {
    const {linearGradient, from, to, direction} = this.state
    return (
      <GradientContainer
        data-testid="gradientGenerator"
        linearGradient={linearGradient}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <TextContent>Choose Direction</TextContent>
        <DirectionList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              directionDetails={each}
              key={each.directionId}
              changeDirection={this.changeDirection}
              isActive={each.value === direction}
            />
          ))}
        </DirectionList>
        <TextContent>Pick The Colors</TextContent>
        <CustomContainer>
          <CustomCard>
            <CustomLabel>{from}</CustomLabel>
            <CustomInput
              type="color"
              value={from}
              onChange={this.onChangeFrom}
            />
          </CustomCard>
          <CustomCard>
            <CustomLabel>{to}</CustomLabel>
            <CustomInput type="color" value={to} onChange={this.onChangeTo} />
          </CustomCard>
        </CustomContainer>
        <GenerateButton type="button" onClick={this.onGenerateGradient}>
          Generate
        </GenerateButton>
      </GradientContainer>
    )
  }
}
export default GradientGenerator
