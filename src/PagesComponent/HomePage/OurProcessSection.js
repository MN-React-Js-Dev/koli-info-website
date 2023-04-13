import React from 'react'

const OurProcessSection = () => {
  return (
   <>
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
            </>
  )
}

export default OurProcessSection