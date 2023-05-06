import Header from "@/commonComponent/Header";
import React, { useState, useEffect } from "react";
import EmployeespeakImage from "../assets/images/employeespeakimage.png";
import Image from "next/image";
import ProfileImage from "../assets/images/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployeeStart } from "@/Redux/module/getAllEmployee";

const employeeSpeaks = () => {
  // const arr = [1, 2, 3, 4, 5, 6, 7];
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
    if (item.position == "seniour devloper") {
      final.push(item);
    }
  });

  return (
    <>
      <Header />
      <section className="employee-speak" style={{ background: "#E3E3FF" }}>
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6 mt-5">
              <h1 className="comman-heading">Employee Speak</h1>
              <p>
                We are a company that offers design and develop services for you
                from initial sketches to the final construction.
              </p>
            </div>
            <div className="col-lg-6">
              <Image src={EmployeespeakImage} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="qualities-we-take">
        <div className="container">
          {final?.map((item, index) => {
            return (
              <>
                <div
                  className="row mb-5 mt-5 cst-border-hjohn pt-5 pb-5 mx-1"
                  key={index}
                >
                  <div className="col-md-2 col-4">
                    <Image src={ProfileImage} className="mx-2" />
                  </div>
                  <div className="col-md-10 col-8">
                    <h2>{item.firstName + " " + item.lastName}</h2>
                    <p>{item.position} </p>
                    <p>Total Experience: {item.experience} Years</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default employeeSpeaks;
