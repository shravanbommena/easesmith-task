import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import { CartContext } from "./context/cartContext";
import ThankYou from "./components/ThankYou";
import { Switch, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (productItem) => {
    setCart((prev) => {
      return [...prev, productItem];
    });
  };
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <div>
        <div className="bg-[#165315] min-h-8 text-white text-sm font-medium grid grid-cols-3 items-center">
          <div className=""></div>
          <p className="text-center w-full">
            Free Shipping on orders above 999/-
          </p>
          <p className="text-end mr-20">Call us on: +91 98768 05120</p>
        </div>
        <Header />
        {
          <Switch>
            <Route exact path="/plants" component={Products} />
            <Route exact path="/thank-you" component={ThankYou} />
          </Switch>
        }
        <Footer />
      </div>
    </CartContext.Provider>
  );
}

export default App;
