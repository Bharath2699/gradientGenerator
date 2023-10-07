// Write your code here
import {DirectionCardButton, List} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, changeDirection} = props
  const {value, displayText} = directionDetails
  const onChangeDirection = () => {
    changeDirection(value)
  }
  return (
    <List>
      <DirectionCardButton
        isActive={isActive}
        type="button"
        onClick={onChangeDirection}
      >
        {displayText}
      </DirectionCardButton>
    </List>
  )
}
export default GradientDirectionItem
