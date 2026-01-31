"use client";

export default function Footer() {
    return (
        <footer className="ep-footer-section position-relative">
            {/* Newsletter Section */}
            <div className="footer-top">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <h2 className="heading-two text-light text-center text-md-start">
                                Subscribe Our Newsletter
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-6 ms-auto align-self-center">
                            <form action="#">
                                <div className="input-group position-relative mx-auto ms-lg-auto me-lg-0">
                                    <input
                                        type="email"
                                        className="form-control shadow-none rounded-pill"
                                        placeholder="Email Address"
                                    />
                                    <button className="theme-btn border-0 rounded-pill position-absolute top-0 end-0">
                                        Subscribe
                                        <i className="fa-solid fa-paper-plane ms-2"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container">
                <div className="footer-main">
                    <div className="row g-4">
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-widget">
                                <div className="logo pb-4">
                                    <img src="/assets/img/logo/logo2.svg" alt="logo" />
                                </div>
                                <p>
                                    Our dedication lies in embracing challenges and pioneering
                                    innovation within the more attractive advertising sector.
                                </p>
                                <a
                                    href="/about"
                                    className="theme-btn style2 text-capitalize mt-4 mt-sm-5 d-inline-flex text-uppercase align-items-center gap-2 justify-content-center rounded-pill hover-effect-btn"
                                >
                                    View Details
                                    <span className="theme-btn-icon">
                                        <svg
                                            className="su-arrow-svg-top-right"
                                            width="10"
                                            height="10"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 1V8C10 8.29167 9.90625 8.53125 9.71875 8.71875C9.53125 8.90625 9.29167 9 9 9C8.70833 9 8.46875 8.90625 8.28125 8.71875C8.09375 8.53125 8 8.29167 8 8V3.40625L1.71875 9.71875C1.51042 9.90625 1.27083 10 1 10C0.729167 10 0.489583 9.90625 0.28125 9.71875C0.09375 9.51042 0 9.27083 0 9C0 8.72917 0.09375 8.48958 0.28125 8.28125L6.59375 2H2C1.70833 2 1.46875 1.90625 1.28125 1.71875C1.09375 1.53125 1 1.29167 1 1C1 0.708333 1.09375 0.46875 1.28125 0.28125C1.46875 0.09375 1.70833 0 2 0H9C9.29167 0 9.53125 0.09375 9.71875 0.28125C9.90625 0.46875 10 0.708333 10 1Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-sm-6 ms-auto">
                            <div className="footer-widget">
                                <h4 className="footer-widget-title heading-four text-white pb-30">
                                    Quick Links
                                </h4>
                                <ul className="list-unstyled important-link">
                                    <li>
                                        <div className="icon">
                                            <img src="/assets/img/footer/point.svg" alt="tranzit" />
                                        </div>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="/assets/img/footer/point.svg" alt="tranzit" />
                                        </div>
                                        <a href="/about">About</a>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="/assets/img/footer/point.svg" alt="tranzit" />
                                        </div>
                                        <a href="/services">Service</a>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="/assets/img/footer/point.svg" alt="tranzit" />
                                        </div>
                                        <a href="/blog">Blog</a>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="/assets/img/footer/point.svg" alt="tranzit" />
                                        </div>
                                        <a href="/contact">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-3 col-lg-3 col-sm-6 ms-auto">
                            <div className="footer-widget ps-lg-4 ps-xl-0">
                                <h4 className="footer-widget-title heading-four text-white pb-30">
                                    Services
                                </h4>
                                <ul className="list-unstyled important-link">
                                    <li>
                                        <div className="icon">
                                            <img src="/assets/img/footer/point.svg" alt="tranzit" />
                                        </div>
                                        <a href="/services">Air Freight</a>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="/assets/img/footer/point.svg" alt="tranzit" />
                                        </div>
                                        <a href="/services">Ocean Freight</a>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="/assets/img/footer/point.svg" alt="tranzit" />
                                        </div>
                                        <a href="/services">Rail Freight</a>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="/assets/img/footer/point.svg" alt="tranzit" />
                                        </div>
                                        <a href="/services">Warehousing</a>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="/assets/img/footer/point.svg" alt="tranzit" />
                                        </div>
                                        <a href="/services">Land Freight</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget ps-xxl-5">
                                <h4 className="footer-widget-title heading-four text-white pb-30">
                                    Contact Us
                                </h4>
                                <ul className="list-unstyled contact-info">
                                    <li>
                                        <div className="icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <a href="#">235 Camden St, United States</a>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <a href="mailto:info@Tranzit.com">Email: info@Tranzit.com</a>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <a href="tel:+165-920-6677">Phone: +165-920-6677</a>
                                    </li>
                                </ul>
                                <div className="social-icon pt-40">
                                    <ul className="d-flex list-unstyled gap-2">
                                        <li>
                                            <a
                                                href="#"
                                                className="rounded-pill d-flex align-items-center justify-content-center"
                                            >
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="rounded-pill d-flex align-items-center justify-content-center"
                                            >
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="rounded-pill d-flex align-items-center justify-content-center"
                                            >
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="rounded-pill d-flex align-items-center justify-content-center"
                                            >
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row g-2">
                        <div className="col-md-6">
                            <div className="footer-copyright text-center text-lg-start">
                                <p>
                                    Copyright © 2024 <span>Tranzit.</span> All Rights Reserved
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-menu">
                                <ul className="list-unstyled d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                                    <li>
                                        <a href="#">Terms &amp; Condition</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
