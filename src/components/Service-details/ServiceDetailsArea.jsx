import React from 'react';

const ServiceDetailsArea = () => {
  return (
    <>
      <div className="services-details-area pt-140 pb-105">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h4 className="services-d-title mb-25">Application Design and Development</h4>
              <p className="tpabout-xs-title mb-25">
                The perfect blend between form and function, apps that are designed and built for the people who use them.
              </p>
              <p className="services-text mb-45">
                Building an app should begin with a strong purpose, followed closely with the tools, process, and capabilities to meet the needs of your users.<br/>
                My Passion help clients gain clarity around their requirements, their users, and the technology required to bring their ideas to reality.<br/>
                Leading your development team with a strong purpose that focuses on performance, UI/UX and your brand, I believe that an application should not only be built with high quality code but it should be beautiful, intuitive, and represent your brand at the same time.
              </p>
              <h5 className="services-sm-title mb-25">4 Simple Steps</h5>
              <p>At the core of every application-driven experience is people. People that use the product and people that design and build it. Our team was designed to provide leadership and methods that work, so your customers get the possible version of your innovation.</p>
              <div className="row mt-70">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">
                      <span className="step-number">01</span>
                    </div>
                    <h6 className="step-title mt-40">Roadmap Planning</h6>
                    <p>Focus on crucial user journey tasks first. Then we prioritize all other features with the lowest effort and highest business value.</p>
                    <div className="step-item-shape shape-1">
                      <img src="assets/img/shape/arrow-shape-1.png" alt="arrow-shape" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">

                      <span className="step-number">02</span>
                    </div>
                    <h6 className="step-title mt-40">Prototyping & UX</h6>
                    <p>User flows & 'journey maps' then gets put into a designed prototype that you can try out. This is the time to test the design and experience.</p>
                    <div className="step-item-shape shape-1 d-none d-lg-block">
                      <img src="assets/img/shape/arrow-shape-2.png" alt="arrow-shape" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">
                      <span className="step-number">03</span>
                    </div>
                    <h6 className="step-title mt-40">Agile Development</h6>
                    <p>Managing timelines and budgets to ensures that your product launches as soon as possible with a high-quality Minimum Viable Product (MVP). </p>
                    <div className="step-item-shape shape-1">
                      <img src="assets/img/shape/arrow-shape-1.png" alt="arrow-shape" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">
                      <span className="step-number">04</span>
                    </div>
                    <h6 className="step-title mt-40">Project Management</h6>
                    <p>Project managers keep teams aligned and navigate changes in the project sending reviews of the work, proactive communication and a partner in your project the entire way.  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="services-sm-image w-img mb-45">
                <img src="assets/img/services/services-d1.jpg" alt="services-sm-img" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="services-sm-image w-img mb-45">
                <img src="assets/img/services/services-d2.jpg" alt="services-sm-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;
