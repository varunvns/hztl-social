import React from "react";
import CounterData from "./countsection";
import bgImage from "../../public/Theme/images/bg_4.jpg";
import { counterList } from "@/models/marketing/counterList";

const SectionCounter = () => {
  return (
    <>
      <section
        className="ftco-section ftco-counter img"
        id="section-counter"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <CounterData items={counterList.items} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionCounter;
