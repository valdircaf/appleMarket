import React, {useEffect, useState} from 'react'
import CheckGif from '../../Assets/Img/check.gif';
import CheckImg from '../../Assets/Img/check.svg';
import '../../Styles/Components/Confirm.scss';

export default function Confirm() {
  const [showGif, setShowGif] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setShowGif(false);
    }, 7000)
  }, [])

  return (
    <section className='container-confirm'>
      <img src={CheckGif} alt="Check" className={showGif ? "show" : "hide"}/>
      <img src={CheckImg} alt="" className={!showGif ? "showImg" : "hide"}/>
      <h1>Obrigado pela preferência!</h1>
    </section>
  )
}
