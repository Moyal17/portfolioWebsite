import Link from 'next/link';
import useGlobalContext from '../../hooks/useGlobalContext';
import VideoModal from '../common/VideoModal';

const VideoAreaFour = () => {
  const { show, handleShow, handleClose } = useGlobalContext();
  return (
    <>
      <div className="tpbs-video-area position-relative grey-bg">
        <div className="tpbsvideo-left text-center p-relative">
          <div className="tpbs-left-image" style={{ backgroundImage: `url(assets/img/video/aspirePromo2.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
          <div className="tpbs-play-btn">
            <button onClick={handleShow} className="play-text popup-video animate-2">
              <i className="fa-solid fa-play"></i></button>
          </div>
          <div className="tpbs-vnoise-bg" data-background="assets/img/testimonial/tpbs-vnoise-bg.png"></div>
          <div className="tpbs-shape display-none">
            <img src="assets/img/video/video-shape-1.png" alt="" />
          </div>
        </div>
        <div className="tpbs-video-wrapper">
          <div className="container-fluid">
            <div className="row g-0 justify-content-end align-items-center">
              <div className="col-lg-6 ">
                <div className="tpbsvideo-box">
                  <div className="tpbsvideo-content">
                    <div className="tpbs-section-wrapper mb-40">
                      <span className="tpbs-sub-title mb-15">My Latest Work</span>
                      <h3 className="tpbs-title">As founder of ASPIRE, <span>we're creating a unique environment.</span></h3>
                    </div>
                    <p>
                      ASPIRE is a personal training platform, exclusive for personal trainers and their clients, providing every fitness professional the tools to create their own unique environment and workout programs with professional exercises.<br/>
                      We currently operate as a personal trainer platform, and will shortly be working directly with personal trainer clients to develop customised workout programs and training programs.
                    </p>
                    <div className="tpbs-video-button mt-50">
                      <Link href="/portfolio-details">
                        <a className="tpbs-btn-2">More Details <i className="fa-solid fa-arrow-right"></i></a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal show={show} handleClose={handleClose} videoId="prr93zKYtaU" />
    </>
  );
};

export default VideoAreaFour;
