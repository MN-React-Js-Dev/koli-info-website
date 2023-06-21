import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import leader1 from "../../assets/images/leader1.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployeeStart } from "@/Redux/module/getAllEmployee";
import Aos from "aos";
import "aos/dist/aos.css";

const LeadershipTeam = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const Data = useSelector((state) => state?.employeeData?.allemployee);
  const final = [];

  useEffect(() => {   
    dispatch(getAllEmployeeStart());
  }, []);

  useEffect(() => {
    if (Data != null) {
      setData(Data?.data?.data?.rows);
    }
  }, [Data]);

  data?.map((item) => {
    if (item.position == "T.L " || item.position == "Manager ") {
      final.push(item);
    }
  });

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="testi-hero-image ">
        <div className="container">
          <h1 className="text-center mt-5 comman-heading"  data-aos="fade-down">
            Meet Our Leadership Team
          </h1>
          <div className="cst-hr-for-process mb-5"  data-aos="fade-left"/>
          {final?.map(
            ({ firstName, lastName, position, description }, index) => (
              <>
                <div
                  className="row  mt-5 mb-5"
                  style={{ alignItems: "center" }}
                  key={index}
                >
                  <div className="col-sm-4 leaderImg">
                    <Image src={leader1} style={{ borderRadius: "50%" }}  data-aos="fade-down-right"/>
                  </div>
                  <div className="col-lg-8 " style={{ alignItems: "center" }}  data-aos="fade-down-left">
                    <div>
                      <div className="d-flex">
                        <div className="bold-font" style={{ fontSize: "20px" }}>
                          {firstName} {lastName}
                          <hr style={{ color: "black" }} />
                        </div>
                      </div>
                    </div>
                    <p>{position}</p>
                    <div className="text-cener">
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default LeadershipTeam;
