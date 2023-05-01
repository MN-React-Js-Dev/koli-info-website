import React, { useRef } from 'react'
import Wireframe1 from '../../assets/images/wireframe1.png'
import Image from 'next/image'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Design1 from '../../assets/images/design1.png'


const OurServices = () => {
    const carousel = useRef(null);

    const CardData = [
        {
            img: '../../assets/images/design1.png',
            heading: 'Web Designing',
            descpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        },
        {
            img: '../../assets/images/web-development1.png',
            heading: 'Web Development',
            descpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        },
        {
            img: '../../assets/images/applications1.png',
            heading: 'Mobile Development',
            descpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        },
        {
            img: '../../assets/images/design1.png',
            heading: 'Image 4',
            descpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        },
    ]

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }
    return (
        <>
            <section className='our-services'>
                <div className='wrap-our-service'>
                    <div className='container text-center'>
                        <h1 className='text-center comman-heading text-white pt-5'>Our Services</h1>
                        <div className='cst-hr-for-process mb-5' />
                        <div className='row card-carousel' ref={carousel}>
                            <div className='card-item  d-flex'>
                                {CardData.map((item, index) => <>
                                    <div className='col-sm-4 mb-4 text-start' key={index}>
                                        <div className='card p-5 cst-border-cls'>
                                            <Image src={Design1} alt='image'/>
                                            <h2>{item.heading}</h2>
                                            <p> {item.descpt} </p>
                                        </div>
                                    </div>
                                </>)}
                            </div>
                        </div>
                        <div className="buttons ">
                            <button onClick={handleLeftClick} className="m-3 p-3"><AiOutlineLeft /></button>
                            <button onClick={handleRightClick} className="m-3 p-3"><AiOutlineRight /></button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default OurServices