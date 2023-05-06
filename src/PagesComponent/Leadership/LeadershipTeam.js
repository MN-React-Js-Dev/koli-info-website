import React, { useState, useEffect } from "react";
import Image from "next/image";
import LeaderImg from "../../assets/images/leader.png";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployeeStart } from "@/Redux/module/getAllEmployee";

const LeadershipTeam = () => {
  /*  const data = [
    {
      LeaderName: "John Doe",
      Position: "Founder,Ceo",
      Descrition:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitation ullamco laboris",
      imageUrl: "../../assets/images/leader.png",
    },
    {
      LeaderName: "John Doe",
      Position: "Founder,Ceo",
      Descrition:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitation ullamco laboris",
    },

    {
      LeaderName: "John Doe",
      Position: "Founder,Ceo",
      Descrition:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitation ullamco laboris",
    },

    {
      LeaderName: "John Doe",
      Position: "Founder,Ceo",
      Descrition:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitation ullamco laboris",
    },
  ];
   */
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

  return (
    <>
      <section className="testi-hero-image ">
        <div className="container">
          <h1 className="text-center mt-5 comman-heading">
            Meet Our Leadership Team
          </h1>
          <div className="cst-hr-for-process mb-5" />
          {final?.map((item, index) => (
            //  item.filter(data => data.position == "T.L") {}
            <>
              <div
                className="row  mt-5 mb-5"
                style={{ alignItems: "center" }}
                key={index}
              >
                <div className="col-sm-4 leaderImg">
                  <Image src={LeaderImg} style={{ borderRadius: "50%" }} />
                </div>
                <div className="col-lg-8 " style={{ alignItems: "center" }}>
                  <div>
                    <div className="d-flex">
                      <div className="bold-font" style={{ fontSize: "20px" }}>
                        {item.firstName} {item.lastName}
                        <hr style={{ color: "black" }} />
                      </div>
                    </div>
                  </div>
                  <p>{item.position}</p>
                  <div className="text-cener">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </>
          ))}

          {/* {data?.filter(data => data.position === "T.L")?.map(person => (
           <li>
           {console.log("personnn~~>>>",person)}
           {person}
         </li>
        ))
        } */}
        </div>
      </section>
    </>
  );
};

export default LeadershipTeam;
