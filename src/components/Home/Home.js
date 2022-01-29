import React from "react";
import "./Home.css";
import background from "../../Assets/home-Background.jpg";
import Product from "./Product/Product";
import product1 from "../../../src/Assets/product1.jpg";
import product2 from "../../../src/Assets/product2.jpg";
import product3 from "../../../src/Assets/product3.jpg";
import product4 from "../../../src/Assets/product4.jpg";
import product6 from "../../../src/Assets/product6.jpg";
import product7 from "../../../src/Assets/product7.jpg";
import product8 from "../../../src/Assets/product8.jpg";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home-image" src={background} />
        <div className="home-row">
          <Product
            id="25178132146"
            title="OPPO A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={12999}
            image={product1}
            rating={5}
          />
          <Product
            id="57213419"
            title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor| 90Hz Refresh Rate"
            price={11499}
            image={product2}
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            id="75821365845"
            title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
            price={990}
            image={product3}
            rating={3}
          />
          <Product
            id="256732157512"
            title="Sony Noise Cancelling Headphones WHCH700N: Wireless Bluetooth Over the Ear Headset with Alexa voice control - Blue"
            price={1999}
            image={product4}
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id="1965902156"
            title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X80AJ (Black) (2021 Model) | with Alexa Compatibility"
            price={72990}
            image={product6}
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id="1965902157"
            title="2021 Apple 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 256GB) - Space Grey (9th Generation)"
            price={44900}
            image={product7}
            rating={5}
          />
          <Product
            id="1965902158"
            title="Apple Watch Series 7 (GPS + Cellular, 41mm) - Midnight Aluminium Case with Midnight Sport Band - Regular"
            price={50990}
            image={product8}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
