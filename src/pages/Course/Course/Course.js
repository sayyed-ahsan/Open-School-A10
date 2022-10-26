import React from 'react';
import Courses from '../Courses/Courses';
import LeftNavigation from '../LeftNavigation/LeftNavigation';
import './Course.css'

const Course = () => {
    return (
        <div className='course-main-div row '>
            <div className='l-navigation col-3'>
                <LeftNavigation></LeftNavigation>
            </div>
            <div className='r-courses bg-warning col-9'>
                <Courses></Courses>
            </div>
        </div>
    );
};

export default Course;