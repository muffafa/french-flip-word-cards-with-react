import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import "./CardFlip.css"
import { Button } from "@material-ui/core"

function CardFlip({ word, increaseQueue, decreaseQueue, index, words }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleClick = () => setIsFlipped(!isFlipped)
  return (
    <div className="CardFlip">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div onClick={handleClick} className={"Card Front"}>
          <h1>{word.fr}</h1>
          <h3>"{word.example}"</h3>
        </div>
        <div onClick={handleClick} className={"Card Back"}>
          <h1>{word.tr}</h1>
        </div>
      </ReactCardFlip>
      <div className='CardButtons'>
        <Button disabled={index === 1} variant="contained" color="primary" onClick={decreaseQueue}>
          önceki
        </Button>
        <div>{index}</div>
        <Button disabled={index === words.length} variant="contained" color="primary" onClick={increaseQueue}>
          sonraki
        </Button>
      </div>
    </div>
  )
}

export default CardFlip
