import React from 'react'
import Wireframe1 from '../../assets/images/wireframe1.png'
import Image from 'next/image'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Design1 from '../../assets/images/design1.png'
import WebDevelopment1 from '../../assets/images/web-development1.png'
import Applications1Img from '../../assets/images/applications1.png'

const OurServices = () => {
    return (
        <>
            <section className='our-services'>
                <div className='wrap-our-service'>
                    <div className='container'>
                        <h1 className='text-center text-white pt-5'>Our Services</h1>
                    <div className='cst-hr-for-process mb-5'></div>

                        <div className='row'>
                            <div className='col-sm-4 mb-4'>
                                <div className='card p-5 cst-border-cls'>
                                    <Image  src={Design1} className='mb-4 mt-4 img-fluid ' />
                                    <h2>Web Designing</h2>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                                </div>
                            </div>
                            <div className='col-sm-4 mb-4'>
                                <div className='card p-5 cst-border-cls'>
                                    <Image  src={WebDevelopment1} className='mb-4 mt-4 img-fluid ' />
                                    <h2>Web Development</h2>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                                </div>
                            </div>
                            <div className='col-sm-4 mb-4'>
                                <div className='card p-5 cst-border-cls'>
                                    <Image  src={Applications1Img} className='mb-4 mt-4 img-fluid ' />
                                    <h2>Mobile Development</h2>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center mt-5 pb-5'>
                            <button className='btn btn-ai-class'><AiOutlineLeft /></button>
                            <button className='btn btn-ai-class'><AiOutlineRight /></button>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default OurServices