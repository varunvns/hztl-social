import React from "react";
// import { Promo } from "@/lib/types";
import PromoCard from "./PromoCard";
import { promo } from "@/models/marketing/promo";

const MainPromo = () => {
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <PromoCard
            maintitle={promo.maintitle}
            maindescription={promo.maindescription}
            mainlink={promo.mainlink}
            mainlinktitle={promo.mainlinktitle}
            items={promo.items}
          />
        </div>
      </section>
    </>
  );
};

export default MainPromo;
