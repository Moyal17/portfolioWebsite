import React from 'react';

const FooterTwo = () => {
  return (
    <>
      <footer>
        <div className="tpfooter-area black-bg-2 pt-115 pb-75">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-4 col-md-6">
                <div className="footer__widget">
                  <h5 className="footer-sm-title mb-20">FEEL FREE TO CONTACT ME</h5>
                  <h5 className="footer-sp-title mb-15"><i className="fa-solid fa-comment"></i> <a href="#">Telegram: @DorMoyal</a></h5>
                  <span className="footer-sp-contact"><a href="mailto:nerox@gmail.com">moyal17@gmail.com</a></span>
                  <div className="footer-xs-wrapper mt-60 mb-30">
                    <h5 className="footer-xs-title">Career</h5>
                    <p>Delivering highly impactful platforms while I develop & lead the way.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-3 offset-lg-2 col-md-3 col-sm-6">
                <div className="footer__widget d-none">
                  <h5 className="footer-xs-title mb-20">Useful links</h5>
                  <div className="footer-links mb-30">
                    <ul>
                      <li><a href="/about">About</a></li>
                      <li><a href="/portfolio">Portfolio</a></li>
                      <li><a href="#">Shipping & Returns</a></li>
                      <li><a href="#">Refund Policy</a></li>
                    </ul>
                  </div>
                  <h5 className="footer-xs-title mb-20">Useful links</h5>
                  <div className="footer-links mb-30">
                    <ul>
                      <li><a href="#">How it Works</a></li>
                      <li><a href="#">Help & About us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-3 col-sm-6 d-none">
                <div className="footer__widget">
                  <h5 className="footer-xs-title mb-20">Support service</h5>
                  <div className="footer-links mb-30">
                    <ul>
                      <li><a href="#">Orders</a></li>
                      <li><a href="#">Downloads</a></li>
                      <li><a href="#">Shipping & Returns</a></li>
                      <li><a href="#">Addresses</a></li>
                      <li><a href="#">Account details</a></li>
                      <li><a href="#">Logout</a></li>
                      <li><a href="#">Lost password</a></li>
                      <li><a href="#">Orders</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tpcopyright-area-4 border-top-2 black-bg-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-7 mb-10">
                <p>© 2022 Dor Moyal - Strategic Web Development & Design. All Rights Reserved.</p>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="ft-social">
                  <a href="https://www.facebook.com/dormoyall" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/dormoyall" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/dormoyall/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
