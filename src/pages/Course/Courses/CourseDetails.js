import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsFillFileEarmarkPdfFill, BsFillStarFill } from 'react-icons/bs';
import './CourseDetail.css'


const CourseDetails = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
            <div className='d-flex justify-content-center mt-5 p-3'>
                <div class="card mb-3 course-detail-div">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <div className='p-3 '>
                                <div className='border-4 d-flex justify-content-center border-info'>
                                    <img src={courses.img} class="img-fluid mx-auto rounded-3" alt="..." />
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
                                <p class="card-text"><small class="text-muted">
                                    <BsFillStarFill className='rating-star'></BsFillStarFill>
                                    <span className='rating'>{courses.rating}</span>
                                </small></p>
                                <p>$ {courses.price}</p>
                                <Link to={`/course/checkout/${courses.id}`} className=''>
                                    <button type="button" class="btn btn-outline-dark">Get premium access</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;