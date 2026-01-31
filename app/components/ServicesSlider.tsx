"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
    { img: "service01.jpg", title: "Global Freight Services", desc: "Streamline global freights with our seamless international shipping solutions." },
    { img: "service02.jpg", title: "Shipping Services", desc: "Reliable shipping services to ensure your cargo arrives safely and on time." },
    { img: "service03.jpg", title: "Warehousing Solutions", desc: "Secure and efficient warehousing solutions for all your storage needs." },
    { img: "service04.jpg", title: "Supply Chain Management", desc: "End-to-end supply chain solutions to optimize your logistics operations." },
];

export default function ServicesSlider() {
    return (
        <section className="ep-service-section pt-120">
            <div className="container position-relative">
                <div className="row">
                    <div className="section-title text-center pb-60">
                        <h6 className="subtitle d-inline-flex align-items-center">Our Services
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3171 1.10946e-05L19.3136 8.18934L11.3171 16.3787L3.32062 16.3787L11.3171 8.18934L3.32062 1.14441e-05L11.3171 1.10946e-05Z" fill="currentColor" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.686401 16.3787L0.686401 8.18934L0.686401 1.14441e-05L4.68376 4.09467L8.68199 8.18934L4.68376 12.284L0.686401 16.3787Z" fill="currentColor" />
                                </svg>
                            </span>
                        </h6>
                        <h2 className="title heading-two">Comprehensive Logistics Solutions</h2>
                    </div>
                </div>
                <div className="position-relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            nextEl: ".service-nav .next",
                            prevEl: ".service-nav .prev",
                        }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            576: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                        loop={true}
                        className="service-slider"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className="service-item hover-effect bg-one rounded-10">
                                    <a href="#" className="d-block w-100">
                                        <div className="img overlay-shape rounded-10 overflow-hidden">
                                            <img src={`/assets/img/service/${service.img}`} className="card-img-top" alt={service.title} />
                                        </div>
                                    </a>
                                    <div className="text">
                                        <h3 className="heading-four service-title pb-20">
                                            <a href="#">{service.title}</a>
                                        </h3>
                                        <p className="pb-30">{service.desc}</p>
                                        <a href="#" className="theme-btn rounded-pill d-inline-flex align-items-center">
                                            Read More<i className="fas fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="service-nav">
                        <div className="next position-absolute hover-effect-btn-2 rounded-pill top-50 translate-middle-y d-flex align-items-center justify-content-center">
                            <i className="fa-solid fa-chevron-right"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="prev position-absolute hover-effect-btn-2 left rounded-pill top-50 translate-middle-y d-flex align-items-center justify-content-center">
                            <i className="fa-solid fa-chevron-left"></i>
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
