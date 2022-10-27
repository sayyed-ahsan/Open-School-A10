import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const chekoutDetail = useLoaderData();
    return (
        <div className='d-flex justify-content-center mt-5 p-3' >
            <div class="card border-success mb-3">
                <div class="card-header text-success card-title">{chekoutDetail.name}</div>
                <div class="card-body text-success">
                    <h5 class="card-title">Coungratulation...!</h5>
                    <p class="card-text">Thank you so much for purches this <b>{chekoutDetail.name}</b> Course</p>
                </div>
            </div>

        </div>
    );
};

export default CheckOut;