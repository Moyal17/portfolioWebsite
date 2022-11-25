import Link from 'next/link';
import portfolioData from '../../data/portfolioData';

const PortfolioTwo = () => {

  return (
    <>
      <section className="tpproject-area-2 pt-115 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tpbs-section-wrapper text-center mb-30">
                <span className="tpbs-sub-title mb-15">My Portfolio</span>
                <h3 className="tpbs-title">Latest & <span> Greatest Project</span></h3>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            {
              portfolioData.slice(0, 6).map(item => {
                return (
                  <Link key={item.id} href={`/portfolio-details/${item.id}`}>
                    <a className="col-xl-4 col-lg-6 col-md-6" href={`/portfolio-details/${item.id}`}>
                      <div className="tpproject-2 tpproject-3 mb-30">
                        <div className="tpproject-2-thumbnail" style={{backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                        <div className="tpproject-2-text">
                          <span className="catagory mb-10">{item.category}</span>
                          <h5 className="tpproject-2-title">
                            <a>{item.title}</a>
                          </h5>
                          <div className="tpproject-btn mt-25 mb-10">
                            <a>
                              <i className="flaticon-right-arrow-1"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                )
              })
            }

            <div className="col-xl-12">
              <div className="tpproject-btn mt-40 text-center">
                <Link href="/portfolio">
                  <a className="tp-solid-btn">View All Project</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioTwo;
