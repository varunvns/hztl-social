import React from "react";
// import { Promo } from "@/lib/types";
import PromoCard from "./PromoCard";
import { promo } from "@/models/marketing/promo";
import { UserShoutOut } from "@/models/shoutout/user";

type MainPromoProps = {
  shoutoutList: Array<UserShoutOut>;
};

const MainPromo: React.FC<MainPromoProps> = (props) => {
  console.log(props);
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <PromoCard
            maintitle={promo.maintitle}
            maindescription={promo.maindescription}
            mainlink={promo.mainlink}
            mainlinktitle={promo.mainlinktitle}
            items={props.shoutoutList}
          />
        </div>
      </section>
    </>
  );
};

export default MainPromo;
