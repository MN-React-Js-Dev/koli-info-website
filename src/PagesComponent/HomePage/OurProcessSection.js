import React from 'react'
import ImageOne from '../../assets/images/circleimage (1).png'
import ImageTwo from '../../assets/images/circleimage (2).png'
import ImageThree from '../../assets/images/circleimage (3).png'
import ImageFoure from '../../assets/images/circleimage (4).png'
import RightImage from '../../assets/images/OurProcessBg.png'
import Image from 'next/image'
const OurProcessSection = () => {
    return (
        <>
            <section className='our-process-section mb-5'>
                <div className='container'>
                    <h2 className='our-process-heading text-center'>Our Process</h2>
                    <div className='cst-hr-for-process mb-5'></div>
                    <div className='fdfdfdf'>
                        {/* <Image src={RightImage}/> */}
                    </div>
                     <ul className='cst-our-process'>
                        <li >
                            <div className='circle first-circle'></div>
                            {/* <Image className='img-fluid' src={ImageOne}/> */}
                            <h2 className='text-center mt-3 mx-3'>Planning </h2>
                        </li>
                        <li > 
                            <div className='circle second-circle mx-3'></div>
                            {/* <Image className='img-fluid' src={ImageTwo}/> */}

                            <h2 className='text-center mt-3'>Designing </h2>
                        </li>
                        <li >
                            <div className='circle third-circle mx-3'></div>
                            {/* <Image className='img-fluid' src={ImageThree}/> */}
                            <h2 className='text-center mt-3'>Development </h2>  
                        </li>
                        <li >
                            {/* <Image className='img-fluid' src={ImageFoure}/> */}

                            <div className='circle fourth-circle mx-3'></div>
                            <h2 className='text-center mt-3'>Testing </h2>
                        </li>
                        <li >
                            {/* <Image className='img-fluid' src={ImageOne}/> */}

                            <div className='circle fifth-circle mx-3'></div>
                            <h2 className='text-center mt-3'>Delivery </h2>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default OurProcessSection