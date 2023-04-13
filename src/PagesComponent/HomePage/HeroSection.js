import React from 'react'

const HeroSection = () => {
    return (
        <>
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
        </>
    )
}

export default HeroSection