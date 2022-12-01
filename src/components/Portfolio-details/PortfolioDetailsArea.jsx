import Link from 'next/link';
import portfolioPageData from "../../data/portfolioPageData";
import React from "react";
import LightBox from "../LightBox/LightBox";
import {NextSeo} from "next-seo";
import {siteMetadata} from "../../services/defaultValues";

const PortfolioDetailsArea = () => {
  const data = portfolioPageData.find(item => (item.id === 'aspire_mobile'));
  return (
    <>
      <NextSeo
        title={data.title}
        titleTemplate={data.title}
        defaultTitle={data.title}
        description={siteMetadata().description}
        canonical={siteMetadata(null,null, `/portfolio-details/aspire_mobile`).url}
        openGraph={{
          url: siteMetadata().url,
          title: siteMetadata().title,
          description: siteMetadata().description,
          images: [
            {
              url: data.img,
              width: 1000,
              height: 660,
              alt: data.title,
            },
          ],
        }}
      />
      <div className="project-details-area pt-140 pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="aboutme-image mb-40">
                <img className="b-radius" src={`${data.img || "/assets/img/project/project-d.jpg"}`} alt="project img" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="aboutme-wrapper mb-40">
                <div className="aboutme-content">
                  <h3 className="tpabout-xd-title mb-50">
                    <b>{data.title}</b>
                  </h3>
                </div>
                <div className="aboutme-feature-list mt-25">
                  <ul>
                    <li><p>Client:<a href="#"> {data.client}</a></p></li>
                    <li><p>Date:<a href="#"> {data.date}</a></p></li>
                    <li><p>Category:<a href="#"> {data.category}</a></p></li>
                    <li><p>Category:</p>
                      <div className="aboutme-social ml-10">
                        { data.social && data.social.facebook && <a href={data.social && data.social.facebook || '#'} target="_blank"><i className="fab fa-facebook-f"></i></a> }
                        { data.social && data.social.instagram && <a href={data.social && data.social.instagram || '#'} target="_blank"><i className="fab fa-instagram"></i></a> }
                        { data.social && data.social.linkedin && <a href={data.social && data.social.linkedin || '#'} target="_blank"><i className="fab fa-linkedin"></i></a> }
                        { data.social && data.social.website && <a href={data.social && data.social.website || '#'} target="_blank"><i className="fab fa-regular fa-globe"></i></a> }
                        { data.social && data.social.other && <a href={data.social && data.social.other || '#'} target="_blank"><i className="fab fa-regular fa-link"></i></a> }
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
                { data.description && data.description.map((desc) => (<p>{desc}</p>))}
                { data.htmlDescription ? data.htmlDescription() : null }
              </div>
              { data.workExperience && (
                <div className="project-details-content">
                  <h4 className="tab-pane-title mb-30"><b>Work</b> Experience</h4>
                  { data.workExperience() }
                </div>
              )}
              <div className="row mt-45">
                <LightBox images={data.images}/>
              </div>
              <div className="project-details-nav mt-55">
                <div className="details-nav-item">
                  <Link href={`/portfolio-details/${data.back ? data.back : data.id}`}>
                    <a><i className="fas fa-long-arrow-left"></i> Back</a>
                  </Link>
                </div>
                <div className="details-nav-item">
                  <Link href={`/portfolio-details/${data.next ? data.next : data.id}`}>
                    <a>Next <i className="fas fa-long-arrow-right"></i></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsArea;
