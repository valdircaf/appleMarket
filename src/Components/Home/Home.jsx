import React,{ useContext } from 'react'
import '../../Styles/Components/Home.scss';
import Ip14 from '../../Assets/Img/Iphone14.png'
import Ip14Pro from '../../Assets/Img/Iphone14ProX.png';
import Ip14ProPhone from '../../Assets/Img/Iphone14Pro.png';
import { useNavigate } from 'react-router-dom';
import {Context} from '../../Context/Context';
import IconCart from '../IconCart/IconCart';

export default function Home() {
  const navigate = useNavigate();
  const {setNameProduct} = useContext(Context);


  return (
    <main className="container-home">
      <section className="container-ip14">
        <h4>Novo</h4>
        <h3>iPhone 14</h3>
        <h1>Maravilindo.</h1>
        <h2>A partir de R$ 633,25/mês ou R$ 7.599</h2>
        <button className='btn' onClick={()=>{
          navigate('/buy');
          setNameProduct('iPhone 14');
        }}>Comprar</button>
        <picture>
          <img src={Ip14} alt="iPhone 14" />
        </picture>
      </section>
      <section className="container-ip14Pro">
        <h3>iPhone 14 Pro</h3>
        <h1>Pro. E além.</h1>
        <h2>A partir de R$ 791,58/mês ou R$ 9.499</h2>
        <button className='btn' onClick={()=>{
          navigate('/buy');
          setNameProduct('iPhone 14 Pro');
        }}>Comprar</button>
        <picture>
          <img src={Ip14Pro} alt="iPhone 14" className='desktop'/>
          <img src={Ip14ProPhone} alt="iPhone 14 Pro" className='phone'/>
        </picture>
      </section>
      <IconCart/>
    </main>

  )
}
