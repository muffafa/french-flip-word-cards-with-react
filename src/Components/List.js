import { Button } from "@material-ui/core"
import React, { useState } from "react"
import CardFlip from "./CardFlip"
import CardInput from "./CardInput"
import "./List.css"
import { v4 as uuidv4 } from 'uuid'

export default function List() {
  const [words, setWords] = useState([
    { id: uuidv4(), tr: "kart", fr: "carte", example: "Une carte" },
    { id: uuidv4(), tr: "ben", fr: "je", example: "Je suis un homme" },
    { id: uuidv4(), tr: "kitap", fr: "livre", example: "Un livre" },
  ])

  const [onAdd, setOnAdd] = useState(true)

  const showCards = () => {
    setOnAdd(true)
  }
  const addCards = () => {
    setOnAdd(false)
  }

  const [queue, setQueue] = useState(1)

  const increaseQueue = () => {
    setQueue((prevState) => prevState + 1)
  }
  const decreaseQueue = () => {
    setQueue((prevState) => prevState - 1)
  }

  return (
    <div>
      <div className="MenuBar">
        <Button onClick={showCards} variant="contained" color="secondary">
          Kelime Kartları
        </Button>
        <Button onClick={addCards} variant="contained" color="secondary">
          Kelime Ekle
        </Button>
      </div>
      {onAdd ? (
        words.map((word,index) => {
          if (queue === index+1) {
            return (
              <CardFlip
                key={word.id}
                word={word}
                increaseQueue={increaseQueue}
                decreaseQueue={decreaseQueue}
                index={index+1}
                words={words}
              />
            )
          }
        })
      ) : (
        <CardInput words={words} setWords={setWords}/>
      )}
    </div>
  )
}
