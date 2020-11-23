import React from "react";
import "./Home.css";
import Product from "./product/Product";
import HomePageData from "../JsonObjects/HomePage_json";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={HomePageData[0].id}
            title={HomePageData[0].title}
            price={HomePageData[0].price}
            image={HomePageData[0].image}
            rating={HomePageData[0].rating}
          />
          <Product
            id={HomePageData[1].id}
            title={HomePageData[1].title}
            price={HomePageData[1].price}
            image={HomePageData[1].image}
            rating={HomePageData[1].rating}
          />
          {/*Product*/}
        </div>

        <div className="home__row">
          <Product
            id={HomePageData[2].id}
            title={HomePageData[2].title}
            price={HomePageData[2].price}
            image={HomePageData[2].image}
            rating={HomePageData[2].rating}
          />
          <Product
            id={HomePageData[3].id}
            title={HomePageData[3].title}
            price={HomePageData[3].price}
            image={HomePageData[3].image}
            rating={HomePageData[3].rating}
          />
          <Product
            id={HomePageData[4].id}
            title={HomePageData[4].title}
            price={HomePageData[4].price}
            image={HomePageData[4].image}
            rating={HomePageData[4].rating}
          />
        </div>

        <div className="home__row">
          <Product
            id={HomePageData[5].id}
            title={HomePageData[5].title}
            price={HomePageData[5].price}
            image={HomePageData[5].image}
            rating={HomePageData[5].rating}
          />
        </div>

        <div className="home__row">{/*Product*/}</div>
      </div>
    </div>
  );
}

export default Home;
