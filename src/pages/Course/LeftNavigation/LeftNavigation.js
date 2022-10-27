import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavigation = ({ course }) => {
    return (
        <div className='left-navigation text-center mt-3'>
            <Link to={`deatils/${course.id}`} className='Rout-links'><span >{course.name}</span></Link>
        </div>
    );
};

export default LeftNavigation;