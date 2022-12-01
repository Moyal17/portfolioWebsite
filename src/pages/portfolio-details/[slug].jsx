import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import FooterTwo from '../../components/common/Footers/FooterTwo';
import Header from '../../components/common/Header';
import SEO from '../../components/seo';
import LightBox from '../../components/LightBox/LightBox';
import portfolioData from '../../data/portfolioData';
import portfolioPageData from "../../data/portfolioPageData";
import {siteMetadata} from "../../services/defaultValues";
import {NextSeo} from "next-seo";

const PortfolioDetails = () => {
  const router = useRouter();
  const [portfolioItem, setPortfolioItem] = useState({});
  const id = router.query.slug;

  useEffect(() => {
    if (!id) {

    }
    else {
      setPortfolioItem(portfolioPageData.find(item => item.id == id))
    }
  }, [id])
  return (
    <>
      <NextSeo
        title={portfolioItem.title}
        titleTemplate={portfolioItem.title}
        defaultTitle={portfolioItem.title}
        description={siteMetadata().description}
        canonical={siteMetadata(null,null, `/portfolio-details/${id}`).url}
        openGraph={{
          url: siteMetadata().url,
          title: siteMetadata().title,
          description: siteMetadata().description,
          images: [
            {
              url: portfolioItem.img,
              width: 600,
              height: 400,
              alt: portfolioItem.title,
            },
          ],
        }}
      />
      <Header />
      <div className="project-details-area pt-140 pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="aboutme-image mb-40">
                <img className="b-radius" src={`${portfolioItem.img || "/assets/img/project/project-d.jpg"}`} alt="project img" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="aboutme-wrapper mb-40">
                <div className="aboutme-content">
                  <h3 className="tpabout-xd-title mb-50">
                    <b>{portfolioItem.title}</b>
                  </h3>
                </div>
                <div className="aboutme-feature-list mt-25">
                  <ul>
                    <li><p>Client:<a href="#"> {portfolioItem.client}</a></p></li>
                    <li><p>Date:<a href="#"> {portfolioItem.date}</a></p></li>
                    <li><p>Category:<a href="#"> {portfolioItem.category}</a></p></li>
                    <li><p>Category:</p>
                      <div className="aboutme-social ml-10">
                        { portfolioItem.social && portfolioItem.social.facebook && <a href={portfolioItem.social && portfolioItem.social.facebook || '#'} target="_blank"><i className="fab fa-facebook-f"></i></a> }
                        { portfolioItem.social && portfolioItem.social.instagram && <a href={portfolioItem.social && portfolioItem.social.instagram || '#'} target="_blank"><i className="fab fa-instagram"></i></a> }
                        { portfolioItem.social && portfolioItem.social.linkedin && <a href={portfolioItem.social && portfolioItem.social.linkedin || '#'} target="_blank"><i className="fab fa-linkedin"></i></a> }
                        { portfolioItem.social && portfolioItem.social.website && <a href={portfolioItem.social && portfolioItem.social.website || '#'} target="_blank"><i className="fab fa-regular fa-globe"></i></a> }
                        { portfolioItem.social && portfolioItem.social.other && <a href={portfolioItem.social && portfolioItem.social.other || '#'} target="_blank"><i className="fab fa-regular fa-link"></i></a> }
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="project-details-content">
                <h4 className="tab-pane-title mb-30"><b>Project</b> Details</h4>
                {/* eslint-disable-next-line react/jsx-key */}
                { portfolioItem.description && portfolioItem.description.map((desc) => (<p>{desc}</p>))}
                { portfolioItem.htmlDescription ? portfolioItem.htmlDescription() : null }
              </div>
              { portfolioItem.workExperience && (
                <div className="project-details-content">
                  <h4 className="tab-pane-title mb-30"><b>Work</b> Experience</h4>
                  { portfolioItem.workExperience() }
                </div>
              )}
              <div className="row mt-45">
                <LightBox images={portfolioItem.images}/>
              </div>
              <div className="project-details-nav mt-55">
                <div className="details-nav-item">
                  <Link href={`/portfolio-details/${portfolioItem.back ? portfolioItem.back : portfolioItem.id}`}>
                    <a><i className="fas fa-long-arrow-left"></i> Back</a>
                  </Link>
                </div>
                <div className="details-nav-item">
                  <Link href={`/portfolio-details/${portfolioItem.next ? portfolioItem.next : portfolioItem.id}`}>
                    <a>Next <i className="fas fa-long-arrow-right"></i></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterTwo/>
    </>
  );
};

export default PortfolioDetails;
