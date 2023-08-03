import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import BuyPage from '../Components/BuyPage/BuyPage';
import Cart from "../Components/Cart/Cart";
import Confirm from "../Components/Confirm/Confirm";

const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/buy" element={<BuyPage/>}/>
        <Route path="/pay" element={<Cart/>}/>
        <Route path="/confirm" element={<Confirm/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
