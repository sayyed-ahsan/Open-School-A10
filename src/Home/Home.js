
import React from 'react';
import img1 from '../../src/images/online_courses.jpeg';
import img2 from '../../src/images/Onlinelearning.jpg';
import img3 from '../../src/images/badii.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <div className='opacity-50 b-igm '><img src={img1} class="d-block h-75 w-100" alt="..." /></div>
                        <div class="carousel-caption d-none d-md-block">
                            <Link to={'/course'}><button type="button" class="btn btn-outline-info">Courses</button></Link>
                            <h5>First slide label</h5>
                            <p className='fs-3'>Learning new things gives us a feeling of accomplishment which, in turn, boosts our confidence in our own capabilities</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <div className='opacity-50 b-igm'><img src={img2} class="d-block h-75 w-100" alt="..." /></div>
                        <div class="carousel-caption d-none d-md-block">
                            <Link to={'/course'}><button type="button" class="btn btn-outline-info">Courses</button></Link>
                            <h5>Second slide label</h5>
                            <p className='fs-3'>Learning new things gives us a feeling of accomplishment which, in turn, boosts our confidence in our own capabilities</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='opacity-50 b-igm'><img src={img3} class="d-block h-75 w-100" alt="..." /></div>
                        <div class="carousel-caption d-none d-md-block">
                            <Link to={'/course'}><button type="button" class="btn btn-outline-info">Courses</button></Link>
                            <h4 className='fs-4'>Please purches our course</h4>
                            <p className='fs-3'>Learning new things gives us a feeling of accomplishment which, in turn, boosts our confidence in our own capabilities</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Home;