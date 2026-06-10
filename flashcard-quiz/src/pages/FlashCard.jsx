
import React, {useState,useEffect,useRef} from "react"
export default function FlashCard( {flashcard}) {
    const [flip,setFlip] =useState(false) // here I am using useStatehook to track if the card is fliped or not 
    const [height,setHeight]=useState('intial')

    const frontEl=useRef()
    const backEl=useRef()

    function setMaxHeight(){
        const frontHeight=frontEl.current.getBoundingClientRect().height
        const backHeight =backEl.current.getBoundingClientRect().height;
        setHeight(Math.max(frontHeight,backHeight,100))
    }

    useEffect(setMaxHeight,[flashcard.question,flashcard.answer,flashcard.options])
    useEffect(()=>{
        window.addEventListener('resize',setMaxHeight)
        return ()=>window.removeEventListener('resize',setMaxHeight)
    }, [
      flashcard.question,
      flashcard.answer,
      flashcard.options,
    ]);
    return (
      <div
        // condtional css for card UI
        className={`card ${flip ? "flip" : ""}`}
        style={{ height: height}}
        onClick={() => setFlip(!flip)}
      >
        <div className="front" ref={frontEl}>
          {flashcard.question}
          <div className="flashcard-opitons">
            {flashcard.options.map((option) => {
              return <div className="flashcard-option">{option}</div>;
            })}
          </div>
        </div>
        <div className="back" ref={backEl}>
          {flashcard.answer}
        </div>

        {/* this code is setting a lambda as an onclick listenter which uses the usestate function to set the card to false
         */}
      </div>
    );
}