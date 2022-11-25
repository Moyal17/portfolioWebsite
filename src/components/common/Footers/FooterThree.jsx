import React from 'react';

const FooterThree = () => {
  return (
    <>
      <footer>
        <div className="tpfooter-area fix mt-135">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-xl-6">
                <div className="tp-map-area">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.9053290077245!2d34.79121258476295!3d32.07180922691344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b9c4620ee5b%3A0xa060857953cd4476!2z157XkteT15wg16LXlteo15nXkNec15kg16nXqNeV16DXlA!5e0!3m2!1siw!2sil!4v1669382313578!5m2!1siw!2sil" loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade" ></iframe>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tpfooter-wrapper pt-105 pb-70">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="footer__widget footer-col-4 pb-50">
                        <h5 className="tpfooter-sm-title-2 mb-20"><i className="fas fa-map-marker-alt"></i> Locations</h5>
                        <h6 className="tpfooter-sd-title mb-40">Tel Aviv, Israel</h6>
                        <div className="tpfooter-contact-list">
                          <ul>
                            <li><a href="https://goo.gl/maps/Mf62NY31XHqF3TSg9" target="blank">Azrieli Sarona Tower <br /> Tel Aviv, Israel</a></li>
                            <li><a href="#">Sunday - Friday <br /> 10.00 AM - 08.00 PM</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="footer__widget footer-col-4 pb-50">
                        <h5 className="tpfooter-sm-title-2 mb-20"><i className="fas fa-envelope"></i>Contact Info</h5>
                        <h6 className="tpfooter-sd-title mb-40">Moyal17@gmail.com</h6>
                        <div className="tpfooter-contact-list tpfooter-contact-list-2">
                          <ul>
                            <li>
                              <p>
                                <a href="https://goo.gl/maps/mJZy2DimWtoRbCQNA" target="blank">Azrieli Sarona Tower, Tel Aviv</a>
                              </p>
                            </li>
                            <li>
                              <p><a href="mailto:support@aspire.com">dor@aspire.co.il</a></p>
                            </li>
                            <li>
                              <p> Office Hours: 10:00 - 20:00</p>
                            </li>
                            <li>
                              <p>Sunday - Friday</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tpcopyright-area black-bg-dark">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-8 col-md-6 col-sm-6">
                <p>© 2022 Dor Moyal - Strategic Web Development & Design. All Rights Reserved.</p>
              </div>
              <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
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

export default FooterThree;
