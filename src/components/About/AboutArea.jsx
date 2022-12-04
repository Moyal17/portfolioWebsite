import Link from 'next/link';

const AboutArea = () => {
  return (
    <>
      <div id="about-area" className="tpabout-area pt-140 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tpabout-content-2 pb-50">
                <h3 className="tpabout-xd-title mb-15"><b>Dor</b> Moyal</h3>
                <span className="tpabout-xs-title mb-40">Strategic & creative full-stack developer</span>
                <p className="tpab-text mb-30">Nice to meet you, my name is Dor Moyal, I am a 7+ years experienced, Strategic and creative full-stack developer,
                  Leverage strong technical experience to achieve strategic solutions, resolve complex issues, and improve operational effectiveness.<br/>
                  Optimizing performance as a web designer & developer.<br/>
                  Extensive exposure to cutting-edge web development technologies, software development, and project management, consistently meeting deadlines.
                  Lead dynamic teams to maximize results.</p>
                <div className="tpabout-btn mt-50">
                  <Link href="/contact"><a className="tp-solid-btn">Get in touch</a></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpabout-image-2 pb-50">
                <img src="https://assets.dormoyal.com/dor/abr-img-dor.jpg" alt="about-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
