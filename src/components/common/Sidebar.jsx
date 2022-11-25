import Link from "next/link";
import useGlobalContext from "../../hooks/useGlobalContext";
import dynamic from "next/dynamic";
import React, { useState } from "react";


const Sidebar = ({ headerMenu }) => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  return (
    <>
      {/* <!-- sidebar area start --> */}
      <div className={`sidebar__area ${showSidebar ? "sidebar-opened" : ""}`}>
        <div className="sidebar__wrapper">
          <div className="sidebar__close" onClick={() => setShowSidebar(false)}>
            <button className="sidebar__close-btn" id="sidebar__close-btn">
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="sidebar__content">
            <div className="sidebar__logo mb-40">
            </div>
            <div className="sidebar__search mb-25">
            </div>

            <div className="mobile-menu fix">
              <nav id="mobile-menu"
                className={`${headerMenu ? "d-block" : "d-lg-none"}`} >
                <ul>
                  <div className="single_link iconAdd">
                    <li><Link href="/"><a>Home</a></Link></li>
                  </div>
                  <div className="single_link iconAdd">
                    <li><Link href="/about"><a>About</a></Link></li>
                  </div>
                  <div className="single_link iconAdd">
                    <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                  </div>
                  <div className="single_link iconAdd">
                    <li><Link href="/service-details"><a>Services</a></Link></li>
                  </div>
                </ul>
              </nav>
            </div>
            <div className="sidebar__social">
              <ul>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setShowSidebar(false)}
        className={`${showSidebar ? "body-overlay opened" : "body-overlay"}`}></div>
      {/* <!-- sidebar area end -->  */}
    </>
  );
};

export default Sidebar;
