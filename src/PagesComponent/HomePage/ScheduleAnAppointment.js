import React from 'react'

const ScheduleAnAppointment = () => {
    return (
        <>
            <section className='mt-5 mt-5' style={{ "background": "#3F689F" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6'> </div>
                        <div className='col-sm-6'>
                            <div className='mt-5 mb-5'>
                                <h2 className='text-white mb-3 schedule-appointment'>Schedule an appointment</h2>
                                <div className='hr-cst mb-3'></div>
                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control"  placeholder="Name" />
                                        <br />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
                                        <br />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control"  placeholder="Phone" />
                                        <br />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control"  placeholder=" " />
                                        <br />
                                    </div>
                                 </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ScheduleAnAppointment