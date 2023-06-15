import React, { Fragment, useState, useEffect } from "react";
import { createApplyJob } from "@/Redux/module/createApplyJob";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";

const FormSection = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const ID = router.query;
    const [dataFle, setdataFle] = useState()
    const formData = new FormData();

    const [selectedFile, setSelectedFile] = useState(null);

    const [data, setData] = useState({
        opening_ref_id: ID.Id,
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        experience: "",
        in_days: "",
        current_location: "",
        skills: "",
        gender: '',
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value,
        });
    };

    const onFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        formData.append("opening_ref_id", ID);
        formData.append("first_name", data?.first_name);
        formData.append("last_name", data?.last_name);
        formData.append("gender", data?.gender);
        formData.append("email", data?.email);
        formData.append("phone", data?.phone);
        formData.append("experience", data?.experience);
        formData.append("in_days", data?.in_days);
        formData.append("current_location", data?.current_location);
        formData.append("skills", data?.skills);
        formData.append("resume", selectedFile);
        dispatch(createApplyJob(formData));
         
    };
    console.log("data", data);
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
                        <div className="flex justifyContent-center">
                            <h1 className=" pt-5 mt-5  text-center">Apply for this job</h1>
                            <div className="cst-hr-for-process mb-5" />
                            <div className=" m-2 mb-3 row">
                                <div className="col">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="First Name"
                                        name="first_name"
                                        value={data?.first_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Last Name"
                                        name="last_name"
                                        value={data?.last_name}
                                        onChange={handleChange}
                                    /></div>
                            </div>
                            <div className=" m-2 mb-3 row">
                                <div className="col">
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder="Email"
                                        name="email"
                                        value={data?.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Gender"
                                        name="gender"
                                        value={data?.gender}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className=" m-2 mb-3 row">
                                <div className="col">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Phone Number"
                                        name="phone"
                                        value={data?.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col">
                                    <div className="mb-3 row">
                                        <div className="col">
                                            <input
                                                type="Number"
                                                class="form-control"
                                                placeholder="Experience Years"
                                                name="experience"
                                                value={data?.experience}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="Number"
                                                class="form-control"
                                                placeholder="Experience Months"
                                                name="ssss"
                                                value={dataFle}

                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" m-2 mb-3 row">
                                <div className="col">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Available To Join (in days)"
                                        name="in_days"
                                        value={data?.in_days}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="
                                        Current Location"
                                        name="current_location"
                                        value={data?.current_location}
                                        onChange={handleChange}
                                    /></div>
                            </div>
                            <div className=" m-3 mb-3 row">
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Skills"
                                    name="skills"
                                    value={data?.skills}
                                    onChange={handleChange}
                                ></textarea>
                                <br />
                            </div>
                            <div class="m-3 Column border border" id="resume-droppable" style={{ borderRadius: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <input type="file" class="mt-3" id="resume-upload" data-field-identifier="resume" container="resumes" name="resume" placeholder="" value={data?.resume} onChange={onFileChange}></input>
                                <span class="mb-3">Only pdf and imgae flies rae allowed. 5MB max file size</span>
                            </div>
                            <div class="d-flex justify-content-center">
                                <a class="btn contact-us-btn m-4 p-2 mb-5" type="submit" onClick={handleSubmit}>
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    );
};

export default FormSection;
