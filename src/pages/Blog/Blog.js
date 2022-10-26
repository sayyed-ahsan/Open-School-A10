import React from 'react';

const Blog = () => {
    return (
        <div className='bg-dark p-5'>
            <div class="card text-center m-5 my-5">
                <div class="card-header">
                    Blog 1
                </div>
                <div class="card-body">
                    <h5 class="card-title">what is cors?</h5>
                    <p class="card-text">
                        CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options. Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                    </p>

                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
    );
};

export default Blog;