import footerNavData from "data/footer/footerNav";
//import paymentMethodData from "data/footer/payment";
import socialData from "data/social";
import Link from "next/link";
import { NavCol } from "./NavCol/NavCol";

export const Footer = () => {
  const footerLogo = "/assets/img/footer.png";

  const footerNav = [...footerNavData];
  const footerSocial = [...socialData];
  //const paymentMethods = [...paymentMethodData];

  return (
    <>
      {/* <!-- BEGIN FOOTER --> */}
      <footer className="footer">
        <div className="wrapper">
          <div className="footer-top">
            <div className="footer-top__social">
              <span style={{ color: "#fff" }}>Find us here:</span>
              <ul>
                {footerSocial.map((social, index) => (
                  <li key={index}>
                    <a href={social.path}>
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-top__logo">
              <Link href="/">
                <a>
                  <img style={{width:'150px'}}src={footerLogo} className="js-img" alt="" />
                </a>
              </Link>
            </div>

            {/* Payment method */}
            {/*<div className="footer-top__payments">*/}
            {/*  <span style={{ color: "#fff" }}>Payment methods:</span>*/}
            {/*  <h6>Cash On Delivery </h6>*/}
            {/*  <ul>*/}
            {/*    {paymentMethods.map((payment, index) => (*/}
            {/*      <li key={index}>*/}
            {/*        <img style={{width:'80px' , marginLeft:"2rem"}} src={payment.icon} className="js-img" alt="" />*/}
            {/*      </li>*/}
            {/*    ))}*/}
            {/*  </ul>*/}
                      {/*</div>*/}
                      <div className="footer-top__payments">
                          <span style={{ color: "#fff" }}>About Us:</span>
                          <p style={{ color: "#fff", "text-align": "justify", width: "50%" }}>
                              Welcome to our world of sweet indulgence, where dreams of divine delicacies come to life. Founded by sisters Jaini Sheth and Stuti Sheth, our venture is inspired by a shared passion for crafting irresistible treats. Together, we envisioned creating an enchanting haven of flavors that bring joy and satisfy the deepest cravings. Each creation is a labor of love, designed to transport you to an appetizing fairyland of unforgettable delights.
                          </p>
                      </div>
          </div>
          <div className="footer-copy">
            <span style={{ color: "#fff" }}>
              &copy; All rights reserved. Jast Delightful Cakes 2024
            </span>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER EOF   --> */}
    </>
  );
};
