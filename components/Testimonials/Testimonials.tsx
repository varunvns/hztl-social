import React from "react";
import Testimonial from "./TestimonialCard";
import bgImage from "../../public/Theme/images/bg_4.jpg";
import { testimonial } from "@/models/marketing/testimonial";
import {
  UserCommentListObject,
  CustomHomePageModel,
  UserComment,
} from "@/models/post/usercomment";

type TestimonialProps = {
  items: Array<UserComment>;
};

const Testimonials: React.FC<TestimonialProps> = (props) => {
  console.log(props);
  return (
    <>
      <section className="ftco-section testimony-section bg-light">
        <Testimonial
          title={testimonial.title}
          subtext={testimonial.subtext}
          image={testimonial.image}
          items={props.items}
        />
      </section>
    </>
  );
};
export default Testimonials;
