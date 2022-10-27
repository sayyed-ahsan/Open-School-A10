import React from 'react';
import Footer from '../Shared/Footer/Footer';

const Blog = () => {
    return (
        <div className='bg-dark p-5'>
            <div class="card text-center m-5 my-5">
                <div class="card-header">
                    Blog 1
                </div>
                <div class="card-body">
                    <h5 class="card-title">What is cors?</h5>
                    <p class="card-text">
                        CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options. Cross-Origin Resource Sharing CORS is an HTTP-header based mechanism that allows a server to indicate any origins domain, scheme, or port other than its own from which a browser should permit loading resources.
                    </p>

                </div>
                <div class="card-footer text-muted">
                    1 days ago
                </div>
            </div>
            <div class="card text-center m-5 my-5">
                <div class="card-header">
                    Blog 2
                </div>
                <div class="card-body">
                    <h5 class="card-title">Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p class="card-text">
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </p>

                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
            </div>
            <div class="card text-center m-5 my-5">
                <div class="card-header">
                    Blog 3
                </div>
                <div class="card-body">
                    <h5 class="card-title">How does the private route work?</h5>
                    <p class="card-text">
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated Logged in. Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page.
                    </p>

                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
            </div>
            <div class="card text-center m-5 my-5">
                <div class="card-header">
                    Blog 4
                </div>
                <div class="card-body">
                    <h5 class="card-title">what is cors?</h5>
                    <p class="card-text">
                        Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return. Image result for What is Node? How does Node work?
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.
                    </p>

                </div>
                <div class="card-footer text-muted">
                    5 days ago
                </div>
            </div>
        </div>
    );
};

export default Blog;