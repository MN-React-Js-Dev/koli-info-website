import React from 'react'
import Profile from '../../assets/images/profile.png'
import Image from 'next/image'
import blueRight from "../../assets/images/blueRight.png";

const OurValuableClients = () => {
    return (
        <>
            <section className='our-valuable-clients mb-5 mt-5'>
                <div className='container'>
                    <h1 className='text-center mt-5 comman-heading'>Our Valuable Clients</h1>
                    <div className='cst-hr-for-process mb-5'></div>

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-3 col-md-3 "><div className='ratangale-one'></div></div>
                            <div class="col-3 col-md-3 "><div className='ratangale-two mt-5'></div></div>
                            <div class="col-3 col-md-3 "><div className='ratangale-three'></div></div>
                            <div class="col-3 col-md-3 "><div className='ratangale-foure mt-5'></div></div>
                            {/* <div class="col col-md-2 "><div className='ratangale-five'></div></div> */}
                        </div>
                        <div class="row">
                            <div class="col-3 col-md-3"><div className='ratangale-six'></div></div>
                            <div class="col-3 col-md-3"><div className='ratangale-seven mt-5'></div></div>
                            <div class="col-3 col-md-3"><div className='ratangale-eight'></div></div>
                            <div class="col-3 col-md-3"><div className='ratangale-nine mt-5'></div></div>
                            {/* <div class="col col-md-3"><div className='ratangale-ten'></div></div> */}
                        </div>
                    </div>
                </div>
                {/* <Image src={blueRight} style={{ float: 'right' }} /> */}
            </section>
        </>
    )
}

export default OurValuableClients