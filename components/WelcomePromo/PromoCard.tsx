import { IPromo, IPromoCard } from "@/lib/types";
import { UserShoutOut } from "@/models/shoutout/user";
import Link from "next/link";

const PromoCard = ({ maintitle, maindescription, mainlink, items }: IPromo) => {
  return (
    <>
      <div className="row justify-content-center pb-4">
        <div className="col-md-12 heading-section text-center ftco-animate">
          <span className="subheading">{maintitle}</span>
          <h2 className="mb-4">{maindescription}</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        {items.map((promocard: UserShoutOut) => (
          <div key={promocard.id} className="col-md-3 col-lg-2">
            <a
              className="course-category img d-flex align-items-center justify-content-center"
              style={{ backgroundImage: `url(${promocard.imageurl})` }}
            >
              <div className="text w-100 text-center">
                <h3>{promocard.name}</h3>
                <span>Total shoutouts:{promocard.comment}</span>
              </div>
            </a>
          </div>
        ))}
        <div className="col-md-12 text-center mt-5">
          <Link href="/shoutout" legacyBehavior>
            <a className="btn btn-secondary">See All Team mates</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PromoCard;
