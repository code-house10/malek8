"use client";

import { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    const toggleSubmenu = (menu: string) => {
        setOpenSubmenu(openSubmenu === menu ? null : menu);
    };

    const menuItems = [
        {
            name: "Home",
            href: "#",
            submenu: [
                { name: "Home One", href: "/" },
                { name: "Home Two", href: "#" },
            ],
        },
        { name: "About Us", href: "#" },
        {
            name: "Services",
            href: "#",
            submenu: [
                { name: "Service Single", href: "#" },
                { name: "Service Details", href: "#" },
            ],
        },
        {
            name: "Blog",
            href: "#",
            submenu: [
                { name: "Blog Single", href: "#" },
                { name: "Blog Details", href: "#" },
            ],
        },
        {
            name: "Pages",
            href: "#",
            submenu: [
                { name: "Team", href: "#" },
                { name: "Team Details", href: "#" },
                { name: "Portfolio", href: "#" },
                { name: "Pricing", href: "#" },
                { name: "FAQ", href: "#" },
            ],
        },
        { name: "Contact", href: "#" },
    ];

    return (
        <>
            <div id="header-fixed-height"></div>
            <header className="ep-header-section" id="sticky-header">
                {/* Top header section */}
                <div className="d-none d-xl-block top-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 align-self-center">
                                <ul className="list-unstyled contact-info left d-flex flex-wrap align-items-center">
                                    <li className="d-flex align-items-center gap-2 text-white">
                                        <span className="icon"><i className="fa-solid fa-phone"></i></span>
                                        <a href="tel:+165-920-6677">Phone: +165-920-6677</a>
                                    </li>
                                    <li className="d-flex align-items-center gap-2 text-white">
                                        <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                                        <a href="mailto:info@Tranzit.com">Email: info@Tranzit.com</a>
                                    </li>
                                    <li className="d-flex align-items-center gap-2 text-white">
                                        <span className="icon"><i className="fa-solid fa-location-dot"></i></span>
                                        <a href="#">235 Camden St, United States</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <div className="list-unstyled contact-info d-flex justify-content-end flex-wrap align-items-center">
                                    <div className="social-icon">
                                        <ul className="d-flex list-unstyled gap-2">
                                            <li><a href="#" className="rounded-pill d-flex align-items-center justify-content-center"><i className="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="#" className="rounded-pill d-flex align-items-center justify-content-center"><i className="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="#" className="rounded-pill d-flex align-items-center justify-content-center"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#" className="rounded-pill d-flex align-items-center justify-content-center"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="navbar p-0 navbar-expand-xl d-none d-xl-flex">
                    <a className="navbar-brand position-absolute p-0" href="/">
                        <svg className="shape" xmlns="http://www.w3.org/2000/svg" width="359" height="160" viewBox="0 0 359 160" fill="none">
                            <path d="M0 0H359L315 60V160H227.056H0V0Z" fill="currentColor" />
                        </svg>
                        <img src="/assets/img/logo/Logo.svg" className="position-absolute logo" alt="logo" />
                    </a>
                    <div className="container">
                        <div className="collapse navbar-collapse show">
                            <ul className="navbar-nav me-auto mb-lg-0">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="nav-item">
                                        <a className="nav-link" href={item.href}>
                                            {item.name}
                                            {item.submenu && <i className="fas fa-chevron-down"></i>}
                                        </a>
                                        {item.submenu && (
                                            <ul className="sub-menu list-unstyled">
                                                {item.submenu.map((sub, i) => (
                                                    <li key={i}><a href={sub.href}>{sub.name}</a></li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <div className="header-action d-flex justify-content-end align-items-center">
                                <ul className="list-unstyled d-none d-xxl-flex gap-3">
                                    <li>
                                        <button
                                            className="header-search-btn rounded-pill bg-three border-0 d-flex align-items-center justify-content-center"
                                            onClick={() => setSearchOpen(true)}
                                        >
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="offcanvas-btn rounded-pill bg-three border-0 d-flex align-items-center justify-content-center"
                                            onClick={() => setOffcanvasOpen(true)}
                                        >
                                            <i className="fa-solid fa-bars"></i>
                                        </button>
                                    </li>
                                </ul>
                                <a href="#" className="theme-btn style2 d-inline-flex align-items-center gap-2 justify-content-center rounded-pill hover-effect-btn">
                                    Free Quote
                                    <span className="theme-btn-icon">
                                        <svg className="su-arrow-svg-top-right" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 1V8C10 8.29167 9.90625 8.53125 9.71875 8.71875C9.53125 8.90625 9.29167 9 9 9C8.70833 9 8.46875 8.90625 8.28125 8.71875C8.09375 8.53125 8 8.29167 8 8V3.40625L1.71875 9.71875C1.51042 9.90625 1.27083 10 1 10C0.729167 10 0.489583 9.90625 0.28125 9.71875C0.09375 9.51042 0 9.27083 0 9C0 8.72917 0.09375 8.48958 0.28125 8.28125L6.59375 2H2C1.70833 2 1.46875 1.90625 1.28125 1.71875C1.09375 1.53125 1 1.29167 1 1C1 0.708333 1.09375 0.46875 1.28125 0.28125C1.46875 0.09375 1.70833 0 2 0H9C9.29167 0 9.53125 0.09375 9.71875 0.28125C9.90625 0.46875 10 0.708333 10 1Z" fill="white"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Search Overlay */}
                <div className={`header-search position-fixed top-0 start-0 w-100 h-100 ${isSearchOpen ? 'active' : ''}`} style={{ display: isSearchOpen ? 'block' : 'none', zIndex: 9999, background: 'rgba(0,0,0,0.9)' }}>
                    <button
                        type="button"
                        className="icon-box close-header-search border-0 position-absolute secondary-bg d-flex align-items-center justify-content-center rounded-pill"
                        onClick={() => setSearchOpen(false)}
                        style={{ top: '20px', right: '20px', width: '50px', height: '50px' }}
                    >
                        <i className="fa-regular fa-xmark text-white"></i>
                    </button>
                    <div className="container h-100 d-flex align-items-center justify-content-center">
                        <div className="search-main mx-auto" style={{ maxWidth: '600px', width: '100%' }}>
                            <form action="#">
                                <div className="input-group position-relative">
                                    <input type="text" className="form-control shadow-none rounded-pill" placeholder="Search here.." style={{ height: '60px', paddingRight: '120px' }} />
                                    <button className="search-btn theme-btn position-absolute top-50 translate-middle-y secondary-bg rounded-pill d-flex align-items-center gap-2" type="submit" style={{ right: '5px' }}>
                                        <i className="fa-solid fa-magnifying-glass ms-0"></i> Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Offcanvas Menu */}
                <div className={`offcanvas-overlay position-fixed top-0 start-0 w-100 h-100 ${isOffcanvasOpen ? 'active' : ''}`} style={{ display: isOffcanvasOpen ? 'block' : 'none', background: 'rgba(0,0,0,0.5)', zIndex: 9998 }} onClick={() => setOffcanvasOpen(false)}></div>
                <aside className={`offcanvas-menu position-fixed top-0 h-100 ${isOffcanvasOpen ? 'active' : ''}`} style={{ right: isOffcanvasOpen ? 0 : '-400px', width: '350px', transition: 'right 0.3s ease', zIndex: 9999, background: '#001f3f', padding: '30px' }}>
                    <div className="header-info d-flex align-items-center justify-content-between gap-4">
                        <div className="logo">
                            <a href="/"><img src="/assets/img/logo/logo3.svg" alt="logo" style={{ maxWidth: '150px' }} /></a>
                        </div>
                        <button className="offcasvas-close bg-transparent border-0 text-white" onClick={() => setOffcanvasOpen(false)}>
                            <i className="fa-regular fa-xmark" style={{ fontSize: '24px' }}></i>
                        </button>
                    </div>
                    <div className="des mt-4">
                        <p className="text-white">Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros.</p>
                    </div>
                    <div className="contact-info separator mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                        <h4 className="heading-four text-white mb-3">Contact Info</h4>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center gap-3 mb-3">
                                <div className="icon-box d-flex align-items-center justify-content-center rounded-pill flex-shrink-0" style={{ width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.3)' }}>
                                    <i className="fa-solid fa-phone text-white"></i>
                                </div>
                                <div className="info">
                                    <h5 className="text-white mb-1" style={{ fontSize: '14px' }}>Call Now</h5>
                                    <a href="tel:+165-920-6677" className="text-white-50">+165-920-6677</a>
                                </div>
                            </li>
                            <li className="d-flex align-items-center gap-3 mb-3">
                                <div className="icon-box d-flex align-items-center justify-content-center rounded-pill flex-shrink-0" style={{ width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.3)' }}>
                                    <i className="fa-solid fa-envelope text-white"></i>
                                </div>
                                <div className="info">
                                    <h5 className="text-white mb-1" style={{ fontSize: '14px' }}>Email Us</h5>
                                    <a href="mailto:info@Tranzit.com" className="text-white-50">info@Tranzit.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Mobile Navigation */}
                <div className="mobile-menu-area d-block d-xl-none overflow-hidden">
                    <div className="container">
                        <div className="mobile-topbar">
                            <div className="d-flex justify-content-between align-items-center py-3">
                                <div className="logo">
                                    <a href="/">
                                        <img src="/assets/img/logo/Logo.svg" alt="logo" style={{ maxWidth: '120px' }} />
                                    </a>
                                </div>
                                <button className="bars bg-transparent border-0" onClick={() => setMobileMenuOpen(true)}>
                                    <i className="fas fa-bars" style={{ fontSize: '24px' }}></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <div
                        className="mobile-menu-overlay"
                        style={{ display: isMobileMenuOpen ? 'block' : 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 9998 }}
                        onClick={() => setMobileMenuOpen(false)}
                    ></div>

                    {/* Mobile Menu */}
                    <div
                        className="mobile-menu-main"
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: isMobileMenuOpen ? 0 : '-300px',
                            width: '280px',
                            height: '100%',
                            background: '#fff',
                            zIndex: 9999,
                            transition: 'left 0.3s ease',
                            overflowY: 'auto'
                        }}
                    >
                        <div className="d-flex justify-content-between align-items-center p-3" style={{ borderBottom: '1px solid #eee' }}>
                            <a href="/">
                                <img src="/assets/img/logo/Logo.svg" alt="logo" style={{ maxWidth: '100px' }} />
                            </a>
                            <button className="close-mobile-menu bg-transparent border-0" onClick={() => setMobileMenuOpen(false)}>
                                <i className="fas fa-times" style={{ fontSize: '20px' }}></i>
                            </button>
                        </div>
                        <div className="menu-body p-3">
                            <ul className="list-unstyled">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="mb-2">
                                        <div
                                            className="d-flex justify-content-between align-items-center py-2"
                                            onClick={() => item.submenu && toggleSubmenu(item.name)}
                                            style={{ cursor: item.submenu ? 'pointer' : 'default' }}
                                        >
                                            <a href={item.submenu ? '#' : item.href} onClick={(e) => item.submenu && e.preventDefault()}>
                                                {item.name}
                                            </a>
                                            {item.submenu && <i className={`fas fa-chevron-${openSubmenu === item.name ? 'up' : 'down'}`}></i>}
                                        </div>
                                        {item.submenu && openSubmenu === item.name && (
                                            <ul className="list-unstyled ps-3 mt-2">
                                                {item.submenu.map((sub, i) => (
                                                    <li key={i} className="py-1">
                                                        <a href={sub.href}>{sub.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
