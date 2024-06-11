import React, { useRef, useState } from 'react'
import "./quiz.css"
import data from "./question"

const Quiz = () => {
  let [index, setIndex] = useState(0)
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score,setScore]=useState(0);
  let [result,setResult]=useState(false);

  let op1 = useRef(null);
  let op2 = useRef(null);
  let op3 = useRef(null);
  let op4 = useRef(null);

  let option_array = [op1,op2,op3,op4];

  const checkans = (e, answer) => {
    if (lock === false) {
      if (question.ans === answer) {
        e.target.classList.add("correct")
        setLock(true);
        setScore(prev=>prev+1)
      }
      else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans-1].current.classList.add("correct");
      }
    }

  }

  const next = ()=>{
    if(lock ===true){
      if(index === data.length - 1){
        setResult(true);
        return 0;
      }

      setIndex(++index);
      setQuestion(data[index]);
      setLock(false)
      option_array.map((option)=>{
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;

      })
    }
  }
  const reset = ()=>{
    setIndex(0);
    setQuestion(data[0]);
    setLock(false);
    setScore(0);
    setResult(false);
  }

  return (
    <div>
      <div className="container-quiz">
        {
          result?<></>:<>       
        <h2>{index + 1}. {question.question}</h2>
        <ul>
          <li ref={op1} onClick={(e) => { checkans(e, 1) }}>{question.op1}</li>
          <li ref={op2} onClick={(e) => checkans(e, 2)}>{question.op2}</li>
          <li ref={op3} onClick={(e) => checkans(e, 3)}>{question.op3}</li>
          <li ref={op4} onClick={(e) => checkans(e, 4)}>{question.op4}</li>
        </ul>
        <button onClick={next}>Next</button>
        <div className="index">{index+1} to {data.length} questions</div>
        </>}
        {
          result?<>
          <h2 className='result'>You Scored {score} Out of {data.length}</h2>
          <button onClick={reset}>Reset</button>
          </>:<></>
        }
      </div>
    </div>
  )
}

export default Quiz
