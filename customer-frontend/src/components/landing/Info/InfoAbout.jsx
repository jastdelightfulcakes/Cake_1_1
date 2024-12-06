import { PromoVideo } from "components/shared/PromoVideo/PromoVideo";
import { useState } from "react";
import Link from "next/link";

export const Info = () => {
  const [play, setPlay] = useState(false);
  const url = play
    ? "https://www.youtube.com/embed/K1yp7Q1hH1c?autoplay=1"
    : "";
  return (
    <>
      {/* <!-- BEGIN INFO BLOCKS --> */}
          {/* <div className="info-blocks" style={{ marginTop: "60px" }}> */}
          <div className="info-blocks">
        <div
          className="info-blocks__item js-img"
          style={{ backgroundImage: `url('/assets/img/info-item-bg1.jpg')` }}
        >
          <div className="wrapper">
            <div className="info-blocks__item-img">
              <img
                src="/assets/img/info-item-img1.jpg"
                className="js-img"
                alt=""
              />
            </div>
            <div className="info-blocks__item-text">
              <span className="saint-text">Who are We</span>
                          <h2>We are best cake Providers</h2>
                          <p style={{ color: "#000" }}>
                              We are not just a bakery, we are not just bakers. In fact, we are just like you, two sisters fascinated with sweet indulgence, who dreamt of creating an appetizing fairy land of divine delicacies that relishes the utmost desires.
                           </p>
              {/*<Link href="/shop">*/}
              {/*  <a className="btn">Shop now</a>*/}
              {/*</Link>*/}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- INFO BLOCKS EOF   --> */}
    </>
  );
};
