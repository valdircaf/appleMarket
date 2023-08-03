import React, {createContext, useState, useEffect} from "react";
import axios from "axios";

export const Context = createContext();

export const ContextProvider = ({children})=>{
  const [nameProduct, setNameProduct] = useState('');
  const [colorsIp14ProData, setColorsIp14Pro] = useState([]);
  const [colorsIp14Data, setColorsIp14] = useState([]);
  const [pricesData, setPricesData] = useState([]);
  const [nameBuy, setNameBuy] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [id, setId] = useState(0);
  const [cart, setCart] = useState(false);
  const [contCart, setContCart] = useState(0);





   const requisitions = async() => {
    const colorsIp14Pro = await axios.get("https://my-json-server.typicode.com/valdircaf/fakeApple/ip14ProColors");
    setColorsIp14Pro(colorsIp14Pro.data);
    const colorsIp14 = await axios.get('https://my-json-server.typicode.com/valdircaf/fakeApple/ip14Colors');
    setColorsIp14(colorsIp14.data);
    const prices = await axios.get("https://my-json-server.typicode.com/valdircaf/fakeApple/prices");
    setPricesData(prices.data);
  }

  useEffect(()=>{
    requisitions();
  }, [])

  return(
    <Context.Provider value={{setNameProduct, nameProduct, colorsIp14ProData, colorsIp14Data, pricesData, setNameBuy, nameBuy, setCurrentPrice, currentPrice, setId, id, setCart, cart, setContCart, contCart}}>
      {children}
    </Context.Provider>
  )
}
