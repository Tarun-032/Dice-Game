import styled from "styled-components"
import { useState } from "react" 

const RollDice = ({currentDice, roleDice}) => {

  return (
    <DiceContainer>
      <div className="dice" onClick= {roleDice}>
        <img src={`/images/dices/dice_${currentDice}.png`} alt="dice1"/>
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RollDice


const DiceContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
margin-top: 70px;
align-items: center;

.dice{
  cursor: pointer;

}
p{
  font-size: 24px;
}

`