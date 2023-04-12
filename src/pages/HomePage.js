import Header from '@/component/Header'
import React from 'react'
import heroimage from '../assets/images/heroimage.png'
import Image from 'next/image'
import Wireframe1 from '../assets/images/wireframe1.png'

const HomePage = () => {
    return (
        <>
            <Header />
            <section className='hero-section hero-image mb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 mt-5'>
                            <h1 className='ideas-into-reality'>Ideas Into Reality</h1>
                            <p className='para-for-hero'>
                                We are a company that offers design
                                and develop services for you from initial
                                sketches to the final construction.
                            </p>
                            <a class="btn contact-us-btn" type="submit">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='our-process-section mb-5'>
                <div className='container'>
                    <h2 className='our-process-heading text-center mb-5'>Our Process</h2>
                    <ul className='cst-our-process'>
                        <li >
                            <div className='circle first-circle'></div>
                            <h2 className='text-center mt-3'>Planning </h2>
                        </li>
                        <li >
                            <div className='circle second-circle'></div>
                            <h2 className='text-center mt-3'>Designing </h2>
                        </li>
                        <li >
                            <div className='circle third-circle'></div>
                            <h2 className='text-center mt-3'>Development </h2>
                        </li>
                        <li >
                            <div className='circle fourth-circle'></div>
                            <h2 className='text-center mt-3'>Testing </h2>
                        </li>
                        <li >
                            <div className='circle fifth-circle'></div>
                            <h2 className='text-center mt-3'>Delivery </h2>
                        </li>
                    </ul>
                </div>
            </section>

            <section className='our-services'>
                <div className='wrap-our-service'>
                    <div className='container'>
                        <h1 className='text-center text-white pt-5'>Our Services</h1>
                        <div className='row'>
                            <div className='col-sm-4 mb-3'>
                                <div className='card p-5'>
                                    <Image src={Wireframe1} className='mb-2 mt-3 ' />
                                    <h2>Web Designing</h2>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                                </div>
                            </div>
                            <div className='col-sm-4 mb-3'>
                                <div className='card p-5'>
                                    <Image src={Wireframe1} className='mb-2 mt-3 ' />
                                    <h2>Web Designing</h2>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                                </div>
                            </div>
                            <div className='col-sm-4 mb-3'>
                                <div className='card p-5'>
                                    <Image src={Wireframe1} className='mb-2 mt-3 ' />
                                    <h2>Web Designing</h2>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default HomePage