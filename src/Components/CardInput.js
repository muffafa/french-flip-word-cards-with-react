import React, {useState} from "react"
import { TextField, Button } from "@material-ui/core"
import "./CardInput.css"
import { v4 as uuidv4 } from 'uuid'

export default function CardInput({words, setWords}) {
    const [input, setInput] = useState({id:uuidv4(), tr:"", fr:"", example:""})
    const changeTr = (e) => {
        setInput({...input, tr:e.target.value.toLowerCase()})
    }
    const changeFr = (e) => {
        setInput({...input, fr:e.target.value.toLowerCase()})
    }
    const changeExample = (e) => {
        setInput({...input, example:e.target.value})
    }
    const addHandler = (e) => {
        if(!input.tr){
            alert("Türkçe kelimeyi giriniz")
            return
        }
        if(!input.fr){
            alert("Fransızca kelimeyi giriniz")
            return
        }
        if(!input.example){
            alert("Örnek kelimeyi giriniz")
            return
        }
        setWords([...words, input])
        setInput({id:uuidv4(), tr:"", fr:"", example:""})
        alert("Kart eklendi")
    }
    return (
    <div className="TextFields">
      <div className="CardInputsField">
        <div className="CardInputField">
          <TextField value={input.fr} onChange={changeFr} id="outlined-basic" label="Fransızcası" variant="outlined" />
        </div>
        <div className="CardInputField">
          <TextField value={input.tr} onChange={changeTr} id="outlined-basic" label="Türkçesi" variant="outlined" />
        </div>
        <div className="CardInputField">
          <TextField value={input.example} onChange={changeExample} id="outlined-basic" label="Örnek Cümle" variant="outlined" />
        </div>
      </div>
      <Button onClick={addHandler} variant="contained" color="primary">
        Ekle
      </Button>
    </div>
  )
}
