import Image from "next/image";
import React from "react";
import FooterLogiImg from "../assets/Logo/footerlogo2.png";
import SVGlogo from "../assets/Logo/SVGlogo.svg";
const Footer = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-6 cst-footer-logo">
              <Image src={SVGlogo} className="mt-5 cst-footer-logo" />
            </div>
            {/* <div className='col-6'></div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
