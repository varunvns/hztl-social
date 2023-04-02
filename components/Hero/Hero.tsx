import { hero } from "@/models/marketing/hero";
import React from "react";

const Hero = () => {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: `url(${hero.image})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-center">
            <div className="col-md-9 ftco-animate pb-5 text-center fadeInUp ftco-animated">
              <p className="breadcrumbs">{hero.breadcrumb}</p>
              <h1 className="mb-0 bread">{hero.title}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
