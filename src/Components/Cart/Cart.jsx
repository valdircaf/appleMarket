import React, { useContext } from 'react';
import '../../Styles/Components/Cart.scss';
import { Context } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const {nameBuy, setNameBuy, setContCart, contCart} = useContext(Context);
  const navigate = useNavigate();
  const removeObj = (id)=>{
    let newArr = nameBuy.filter(obj => obj.id !== id);
    setNameBuy(newArr);
    setContCart(contCart - 1);
  }
  const totalPrice = () => {
    return nameBuy.reduce((total, product) => total + product.currentPrice, 0);
  }

  return (
    <>
      {nameBuy.map((data) => (
        <section className="all" key={data.id}>
          <section className="infos">
        <div className={data.color ? data.color : ''}/>
        <div className="texts">
          <h1>{data.nameProduct } - {data.color}</h1>
          <h3>1</h3>
          <h2>R${data.currentPrice},00</h2>
          <button onClick={()=>{
            console.log(data.id);
            removeObj(data.id);
          }}>Remover</button>
        </div>
      </section>
        </section>
      ))}
      <section className="container-total">
        <section className="total">
          <h4>Total</h4>
          <section className="final-price">
            <h5>R${totalPrice()},00</h5>
          </section>
      </section>
        <div className={nameBuy.length === 0 ? "disable" : "btn-pay"}>
          <button disabled={nameBuy.length === 0} onClick={()=>{
              navigate('/confirm');
          }}>Pagar</button>
        </div>
        </section>

      </>
  )
}
