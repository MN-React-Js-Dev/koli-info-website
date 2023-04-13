import React from 'react'
import GridImage1 from '../../assets/images/IdesignImage.png'
import GridImage2 from '../../assets/images/grid2image.png'


import Image from 'next/image'
const OurPortfolio = () => {
    return (
        <>
            <section className='our-portfolio '>
                <div className='main-div-for-portfolio pb-5'>
                <div class='container'>
                    <h1 class='text-center pt-5 pb-5'>Our Portfolio</h1>

                    <div className='row'>
                        <div className='col-sm-3'>
                            <Image src={GridImage1} className='img-fluid' />
                        </div>
                        <div className='col-sm-3'>
                            <div className='p-3 pt-5'>
                                <h3>Mobile App</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                            <Image src={GridImage1} className='img-fluid' />
                        </div>
                        <div className='col-sm-3'>
                            <div className='p-3 pt-5'>
                                <h3>Mobile App</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <div className='p-3 pt-5'>
                                <h3>Web Development</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                            <Image src={GridImage1} className='img-fluid' />
                        </div>

                        <div className='col-sm-3'>
                            <div className='p-3 pt-5'>
                                <h3>Mobile App</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                            </div>
                        </div>

                        <div className='col-sm-3'>
                            <Image src={GridImage1} className='img-fluid' />
                        </div>
                    </div>
                </div>
                </div>
            </section>



        </>
    )
}

export default OurPortfolio