import Link from 'next/link';

const AboutFour = () => {
  return (
    <>
      <div className="tpbs-about-area pt-120 pb-120 p-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5">
              <div className="tpbs-about-image s-about-img-2">
                <div className="s-about-img-2-inner p-relative fix">
                  <img src="https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/dor/abr-img-dor.jpg" alt="about-img" />
                  <img className="about-shape-1" style={{display: 'none'}} src="assets/img/about/about-shape-1.png" alt="" />
                </div>
                <img className="about-shape-2" src="assets/img/about/about-shape-2.png" alt="" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tps-about tps-about-wrap">
                <div className="tpbs-section-wrapper mb-30">
                  <span className="tpbs-sub-title mb-15">I AIM FOR</span>
                  <h3 className="tpbs-title">Delivering highly impactful platforms<span> while I develop & lead the way.</span></h3>
                </div>
                <p className="ab-text mb-30">
                  Nice to meet you, my name is Dor Moyal, I am a 7+ years experienced, Strategic and creative full-stack developer,
                  Leverage strong technical experience to achieve strategic solutions, resolve complex issues, and improve operational effectiveness.<br/>
                  Optimizing performance as a web designer & developer.<br/>
                  Extensive exposure to cutting-edge web development technologies, software development, and project management, consistently meeting deadlines.
                  Lead dynamic teams to maximize results.
                </p>
                <div className="features__list">
                  <ul className="list-inline">
                    <li className="d-inline-flex align-items-center">
                      <div className="features__list-icon mr-10">
                        <i className="far fa-check"></i>
                      </div>
                      <div className="features__list-text mr-10">
                        <p>Delivering Great solutions.</p>
                      </div>
                    </li>
                    <li className="d-inline-flex align-items-center">
                      <div className="features__list-icon mr-10">
                        <i className="far fa-check"></i>
                      </div>
                      <div className="features__list-text mr-10">
                        <p>Work with global brands.</p>
                      </div>
                    </li>
                    <li className="d-inline-flex align-items-center">
                      <div className="features__list-icon mr-10">
                        <i className="far fa-check"></i>
                      </div>
                      <div className="features__list-text mr-10">
                        <p>Maintaining a high performance platforms.</p>
                      </div>
                    </li>
                    <li className="d-inline-flex align-items-center">
                      <div className="features__list-icon mr-10">
                        <i className="far fa-check"></i>
                      </div>
                      <div className="features__list-text">
                        <p>Managed & developed data structure.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tpbs-button mt-50 display-none">
                  <Link href="/about">
                    <a className="tp-solid-btn">About Me</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tpbs-ab-shape fix">
          <img src="assets/img/about/ab-shape.png" alt="shape" />
        </div>
      </div>
    </>
  );
};

export default AboutFour;
