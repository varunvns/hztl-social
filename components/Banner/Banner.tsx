import React from "react";
import { banner } from "@/models/marketing/banner";
const Banner = () => {
  return (
    <>
      <div
        className="hero-wrap js-fullheight"
        style={{ backgroundImage: `url(${banner.bannerImage})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight align-items-center"
            data-scrollax-parent="true"
          >
            <div className="col-md-7 ftco-animate">
              <span className="subheading">{banner.bannerTitle}</span>
              <h1 className="mb-4">{banner.bannerSubTitle}</h1>
              <p className="caps">{banner.bannerDescription}</p>
              <p className="mb-0">
                <a href={banner.bannerPrimaryLink} className="btn btn-primary">
                  {banner.bannerPrimaryText}
                </a>
                {/* <a href={banner.bannerSecondaryLink} className="btn btn-white">
                  {banner.bannerSecondaryText}
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
