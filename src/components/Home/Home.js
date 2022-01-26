import React from "react";
import "./Home.css";
import background from "../../Assets/home-Background.jpg";
import Product from "./Product/Product";
import product1 from "../../../src/Assets/product1.jpg";
import product2 from "../../../src/Assets/product2.jpg";
import product3 from "../../../src/Assets/product3.jpg";
import product4 from "../../../src/Assets/product4.jpg";
import product5 from "../../../src/Assets/product5.jpg";
import product6 from "../../../src/Assets/product6.jpg";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home-image" src={background} />
        <div className="home-row">
          <Product
            title="OPPO A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={12999}
            image={product1}
            rating={5}
          />
          <Product
            title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate"
            price={11499}
            image={product2}
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
            price={378}
            image={product3}
            rating={3}
          />
          <Product
            title="Oneplus Bullets Wireless Z Bass Edition Bluetooth in Ear Earphones with mic (Black)"
            price={1999}
            image={product4}
            rating={5}
          />
          <Product
            title="Airdopes 141 TWS Earbuds with 42H Playtime, BEAST™ Mode, ENx™ Tech, ASAP™ Charge, IWP™, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)"
            price={1173}
            image={product5}
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X80AJ (Black) (2021 Model) | with Alexa Compatibility"
            price={72990}
            image={product6}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
