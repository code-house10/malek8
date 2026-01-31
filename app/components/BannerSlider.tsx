"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function BannerSlider() {
    const slides = [
        {
            subtitle: "Welcome To Tranzit Logistics",
            title: "Your Partner in Precision Logistics",
            description: "At Tranzit, we redefine logistics with a focus on precision, efficiency, and global connectivity, ensuring your cargo reaches its destination seamlessly, every time.",
            image: "/assets/img/banner/truck.png",
        },
        {
            subtitle: "Global Shipping Solutions",
            title: "Delivering Excellence Worldwide",
            description: "From local deliveries to international freight, we provide comprehensive logistics solutions tailored to your business needs.",
            image: "/assets/img/banner/truck.png",
        },
    ];

    return (
        <section className="ep-banner-section style1 position-relative overflow-hidden" style={{ backgroundColor: '#1a1a2e' }}>
            <div className="overlay">
                <div className="banner-bg-shape w-100 h-100 position-relative">
                    <div className="arrow-shape d-flex flex-column position-absolute">
                        <svg className="shape1" xmlns="http://www.w3.org/2000/svg" width="150" height="97" viewBox="0 0 175 117" fill="none">
                            <path opacity="0.5" d="M174.468 1.52588e-05L87.2276 58.1749L3.22832e-05 7.63254e-06L2.97403e-05 58.1749L87.2276 116.337L174.468 58.175L174.468 1.52588e-05Z" fill="#E10006" />
                        </svg>
                        <svg className="shape2" xmlns="http://www.w3.org/2000/svg" width="150" height="97" viewBox="0 0 175 117" fill="none">
                            <path opacity="0.7" d="M174.468 0.338341L87.2276 58.5L3.05176e-05 0.338333L2.79753e-05 58.5L87.2276 116.675L174.468 58.5L174.468 0.338341Z" fill="#E10006" />
                        </svg>
                        <svg className="shape3" xmlns="http://www.w3.org/2000/svg" width="150" height="97" viewBox="0 0 175 117" fill="none">
                            <path d="M174.468 0.676689L87.2276 58.8383L3.05176e-05 0.676682L2.79753e-05 58.8383L87.2276 117L174.468 58.8384L174.468 0.676689Z" fill="#E10006" />
                        </svg>
                    </div>

                    <Swiper
                        modules={[Pagination, Autoplay, EffectFade]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        effect="fade"
                        className="banner-slider"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="banner-text">
                                            <div className="section-title">
                                                <h6 className="subtitle d-inline-flex text-white align-items-center">
                                                    {slide.subtitle}
                                                    <span className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.3171 1.10946e-05L19.3136 8.18934L11.3171 16.3787L3.32062 16.3787L11.3171 8.18934L3.32062 1.14441e-05L11.3171 1.10946e-05Z" fill="currentColor" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.686401 16.3787L0.686401 8.18934L0.686401 1.14441e-05L4.68376 4.09467L8.68199 8.18934L4.68376 12.284L0.686401 16.3787Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                </h6>
                                                <h1 className="heading-one text-white">{slide.title}</h1>
                                            </div>
                                            <p className="detais pt-4">{slide.description}</p>
                                            <div className="banner-btn-wrapper d-flex column-gap-4 row-gap-2 pt-40">
                                                <a href="#" className="theme-btn banner-btn style2 d-inline-flex text-uppercase align-items-center gap-2 justify-content-center rounded-pill hover-effect-btn">
                                                    Free Quote
                                                    <span className="theme-btn-icon">
                                                        <svg className="su-arrow-svg-top-right" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10 1V8C10 8.29167 9.90625 8.53125 9.71875 8.71875C9.53125 8.90625 9.29167 9 9 9C8.70833 9 8.46875 8.90625 8.28125 8.71875C8.09375 8.53125 8 8.29167 8 8V3.40625L1.71875 9.71875C1.51042 9.90625 1.27083 10 1 10C0.729167 10 0.489583 9.90625 0.28125 9.71875C0.09375 9.51042 0 9.27083 0 9C0 8.72917 0.09375 8.48958 0.28125 8.28125L6.59375 2H2C1.70833 2 1.46875 1.90625 1.28125 1.71875C1.09375 1.53125 1 1.29167 1 1C1 0.708333 1.09375 0.46875 1.28125 0.28125C1.46875 0.09375 1.70833 0 2 0H9C9.29167 0 9.53125 0.09375 9.71875 0.28125C9.90625 0.46875 10 0.708333 10 1Z" fill="white"></path>
                                                        </svg>
                                                    </span>
                                                </a>
                                                <a href="#" className="theme-btn banner-btn theme-btn-border style2 d-inline-flex text-uppercase align-items-center gap-2 justify-content-center rounded-pill hover-effect-btn">
                                                    EXPLORE MORE
                                                    <span className="theme-btn-icon">
                                                        <svg className="su-arrow-svg-top-right" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10 1V8C10 8.29167 9.90625 8.53125 9.71875 8.71875C9.53125 8.90625 9.29167 9 9 9C8.70833 9 8.46875 8.90625 8.28125 8.71875C8.09375 8.53125 8 8.29167 8 8V3.40625L1.71875 9.71875C1.51042 9.90625 1.27083 10 1 10C0.729167 10 0.489583 9.90625 0.28125 9.71875C0.09375 9.51042 0 9.27083 0 9C0 8.72917 0.09375 8.48958 0.28125 8.28125L6.59375 2H2C1.70833 2 1.46875 1.90625 1.28125 1.71875C1.09375 1.53125 1 1.29167 1 1C1 0.708333 1.09375 0.46875 1.28125 0.28125C1.46875 0.09375 1.70833 0 2 0H9C9.29167 0 9.53125 0.09375 9.71875 0.28125C9.90625 0.46875 10 0.708333 10 1Z" fill="white"></path>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="banner-image image position-absolute bottom-0 end-0">
                                            <div className="reveal down">
                                                <img src={slide.image} className="img-fluid w-100" alt="truck" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
