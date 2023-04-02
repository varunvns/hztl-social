//import { hero } from "@/models/marketing/hero";
import React from "react";

type heroprops = {
  image: string;
  breadcrumb: string;
  title: string;
};

const Hero = (props: heroprops) => {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-center">
            <div className="col-md-9 ftco-animate pb-5 text-center fadeInUp ftco-animated">
              <p className="breadcrumbs">{props.breadcrumb}</p>
              <h1 className="mb-0 bread">{props.title}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
