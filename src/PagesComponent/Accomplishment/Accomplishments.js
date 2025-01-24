import React, { useState, useEffect } from "react";
const Accomplishments = () => {
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    customers: 0,
  });

  useEffect(() => {
    const startCounts = {
      experience: 10,
      projects: 100,
      clients: 50,
      customers: 150,
    };
    const interval = 50;
    const totalDuration = 2000;
    Object.keys(startCounts).forEach((key) => {
      const step = startCounts[key] / (totalDuration / interval);
      let currentCount = 0;

      const timer = setInterval(() => {
        currentCount += step;
        if (currentCount >= startCounts[key]) {
          clearInterval(timer);
          currentCount = startCounts[key];
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(currentCount) }));
      }, interval);
    });
  }, []);

  return (
    <>
      <h3 className="text-center comman-heading" style={{ paddingTop: "60px" }}>
        Accomplishments that keep us going
      </h3>
      <div className="cst-hr-for-process mb-5"></div>
      <div className="accomplishments-container">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-md-3 accomplishment-item">
              <h3>{counts.experience}+</h3>
              <p>Years of Experience </p>
            </div>
            <div className="col-md-3 accomplishment-item">
              <h3>{counts.projects}+</h3>
              <p>Successful Projects</p>
            </div>
            <div className="col-md-3 accomplishment-item">
              <h3>{counts.clients}+</h3>
              <p>Certified Clients</p>
            </div>
            <div className="col-md-3 accomplishment-item">
              <h3>{counts.customers}+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
          <svg
            className="svg-bubbles top-left"
            width="250"
            height="250"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="30" cy="30" r="30" fill="#ffcccb" opacity="0.6" />
            <circle cx="90" cy="90" r="50" fill="#ccffcc" opacity="0.6" />
            <circle cx="150" cy="60" r="40" fill="#ccccff" opacity="0.6" />
            <circle cx="60" cy="150" r="60" fill="#ffccff" opacity="0.6" />
          </svg>
          <svg
            className="svg-bubbles bottom-right"
            width="250"
            height="250"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="50" cy="50" r="40" fill="#ffffcc" opacity="0.6" />
            <circle cx="120" cy="120" r="60" fill="#ccffff" opacity="0.6" />
            <circle cx="170" cy="80" r="30" fill="#ffcccc" opacity="0.6" />
            <circle cx="90" cy="160" r="50" fill="#ccccff" opacity="0.6" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Accomplishments;
