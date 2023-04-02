import React from "react";
import Testimonial from "./TestimonialCard";
import bgImage from "../../public/Theme/images/bg_4.jpg";
import { testimonial } from "@/models/marketing/testimonial";

const Testimonials = () => {
  return (
    <>
      <section className="ftco-section testimony-section bg-light">
        <Testimonial
          title={testimonial.title}
          subtext={testimonial.subtext}
          image={testimonial.image}
          items={testimonial.items}
        />
      </section>
    </>
  );
};
export default Testimonials;
