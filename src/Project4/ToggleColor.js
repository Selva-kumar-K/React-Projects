import { useState } from "react"

const ToggleColor = () => {
    const [backgroundColor, setBackgroundColor] = useState("white")
    const [textColor, setTextColor] = useState("#1b1b1b")
    const [buttonStyle, setButtonStye] = useState("white")

    const handleClick = () => {
        setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white") 
        setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b")
        setButtonStye(buttonStyle === "white" ? "#1b1b1b" : "white")
    }

  return (
    <>
    <section style={{backgroundColor, color: textColor}}>
        <button onClick={handleClick} style={{buttonStyle, color: textColor, border: `2px solid ${textColor}`}}>{backgroundColor === "white" ? "Dark Theme" : "White theme"}</button>
        <section className="content">
            <h1>This is some <br/> white theme example</h1>
        </section>
    </section>
   
    </>
  )
}

export default ToggleColor