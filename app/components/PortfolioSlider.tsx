"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const portfolioItems = [
    { img: "portfolio-01.jpg", title: "Ocean Freight", category: "Logistic" },
    { img: "portfolio-02.jpg", title: "Land Transport", category: "Logistic" },
    { img: "portfolio-03.jpg", title: "Air Cargo", category: "Shipping" },
    { img: "portfolio-04.jpg", title: "Warehousing", category: "Storage" },
    { img: "portfolio-05.jpg", title: "Rail Freight", category: "Transport" },
];

export default function PortfolioSlider() {
    return (
        <div className="ep-portfolio-section pt-120">
            <div className="container-fluid">
                <div className="row">
                    <div className="section-title text-center pb-60">
                        <h6 className="subtitle d-inline-flex align-items-center">
                            Our Portfolio
                            <span className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="17"
                                    viewBox="0 0 20 17"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.3171 1.10946e-05L19.3136 8.18934L11.3171 16.3787L3.32062 16.3787L11.3171 8.18934L3.32062 1.14441e-05L11.3171 1.10946e-05Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.686401 16.3787L0.686401 8.18934L0.686401 1.14441e-05L4.68376 4.09467L8.68199 8.18934L4.68376 12.284L0.686401 16.3787Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                        </h6>
                        <h2 className="heading-two">Explore Our Portfolio</h2>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    spaceBetween={20}
                    slidesPerView={1}
                    centeredSlides={true}
                    breakpoints={{
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 4 },
                        1400: { slidesPerView: 5 },
                    }}
                    loop={true}
                    className="portfolio-slider"
                >
                    {portfolioItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="image position-relative overflow-hidden rounded-20">
                                <a href="#" className="d-block w-100">
                                    <img
                                        src={`/assets/img/portfolio/${item.img}`}
                                        className="img-fluid w-100"
                                        alt={item.title}
                                    />
                                    <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end">
                                        <div className="text-wrapper position-relative">
                                            <div className="text-object">
                                                <p>{item.category}</p>
                                                <h5 className="heading-five">{item.title}</h5>
                                            </div>
                                            <span className="icon d-flex hover-effect-btn position-absolute align-items-center justify-content-center">
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
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
