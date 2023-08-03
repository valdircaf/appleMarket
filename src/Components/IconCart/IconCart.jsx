import React, {useContext} from 'react'
import { Context } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import '../../Styles/Components/IconCart.scss'

export default function IconCart() {
  const {cart, contCart} = useContext(Context);
  const navigate = useNavigate();
  return (
    <section className={cart ? "cart" : 'hide'}>
        <button onClick={()=>{
          navigate('/pay');
        }}>{contCart}</button>
        </section>
  )
}
