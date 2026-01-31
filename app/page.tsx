"use client";

import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BannerSlider from "./components/BannerSlider";
import ServicesSlider from "./components/ServicesSlider";
import TestimonialSlider from "./components/TestimonialSlider";
import PortfolioSlider from "./components/PortfolioSlider";
import PricingSection from "./components/PricingSection";
import BlogSection from "./components/BlogSection";
import { useGsapAnimation, useCounterAnimation } from "./hooks/useGsap";

// Counter Item Component
function CounterItem({ icon, count, suffix, label }: { icon: string; count: number; suffix: string; label: string }) {
  const counterRef = useCounterAnimation(count, 2);

  return (
    <div className="counter-item d-flex gap-3 justify-content-xxl-center justify-content-start align-items-start position-relative">
      <div className="icon">
        <img src={`/assets/img/counter/${icon}`} alt="counter" />
      </div>
      <div className="text">
        <h2 className="heading-two d-flex align-items-center">
          <span ref={counterRef as React.RefObject<HTMLSpanElement>}>0</span>{suffix}
        </h2>
        <p>{label}</p>
      </div>
    </div>
  );
}

// About Section Component
function AboutSection() {
  const containerRef = useGsapAnimation<HTMLDivElement>({ animation: "fadeUp" });

  return (
    <section className="ep-about-section pt-120" ref={containerRef}>
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-6 col-lg-9 mx-auto">
            <div className="about-img position-relative">
              <div className="img rounded-20 overflow-hidden">
                <img src="/assets/img/about/about01.jpg" className="rounded-20 img-fluid w-100" alt="about01" />
              </div>
              <div className="shape position-absolute">
                <img src="/assets/img/about/shape01.svg" alt="shape01" />
                <h5 className="heading-five experiance text-white position-absolute">
                  29+ Years Of Experience
                </h5>
              </div>
              <div className="video-part rounded-20 z-3 overflow-hidden position-absolute" style={{ background: '#001f3f' }}>
                <div className="overlay rounded-20 overflow-hidden h-100 d-flex justify-content-center align-items-center">
                  <a className="play-btn ripple rounded-pill d-flex align-items-center text-center justify-content-center" href="http://www.youtube.com/watch?v=0O2aH4XLbto" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-9 mx-auto">
            <div className="about-content pt-4 pt-xl-0">
              <div className="section-title pb-30">
                <h6 className="subtitle d-inline-flex align-items-center">About Tranzit
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.3171 1.10946e-05L19.3136 8.18934L11.3171 16.3787L3.32062 16.3787L11.3171 8.18934L3.32062 1.14441e-05L11.3171 1.10946e-05Z" fill="currentColor" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.686401 16.3787L0.686401 8.18934L0.686401 1.14441e-05L4.68376 4.09467L8.68199 8.18934L4.68376 12.284L0.686401 16.3787Z" fill="currentColor" />
                    </svg>
                  </span>
                </h6>
                <h2 className="heading-two title">
                  Shipping made smooth with us since 1995.
                </h2>
              </div>
              <p className="about-text ps-3">
                Since 1995, Tranzit has been your trusted partner, navigating the complexities of shipping with ease. Our years of experience ensure reliable and efficient delivery, keeping your supply chain moving smoothly on the road.
              </p>
              <div className="tracking-info pb-30 mb-40">
                <div className="row pt-40 gy-3">
                  <div className="col-xl-6 col-md-5 col-md-6 tracking d-flex align-items-center gap-3">
                    <div className="icon rounded-pill d-flex justify-content-center align-items-center flex-shrink-0">
                      <img src="/assets/img/about/realtime.svg" alt="real time" />
                    </div>
                    <h4 className="heading-four title">Real Time Tracking</h4>
                  </div>
                  <div className="col-xl-6 col-md-5 col-md-6 support position-relative d-flex justify-content-md-end align-items-center gap-3">
                    <div className="icon rounded-pill d-flex justify-content-center align-items-center flex-shrink-0">
                      <img src="/assets/img/about/support.svg" alt="support" />
                    </div>
                    <h4 className="heading-four title">24/7 Support</h4>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-5 align-items-center flex-wrap">
                <a href="#" className="theme-btn style2 rounded-pill text-uppercase">About More <i className="fas fa-chevron-right"></i></a>
                <div className="d-flex gap-3 align-items-center">
                  <div className="profile rounded-pill overflow-hidden">
                    <img src="/assets/img/about/person.jpg" alt="profile" className="img-fluid w-100 object-fit-cover" />
                  </div>
                  <div className="signature">
                    <img src="/assets/img/about/sign.svg" alt="signature" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Work Process Section
function WorkProcessSection() {
  const processes = [
    { img: "work01.jpg", num: "1", title: "Get a Quote", desc: "Simply provide details about your shipment, and we'll give you a transparent quote." },
    { img: "work02.jpg", num: "2", title: "Book Your Shipment", desc: "Confirm your order and schedule your pickup conveniently online." },
    { img: "work03.jpg", num: "3", title: "Delivery & Support", desc: "Our dedicated team ensures your shipment arrives safely and on time." },
  ];

  return (
    <section className="ep-work-process-section py-120 mt-120 bg-one rounded-30 content">
      <div className="container">
        <div className="row">
          <div className="section-title text-center pb-60">
            <h6 className="subtitle d-inline-flex align-items-center">Working Process
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.3171 1.10946e-05L19.3136 8.18934L11.3171 16.3787L3.32062 16.3787L11.3171 8.18934L3.32062 1.14441e-05L11.3171 1.10946e-05Z" fill="currentColor" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.686401 16.3787L0.686401 8.18934L0.686401 1.14441e-05L4.68376 4.09467L8.68199 8.18934L4.68376 12.284L0.686401 16.3787Z" fill="currentColor" />
                </svg>
              </span>
            </h6>
            <h2 className="heading-two title">How Tranzit Works</h2>
          </div>
        </div>
        <div className="row g-4">
          {processes.map((item, index) => (
            <div key={index} className="col-lg-4 col-sm-6 mx-auto mx-lg-0 process-label">
              <div className="process-item hover-effect text-center position-relative">
                <div className="image position-relative mx-auto">
                  <div className="overlay-shape rounded-pill overflow-hidden">
                    <img src={`/assets/img/work/${item.img}`} className="rounded-pill img-fluid w-100" alt="work" />
                  </div>
                  <h3 className="heading-three number position-absolute rounded-pill d-flex align-items-center justify-content-center top-50 translate-middle-y">
                    {item.num}
                  </h3>
                </div>
                <div className="text pt-30 px-xl-5">
                  <h3 className="heading-three pb-20">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Team Section
function TeamSection() {
  const team = [
    { img: "team01.jpg", name: "Sarah Benegal", role: "Logistics Manager" },
    { img: "team02.jpg", name: "John Miller", role: "Operations Director" },
    { img: "team03.jpg", name: "Mike Johnson", role: "Fleet Manager" },
  ];

  return (
    <section className="ep-team-section pt-120 content">
      <div className="container">
        <div className="row">
          <div className="section-title text-center pb-60">
            <h6 className="subtitle d-inline-flex align-items-center">Our Expert Team
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.3171 1.10946e-05L19.3136 8.18934L11.3171 16.3787L3.32062 16.3787L11.3171 8.18934L3.32062 1.14441e-05L11.3171 1.10946e-05Z" fill="currentColor" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.686401 16.3787L0.686401 8.18934L0.686401 1.14441e-05L4.68376 4.09467L8.68199 8.18934L4.68376 12.284L0.686401 16.3787Z" fill="currentColor" />
                </svg>
              </span>
            </h6>
            <h2 className="heading-two">Meet Our Expert</h2>
          </div>
        </div>
        <div className="row g-4">
          {team.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6 mx-auto mx-lg-0">
              <div className="team-item hover-effect">
                <div className="image mb-3 mb-lg-0 rounded-20 overflow-hidden position-relative">
                  <a href="#" className="d-block w-100">
                    <div className="overlay-shape overflow-hidden">
                      <img src={`/assets/img/team/${member.img}`} className="img-fluid w-100 rounded-20" alt="team" />
                    </div>
                  </a>
                  <div className="overlay position-absolute">
                    <p className="designation rounded-6 d-inline-block">{member.role}</p>
                    <a href="#" className="d-block w-100">
                      <h4 className="name heading-four rounded-6">{member.name}</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Client Logo Section
function ClientLogoSection() {
  const clients = [
    "client-one.png",
    "client-two.png",
    "client-three.png",
    "client-four.png",
    "client-five.png",
    "client-six.png",
    "client-seven.png",
  ];

  return (
    <section className="ep-client-section pt-120">
      <div className="container">
        <div className="row">
          <h5 className="client-pretitle heading-five text-center mb-60">
            <span className="bg-white px-4 position-relative z-3">
              Over 300+ reputable companies have placed their trust in Tranzit
            </span>
          </h5>
        </div>
      </div>
      <div
        className="client-bg bg-control d-flex position-relative justify-content-between align-items-center gap-3"
        style={{ backgroundImage: "url('/assets/img/bg/client-bg.jpg')" }}
      >
        <div className="swiper client-slider">
          <div className="swiper-wrapper slide-transtion">
            {clients.map((client, index) => (
              <div key={index} className="swiper-slide text-center">
                <div className="img">
                  <img
                    src={`/assets/img/client/${client}`}
                    className="img-fluid"
                    alt="client"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate for infinite scroll effect */}
            {clients.slice(0, 3).map((client, index) => (
              <div key={`dup-${index}`} className="swiper-slide text-center">
                <div className="img">
                  <img
                    src={`/assets/img/client/${client}`}
                    className="img-fluid"
                    alt="client"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      q: "What locations do you ship to and from?",
      a: "Throughout these stages, contractors, engineers, and project managers collaborate to ensure successful project execution, adhering to timelines and budget constraints."
    },
    {
      q: "What types of shipping services do you offer?",
      a: "We offer air freight, ocean freight, rail freight, road transport, and warehousing solutions to meet all your logistics needs."
    },
    {
      q: "How can I get a quote for my shipment?",
      a: "You can get a quote by filling out our online form, calling our customer service, or visiting one of our locations. We'll provide a transparent and competitive quote."
    },
  ];

  return (
    <section className="ep-faq-section pt-60 pb-120 content">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-6 col-lg-8 mx-auto mx-xl-0 align-self-center">
            <div className="section-title pb-30">
              <h6 className="subtitle d-inline-flex align-items-center">
                Frequently Asked Questions
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3171 1.10946e-05L19.3136 8.18934L11.3171 16.3787L3.32062 16.3787L11.3171 8.18934L3.32062 1.14441e-05L11.3171 1.10946e-05Z" fill="currentColor" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.686401 16.3787L0.686401 8.18934L0.686401 1.14441e-05L4.68376 4.09467L8.68199 8.18934L4.68376 12.284L0.686401 16.3787Z" fill="currentColor" />
                  </svg>
                </span>
              </h6>
              <h2 className="heading-two">Find Your Shipping Answers Here: Tranzit FAQ</h2>
            </div>
            <div className="faq-main secondary-bg rounded-20">
              <p>
                You can consider adding a sentence about Tranzit&apos;s commitment to providing excellent customer service throughout the shipping process.
              </p>
              <div className="faq-body pt-40">
                <div className="accordion" id="faqAccordion">
                  {faqs.map((item, index) => (
                    <div key={index} className="accordion-item rounded-6">
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faq${index}`}
                        >
                          <span className="heading-six">{item.q}</span>
                          <span className="arrow-icon d-flex align-items-center justify-content-center rounded-6">
                            <span className="plus">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                              </svg>
                            </span>
                            <span className="minus">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" />
                              </svg>
                            </span>
                          </span>
                        </button>
                      </h2>
                      <div id={`faq${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 mx-auto mx-xl-0">
            <div className="faq-image position-relative">
              <div className="item item-one hover-effect">
                <div className="image position-relative">
                  <div className="rounded-20 overlay-shape overflow-hidden">
                    <img src="/assets/img/faq/faq01.jpg" className="img-fluid rounded-20 w-100" alt="faq" />
                  </div>
                  <div className="text text-center rounded-10 position-absolute">
                    <h2 className="heading-two text-white">
                      <span>2</span><span className="heading-three text-white">M</span>
                    </h2>
                    <p className="text-white">Deliver Goods Every Weeks</p>
                  </div>
                </div>
              </div>
              <div className="item item-two hover-effect d-flex justify-content-end">
                <div className="image position-relative">
                  <div className="rounded-20 overlay-shape overflow-hidden">
                    <img src="/assets/img/faq/faq02.jpg" className="img-fluid w-100 rounded-20" alt="faq" />
                  </div>
                  <div className="text text-center rounded-10 position-absolute">
                    <h2 className="heading-two text-white">
                      <span>5</span><span className="heading-three text-white">M</span>
                    </h2>
                    <p className="text-white">Happy Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Location Section
function LocationSection() {
  return (
    <div
      className="ep-location-section mt-120 bg-control"
      style={{ backgroundImage: "url('/assets/img/bg/location-bg.jpg')" }}
    >
      <div className="overlay h-100">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-5 col-lg-6 col-md-7">
              <div className="text text-center text-md-start">
                <h3 className="heading-three title text-white pb-3">
                  Seeking exact location!
                </h3>
                <a href="#" className="text-white">
                  Click Here For Directions
                </a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-5">
              <div className="image d-flex justify-content-center">
                <svg
                  width="168"
                  height="102"
                  viewBox="0 0 148 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="circle1"
                    d="M147 56C147 59.1745 145.171 62.3394 141.546 65.3512C137.926 68.3579 132.629 71.1104 125.994 73.4413C112.735 78.1 94.3524 81 74 81C53.6476 81 35.2648 78.1 22.0056 73.4413C15.3714 71.1104 10.0738 68.3579 6.45427 65.3512C2.82869 62.3394 1 59.1745 1 56C1 52.8255 2.82869 49.6606 6.45427 46.6488C10.0738 43.6421 15.3714 40.8896 22.0056 38.5587C35.2648 33.9 53.6476 31 74 31C94.3524 31 112.735 33.9 125.994 38.5587C132.629 40.8896 137.926 43.6421 141.546 46.6488C145.171 49.6606 147 52.8255 147 56Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    className="circle2"
                    d="M131.5 54C131.5 56.5498 130.002 59.0525 127.126 61.3974C124.254 63.7391 120.067 65.8702 114.849 67.6694C104.418 71.2663 89.976 73.5 74 73.5C58.024 73.5 43.5816 71.2663 33.1508 67.6694C27.933 65.8702 23.7462 63.7391 20.8739 61.3974C17.9976 59.0525 16.5 56.5498 16.5 54C16.5 51.4502 17.9976 48.9475 20.8739 46.6026C23.7462 44.2609 27.933 42.1298 33.1508 40.3306C43.5816 36.7337 58.024 34.5 74 34.5C89.976 34.5 104.418 36.7337 114.849 40.3306C120.067 42.1298 124.254 44.2609 127.126 46.6026C130.002 48.9475 131.5 51.4502 131.5 54Z"
                    stroke="white"
                  />
                  <path
                    className="circle3"
                    d="M119.5 53C119.5 54.9994 118.336 56.9761 116.068 58.8417C113.802 60.7045 110.494 62.4043 106.363 63.8415C98.1038 66.7141 86.6619 68.5 74 68.5C61.3381 68.5 49.8962 66.7141 41.6373 63.8415C37.5056 62.4043 34.1977 60.7045 31.9325 58.8417C29.6639 56.9761 28.5 54.9994 28.5 53C28.5 51.0006 29.6639 49.0239 31.9325 47.1583C34.1977 45.2955 37.5056 43.5957 41.6373 42.1585C49.8962 39.2859 61.3381 37.5 74 37.5C86.6619 37.5 98.1038 39.2859 106.363 42.1585C110.494 43.5957 113.802 45.2955 116.068 47.1583C118.336 49.0239 119.5 51.0006 119.5 53Z"
                    stroke="white"
                  />
                  <g clipPath="url(#clip0_location)">
                    <path
                      d="M94.4282 43.5415C91.1799 42.6658 87.3076 42.0231 83.0903 41.6445L77.1004 52.8465L74 58.6445L70.9 52.8465L64.9102 41.6445C60.6924 42.0231 56.8201 42.6653 53.5723 43.5415C47.2204 45.2549 44 47.638 44 50.6249C44 53.6118 47.2204 55.995 53.5718 57.7084C59.0513 59.186 66.3059 59.9999 74 59.9999C81.6941 59.9999 88.9487 59.186 94.4282 57.7084C100.78 55.995 104 53.6118 104 50.6249C104 47.638 100.78 45.2549 94.4282 43.5415Z"
                      fill="white"
                    />
                    <path
                      className="arrow"
                      d="M74 21.0938C75.9386 21.0938 77.5156 19.5168 77.5156 17.5781C77.5156 15.6395 75.9386 14.0625 74 14.0625C72.0614 14.0625 70.4844 15.6395 70.4844 17.5781C70.4844 19.5168 72.0614 21.0938 74 21.0938Z"
                      fill="white"
                    />
                    <path
                      className="arrow"
                      d="M63.601 31.7409L74 51.189L84.399 31.7409C88.7496 28.5379 91.5781 23.3826 91.5781 17.5781C91.5781 7.88544 83.6927 0 74 0C64.3073 0 56.4219 7.88544 56.4219 17.5781C56.4219 23.3826 59.2504 28.5379 63.601 31.7409ZM74 10.5469C77.8773 10.5469 81.0312 13.7009 81.0312 17.5781C81.0312 21.4554 77.8773 24.6094 74 24.6094C70.1227 24.6094 66.9688 21.4554 66.9688 17.5781C66.9688 13.7009 70.1227 10.5469 74 10.5469Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Why Choose Us Section
function WhyChooseUsSection() {
  return (
    <div className="ep-why-choose-us-section mt-120 py-120 position-relative z-1">
      <div className="shape-one position-absolute start-0 bottom-0">
        <img src="/assets/img/why-choose-us/shape.svg" alt="why-choose-us" />
      </div>
      <div className="shape-two position-absolute end-0 top-0">
        <img src="/assets/img/why-choose-us/shape02.svg" alt="why-choose-us" />
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="tranzit-contact-form rounded-20">
              <form action="#">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="input-group black">
                      <input
                        type="text"
                        className="form-control shadow-none rounded-pill"
                        placeholder="Your Name"
                      />
                      <span className="icon position-absolute top-50 translate-middle-y">
                        <i className="fa-solid fa-user"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control shadow-none rounded-pill"
                        placeholder="Your Email"
                      />
                      <span className="icon position-absolute top-50 translate-middle-y">
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control shadow-none rounded-pill"
                        placeholder="Phone No:"
                      />
                      <span className="icon position-absolute top-50 translate-middle-y">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <select className="form-select white shadow-none rounded-pill">
                        <option value="" disabled>Freight Type</option>
                        <option value="general">General Cargo</option>
                        <option value="refrigerated">Refrigerated Goods</option>
                        <option value="hazardous">Hazardous Materials</option>
                        <option value="liquid">Liquid Transport</option>
                        <option value="bulk">Bulk Freight</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <select className="form-select white shadow-none rounded-pill">
                        <option value="" disabled>Load</option>
                        <option value="full">Full Truckload (FTL)</option>
                        <option value="partial">Partial Truckload (PTL)</option>
                        <option value="ltl">Less Than Truckload (LTL)</option>
                        <option value="container">Container Load</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group">
                      <label className="form-label text-white">Distance (Miles)</label>
                      <div className="slider-wrapper w-100">
                        <input
                          className="slider w-100"
                          max="10000"
                          min="100"
                          type="range"
                          defaultValue="8000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="total-price pt-3 d-flex align-items-center justify-content-between gap-4">
                      <div className="switch-toggle">
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider"></span>
                        </label>
                      </div>
                      <div className="price">
                        <p><span className="text-white">Total:</span> $7000.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="theme-btn hover-effect-btn style2 text-uppercase w-100 border-0 rounded-pill d-flex align-items-center gap-2 text-center justify-content-center"
                    >
                      Submit Request
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
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title text-start pb-30">
              <h6 className="subtitle d-inline-flex text-white align-items-center">
                Why Choose us
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3171 1.10946e-05L19.3136 8.18934L11.3171 16.3787L3.32062 16.3787L11.3171 8.18934L3.32062 1.14441e-05L11.3171 1.10946e-05Z" fill="currentColor" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.686401 16.3787L0.686401 8.18934L0.686401 1.14441e-05L4.68376 4.09467L8.68199 8.18934L4.68376 12.284L0.686401 16.3787Z" fill="currentColor" />
                  </svg>
                </span>
              </h6>
              <h2 className="heading-two text-light">Why Partner with Tranzit?</h2>
            </div>
            <p>
              At Tranzit, we go the extra mile to provide exceptional customer
              service and ensure your complete satisfaction. Our commitment to
              innovation and technology.
            </p>
            <div className="custom-progressbar pt-40">
              <div className="progress-item">
                <label className="text-white pb-2">Shipping</label>
                <div className="progress" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar" style={{ width: '90%' }}><span className="num">90%</span></div>
                </div>
              </div>
              <div className="progress-item">
                <label className="text-white pb-2">Management</label>
                <div className="progress" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar" style={{ width: '80%' }}><span className="num">80%</span></div>
                </div>
              </div>
              <div className="progress-item">
                <label className="text-white pb-2">Successful Delivery</label>
                <div className="progress" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar" style={{ width: '75%' }}><span className="num">75%</span></div>
                </div>
              </div>
            </div>
            <div className="call-us d-flex align-items-center gap-3 pt-5">
              <div className="icon d-flex align-items-center justify-content-center rounded-pill">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="text">
                <p>Call For Free!</p>
                <a href="tel:+165-920-6677" className="text-white fw-medium">+165-920-6677</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Page Component
export default function Home() {
  const counters = [
    { icon: "counter01.svg", count: 60, suffix: "k", label: "Successful Transportation" },
    { icon: "counter02.svg", count: 50, suffix: "", label: "Experienced Team Member" },
    { icon: "counter03.svg", count: 45, suffix: "+", label: "Years of Experience" },
    { icon: "counter04.svg", count: 58, suffix: "k", label: "Satisfied Customers" },
  ];

  useEffect(() => {
    // Hide preloader on mount
    const preloader = document.querySelector('.fullpage_loader') as HTMLElement;
    if (preloader) {
      preloader.style.display = 'none';
    }
  }, []);

  return (
    <>
      <Header />

      <main>
        {/* Banner Section */}
        <BannerSlider />

        {/* Services Section */}
        <ServicesSlider />

        {/* About Section */}
        <AboutSection />

        {/* Counter Section */}
        <section className="ep-counter-section pt-120">
          <div className="container">
            <div className="counter-body bg-two rounded-30 d-flex flex-wrap justify-content-between align-items-center">
              {counters.map((item, index) => (
                <CounterItem
                  key={index}
                  icon={item.icon}
                  count={item.count}
                  suffix={item.suffix}
                  label={item.label}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Work Process Section */}
        <WorkProcessSection />

        {/* Team Section */}
        <TeamSection />

        {/* Client Logos Section */}
        <ClientLogoSection />

        {/* Testimonial Section */}
        <TestimonialSlider />

        {/* FAQ Section */}
        <FAQSection />

        {/* Portfolio Section */}
        <PortfolioSlider />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Blog Section */}
        <BlogSection />

        {/* Location Section */}
        <LocationSection />
      </main>

      <Footer />
    </>
  );
}
