"use client";

const blogPosts = [
    {
        img: "blog01.jpg",
        day: "10",
        month: "Sep, 2024",
        author: "Admin",
        comments: 5,
        title: "Tranzit Embraces AI for Optimized Route Planning",
    },
    {
        img: "blog02.jpg",
        day: "10",
        month: "Sep, 2024",
        author: "Admin",
        comments: 5,
        title: "How Tranzit is Adapting to Meet Growing Demand",
    },
    {
        img: "blog03.jpg",
        day: "10",
        month: "Sep, 2024",
        author: "Admin",
        comments: 5,
        title: "Tranzit's Commitment to Eco-Friendly Practices",
    },
];

export default function BlogSection() {
    return (
        <section className="ep-blog-section pt-120 content">
            <div className="container position-relative">
                <div className="d-flex pb-60 gap-3 justify-content-between align-items-end flex-wrap">
                    <div className="section-title text-start">
                        <h6 className="subtitle d-inline-flex align-items-center">
                            News &amp; Blog
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3171 1.10946e-05L19.3136 8.18934L11.3171 16.3787L3.32062 16.3787L11.3171 8.18934L3.32062 1.14441e-05L11.3171 1.10946e-05Z" fill="currentColor" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.686401 16.3787L0.686401 8.18934L0.686401 1.14441e-05L4.68376 4.09467L8.68199 8.18934L4.68376 12.284L0.686401 16.3787Z" fill="currentColor" />
                                </svg>
                            </span>
                        </h6>
                        <h2 className="heading-two">Tranzit News &amp; Insights</h2>
                    </div>
                    <a
                        href="#"
                        className="theme-btn style2 btn-dark d-inline-flex text-uppercase align-items-center gap-2 justify-content-center rounded-pill hover-effect-btn"
                    >
                        All News
                        <span className="theme-btn-icon">
                            <svg className="su-arrow-svg-top-right" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 1V8C10 8.29167 9.90625 8.53125 9.71875 8.71875C9.53125 8.90625 9.29167 9 9 9C8.70833 9 8.46875 8.90625 8.28125 8.71875C8.09375 8.53125 8 8.29167 8 8V3.40625L1.71875 9.71875C1.51042 9.90625 1.27083 10 1 10C0.729167 10 0.489583 9.90625 0.28125 9.71875C0.09375 9.51042 0 9.27083 0 9C0 8.72917 0.09375 8.48958 0.28125 8.28125L6.59375 2H2C1.70833 2 1.46875 1.90625 1.28125 1.71875C1.09375 1.53125 1 1.29167 1 1C1 0.708333 1.09375 0.46875 1.28125 0.28125C1.46875 0.09375 1.70833 0 2 0H9C9.29167 0 9.53125 0.09375 9.71875 0.28125C9.90625 0.46875 10 0.708333 10 1Z" fill="white"></path>
                            </svg>
                        </span>
                    </a>
                </div>
                <div className="row g-4">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="col-lg-4 col-md-6 fade-up">
                            <div className="blog-item hover-effect rounded-20 overflow-hidden">
                                <div className="blog-img">
                                    <a href="#" className="position-relative d-block w-100">
                                        <div className="overlay-shape overflow-hidden">
                                            <img src={`/assets/img/blog/${post.img}`} className="card-img-top img-fluid w-100" alt={post.title} />
                                        </div>
                                        <div className="news-date position-absolute">
                                            <img src="/assets/img/blog/shape.svg" alt="shape" />
                                            <div className="date text-center position-absolute">
                                                <h3 className="heading-three date">{post.day}</h3>
                                                <p className="p2">{post.month}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="blog-text">
                                    <div className="blog-meta d-flex align-items-center gap-4 mb-4">
                                        <div className="d-flex gap-2 align-items-center">
                                            <i className="fa-solid fa-user"></i>
                                            <p className="p2">By {post.author}</p>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <i className="fa-solid fa-comments"></i>
                                            <p className="p2">Comments ({String(post.comments).padStart(2, '0')})</p>
                                        </div>
                                    </div>
                                    <h4 className="heading-four blog-title pb-30">
                                        <a href="#">{post.title}</a>
                                    </h4>
                                    <a
                                        href="#"
                                        className="theme-btn style2 d-inline-flex text-uppercase align-items-center gap-2 justify-content-center rounded-pill hover-effect-btn"
                                    >
                                        Read More
                                        <span className="theme-btn-icon">
                                            <svg className="su-arrow-svg-top-right" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 1V8C10 8.29167 9.90625 8.53125 9.71875 8.71875C9.53125 8.90625 9.29167 9 9 9C8.70833 9 8.46875 8.90625 8.28125 8.71875C8.09375 8.53125 8 8.29167 8 8V3.40625L1.71875 9.71875C1.51042 9.90625 1.27083 10 1 10C0.729167 10 0.489583 9.90625 0.28125 9.71875C0.09375 9.51042 0 9.27083 0 9C0 8.72917 0.09375 8.48958 0.28125 8.28125L6.59375 2H2C1.70833 2 1.46875 1.90625 1.28125 1.71875C1.09375 1.53125 1 1.29167 1 1C1 0.708333 1.09375 0.46875 1.28125 0.28125C1.46875 0.09375 1.70833 0 2 0H9C9.29167 0 9.53125 0.09375 9.71875 0.28125C9.90625 0.46875 10 0.708333 10 1Z" fill="white"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
