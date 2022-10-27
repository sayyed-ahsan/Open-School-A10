import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsGithub } from 'react-icons/bs';
const Footer = () => {
    return (
        <div>
            <footer class="bg-dark text-center text-white pt-5">
                <div class=" pt-5">
                    <section class="mb-4 pt-5">
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FcGoogle /></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><BsGithub /></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><BsFacebook /></a>

                    </section>
                </div>
                <div class="text-center p-3">
                    © 2020 Copyright:
                    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>

        </div>
    );
};

export default Footer;