import React, {useContext, useEffect, useState} from 'react';
import '../../Styles/Components/BuyPage.scss';
import { Context } from '../../Context/Context';
import {CiDeliveryTruck} from 'react-icons/ci';
import IconCart from '../IconCart/IconCart';


export default function BuyPage() {
  const {nameProduct, colorsIp14ProData, colorsIp14Data, pricesData, setNameBuy, nameBuy, setCurrentPrice, currentPrice, setId, id, setCart, setContCart, contCart} = useContext(Context);
  const [color, setColor] = useState('');
  const [classSection, setClassSection] = useState('');
  const [dataToMap, setDataToMap] = useState([]);
  useEffect(()=>{
    if(nameProduct === 'iPhone 14 Pro'){
      setDataToMap(colorsIp14ProData);
      setCurrentPrice(9.499);
    }
    else{
      setDataToMap(colorsIp14Data);
      setCurrentPrice(7.599);
    }
 }, [])

  return (
    <section className='container'>
      <section className="container-buy">
        <main className="left-side">
          <h1>Comprar {nameProduct}</h1>
          <h2>A partir de R$ {pricesData.map((price)=> (
            nameProduct === 'iPhone 14 Pro' ? price.ip14Pro : price.ip14
          ))}</h2>
          <section className={color ? `${color} ${classSection}` : `image`}/>
        </main>
        <aside className="right-side">
          <h3>Cor. <span>Escolha sua favorita.</span></h3>
          <p>{color}</p>
          <section className="colors">
            {dataToMap.map((colors)=>(
              <div key={colors.id}className={colors.color} style={{background: colors.hex, border: "2px solid #E7E7E8"}} onClick={()=>{
                setColor(colors.color);
                setClassSection('fadeOut');
                setTimeout(()=>{
                  setClassSection('');
                }, 1000)
              }}/>
            ))}
          </section>
        </aside>
      </section>
      <section className="final-buy">
        <section className="container-final-buy">
          <div className='buy-left-side'>
            <h1>Seu novo {nameProduct}.<br/> <span>Do seu jeito.</span></h1>
            <section className={color ? `${color}Buy ${classSection}` : ''}/>
          </div>
          <div className='buy-right-side'>
            <h1>{nameProduct} - {color}</h1>
            <h2>R$ {pricesData.map((price)=> (
            nameProduct === 'iPhone 14 Pro' ? price.ip14Pro : price.ip14
          ))}</h2>
          <h3><CiDeliveryTruck/> Entrega: </h3>
          <h4>Em estoque. <br/> Frete grátis.</h4>
          <button disabled={color === ""} className={color === "" ? "disable" : 'btn-sell'} onClick={()=>{
              setCart(true);
              setContCart(contCart + 1);
              setNameBuy([...nameBuy, {nameProduct, color, currentPrice, id}]);
              setId(id+1);
          }}>Colocar na sacola</button>
          </div>
        </section>
      </section>
      <IconCart/>
    </section>
  )
}
