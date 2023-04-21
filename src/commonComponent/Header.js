import React from 'react'
import { BsPlus } from "react-icons/bs";
import BlueLogo from '../assets/Logo/bluelogo.png'
import Logo from '../assets/Logo/logo.png'
import Image from 'next/image';
const Header = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid cst-nav p-3 header" >
                    <Image src={BlueLogo} alt={BlueLogo} class="img-fluid" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" ></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"></a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#"  >Company <BsPlus /></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Services <BsPlus /></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Solutions <BsPlus /></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Our Portfolio <BsPlus /></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Schdule </a>
                                </li>
                                <li class="nav-item">
                                    <a class="btn contact-us-btn" type="submit">Contact Us</a>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header