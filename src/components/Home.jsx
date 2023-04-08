import React from "react";
import Product from "./Product";

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
          <Product
            id={1}
            title="leaning and organisation products by Vileda, Joseph Joseph, Brabantia and more"
            price={32.79}
            rateNum={5}
            src="https://m.media-amazon.com/images/I/31wE6PsBqeL._AC_SY460_.jpg"
          />

          <Product
            id={2}
            title="Hardback Books From Only"
            price={4}
            rateNum={4}
            src="https://images-eu.ssl-images-amazon.com/images/G/02/books/deals/print/April_23/758x608._SY608_CB592868981_.jpg"
          />

          <Product
            id={3}
            title='Fire HD 10 tablet | 10.1", 1080p Full HD, 32 GB, Black - with Ads'
            price={109.99}
            rateNum={5}
            src="https://m.media-amazon.com/images/I/71CrPofFDAL._AC_SX679_.jpg"
          />
        </section>
        <section className="home__row">
          <Product
            id={4}
            title="Amazon Fire TV 2-Series, only"
            price={169}
            rateNum={5}
            src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/YzgzMmZiNjYt/YzgzMmZiNjYt-ZDQwNTBjZTkt-w758._SY608_CB594483674_.jpg"
          />

          <Product
            id={5}
            title="Mindful Chef Healthy Hamper, 9 items, 400g x 4 frozen ready meals..."
            price={52.5}
            rateNum={4}
            src="https://m.media-amazon.com/images/I/61Qn-Q7jF8L._AC_CR0%2C0%2C0%2C0_SX960_SY720_.jpg"
          />

          <Product
            id={6}
            title="HoYiXi Case for Fire HD 10 2021 & HD 10 Plus 2021 Tablet Slim Leather Case"
            price={14.99}
            rateNum={5}
            src="https://m.media-amazon.com/images/I/71F9JoWgYYL._AC_SX679_.jpg"
          />
        </section>
        <section className="home__row">
          <Product
            id={7}
            title="ASICS Women's Gel-Excite 8 Road Running Shoe"
            price={49.99}
            rateNum={5}
            src="https://m.media-amazon.com/images/I/81AIgSIyEoL._AC_UL800_FMwebp_QL65_.jpg"
          />
        </section>
      </div>
    </div>
  );
}

export default Home;
