import React from 'react'
import Wireframe1 from '../../assets/images/wireframe1.png'
import Image from 'next/image'

const OurServices = () => {
  return (
   <>
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

export default OurServices