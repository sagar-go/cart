import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "./Context";
import {GiShoppingCart} from 'react-icons/gi'

function Cart() {
  const { cart, setcart } = useContext(MyContext);

  // useEffect(()=>{
  //   getlocal()
  // },[])

  // const locsave = ()=>{
  //   localStorage.setItem('cart',JSON.stringify(cart));} 


  const remove = (e) => {
    let temp = cart.filter((ele) => {
      if (e.id !== ele.id) {
        return ele;
      }
    });
    setcart(temp);
    // locsave();
  };

  let item = cart.map((e) => {
    return e.price;
  });
  let sum = 0;
  item.map((e) => {
    return (sum += e);
  });
  let sum2 = 0;
  let item2 = cart.map((e) => {
    return (sum2 = sum2 + e.count * Math.round(e.price));
  });




  const addcount = (e) => {
    console.log("asdsss");
    let temp = cart.map((ele) => {
      if (e.id2 === ele.id2) {
        return { ...ele, count: ele.count + 1 };
      } else {
        return ele;
      }
    });
    setcart(temp);
    // locsave();
  };
  console.log("cart", cart);

  const remcount = (e) => {
    let temp = cart.map((ele) => {
      if (e.id2 === ele.id2) {
        return { ...ele, count: ele.count - 1 };
      } else {
        return ele;
      }
    });
    setcart(temp);
    // locsave();
  };

  // const getlocal =()=>{
  //   if(localStorage.getItem("cart")===null){
  //     localStorage.setItem("cart",JSON.stringify([]))
  //   }else {
  //     let cart_local= JSON.parse(localStorage.getItem("cart"));
  //     setcart(cart_local);
  //   }
  // }

if(cart.length){

  return (
    <>
      <div className="container2">
        {cart.map((e) => (
          <>
            <div className="prods2">
              <img src={e.image} alt="" />
              <h4>{e.title.substring(0, 25)}</h4>
              <h2>${Math.round(e.price) * e.count}</h2>
              <div className="butdiv">
                <button onClick={() => addcount(e)}>+</button>
                <h3>{e.count}</h3>
                {e.count > 1 ? (
                  <button onClick={() => remcount(e)}>-</button>
                ) : (
                  <button disabled className="disable">
                    -
                  </button>
                )}
              </div>
              <button className="removebut" onClick={() => remove(e)}>
                Remove
              </button>
            </div>
          </>
        ))}
      </div>
      <div className="cart">
                <div className="text2"> 
            <h2>Total items : {cart.length}</h2>
            <h2>Total Price   :      ${Math.round(sum2)}</h2>
            </div>
          </div>
    </>
  );
} else{

    return (

        <>
         <div className="cart">
                <div className="text2"> 
            <h2>Total items : {cart.length}</h2>
            <h2>Total Price   :      ${Math.round(sum2)}</h2>
            </div>
          </div>
       <div className="empty">
           <h4>Cart is empty</h4>
            <h4>  <GiShoppingCart size={"60px"} /></h4> 
       </div>
        
        </>
    )
}}

export default Cart;
