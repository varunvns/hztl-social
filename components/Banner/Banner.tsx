import React from "react";
import Link from "next/link";

//import { banner } from "@/models/marketing/banner";
type bannerprops = {
  title: string;
  subtitle: string;
  description: string;
  primarylink: string;
  primarytext: string;
  image: string;
  secondarytext: string;
  secondarylink: string;
};
const Banner = (props: bannerprops) => {
  return (
    <>
      <div
        className="hero-wrap js-fullheight"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight align-items-center"
            data-scrollax-parent="true"
          >
            <div className="col-md-7 ftco-animate">
              <span className="subheading">{props.title}</span>
              <h1 className="mb-4">{props.subtitle}</h1>
              <p className="caps">{props.description}</p>
              <p className="mb-0">
                <Link legacyBehavior href={props.primarylink}>
                  <a className="btn btn-primary">{props.primarytext}</a>
                </Link>
                {/* <Link legacyBehavior href={props.secondarylink}>
                  <a className="btn btn-white">{props.secondarytext}</a>
                </Link> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
