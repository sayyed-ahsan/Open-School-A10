import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';


const CourseDetails = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>

            <div className='p-5 m-5'>
                <div class="card mb-3 course-detail-div">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <div className='p-3 '>
                                <div className='border-4 border-info'>
                                    <img src={courses.img} class="img-fluid rounded-3" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <div className='d-flex justify-content-between'>
                                    <h5 class="card-title">{courses.name}</h5>
                                    <div>
                                        <BsFillFileEarmarkPdfFill></BsFillFileEarmarkPdfFill>
                                    </div>
                                </div>
                                <p class="card-text">{courses.detail}</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                <button type="button" class="btn btn-outline-dark">Get premium access</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;