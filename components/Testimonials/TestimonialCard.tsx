import { ITestimonial, ITestimonialItem } from "@/lib/types";
import { UserComment } from "@/models/post/usercomment";

const TestimonialData = ({ title, subtext, image, items }: ITestimonial) => {
  return (
    <>
      <div
        className="overlay"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="container">
        <div className="row pb-4">
          <div className="col-md-7 heading-section ftco-animate">
            <span className="subheading">{title}</span>
            <h2 className="mb-4">{subtext}</h2>
          </div>
        </div>
      </div>
      <div className="container container-2">
        <div className="row ftco-animate">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel">
              {items.map((testimonial: UserComment) => (
                <div key={testimonial.id} className="owl-item cloned">
                  {" "}
                  {/* style={{width: 292.5px; margin-right: 30px;}} */}
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="text">
                        <p className="star">
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                        </p>
                        <p className="mb-4">{testimonial.testimonial_text}</p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage: `url(${testimonial.author_image})`,
                            }}
                          ></div>
                          <div className="pl-3">
                            <p className="name">
                              {testimonial.testimonial_author}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialData;
