"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
    {
        name: "Jackson Millar",
        role: "UI/UX Designer",
        text: "Since partnering with Tranzit Logistics, my business, ABC Companies, has experienced a significant boost in its ability to fulfill customer orders quickly and efficiently. Their reliable and fast shipping has allowed us to expand our reach to new markets and keep our existing customers satisfied. Tranzit's commitment to on-time delivery.",
    },
    {
        name: "Sarah Johnson",
        role: "Operations Manager",
        text: "We've been working with Tranzit for over 5 years and they've never let us down. Their tracking system is excellent and customer service is top-notch. I highly recommend their services to anyone looking for reliable logistics solutions.",
    },
    {
        name: "Michael Chen",
        role: "Supply Chain Director",
        text: "The efficiency and reliability of Tranzit's services have helped us streamline our supply chain operations significantly. Their team is professional and always goes above and beyond to ensure our shipments arrive on time.",
    },
];

export default function TestimonialSlider() {
    return (
        <section className="ep-testimonial-section overflow-hidden">
            <div className="row g-0">
                <div className="col-lg-6">
                    <div className="left-image position-relative">
                        <img
                            src="/assets/img/testimonial/testimonial-left.jpg"
                            className="imageParallax img-fluid w-100"
                            alt="testimonial"
                        />
                        <div className="overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center top-0 start-0">
                            <a
                                className="play-btn ripple rounded-pill d-flex align-items-center text-center justify-content-center"
                                href="https://www.youtube.com/watch?v=0O2aH4XLbto"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Play Video"
                                aria-label="Play Video"
                            >
                                <i className="fa-solid fa-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="testimonial-content position-relative py-120">
                        <div className="section-title pb-60">
                            <h6 className="subtitle d-inline-flex text-white align-items-center">
                                Testimonials
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
                            <h2 className="heading-two text-white">What Our Clients Say</h2>
                        </div>
                        <div className="quote position-absolute">
                            <img src="/assets/img/testimonial/shape.svg" alt="shape" />
                        </div>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                nextEl: ".testimonial-nav .next",
                                prevEl: ".testimonial-nav .prev",
                            }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            className="testimonial-slider"
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="testimonial-item">
                                        <p className="text-white-50">{item.text}</p>
                                        <div className="client-info d-flex gap-3 pt-40 flex-wrap">
                                            <div
                                                className="profile rounded-10 overflow-hidden"
                                                style={{ width: "60px", height: "60px" }}
                                            >
                                                <img
                                                    src="/assets/img/testimonial/testimonial-profile.jpg"
                                                    className="img-fluid w-100 object-fit-cover"
                                                    alt="profile"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="heading-six name text-white">
                                                    {item.name}
                                                </h4>
                                                <p className="designation">{item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="testimonial-nav d-flex gap-3 pt-40">
                            <div className="prev hover-effect-btn-2 rounded-pill d-flex align-items-center justify-content-center">
                                <i className="fa-solid fa-chevron-left"></i>
                            </div>
                            <div className="next hover-effect-btn-2 rounded-pill d-flex align-items-center justify-content-center">
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
