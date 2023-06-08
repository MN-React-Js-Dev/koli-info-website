import React, { Fragment, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ScheduleAnAppointment = () => {
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
              <div className="mt-5 mb-2">
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
                  Schedule an appointment
                </h2>
                <div className="hr-cst mb-3"></div>
                <form data-aos="zoom-in-left">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                    />
                    <br />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Email"
                    />
                    <br />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone"
                    />
                    <br />
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder=" " />
                    <br />
                  </div>
                </form>
              </div>
              <a class="btn contact-us-btn mb-5" type="submit">
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
