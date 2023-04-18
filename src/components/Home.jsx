import React from "react";
import Product from "./Product";
import products from "../products.json";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://m.media-amazon.com/images/I/719J6wyriCL._SX3000_.jpg"
          alt="Hero"
          className="home__image"
        />
        <section className="home__row">
          {products.map((eachProduct) => (
            <Product
              id={eachProduct.id}
              title={eachProduct.title}
              price={eachProduct.price}
              rateNum={eachProduct.rateNum}
              src={eachProduct.src}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Home;
