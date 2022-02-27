import React from "react";
import { useContext, useEffect, useState } from "react";
import "./App.css";
import { MyContext } from "./Context";

function Main() {
  const {
    prod,
    setprod,
    cart,
    setcart,
    search,
    setsearch,
    toggle,
    settoggle,
    rating,
    setrating,
    slider,
    setslider,
  } = useContext(MyContext);

  const apicall = async () => {
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();
    let temp = [...data];
    setprod(temp.map((ele) => {
      return { ...ele, active: false };
    }));
    // setprod(temp2);
    console.log("prod1", prod);
  };

  useEffect(() => {
    apicall();
  }, []);

  // useEffect(()=>{
  //   getlocal()
  // },[])

  const add = (e) => {
    let temp = {
      ...e,
      count: 1,
      fav: toggle,
      id2: Math.floor(Math.random() * 1000),
    };
    setcart([...cart, temp]);
   
    // locsave();
    setprod(
      prod.map((ele) => {
        if (e.title === ele.title) {
          return {
            ...ele,
            active: !e.active,
          };
        }
        return ele;
      })
    );

    console.log("prod2", prod);
  };

  const rem = (e) => {
    let temp = cart.filter((ele) => {
      if (e.id !== ele.id) {
        return ele;
      }
    });

    setprod(
      prod.map((ele) => {
        if (e.id=== ele.id) {
          return {
            ...ele,
            active: !e.active,
          };
        }
        return ele;
      })
    );

    setcart(temp);
    // locsave();
  };


  const change = (e) => {
    setsearch(e.target.value);
  };

  const change2 = (e) => {
    // console.log(e.target.value);
    setslider(e.target.value);
  };

  const change3 = (e) => {
    setrating(e.target.value);
  };

  // const locsave = ()=>{
  //   localStorage.setItem('cart',JSON.stringify(cart));} 

    const getlocal =()=>{
      if(localStorage.getItem("cart")===null){
        localStorage.setItem("cart",JSON.stringify([]))
      }else {
        let cart_local= JSON.parse(localStorage.getItem("cart"));
        setcart(cart_local);
      }
    }

  if (prod.length!==0) {
    return (
      <>
        <input
          className="srcbox"
          type="search"
          value={search}
          onChange={change}
          placeholder="Search here"
        />
        <div className="parent">
          <div className="rating">
            <label htmlFor="">Rating</label>
            <input
              type="radio"
              className="rating"
              name="rating"
              onClick={change3}
              value={1}
            />
            <input
              type="radio"
              className="rating"
              onClick={change3}
              name="rating"
              value={2}
            />
            <input
              type="radio"
              name="rating"
              className="rating"
              onClick={change3}
              value={3}
            />
            <input
              type="radio"
              name="rating"
              onClick={change3}
              className="rating"
              value={4}
            />
            <input
              type="radio"
              name="rating"
              onClick={change3}
              className="rating"
              value={5}
            />
          </div>
          <label className="label" htmlFor="">
            Price
          </label>
          <input
            type="range"
            className="range"
            min={0}
            value={slider}
            max="1000"
            step={20}
            onChange={change2}
          />
          <h3>Showing Result for ${slider}</h3>
        </div>
        <div className="container">
          {prod
            .filter((e) => {
              if (search === "") {
                return e;
              } else if (e.title.toLowerCase().includes(search.toLowerCase())) {
                return e;
              }
            })
            .filter((e) => {
              if (slider === 1000) {
                return e
              } else if (e.price < slider) {
                return e;
              }
            })
            .filter((e) => {
              if (e.rating.rate === rating) {
                return e;
              } else if (e.rating.rate < rating) {
                return e;
              }
            })
            .map((e) => (
              <div className="prods">
                <img src={e.image} alt="" />
                <h4>{e.title.substring(0, 20)}</h4>
                <h3>${e.price}</h3>
                <h5>{e.rating.rate}</h5>
                <div className="butcart2">
                  {e.active  ? (
                    <button onClick={() => rem(e)}>Remove</button>
                  ) : (
                    <button onClick={() => add(e)}>Add</button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </>
    );
  } else{
    return <div class="loader"></div>;
  }
}

export default Main;
