// import React, { Fragment, useEffect } from "react";
// import ourProcessSection from "../../assets/images/ourProcessSection.png";
// import Image from "next/image";
// import Designing from "../../assets/images/Designing.png";
// import Development from "../../assets/images/Development.png";
// import testing2 from "../../assets/images/testing2.png";
// import delivery from "../../assets/images/delivery.png";
// import Aos from "aos";
// import "aos/dist/aos.css";

// const OurProcessSection = () => {
//   useEffect(() => {
//     setTimeout(() => {
//       Aos.init();
//     }, 1500);
//   }, []);

//   return (
//     <Fragment>
//       <section className="our-process-section mb-5">
//         <div className="container ">
//           <h2 className="comman-heading text-center">Our Process</h2>
//           <div className="cst-hr-for-process mb-5"></div>
//           <div className="row">
//             <div>
//               <ul className="cst-our-process">
//                 <li data-aos="fade-up">
//                   <Image
//                     style={{ height: 188, width: 200 }}
//                     alt={"no image found"}
//                     src={ourProcessSection}
//                   />
//                   <h2 className="text-center mt-3 mx-3 processList">
//                     Planning
//                   </h2>
//                 </li>
//                 <li data-aos="fade-up">
//                   <Image
//                     style={{ height: 188, width: 200, marginLeft: 10 }}
//                     alt={"no image found"}
//                     src={Designing}
//                   />
//                   <h2 className="text-center mt-3 processList">Designing</h2>
//                 </li>
//                 <li data-aos="fade-up">
//                   <Image
//                     style={{ height: 188, width: 200, marginLeft: 10 }}
//                     alt={"no image found"}
//                     src={Development}
//                   />
//                   <h2 className="text-center mt-3 processList">Development</h2>
//                 </li>
//                 <li data-aos="fade-up">
//                   <Image
//                     style={{ height: 188, width: 200, marginLeft: 10 }}
//                     alt={"no image found"}
//                     src={testing2}
//                   />
//                   <h2 className="text-center mt-3 processList">Testing</h2>
//                 </li>
//                 <li data-aos="fade-up">
//                   <Image
//                     style={{ height: 188, width: 200, marginLeft: 10 }}
//                     alt={"no image found"}
//                     src={delivery}
//                   />
//                   <h2 className="text-center mt-3 processList">Delivery</h2>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Fragment>
//   );
// };

// export default OurProcessSection;

//new updated code with gif image

import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import delivery from "../../assets/images/output-onlinegiftools (2).gif";
import Aos from "aos";
import "aos/dist/aos.css";

const OurProcessSection = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 2500);
  }, []);

  return (
    <Fragment>
      <section className="our-process-section mb-5">
        <div className="row">
          <div>
            <ul className="cst-our-process">
              <li data-aos="fade-up">
                <Image
                  style={{
                    height: "auto",
                    width: "auto",
                    objectFit: "contain",
                  }}
                  alt={"Delivery icon"} 
                  src={delivery}
                  className="img-fluid"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurProcessSection;
