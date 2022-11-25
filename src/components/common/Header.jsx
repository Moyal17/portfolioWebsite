import React, { useState } from 'react';
import { useTheme } from 'next-themes'
import useSticky from '../../hooks/use-sticky';
import Link from 'next/link';
import useGlobalContext from '../../hooks/useGlobalContext';
import Sidebar from './Sidebar';

const Header = ({ HeaderTwo, headerEight = false,homeNine}) => {
  const { theme, setTheme } = useTheme();
  const { headerSticky } = useSticky();
  const [searchOpen, setSearchOpen] = useState(false);
  const {setShowSidebar} = useGlobalContext();

  return (
    <>
      <header>
        <div className={`tp-header-area ${HeaderTwo && 'box-plr-85'} ${homeNine ? 'header-style-9' : ''}`}>
          <div className={`tp-header-area-inner ${HeaderTwo ? '' : 'inner-border'} 
          ${headerSticky && "header-sticky"} ${homeNine && 'header-transparent border-0'}`} id="header-sticky">
            <div className={`${HeaderTwo ? 'container-fluid' : 'container'} p-relative`}>
              <div className="row align-items-center">
                <div className="col-xxl-3 col-xl-2 col-lg-2 col-md-6 col-6">
                  <div className="logo-dark">
                    <Link href="/">
                     <a>
                     { homeNine ? <img src="/assets/img/logo/logo-white.png" alt="logo" style={{maxHeight: '80px'}} />
                      : <img src="/assets/img/logo/logo-black.png" alt="logo" style={{maxHeight: '80px'}} />}
                     </a>
                    </Link>
                  </div>
                  <div className="logo-white">
                     <Link href="/">
                      <a><img src="/assets/img/logo/logo-white.png" alt="logo"  style={{maxHeight: '80px'}}/></a>
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-7 col-lg-7 d-none d-lg-block">
                  <div className="tpmenu">
                    <nav id="mobile-menu">
                      <ul>
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/about">About</Link>
                        </li>
                        <li>
                          <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                          <Link href="/service-details">Services</Link>
                        </li>
                        <li className="has-dropdown megamenu-full" style={{display: 'none'}}>
                          <a href="#">Pages</a>
                          <ul className="megamenu">
                            <li>
                              <a href="#" className="megamenu-title">Page Layout 1</a>
                              <ul>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/about-me">About Me</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                                <li><Link href="/faq">FAQ</Link></li>
                                <li><Link href="/help-center">Help Center</Link></li>
                                <li><Link href="/error-page">Error 404</Link></li>
                                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link href="/coming-soon">Coming Soon</Link></li>
                              </ul>
                            </li>
                          </ul>
                        </li>

                        <li className="has-dropdown" style={{display: 'none'}}>
                          <Link href="/services">Services</Link>
                          <ul className="submenu">
                            <li><Link href="/services">Services Page</Link></li>
                            <li><Link href="/service-details">Services Deatils</Link></li>
                          </ul>
                        </li>
                        <li className="has-dropdown" style={{display: 'none'}}>
                          <Link href="/blog">Blog</Link>
                          <ul className="submenu">
                            <li><Link href="/blog">Blog Page</Link></li>
                            <li><Link href="/blog-grid">Blog Grid</Link></li>
                            <li><Link href="/blog-details">Blog Deatils</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {
                  !headerEight && <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
                    <div className="tp-header-action">
                      <ul>
                        <li>
                          {/* dark mode button start  */}
                          <div className="mode-switch-wrapper my_switcher setting-option">
                            <input type="checkbox" className="checkbox" id="chk" />
                            <label className="label" htmlFor="chk">
                              <i onClick={() => setTheme('dark')} className="fas fa-sun tp-dark-icon setColor dark theme__switcher-btn" data-theme="dark"></i>
                              <i onClick={() => setTheme('light')} className="fas fa-moon tp-light-icon setColor light theme__switcher-btn" data-theme="light"></i>
                            </label>
                          </div>
                          {/* dark mode button end  */}
                        </li>
                      </ul>
                    </div>
                  </div>
                }

                {
                  headerEight && <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-6 col-6">
                    <div className="tp-header-right d-flex align-items-center justify-content-end">
                      <div className="tp-header-action tp-header-action-8">
                        <ul>
                          <li>
                            {/* <!-- dark mode button start --> */}
                            <div className="mode-switch-wrapper my_switcher setting-option">
                              <input type="checkbox" className="checkbox" id="chk" />
                              <label className="label" htmlFor="chk">
                                <i onClick={() => setTheme('dark')} className="fas fa-sun tp-dark-icon setColor dark theme__switcher-btn" data-theme="dark"></i>
                                <i onClick={() => setTheme('light')} className="fas fa-moon tp-light-icon setColor light theme__switcher-btn" data-theme="light"></i>
                              </label>
                            </div>
                            {/* <!-- dark mode button end  --> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                }

              </div>
            </div>
          </div>
        </div>
      </header>


      {/* Sidebar  */}
      <Sidebar />
      {/* Sidebar  */}

    </>
  );
};

export default Header;
