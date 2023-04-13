import React from 'react'
import TeamofficeImg from '../../assets/images/teamoffice.png'
import Image from 'next/image'
const WhyChooseBlueInfinity = () => {
    return (
        <>
            <section className='mb-5 mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-sm-6">
                            <h1>Why Choose  Blue Infinity Tech </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        </div>
                        <div className="col-sm-6">
                            <Image src={TeamofficeImg} className='img-fluid' />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseBlueInfinity