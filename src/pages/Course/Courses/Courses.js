import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import '../Course/Course.css'

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div class="container">
            {
                courses.map(coure =>

                    <div class="card">
                        <div class="imgBx">
                            <img src={coure.img} alt='' />
                        </div>
                        <div class="content">
                            <div class="contentBx">
                                <h3>Someone Famous<br /><span>Creative Designer</span></h3>
                            </div>

                            <ul class="sci">
                                <Link to={`deatils/${coure.id}`}><button className='detail-button'>Show Details</button></Link>
                            </ul>

                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default Courses;
