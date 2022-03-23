import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [buttoninfo, setButtonInfo] = useState(<AiOutlinePlus />)
  const [mainInfo, setMainInfo] = useState("")

  const changeInfo = () => {
    if(mainInfo.length === 0) {
      setMainInfo(info)
      setButtonInfo(<AiOutlineMinus />)
    }
    else {
      setMainInfo("");
      setButtonInfo(<AiOutlinePlus />)
    }
  }



  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn' onClick={changeInfo}>{buttoninfo}</button>
    </header>
    <p>{mainInfo}</p>
  </article>;
};

export default Question;
