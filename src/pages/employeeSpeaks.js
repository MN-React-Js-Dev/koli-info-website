import Header from '@/commonComponent/Header'
import React from 'react'
import EmployeespeakImage from '../assets/images/employeespeakimage.png'
import Image from 'next/image'
import ProfileImage from '../assets/images/profile.png'


const employeeSpeaks = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    return (
        <>
            <Header />
            <section className='employee-speak' style={{ "background": "#E3E3FF" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className='mt-5'>

                                <h1>Employee Speak</h1>
                                <p>
                                    We are a company that offers design
                                    and develop services for you from initial
                                    sketches to the final construction.
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <Image src={EmployeespeakImage} class="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='qualities-we-take'>
                <div className='container'>
                    {arr.map((iteam, index) => {
                        return <>
                            <div className='row mb-5 mt-5 cst-border-hjohn pt-5 pb-5 mx-1' key={index}>
                                <div className='col-md-2 col-4' >
                                    <Image src={ProfileImage} className='mx-2'/>
                                </div>
                                <div className='col-md-10 col-8'>
                                    <h2>John doe</h2>
                                    <p>Creative Design Head </p>
                                    <p>Total Experience: 15 Years</p>
                                    <p>A team with years of development, design and marketing experience who understand the complexity and needs of your business.</p>
                                </div>
                            </div>
                        </>
                    })}

                </div>
            </section>
        </>
    )
}

export default employeeSpeaks