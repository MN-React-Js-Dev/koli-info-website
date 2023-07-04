import React, { Fragment, useEffect, useState } from "react";
import { contactUsStart } from "@/Redux/module/contactUs";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";

const ScheduleAnAppointment = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [data, setData] = useState({
    yourName: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    dispatch(contactUsStart(data));
  };

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="mt-5 mt-5" style={{ background: "#3F689F" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="mt-5 mb-5">
                <div className="ratio ratio-1x1">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7442.266399503546!2d72.87774862484953!3d21.147096793737376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051862e39c1e3%3A0xf0b3f8e98ab74dc4!2sKOLI%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1682938315739!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mt-5 mb-2">
                <h2 className="text-white mb-3 schedule-appointment">
                  Contact Us
                </h2>
                <div className="hr-cst mb-3"></div>
                <form data-aos="zoom-in-down">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name"
                      name="yourName"
                      value={data?.yourName}
                      onChange={handleChange}
                    />
                    <br />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      name="email"
                      value={data?.email}
                      onChange={handleChange}
                    />
                    <br />
                  </div>
                  <div class="form-group">
                    <input
                      type="Number"
                      class="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      value={data?.phone}
                      onChange={handleChange}
                    />
                    <br />
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Description"
                      name="description"
                      value={data?.description}
                      onChange={handleChange}
                    ></textarea>
                    <br />
                  </div>
                </form>
              </div>
              <a class="btn contact-us-btn mb-5" type="submit" onClick={() => handleSubmit()}>
                Send Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ScheduleAnAppointment;
