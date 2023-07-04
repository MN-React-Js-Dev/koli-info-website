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

    const [selectedFile, setSelectedFile] = useState(null);
    const [submitted, setSubmitted] = useState(false)
    const [isphoneValid, setIsphoneValid] = useState(false)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

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
        const name = e.target.name;

        setData((prevData) => ({
            ...prevData,
            [name]: value,
            errors: {
                ...prevData.errors,
                [name]: "",
            },
        }));
    };



    const onFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        const errors = {};

        if (!data.first_name) {
            errors.first_name = "Full name is required!";
        }

        if (!data.last_name) {
            errors.last_name = "Last name is required!";
        }

        if (!data.email) {
            errors.email = "Email is required!";
        }
        // if (!data.experience) {
        //     errors.experience = "Number of experiance is required!"
        // }

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

        const formData = new FormData();
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
                                    {submitted && !data.first_name && (
                                        <small className="p-error">{data.errors.first_name}</small>
                                    )}
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Last Name"
                                        name="last_name"
                                        value={data?.last_name}
                                        onChange={handleChange}
                                    />
                                    {submitted && !data.last_name && (
                                        <small className="p-error">{data.errors.last_name}</small>
                                    )}
                                </div>
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
                                    {(submitted && !data.email && (
                                        <small className="p-error">{data.errors.email}</small>)) || submitted && !validateEmail(data.email) && (
                                            <small className="p-error">Email is invalid</small>)}
                                </div>
                                <div className="col">
                                    <div>
                                        <select className="form-select select-field p-3" name="gender" value={data.gender} onChange={handleChange}>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    {submitted && !data.gender && (
                                        <small className="p-error">Gender is required!</small>
                                    )}
                                </div>
                                <div>
                                    <div className="col">
                                    </div>
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
                                        // minLength={10}
                                        maxLength={10}
                                    />
                                    {(submitted && !data.phone && (
                                        <small className="p-error">{data.errors.phone}</small>)) || (submitted && data.phone.length !== 10 && (
                                            <small className="p-error">Phone number must be 10 digits!</small>))}
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
                                            {submitted && !data.experience && (
                                                <small className="p-error">Experience years are required!</small>
                                            )}
                                        </div>
                                        {/* <div className="col">
                                            <input
                                                type="Number"
                                                class="form-control"
                                                placeholder="Experience Months"
                                                name="ssss"
                                                value={dataFle}
                                            />
                                            {submitted && dataFle && (
                                                <small className="p-error">Experience months are required!</small>
                                            )}
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className=" m-2 mb-3 row">
                                <div className="col">
                                    <input
                                        type="Number"
                                        class="form-control"
                                        placeholder="Available To Join (in days)"
                                        name="in_days"
                                        value={data?.in_days}
                                        onChange={handleChange}
                                    />
                                    {submitted && !data.in_days && (
                                        <small className="p-error">Available to join days are required!</small>
                                    )}
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
                                    />
                                    {submitted && !data.current_location && (
                                        <small className="p-error">Current location is required!</small>
                                    )}</div>
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
                                <span class="p-3">upload Resume</span>
                            <div class="m-3 Column border border" id="resume-droppable" style={{ borderRadius: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <input type="file" class="mt-3" id="resume-upload" data-field-identifier="resume" container="resumes" name="resume" placeholder="" value={data?.resume} onChange={onFileChange}></input>
                                {submitted && !data.resume && (
                                    <small className="p-error">Upload resume is required!</small>
                                )}
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