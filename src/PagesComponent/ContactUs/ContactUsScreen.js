import React, { Fragment, useState, useEffect } from "react";
import { contactUsStart } from "@/Redux/module/contactUs";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactUsScreen = () => {
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter();
  const [data, setData] = useState({
    yourName: "",
    email: "",
    phone: "",
    description: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };


  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    setSubmitted(true);

    const errors = {};

    if (!data.yourName) {
      errors.yourName = "Full name is required!";
    }

    if (!data.email) {
      errors.email = "Email is required!";
    }

    if (data.email) {
      emailRegex.test(data.email);
      if (!emailRegex.test(data.email)) {
        errors.email = "Email is Invalid!";
      }
    }


    if (!data.phone) {
      errors.phone = "Phone number is required!";
    }

    if (data.phone) {
      if (data.phone.length !== 10) {
        errors.phone = "Phone number must be 10 digits!";
      }
    }

    if (Object.keys(errors).length > 0) {
      setData((prevData) => ({
        ...prevData,
        errors: errors,
      }));
      return;
    }
    dispatch(contactUsStart(data));
  };

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="row  m-3 d-flex" data-aos="zoom-in">
            <div className="col-lg-5 p-3">
              <h1 className=" pt-5 mt-5 comman-heading">Get in Touch With Us</h1>
              <div className="cst-hr-for-process" />
              <div className=" m-2 mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                  name="yourName"
                  value={data?.yourName}
                  onChange={handleChange}
                />
                {submitted && !data.yourName && (
                  <small className="p-error">{data.errors.yourName}</small>
                )}
              </div>
              <div className=" m-2 mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  name="email"
                  value={data?.email}
                  onChange={handleChange}
                />
                {(submitted && !data.email && (
                  <small className="p-error">{data.errors.email}</small>))&&(<small className="p-error">Email is required</small>) || submitted && !validateEmail(data.email) && (<small className="p-error">Email is invalid</small>)
                    }
              </div>
              <div className=" m-2 mb-3">
                <input
                  type="Number"
                  class="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  value={data?.phone}
                  onChange={handleChange}
                  maxLength={10}
                  minLength={10}
                />
                {submitted && !data.phone && (
                  <small className="p-error">{data.errors.phone}</small>
                )}
              </div>
              <div className=" m-2 mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="description"
                  placeholder="Description"
                  value={data?.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <a
                class="btn contact-us-btn m-3"
                type="submit"
                onClick={() => handleSubmit()}
              >
                Send Now
              </a>
              <div className="m-3 mb-4">
                <p className="boldP">USA :</p>
                <p>
                  We are a company that offers design and develop services for
                  you from initial sketches to the final construction.
                </p>
              </div>
              <div className="m-3">
                <p className="boldP">India :</p>
                <p>
                  We are a company that offers design and develop services for
                  you from initial sketches to the final construction.
                </p>
              </div>
            </div>
            <div className="col-lg-7 p-3 mt-5">
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
        </div>
      </section>
    </Fragment>
  );
};

export default ContactUsScreen;
