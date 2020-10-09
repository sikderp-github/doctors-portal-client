import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link mr-5" href="/home">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="/dental-services">Dental Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 text-white" href="/reviews">Reviews</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 text-white" href="/blogs">Blogs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 text-white" href="/contact">Contact Us</a>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;