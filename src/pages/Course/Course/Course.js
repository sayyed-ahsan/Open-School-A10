import React from 'react';
import Courses from '../Courses/Courses';
import LeftNavigation from '../LeftNavigation/LeftNavigation';
import { useLoaderData } from "react-router-dom";
import Header from "../../../pages/Shared/Header/Header";
import './Course.css'
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';


const Course = () => {

    const courses = useLoaderData();

    return (
        <div>
            <Header></Header>
            <div className='course-main-div row '>

                <div className='l-navigation col-md-3'>
                    <div className='nav-fixed mt-5 pt-1'>
                        {
                            courses.map(course => <LeftNavigation
                                key={course.id}
                                course={course}
                            ></LeftNavigation>)
                        }
                    </div>
                </div>

                <div className='r-courses col-md-9'>

                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Course;