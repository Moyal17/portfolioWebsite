const portfolioPageData = [
  // aspire_mobile V
  {
    id: 'aspire_mobile',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/aspire-mobile.jpg',
    images: [
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/aspire-mobile/mobile1.jpg', type: 'image', alt: "aspire mobile 1"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/aspire-mobile/mobile2.jpg', type: 'image', alt: "aspire mobile 2"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/aspire-mobile/mobile3.jpg', type: 'image', alt: "aspire mobile 3"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/aspire-mobile/mobile4.jpg', type: 'image', alt: "aspire mobile 4"},
    ],
    category: 'Mobile Design & Development',
    title: 'Aspire - Mobile App',
    client: 'ASPIRE | Personal Training',
    date: 'January, 2020',
    social: {
      facebook: 'https://www.facebook.com/aspire.community',
      instagram: 'https://www.instagram.com/aspire.community',
      linkedin: 'https://www.linkedin.com/company/aspire-personal-training',
      website: 'https://www.aspire.co.il'
    },
    htmlDescription: () => (
      <div className="mb-30">
        <p>ASPIRE is a personal training platform empowering fitness professionals and their clients to connect on a
          deeper, more accountable level to reach their fitness and training goals.</p>
        <p>An exclusive platform for professionals and their personal clients, providing a variety of services,
          community and professional benefits for personal trainer management of clients:</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.05em'}}>
          <li><span>Stay connected to clients, 24/7: easily, smartly keep clients focused on their objectives, even when not participating in a training program.</span>
          </li>
          <li><span>Save time and energy: building training plans for your clients with professional information about each exercise and its proper execution.</span>
          </li>
          <li><span>Demonstrate professionalism: gain access to our database of over 800 professional exercises, categorized by muscle, equipment and exercise types including stretches, strength, aerobic, body weight, yoga and CrossFit - among others.</span>
          </li>
        </ul>
      </div>
    ),
    workExperience: () => (
      <div>
        <p>Environment: ReactJS/Native, AWS, Node.js, MongoDB, Redis.</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.1em'}}>
          <li>Single Handedly architected, designed and developed Aspire’s MVP product - Mobile, web platform, Server
            architecture & microservices.
          </li>
          <li>Spearheading teams to engineer user-centric solutions for achieving efficiency and driving client
            satisfaction.
          </li>
          <li>Executing and contributing to the development, with an emphasis on front end features, browser
            manipulation, and cross-browser compatibility.
          </li>
          <li>Head of design implementation and maintenance.</li>
          <li>Maintaining a high performance platform with over a <b>1000 users and 250 active weekly</b>, that <b>brings
            57 new users a week</b> without marketing.
          </li>
          <li>Integrated 3rd party API's for services like: Paypal, Firebase, Twilio, Postmark email and Analytics.</li>
          <li>Enjoyed learning new technologies to improve and achieve the best results for the company like: AWS
            Lambda, Elastic BeanStalk, CloudFront and many more solutions under Amazon Web Services.
          </li>
        </ul>
      </div>
    ),
    back: 'aspire_mobile',
    next: 'aspire_trainer_platform'
  },
  // aspire_trainer_platform V
  {
    id: 'aspire_trainer_platform',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/aspire-platform.jpg',
    images: [
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/aspire-platform/aspire-web-platform.jpg', type: 'image', alt: "aspire platform 2"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/aspire-platform/aspire-web-platform2.jpg', type: 'image', alt: "aspire platform 3"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/aspire-platform/aspire-trainer-mock.jpg', type: 'image', alt: "aspire platform 1"},
    ],
    category: 'Web Design & Development',
    title: 'Aspire - Trainer Platform',
    client: 'ASPIRE | Personal Training',
    date: 'January, 2020',
    social: {
      facebook: 'https://www.facebook.com/aspire.community',
      instagram: 'https://www.instagram.com/aspire.community',
      linkedin: 'https://www.linkedin.com/company/aspire-personal-training',
      website: 'https://www.aspire.co.il'
    },
    htmlDescription: () => (
      <div className="mb-30">
        <p>ASPIRE is a personal training platform, exclusive for personal trainers and their clients, providing every
          fitness professional the tools to create their own unique environment and workout programs with professional
          exercises.
          Aspire is a personal trainer management tool developed from years of experience in both professional personal
          training and client work.</p>
        <p>ASPIRE is a personal training platform empowering fitness professionals and their clients to connect on a
          deeper, more accountable level to reach their fitness and training goals.</p>
      </div>
    ),
    workExperience: () => (
      <div>
        <p>Environment: ReactJS/Native, AWS, Node.js, MongoDB, Redis.</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.1em'}}>
          <li>Single Handedly architected, designed and developed Aspire’s MVP product - Mobile, web platform, Server
            architecture & microservices.
          </li>
          <li>Spearheading teams to engineer user-centric solutions for achieving efficiency and driving client
            satisfaction.
          </li>
          <li>Executing and contributing to the development, with an emphasis on front end features, browser
            manipulation, and cross-browser compatibility.
          </li>
          <li>Head of design implementation and maintenance.</li>
          <li>Maintaining a high performance platform with over a <b>1000 users and 250 active weekly</b>, that <b>brings
            57 new users a week</b> without marketing.
          </li>
          <li>Integrated 3rd party API's for services like: Paypal, Firebase, Twilio, Postmark email and Analytics.</li>
          <li>Enjoyed learning new technologies to improve and achieve the best results for the company like: AWS
            Lambda, Elastic BeanStalk, CloudFront and many more solutions under Amazon Web Services.
          </li>
        </ul>
      </div>
    ),
    back: 'aspire_mobile',
    current: 'aspire_trainer_platform',
    next: 'aspire_website'
  },
  // aspire_website V
  {
    id: 'aspire_website',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/aspire-website.jpg',
    images: [
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/aspire-site/mockup.jpg', type: 'image', alt: "aspire website 1"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/aspire-site/home.jpg', type: 'image', alt: "aspire website 1"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/aspire-site/blog.jpg', type: 'image', alt: "aspire website 2"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/aspire-site/ourapp.jpg', type: 'image', alt: "aspire website 3"},
    ],
    category: 'Web Design & Development',
    title: 'Aspire Website',
    client: 'ASPIRE | Personal Training',
    date: 'January, 2020',
    social: {
      facebook: 'https://www.facebook.com/aspire.community',
      instagram: 'https://www.instagram.com/aspire.community',
      linkedin: 'https://www.linkedin.com/company/aspire-personal-training',
      website: 'https://www.aspire.co.il'
    },
    htmlDescription: () => (
      <div className="mb-30">
        <p>ASPIRE is a personal training platform, exclusive for personal trainers and their clients, providing every
          fitness professional the tools to create their own unique environment and workout programs with professional
          exercises.
          Aspire is a personal trainer management tool developed from years of experience in both professional personal
          training and client work.</p>
        <p>ASPIRE is a personal training platform empowering fitness professionals and their clients to connect on a
          deeper, more accountable level to reach their fitness and training goals.</p>
      </div>
    ),
    workExperience: () => (
      <div>
        <p>Environment: ReactJS/Native, AWS, Node.js, MongoDB, Redis.</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.1em'}}>
          <li>Single Handedly architected, designed and developed Aspire’s MVP product - Mobile, web platform, Server
            architecture & microservices.
          </li>
          <li>Spearheading teams to engineer user-centric solutions for achieving efficiency and driving client
            satisfaction.
          </li>
          <li>Executing and contributing to the development, with an emphasis on front end features, browser
            manipulation, and cross-browser compatibility.
          </li>
          <li>Head of design implementation and maintenance.</li>
          <li>Maintaining a high performance platform with over a <b>1000 users and 250 active weekly</b>, that <b>brings
            57 new users a week</b> without marketing.
          </li>
          <li>Integrated 3rd party API's for services like: Paypal, Firebase, Twilio, Postmark email and Analytics.</li>
          <li>Enjoyed learning new technologies to improve and achieve the best results for the company like: AWS
            Lambda, Elastic BeanStalk, CloudFront and many more solutions under Amazon Web Services.
          </li>
        </ul>
      </div>
    ),
    back: 'aspire_trainer_platform',
    current: 'aspire_website',
    next: 'eventer_admin_panel'
  },
  // eventer_admin_panel V
  {
    id: 'eventer_admin_panel',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/eventer-ticketing.jpg',
    images: [
      {src: '/assets/img/project/aspire-mobile2.jpg', type: 'image', alt: "aspire mobile 1"},
      {src: '/assets/img/project/aspire-mobile2.jpg', type: 'image', alt: "aspire mobile 2"},
      {src: '/assets/img/project/aspire-mobile2.jpg', type: 'image', alt: "aspire mobile 3"},
    ],
    category: 'Web Development',
    title: 'Eventer - Admin Panel',
    client: 'Eventer | Ticketing System',
    date: 'August, 2015',
    social: {
      facebook: 'https://www.facebook.com/eventertickets',
      instagram: 'https://www.instagram.com/eventertickets',
      linkedin: 'https://www.linkedin.com/company/eventer-co-il',
      website: 'https://www.eventer.co.il',
      other: 'https://finder.startupnationcentral.org/company_page/eventer'
    },
    htmlDescription: () => (
      <div className="mb-30">
        <p>Eventer is a ticketing system for any type of event that helps users sell more tickets with minimal
          resources. With Eventer, users can easily manage every aspect of their event, including requests from buyers
          and marketing campaigns.</p>
        <p>Eventer also manages guest entry into the event, preventing unnecessary queues and delays. Tickets can be
          accessed and used directly from the buyers smartphone without printing, even when there is no internet
          connection.</p>
      </div>
    ),
    workExperience: () => (
      <div>
        <p>Environment: AngularJS, HTML5, CSS3, jade, Node.js, Express, MongoDB, Redis, Grunt.</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.1em'}}>
          <li>Architected, re-designed and developed an upgraded version of the company's platform called 'Eventer v2.0'
            which boosted client acquisition.
          </li>
          <li>Exploring and utilizing new technologies to enhance product functionality & performance efficiency.</li>
          <li>Created and implemented a custom CSS design framework to meet the companies needs and reducing development
            time.
          </li>
          <li>Managed & developed an WCAG accessibility criterion structure which granted Eventer an <b>accessibility
            level AA+.</b></li>
          <li>Trained front-end developers on performing necessary updates, maintaining the company's standards for user
            interfaces, page design and graphics development.
          </li>
        </ul>
      </div>
    ),
    back: 'aspire_website',
    current: 'eventer_admin_panel',
    next: 'eventer_ticket_sell'
  },
  // eventer_ticket_sell V
  {
    id: 'eventer_ticket_sell',
    img: 'assets/img/project/eventer-mockup.jpg',
    images: [
      {src: '/assets/img/project/aspire-mobile2.jpg', type: 'image', alt: "aspire mobile 1"},
      {src: '/assets/img/project/aspire-mobile2.jpg', type: 'image', alt: "aspire mobile 2"},
      {src: '/assets/img/project/aspire-mobile2.jpg', type: 'image', alt: "aspire mobile 3"},
    ],
    category: 'Web Development',
    title: 'Eventer - Ticket Selling Platform',
    client: 'Eventer | Ticketing System',
    date: 'November, 2016',
    social: {
      facebook: 'https://www.facebook.com/eventertickets',
      instagram: 'https://www.instagram.com/eventertickets',
      linkedin: 'https://www.linkedin.com/company/eventer-co-il',
      website: 'https://www.eventer.co.il',
      other: 'https://finder.startupnationcentral.org/company_page/eventer'
    },
    htmlDescription: () => (
      <div className="mb-30">
        <p>Eventer is a ticketing system for any type of event that helps users sell more tickets with minimal
          resources. With Eventer, users can easily manage every aspect of their event, including requests from buyers
          and marketing campaigns.</p>
        <p>Eventer also manages guest entry into the event, preventing unnecessary queues and delays. Tickets can be
          accessed and used directly from the buyers smartphone without printing, even when there is no internet
          connection.</p>
      </div>
    ),
    workExperience: () => (
      <div>
        <p>Environment: AngularJS, HTML5, CSS3, jade, Node.js, Express, MongoDB, Redis, Grunt.</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.1em'}}>
          <li>Architected, re-designed and developed an upgraded version of the company's platform called 'Eventer v2.0'
            which boosted client acquisition.
          </li>
          <li>Exploring and utilizing new technologies to enhance product functionality & performance efficiency.</li>
          <li>Created and implemented a custom CSS design framework to meet the companies needs and reducing development
            time.
          </li>
          <li>Managed & developed an WCAG accessibility criterion structure which granted Eventer an <b>accessibility
            level AA+.</b></li>
          <li>Trained front-end developers on performing necessary updates, maintaining the company's standards for user
            interfaces, page design and graphics development.
          </li>
        </ul>
      </div>
    ),
  },
  // round_robin_website_new V
  {
    id: 'round_robin_website_new',
    img: 'assets/img/project/rndrobin-mockup.jpg',
    images: [
      {src: '/assets/img/project/rndrobin-mockup.jpg', type: 'image', alt: "aspire mobile 1"},
      {src: '/assets/img/project/rndrobin-mockup.jpg', type: 'image', alt: "aspire mobile 2"},
    ],
    category: 'Web Development',
    title: 'Round Robin Website',
    client: 'Round Robin',
    date: 'April, 2015',
    social: {
      facebook: 'https://www.facebook.com/RND.Robin',
      instagram: '',
      linkedin: 'https://www.linkedin.com/company/round-robin-ltd',
      website: 'http://www.rndrobin.com/',
      other: 'https://finder.startupnationcentral.org/program_page/round-robin'
    },
    htmlDescription: () => (
      <div className="mb-30">
        <p>Round Robin is a technological innovation hub specializing in software development. It handpicks relevant
          partners in two categories: established companies and promising start-ups. Round Robin serves as a full-time
          technological partner by leading, managing, and executing entire the entire development process under one
          roof.</p>
        <p>Established companies turn to Round Robin because they realize the advantages of outsourcing technological
          needs and innovation in staying ahead of the competition. Entrepreneurs turn to Round Robin for a highly
          experienced technological partner, MVP development, and pre-seed funding.</p>
        <p>Round Robin's current partners range from social networks to companies in the fields of eCommerce, fintech,
          virtual reality, travel, entertainment, and gaming.</p>
      </div>
    ),
    workExperience: () => (
      <div>
        <p>Environment: AngularJS, HTML5, CSS3, jade, Node.js, Express, MongoDB, Redis, Grunt.</p>
        <p>3+ years of experience under Round Robin's innovation hub roof ,
          became a dynamic and detail-oriented full stack web developer with a track record of spearheading teams to
          engineer user-centric solutions for achieving efficiency and driving client satisfaction. <br/>
          Highly skilled in end-to-end development life cycle of products. Effectively produced features for companies
          like <b>Eventer, RoundTrip, Quarterback, Bee Post and more...</b>
          Registered as one of the key developers in every startup Round-Robin invested in.
        </p>
      </div>
    ),
  },
  // round_robin_website V
  {
    id: 'round_robin_website',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/rndrobin.jpg',
    images: [
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/rndrobin/mockup1.jpg', type: 'image', alt: "rndrobin website 1"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/rndrobin/home.jpg', type: 'image', alt: "rndrobin website 2"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/rndrobin/pages.jpg', type: 'image', alt: "rndrobin website 3"},
    ],
    category: 'Web Development',
    title: 'Round Robin Website',
    client: 'Round Robin',
    date: 'April, 2015',
    social: {
      facebook: 'https://www.facebook.com/RND.Robin',
      instagram: '',
      linkedin: 'https://www.linkedin.com/company/round-robin-ltd',
      website: 'http://www.rndrobin.com/',
      other: 'https://finder.startupnationcentral.org/program_page/round-robin'
    },
    htmlDescription: () => (
      <div className="mb-30">
        <p>Round Robin is a technological innovation hub specializing in software development. It handpicks relevant
          partners in two categories: established companies and promising start-ups. Round Robin serves as a full-time
          technological partner by leading, managing, and executing entire the entire development process under one
          roof.</p>
        <p>Established companies turn to Round Robin because they realize the advantages of outsourcing technological
          needs and innovation in staying ahead of the competition. Entrepreneurs turn to Round Robin for a highly
          experienced technological partner, MVP development, and pre-seed funding.</p>
        <p>Round Robin's current partners range from social networks to companies in the fields of eCommerce, fintech,
          virtual reality, travel, entertainment, and gaming.</p>
      </div>
    ),
    workExperience: () => (
      <div>
        <p>Environment: AngularJS, HTML5, CSS3, jade, Node.js, Express, MongoDB, Redis, Grunt.</p>
        <p>3+ years of experience under Round Robin's innovation hub roof ,
          became a dynamic and detail-oriented full stack web developer with a track record of spearheading teams to
          engineer user-centric solutions for achieving efficiency and driving client satisfaction. <br/>
          Highly skilled in end-to-end development life cycle of products. Effectively produced features for companies
          like <b>Eventer, RoundTrip, Quarterback, Bee Post and more...</b>
          Registered as one of the key developers in every startup Round-Robin invested in.
        </p>
      </div>
    ),
  },
  // center_parcs_ecommerce V
  {
    id: 'center_parcs_ecommerce',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/centerparcs.jpg',
    images: [
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/centerparcs/mockup.jpg', type: 'image', alt: "centerParcs mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/centerparcs/home.jpg', type: 'image', alt: "centerParcs home"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/centerparcs/search.jpg', type: 'image', alt: "centerParcs search"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/centerparcs/pages.jpg', type: 'image', alt: "centerParcs pages"},
    ],
    category: 'Web Development',
    title: 'Center Parcs Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'February, 2019',
    social: {
      facebook: '',
      instagram: '',
      linkedin: '',
      website: 'https://www.roundtrip.co.il/',
      other: 'https://finder.startupnationcentral.org/company_page/round-trip'
    },
    htmlDescription: () => (
      <div className="mb-30">
        <p>Round Trip is an eCommerce travel platform that is customizable, integrative, and responsive. The platform
          was designed with both the online travel agency's (OTA) and end-customers' needs in mind.</p>
        <p>CenterParcs parks are located in beautiful natural areas, with cottages in the heart of the forest or at the
          water's edge. Our parks can be found in all kinds of different nature reserves, ranging from ancient forests
          to beach and winter sports resorts.</p>
      </div>
    ),
    workExperience: () => (
      <div>
        <p>Environment: AngularJS, HTML5, CSS, ejs, Node.js, MongoDB, Redis.</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.1em'}}>
          <li>Executing and contributing to full-stack web development projects, with an emphasis on front end features,
            browser manipulation, and cross-browser compatibility.
          </li>
          <li>Head of design implementation and maintenance for all clients.</li>
          <li>Coordinating with team members to successfully implemented the assigned modules & program tasks.</li>
          <li>Designing & developing new modules for dynamic content management.</li>
          <li>Creating a custom CSS grid framework to meet the company’s needs and reducing development time by %20.
          </li>
          <li>Increasing performance by creating a dynamic architecture for reusable code App wide.</li>
          <li>Aligning all quality parameters in design and performance for product to each client.</li>
        </ul>
      </div>
    ),
  },
  // shaked_tours_ecommerce V
  {
    id: 'shaked_tours_ecommerce',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/shakedtours.jpg',
    images: [
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/shakedTours/mockup.jpg', type: 'image', alt: "shakedTours mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/shakedTours/home.jpg', type: 'image', alt: "shakedTours home"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/shakedTours/hotels.jpg', type: 'image', alt: "shakedTours hotels"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/shakedTours/flights.jpg', type: 'image', alt: "shakedTours flights"},
    ],
    category: 'Web Development',
    title: 'Shaked Tours Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'December, 2017',
    social: {
      facebook: '',
      instagram: '',
      linkedin: '',
      website: 'https://www.roundtrip.co.il/',
      other: 'https://finder.startupnationcentral.org/company_page/round-trip'
    },
    htmlDescription: () => (
      <div className="mb-30">
        <p>Round Trip is an eCommerce travel platform that is customizable, integrative, and responsive. The platform
          was designed with both the online travel agency's (OTA) and end-customers' needs in mind.</p>
        <p>
          Shaked Tours our name says it all, We are all about travel and tours. And we’ve been at it long enough to
          perfect it. We have been in business locally owned and operated in beautiful Israel.
          We specialize in cruises and have fabulous deals. We work with all of the major cruise lines. We can also get
          land lovers to destinations from Israel to Europe.
        </p>
      </div>
    ),
    workExperience: () => (
      <div>
        <p>Environment: AngularJS, HTML5, CSS, ejs, Node.js, MongoDB, Redis.</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.1em'}}>
          <li>Executing and contributing to full-stack web development projects, with an emphasis on front end features,
            browser manipulation, and cross-browser compatibility.
          </li>
          <li>Head of design implementation and maintenance for all clients.</li>
          <li>Coordinating with team members to successfully implemented the assigned modules & program tasks.</li>
          <li>Designing & developing new modules for dynamic content management.</li>
          <li>Creating a custom CSS grid framework to meet the company’s needs and reducing development time by %20.
          </li>
          <li>Increasing performance by creating a dynamic architecture for reusable code App wide.</li>
          <li>Aligning all quality parameters in design and performance for product to each client.</li>
        </ul>
      </div>
    ),
  },
  // airsales_ecommerce V
  {
    id: 'airsales_ecommerce',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/airsales.jpg',
    images: [
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/airsales/mockup.jpg', type: 'image', alt: "airsales mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/airsales/home.jpg', type: 'image', alt: "airsales home"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/airsales/hotels.jpg', type: 'image', alt: "airsales hotels"},
    ],
    category: 'Web Development',
    title: 'Air Sales Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'October, 2018',
    social: {
      facebook: '',
      instagram: '',
      linkedin: '',
      website: 'https://www.roundtrip.co.il/',
      other: 'https://finder.startupnationcentral.org/company_page/round-trip'
    },
    htmlDescription: () => (
      <div className="mb-30">
        <p>Round Trip is an eCommerce travel platform that is customizable, integrative, and responsive. The platform
          was designed with both the online travel agency's (OTA) and end-customers' needs in mind.</p>
        <p>In Air Sales, In every one of our tours, we strive to create unforgettable adventures of a lifetime, Whether
          roaming the streets of a new city, chasing unique adventures, exploring the less-travelled path with native
          guides and like-minded travel mates, or clearing your travel bucket-list.<br/>
          This is why we always include destination-unique experiences and sightseeing of all unmissable highlights on
          our trips. Paired with a selection of attractive optional activities and free time for you to discover on your
          own terms, we delicately balance cultural discovery, adventure and relaxation.</p>
      </div>
    ),
    workExperience: () => (
      <div>
        <p>Environment: AngularJS, HTML5, CSS, ejs, Node.js, MongoDB, Redis.</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.1em'}}>
          <li>Executing and contributing to full-stack web development projects, with an emphasis on front end features,
            browser manipulation, and cross-browser compatibility.
          </li>
          <li>Head of design implementation and maintenance for all clients.</li>
          <li>Coordinating with team members to successfully implemented the assigned modules & program tasks.</li>
          <li>Designing & developing new modules for dynamic content management.</li>
          <li>Creating a custom CSS grid framework to meet the company’s needs and reducing development time by %20.
          </li>
          <li>Increasing performance by creating a dynamic architecture for reusable code App wide.</li>
          <li>Aligning all quality parameters in design and performance for product to each client.</li>
        </ul>
      </div>
    ),
  },
  // graiver_ecommerce
  {
    id: 'graiver_ecommerce',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/graiver.jpg',
    images: [
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/graiver/graiver-mockup.jpg', type: 'image', alt: "graiver mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/graiver/home.jpg', type: 'image', alt: "graiver mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/graiver/flights.jpg', type: 'image', alt: "graiver mockup"},
    ],
    category: 'Web Development',
    title: 'Graiver Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'July, 2018',
    social: {
      facebook: '',
      instagram: '',
      linkedin: '',
      website: 'https://www.roundtrip.co.il/',
      other: 'https://finder.startupnationcentral.org/company_page/round-trip'
    },
    htmlDescription: () => (
      <div className="mb-30">
        <p>Round Trip is an eCommerce travel platform that is customizable, integrative, and responsive. The platform
          was designed with both the online travel agency's (OTA) and end-customers' needs in mind.</p>
        <p>At Graiver, we have one focus and that is simply to make your trip the experience of a lifetime without
          breaking the bank. Being avid travellers ourselves, we know what is essential to creating that perfect trip
          and combine all of these elements in every one of our tours.<br/>
          With fascinating destinations, expert guides, like-minded travellers, premium accommodation and travel – not
          to mention competitive prices; we strive to tick all the boxes to create the most unique and authentic
          travelling experiences.</p>
      </div>
    ),
    workExperience: () => (
      <div>
        <p>Environment: AngularJS, HTML5, CSS, ejs, Node.js, MongoDB, Redis.</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.1em'}}>
          <li>Executing and contributing to full-stack web development projects, with an emphasis on front end features,
            browser manipulation, and cross-browser compatibility.
          </li>
          <li>Head of design implementation and maintenance for all clients.</li>
          <li>Coordinating with team members to successfully implemented the assigned modules & program tasks.</li>
          <li>Designing & developing new modules for dynamic content management.</li>
          <li>Creating a custom CSS grid framework to meet the company’s needs and reducing development time by %20.
          </li>
          <li>Increasing performance by creating a dynamic architecture for reusable code App wide.</li>
          <li>Aligning all quality parameters in design and performance for product to each client.</li>
        </ul>
      </div>
    ),
  },
  // Ynet_ecommerce V
  {
    id: 'ynet_ecommerce',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/ynet.jpg',
    images: [
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/ynet/mockup.jpg', type: 'image', alt: "ynet mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/ynet/home.jpg', type: 'image', alt: "ynet home"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/ynet/hotels.jpg', type: 'image', alt: "ynet hotels"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/ynet/flights.jpg', type: 'image', alt: "ynet hotels"},
    ],
    category: 'Web Development',
    title: 'Ynet Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'July, 2018',
    social: {
      facebook: '',
      instagram: '',
      linkedin: '',
      website: 'https://www.roundtrip.co.il/',
      other: 'https://finder.startupnationcentral.org/company_page/round-trip'
    },
    htmlDescription: () => (
      <div className="mb-30">
        <p>Round Trip is an eCommerce travel platform that is customizable, integrative, and responsive. The platform
          was designed with both the online travel agency's (OTA) and end-customers' needs in mind.</p>
        <p>Ynet travel is a full service travel, tour operator and destination management company which offers a wide
          array of services to cater the needs of travelers.
          We put forward unique solutions, paying careful attention to each client’s individual needs – to deliver
          successful and memorable destination management service that is reliable, safe, affordable and enjoyable for
          all clients.</p>
      </div>
    ),
    workExperience: () => (
      <div>
        <p>Environment: AngularJS, HTML5, CSS, ejs, Node.js, MongoDB, Redis.</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.1em'}}>
          <li>Executing and contributing to full-stack web development projects, with an emphasis on front end features,
            browser manipulation, and cross-browser compatibility.
          </li>
          <li>Head of design implementation and maintenance for all clients.</li>
          <li>Coordinating with team members to successfully implemented the assigned modules & program tasks.</li>
          <li>Designing & developing new modules for dynamic content management.</li>
          <li>Creating a custom CSS grid framework to meet the company’s needs and reducing development time by %20.
          </li>
          <li>Increasing performance by creating a dynamic architecture for reusable code App wide.</li>
          <li>Aligning all quality parameters in design and performance for product to each client.</li>
        </ul>
      </div>
    ),
  },
  // pegasus_ecommerce
  {
    id: 'pegasus_ecommerce',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/pegasus.jpg',
    images: [
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/pegasus/pegasus-mockup.jpg', type: 'image', alt: "pegasus mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/pegasus/home.jpg', type: 'image', alt: "pegasus mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/pegasus/hotels2.jpg', type: 'image', alt: "pegasus mockup"},
    ],
    category: 'Web Development',
    title: 'Pegasus Tours Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'April, 2018',
    social: {
      facebook: '',
      instagram: '',
      linkedin: '',
      website: 'https://www.roundtrip.co.il/',
      other: 'https://finder.startupnationcentral.org/company_page/round-trip'
    },
    htmlDescription: () => (
      <div className="mb-30">
        <p>Round Trip is an eCommerce travel platform that is customizable, integrative, and responsive. The platform
          was designed with both the online travel agency's (OTA) and end-customers' needs in mind.</p>
        <p>At Pegasus we do not only provide excellent value for premium adventures, but also continuously strive to
          exceed expectations. Through our customer-oriented approach and experience, this effort is present in all
          aspects of our trips.<br/>
          Hence, we are proud to keep a customer satisfaction at 100%. We believe that our affordable tours, quality
          accommodation, transportation and sightseeing tours could not achieve this alone. It is only possible together
          with like-minded people, passionate tour leaders and the overall atmosphere of a Pegasus tour.</p>
      </div>
    ),
    workExperience: () => (
      <div>
        <p>Environment: AngularJS, HTML5, CSS, ejs, Node.js, MongoDB, Redis.</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.1em'}}>
          <li>Executing and contributing to full-stack web development projects, with an emphasis on front end features,
            browser manipulation, and cross-browser compatibility.
          </li>
          <li>Head of design implementation and maintenance for all clients.</li>
          <li>Coordinating with team members to successfully implemented the assigned modules & program tasks.</li>
          <li>Designing & developing new modules for dynamic content management.</li>
          <li>Creating a custom CSS grid framework to meet the company’s needs and reducing development time by %20.
          </li>
          <li>Increasing performance by creating a dynamic architecture for reusable code App wide.</li>
          <li>Aligning all quality parameters in design and performance for product to each client.</li>
        </ul>
      </div>
    ),
  },
  // airindia_ecommerce V
  {
    id: 'airindia_ecommerce',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/airindia.jpg',
    images: [
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/airIndia/mockup.jpg', type: 'image', alt: "airindia mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/airIndia/home.jpg', type: 'image', alt: "airindia home"},
    ],
    category: 'Web Development',
    title: 'Air India Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'February , 2019',
    social: {
      website: 'https://www.roundtrip.co.il/',
      other: 'https://finder.startupnationcentral.org/company_page/round-trip'
    },
    htmlDescription: () => (
      <div className="mb-30">
        <p>Round Trip is an eCommerce travel platform that is customizable, integrative, and responsive. The platform
          was designed with both the online travel agency's (OTA) and end-customers' needs in mind.</p>
        <p>
          Air India’s journey took off in 1932, when Bharat J.R.D Tata formed an Airline, realising his dream. The first
          Indian to receive a commercial pilot’s license, it was his passion for flying that had sparked Air India’s
          origins - with the launch of an Airmail service from the then Bombay to Karachi via Ahmedabad.<br/>
          Nationalized in 1953, Air India has been spreading its wings over the years to become a leading domestic and
          global brand.

        </p>
      </div>
    ),
    workExperience: () => (
      <div>
        <p>Environment: AngularJS, HTML5, CSS, ejs, Node.js, MongoDB, Redis.</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.1em'}}>
          <li>Executing and contributing to full-stack web development projects, with an emphasis on front end features,
            browser manipulation, and cross-browser compatibility.
          </li>
          <li>Head of design implementation and maintenance for all clients.</li>
          <li>Coordinating with team members to successfully implemented the assigned modules & program tasks.</li>
          <li>Designing & developing new modules for dynamic content management.</li>
          <li>Creating a custom CSS grid framework to meet the company’s needs and reducing development time by %20.
          </li>
          <li>Increasing performance by creating a dynamic architecture for reusable code App wide.</li>
          <li>Aligning all quality parameters in design and performance for product to each client.</li>
        </ul>
      </div>
    ),
  },
  // alray_ecommerce
  {
    id: 'alray_ecommerce',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/alray.jpg',
    images: [
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/alray/alray-mockup.jpg', type: 'image', alt: "alray mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/alray/home.jpg', type: 'image', alt: "alray mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/alray/home2.jpg', type: 'image', alt: "alray mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/alray/hotels.jpg', type: 'image', alt: "alray mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/alray/orderProcess.jpg', type: 'image', alt: "alray mockup"},
    ],
    category: 'Web Development',
    title: 'Alray Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'July, 2018',
    social: {
      website: 'https://www.roundtrip.co.il/',
      other: 'https://finder.startupnationcentral.org/company_page/round-trip'
    },
    htmlDescription: () => (
      <div className="mb-30">
        <p>Round Trip is an eCommerce travel platform that is customizable, integrative, and responsive. The platform
          was designed with both the online travel agency's (OTA) and end-customers' needs in mind.</p>
        <p>
          Dream holidays without the stress of the 'what ifs', is what we do. We design our tours so you can experience the world differently. You'll get the personal service, attention to detail and ease you're looking for, while enjoying the unmissable experiences you've always dreamed of. <br/>
          Discover why Alray tours have been trusted by hundreds of travelers and are proud to deliver the very best tours that you'll cherish for years to come.
        </p>
      </div>
    ),
    workExperience: () => (
      <div>
        <p>Environment: AngularJS, HTML5, CSS, ejs, Node.js, MongoDB, Redis.</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.1em'}}>
          <li>Executing and contributing to full-stack web development projects, with an emphasis on front end features,
            browser manipulation, and cross-browser compatibility.
          </li>
          <li>Head of design implementation and maintenance for all clients.</li>
          <li>Coordinating with team members to successfully implemented the assigned modules & program tasks.</li>
          <li>Designing & developing new modules for dynamic content management.</li>
          <li>Creating a custom CSS grid framework to meet the company’s needs and reducing development time by %20.
          </li>
          <li>Increasing performance by creating a dynamic architecture for reusable code App wide.</li>
          <li>Aligning all quality parameters in design and performance for product to each client.</li>
        </ul>
      </div>
    ),
  },
  // beepost_app V
  {
    id: 'beepost_app',
    img: 'assets/img/project/bepost-mockup.jpg',
    images: [
      {src: '/assets/img/project/bepost-mockup.jpg', type: 'image', alt: "beepost app mobile 1"},
      {src: '/assets/img/project/bepost-mockup-mobile.jpg', type: 'image', alt: "beepost app mobile 2"},
    ],
    category: 'Web Development',
    title: 'Bee-Post Web Extension',
    client: 'Round Robin | Entrepreneurship Program',
    date: 'February, 2017',
    social: {
      facebook: 'https://www.facebook.com/BeePost.BeePost',
      instagram: '',
      linkedin: 'https://www.linkedin.com/company/beepost--create-the-buzz',
      other: 'https://finder.startupnationcentral.org/company_page/beepost'
    },
    description: [
      'BeePost is a video-based social platform for creating buzz. BeePost can create discussions and commenting beehives for any site, providing users with tools such as video, voice recording, animated text, and a gamification system to enhance user content, engagement, and revenue. BeePost aims to provide online readers with a variety of innovative tools to express themselves.'
    ]
  },
  // quarterback V
  {
    id: 'quarterback',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/qb.jpg',
    images: [
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/qb/mockup.jpg', type: 'image', alt: "quarterback mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/qb/mockup2.jpg', type: 'image', alt: "quarterback mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/qb/mockup3.jpg', type: 'image', alt: "quarterback mockup"},
    ],
    category: 'Web Development',
    title: 'Quarterback Gaming Extension',
    client: 'Quarterback | Gaming Platform',
    date: 'November, 2017',
    social: {
      facebook: 'https://www.facebook.com/quarterback.gg',
      instagram: '',
      linkedin: 'https://www.linkedin.com/company/quarterback---boost-your-talent/about/',
      website: 'https://www.roundtrip.co.il/',
      other: 'https://techcrunch.com/2018/05/15/quarterback-lets-top-esports-gamers-and-streamers-create-their-own-fan-based-leagues/'
    },
    htmlDescription: () => (
      <div className="mb-30">
        <p>Quarterback is a unique crowdfunding platform that enables eSports fans to monetize from the talents they sponsor. <br/>Founded by serial entrepreneur Jonathan Weinberg, who acted as the chief executive for Round Robin and held a leadership role in the mobile game studio Spartonix, Quarterback is the latest attempt to get more revenue into the hands of gamers.</p>
        <p>Leagues created on Quarterback can host daily challenges, give away prizes and compete against fan clubs devoted to other top players.</p>
        <p>Esports streamers and gamers are among the most bankable influencers, pitching to a new generation of consumers that don’t track traditional media sources. The ability to host and own their own channels gives these streamers an ability to create their own game libraries, cultivate a next generation of talent and encourage one-to-one interactions on platforms they control.</p>
        <p>Later re-branded as <b>IKON</b></p>
      </div>
    ),
    workExperience: () => (
      <div>
        <p>Environment: AngularJS, HTML5, CSS3, jade, Node.js(ES6), MongoDB, Redis.</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.1em'}}>
          <li>Participated in <b>all stages of the product life cycle.</b></li>
          <li>Assist in architect Quarterback's MVP front-end product.</li>
          <li>Implemented and deployed analyzing tools for monitoring user experience and make necessary changes.</li>
          <li>Designing & developing new modules for dynamic content management.</li>
          <li>Creating a custom CSS grid framework to meet the company’s needs.</li>
          <li>Exploring and utilizing new technologies to enhance product functionality & performance efficiency.</li>
          <li>Aligning all quality parameters in design and performance for product to each client.</li>
        </ul>
      </div>
    ),
  },
  // ornadlan V
  {
    id: 'ornadlan',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/ornadlan.jpg',
    images: [
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/ornadlan/mockup.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/ornadlan/mockup-admin.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/ornadlan/home.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/ornadlan/realestates.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/ornadlan/pages.jpg', type: 'image', alt: "ornadlan mockup"},
    ],
    category: 'Web Development',
    title: 'Or-Nadlan Website',
    client: 'Or-Nadlan Real Estate',
    date: 'July, 2018',
    social: {
      facebook: 'https://www.facebook.com/ornadlan',
      website: 'https://www.or-nadlan.co.il/',
    },
    description: [
      'A platform build to fill every Real-Estate agency needs, from a costume website to fit any need to an extensive backend management tools to monitor, analyzed and create new leads.'
    ],
    workExperience: () => (
      <div>
        <p>Environment: AngularJS, HTML5, CSS3, jade, Node.js(ES6), MongoDB, Redis, Grunt.</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.1em'}}>
          <li>Analyzing traffic and making necessary changes for a better user experience.</li>
          <li>Integrated 3rd party API's for modules pertaining to background checks, email and analytics.</li>
          <li>Created HTML email templates and newsletters for email marketing campaigns.</li>
          <li>Designing & developing new modules for dynamic content management.</li>
          <li>Boosted site entries from <b>15 to 240 weekly unique entries</b> by developing automatic SEO rendering service and crawlers.</li>
          <li>Backend leads management tools with email notifications increased clients service satisfaction.</li>
        </ul>
      </div>
    ),
  },
  // s2r V
  {
    id: 's2r',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/s2r.jpg',
    images: [
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/ornadlan/mockup.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/ornadlan/mockup-admin.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/ornadlan/home.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/ornadlan/realestates.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/projects/ornadlan/pages.jpg', type: 'image', alt: "ornadlan mockup"},
    ],
    category: 'Web Development',
    title: 'S2R Website',
    client: 'S2R Website',
    date: 'November, 2015',
    social: {
      website: 'https://www.s2r.co.il/',
    },
    description: [
      'S2R was established by Dr. Etay Shilony, a leading expert in strategic – organizational planning and implementation. The company assists organizations with the integration of vision and strategy through building supporting organizational structure, culture, procedures and behaviors. S2R is committed to high levels of service, excellence and accuracy.',
      'S2R is a leading consulting firm serving organizations in Israel and worldwide. Our team of experts provide experience and excellence resulting in a variety of solutions for the challenges presented by our clients.'
    ],
    workExperience: () => (
      <div>
        <p>Environment: AngularJS, HTML5, CSS, Node.js, MongoDB, Redis.</p>
        <ul style={{paddingInlineStart: '15px', fontSize: '1.1em'}}>
          <li>Planed and execute a <b>full product life cycle</b> for the first time.</li>
          <li>Developed code following common security practices and development design patterns</li>
          <li>Documented 100% of technical specifications and dependencies of applications</li>
          <li>Maintained system and application as support for 3 years (break-fix and data changes)</li>
          <li>created a dynamic architecture for reusable code App wide.</li>
          <li>Aligning all quality parameters in design and performance for product.</li>
        </ul>
      </div>
    ),
  },

  {
    id: 1,
    img: 'assets/img/project/2/project-1.jpg',
    img3: 'assets/img/project/3/project-1.jpg',
    img4: 'assets/img/project/4/project-1.jpg',
    category: 'WEB DESIGN',
    title: 'The Home of the Future could bebes',
  },
  {
    id: 2,
    img: 'assets/img/project/2/project-2.jpg',
    img3: 'assets/img/project/3/project-2.jpg',
    img4: 'assets/img/project/4/project-2.jpg',
    category: 'WEB DEVELOPMENT',
    title: 'A big ticket gone to be an interesting'
  },
  {
    id: 3,
    img: 'assets/img/project/2/project-3.jpg',
    img3: 'assets/img/project/3/project-3.jpg',
    img4: 'assets/img/project/4/project-3.jpg',
    category: 'UI UX DESIGN',
    title: 'What is the Difference between'
  },
  {
    id: 4,
    img: 'assets/img/project/2/project-4.jpg',
    img3: 'assets/img/project/3/project-4.jpg',
    img4: 'assets/img/project/4/project-4.jpg',
    category: 'GRAPHIC DESIGN',
    title: 'A big ticket gone to be an interesting'
  },
  {
    id: 5,
    img: 'assets/img/project/2/project-5.jpg',
    img3: 'assets/img/project/3/project-5.jpg',
    img4: 'assets/img/project/4/project-5.jpg',
    category: 'APP DESIGN',
    title: 'Why uou love nerox that much'
  },
  {
    id: 6,
    img: 'assets/img/project/2/project-6.jpg',
    img3: 'assets/img/project/3/project-6.jpg',
    img4: 'assets/img/project/4/project-6.jpg',
    category: 'WEB DESIGN',
    title: 'The world is more beautiful you think'
  },
  {
    id: 7,
    img: 'assets/img/project/2/project-7.jpg',
    category: 'WEB DEVELOPMENT',
    title: 'The black bear coming soon'
  },
  {
    id: 8,
    img: 'assets/img/project/2/project-8.jpg',
    category: 'UI UX DESIGN',
    title: 'A brown fox jump over the lazy'
  },
  {
    id: 9,
    img: 'assets/img/project/2/project-9.jpg',
    category: 'APP DESIGN',
    title: 'Smart Phone is not available the',
  },

  // portfolio five
  {
    id: 10,
    img: 'assets/img/project/project-1.jpg',
    category: 'WEB DESIGN',
    title: 'Minimal Product Showcse Design',
  },
  {
    id: 11,
    img: 'assets/img/project/project-3.jpg',
    category: 'WEBSITE DESIGN',
    title: 'Minimal Product Showcse Design',
  },
  {
    id: 12,
    img: 'assets/img/project/project-2.jpg',
    category: 'WEB DESIGN',
    title: 'Soundbox Branding Design',
  },
  {
    id: 13,
    img: 'assets/img/project/project-4.jpg',
    category: 'WEBSITE DESIGN',
    title: 'Ecommerce Product Landing',
  },
  {
    id: 14,
    img: 'assets/img/project/project-2.jpg',
    category: 'APP DESIGN',
    title: 'Soundbox Branding Design',
  },
  {
    id: 15,
    img: 'assets/img/project/project-4.jpg',
    category: 'APP DESIGN',
    title: 'Ecommerce Product Landing',
  },
  {
    id: 16,
    img: 'assets/img/project/project-2.jpg',
    category: 'LANDING PAGE',
    title: 'Soundbox Branding Design',
  },
  {
    id: 17,
    img: 'assets/img/project/project-3.jpg',
    category: 'LANDING PAGE',
    title: 'Barber Machine Branding Deisgn',
  },
  {
    id: 18,
    img: 'assets/img/project/project-1.jpg',
    category: 'BRANDING DESIGN',
    title: 'Minimal Product Showcse Design',
  },
  {
    id: 19,
    img: 'assets/img/project/project-3.jpg',
    category: 'BRANDING DESIGN',
    title: 'Barber Machine Branding Deisgn',
  },

  // portfolio six
  // WEB DESIGN
  {
    id: 20,
    img: 'assets/img/creative/creative-item-2.jpg',
    category: 'WEB DESIGN',
    title: 'Unique Trendy Baranding'
  },
  {
    id: 21,
    img: 'assets/img/creative/creative-item-sm-1.jpg',
    category: 'BRANDING DESIGN',
    title: '3D Illustration Edit'
  },
  {
    id: 22,
    img: 'assets/img/creative/creative-item-4.jpg',
    category: 'WEB DESIGN',
    title: 'Minimal Leaf Project'
  },
  {
    id: 23,
    img: 'assets/img/creative/creative-item-7.jpg',
    category: 'WEB DESIGN',
    title: 'Minimal Cup Branding Project'
  },
  {
    id: 24,
    img: 'assets/img/creative/creative-item-sm-2.jpg',
    category: 'WEB DESIGN',
    title: 'Minimal Leaf Project'
  },
  {
    id: 25,
    img: 'assets/img/creative/creative-item-sm-3.jpg',
    category: 'WEB DESIGN',
    title: 'Minimal Cup Branding Project'
  },

  // BRANDING DESIGN
  {
    id: 26,
    img: 'assets/img/creative/creative-item-sm-1.jpg',
    category: 'WEB DESIGN',
    title: 'Unique Trendy Baranding'
  },
  {
    id: 27,
    img: 'assets/img/creative/creative-item-4.jpg',
    category: 'BRANDING DESIGN',
    title: 'Ecommerce Product Landing'
  },
  {
    id: 28,
    img: 'assets/img/creative/creative-item-7.jpg',
    category: 'BRANDING DESIGN',
    title: 'Shouse Branding & Design'
  },
  {
    id: 29,
    img: 'assets/img/creative/creative-item-8.jpg',
    category: 'BRANDING DESIGN',
    title: 'Ecommerce Product Listing'
  },
  {
    id: 30,
    img: 'assets/img/creative/creative-item-big-2.jpg',
    category: 'BRANDING DESIGN',
    title: '3D Illustration Edit'
  },
  {
    id: 31,
    img: 'assets/img/creative/creative-item-sm-2.jpg',
    category: 'BRANDING DESIGN',
    title: 'Professional Gaming Desk'
  },
  // MOTION DESIGN
  {
    id: 32,
    img: 'assets/img/creative/creative-item-sm-4.jpg',
    category: 'MOTION DESIGN',
    title: 'Unique Trendy Baranding'
  },
  {
    id: 33,
    img: 'assets/img/creative/creative-item-3.jpg',
    category: 'MOTION DESIGN',
    title: 'Ecommerce Popular Product'
  },
  {
    id: 34,
    img: 'assets/img/creative/creative-item-5.jpg',
    category: 'MOTION DESIGN',
    title: 'Shows Branding Product'
  },
  {
    id: 35,
    img: 'assets/img/creative/creative-item-7.jpg',
    category: 'MOTION DESIGN',
    title: 'Minimal Leaf Project'
  },
  {
    id: 36,
    img: 'assets/img/creative/creative-item-sm-3.jpg',
    category: 'MOTION DESIGN',
    title: 'Unique Product Listings'
  },
  // PRINT DESIGN
  {
    id: 37,
    img: 'assets/img/creative/creative-item-sm-1.jpg',
    category: 'PRINT DESIGN',
    title: 'Unique Trendy Baranding'
  },
  {
    id: 38,
    img: 'assets/img/creative/creative-item-3.jpg',
    category: 'PRINT DESIGN',
    title: 'Ecommerce Popular Product'
  },
  {
    id: 39,
    img: 'assets/img/creative/creative-item-6.jpg',
    category: 'PRINT DESIGN',
    title: 'Shouse Branding & Design'
  },
  {
    id: 40,
    img: 'assets/img/creative/creative-item-sm-2.jpg',
    category: 'PRINT DESIGN',
    title: 'Professional Gaming Desk'
  },
  {
    id: 41,
    img: 'assets/img/creative/creative-item-sm-3.jpg',
    category: 'PRINT DESIGN',
    title: 'Unique Product Listings'
  },
  // 3D DESIGN
  {
    id: 42,
    img: 'assets/img/creative/creative-item-big-1.jpg',
    category: '3D DESIGN',
    title: 'Unique Trendy Baranding'
  },
  {
    id: 43,
    img: 'assets/img/creative/creative-item-sm-1.jpg',
    category: '3D DESIGN',
    title: 'Minimal Cup Branding Project'
  },
  {
    id: 44,
    img: 'assets/img/creative/creative-item-sm-2.jpg',
    category: '3D DESIGN',
    title: 'Minimal Product Showcase'
  },
  // product design
  {
    id: 45,
    img: 'assets/img/creative/creative-item-4.jpg',
    category: 'PRODUCT DESIGN',
    title: 'Ecommerce Product Landing'
  },
  {
    id: 46,
    img: 'assets/img/creative/creative-item-sm-1.jpg',
    category: 'PRODUCT DESIGN',
    title: 'Minimal Product Showcase'
  },


  // portfolio seven data
  {
    id: 47,
    img: 'assets/img/creative/grid/tp-creative-1.jpg',
    category: 'WEB DESIGN',
    title: 'Unique Trendy Baranding',
  },
  {
    id: 48,
    img: 'assets/img/creative/grid/tp-creative-2.jpg',
    category: 'WEBSITE DESIGN',
    title: 'Minimal Leaf Project',
  },
  {
    id: 49,
    img: 'assets/img/creative/grid/tp-creative-3.jpg',
    category: 'APPS',
    title: '3D Illustration Edit',
  },
  {
    id: 50,
    img: 'assets/img/creative/grid/tp-creative-4.jpg',
    category: 'LANDING PAGE',
    title: 'Minimal Cup Branding Project',
  },
  {
    id: 51,
    img: 'assets/img/creative/grid/tp-creative-5.jpg',
    category: 'BRANDING DESIGN',
    title: 'Ecommerce Product Landing',
  },
  {
    id: 52,
    img: 'assets/img/creative/grid/tp-creative-6.jpg',
    category: '3D DESIGN',
    title: 'Shouse Branding & Design',
  },
  {
    id: 53,
    img: 'assets/img/creative/grid/tp-creative-3.jpg',
    category: 'WEB DESIGN',
    title: '3D Illustration Edit',
  },
  {
    id: 54,
    img: 'assets/img/creative/grid/tp-creative-5.jpg',
    category: 'WEB DESIGN',
    title: 'Ecommerce Product Landing',
  },
  {
    id: 55,
    img: 'assets/img/creative/grid/tp-creative-10.jpg',
    category: 'WEB DESIGN',
    title: 'Ecommerce Popular Product',
  },
  {
    id: 56,
    img: 'assets/img/creative/grid/tp-creative-6.jpg',
    category: 'WEBSITE DESIGN',
    title: 'Shouse Branding & Design',
  },
  {
    id: 57,
    img: 'assets/img/creative/grid/tp-creative-9.jpg',
    category: 'WEBSITE DESIGN',
    title: 'Unique Trendy Baranding',
  },
  {
    id: 58,
    img: 'assets/img/creative/grid/tp-creative-12.jpg',
    category: 'WEBSITE DESIGN',
    title: 'Unique Product Listings',
  },
  {
    id: 59,
    img: 'assets/img/creative/grid/tp-creative-7.jpg',
    category: 'APPS',
    title: 'Shouse Branding & Design',
  },
  {
    id: 60,
    img: 'assets/img/creative/grid/tp-creative-8.jpg',
    category: 'APPS',
    title: 'Shouse Branding & Design',
  },
  {
    id: 61,
    img: 'assets/img/creative/grid/tp-creative-12.jpg',
    category: 'APPS',
    title: 'Unique Product Listings',
  },
  {
    id: 62,
    img: 'assets/img/creative/grid/tp-creative-11.jpg',
    category: 'APPS',
    title: 'Shows Branding Product',
  },
  {
    id: 63,
    img: 'assets/img/creative/grid/tp-creative-8.jpg',
    category: 'LANDING PAGE',
    title: 'Professional Gaming Desk',
  },
  {
    id: 64,
    img: 'assets/img/creative/grid/tp-creative-9.jpg',
    category: 'LANDING PAGE',
    title: 'Professional Gaming Desk',
  },
  {
    id: 65,
    img: 'assets/img/creative/grid/tp-creative-11.jpg',
    category: 'LANDING PAGE',
    title: 'Shows Branding Product',
  },

  {
    id: 66,
    img: 'assets/img/creative/grid/tp-creative-10.jpg',
    category: 'BRANDING DESIGN',
    title: 'Ecommerce Popular Product',
  },
  {
    id: 67,
    img: 'assets/img/creative/grid/tp-creative-7.jpg',
    category: 'BRANDING DESIGN',
    title: 'Shouse Branding & Design',
  },
  {
    id: 68,
    img: 'assets/img/creative/grid/tp-creative-8.jpg',
    category: '3D DESIGN',
    title: 'Professional Gaming Desk',
  },
  {
    id: 69,
    img: 'assets/img/creative/grid/tp-creative-7.jpg',
    category: '3D DESIGN',
    title: 'Shouse Branding & Design',
  },


  // portfolio eight data
  {
    id: 70,
    img: 'assets/img/creative/box/tp-creative-1.jpg',
    category: 'WEB DESIGN',
    title: 'Unique Trendy Baranding'
  },
  {
    id: 71,
    img: 'assets/img/creative/box/tp-creative-2.jpg',
    category: 'WEBSITE DESIGN',
    title: '3D Illustration Edit'
  },
  {
    id: 72,
    img: 'assets/img/creative/box/tp-creative-3.jpg',
    category: 'APPS',
    title: 'Minimal Leaf Project'
  },
  {
    id: 73,
    img: 'assets/img/creative/box/tp-creative-4.jpg',
    category: 'LANDING PAGE',
    title: 'Ecommerce Product Landing'
  },
  {
    id: 74,
    img: 'assets/img/creative/box/tp-creative-7.jpg',
    category: 'BRANDING DESIGN',
    title: 'Minimal Cup Branding Project'
  },
  {
    id: 75,
    img: 'assets/img/creative/box/tp-creative-5.jpg',
    category: '3D DESIGN',
    title: 'Shouse Branding & Design'
  },

  {
    id: 76,
    img: 'assets/img/creative/box/tp-creative-3.jpg',
    category: 'WEB DESIGN',
    title: 'Minimal Leaf Project'
  },
  {
    id: 77,
    img: 'assets/img/creative/box/tp-creative-6.jpg',
    category: 'WEB DESIGN',
    title: 'Ecommerce Product Listing'
  },
  {
    id: 78,
    img: 'assets/img/creative/box/tp-creative-11.jpg',
    category: 'WEB DESIGN',
    title: 'Ecommerce Popular Product'
  },

  {
    id: 79,
    img: 'assets/img/creative/box/tp-creative-4.jpg',
    category: 'WEBSITE DESIGN',
    title: 'Ecommerce Product Landing'
  },
  {
    id: 80,
    img: 'assets/img/creative/box/tp-creative-9.jpg',
    category: 'WEBSITE DESIGN',
    title: 'Unique Trendy Baranding'
  },

  {
    id: 81,
    img: 'assets/img/creative/box/tp-creative-7.jpg',
    category: 'APPS',
    title: 'Minimal Cup Branding Project'
  },
  {
    id: 82,
    img: 'assets/img/creative/box/tp-creative-4.jpg',
    category: 'APPS',
    title: 'Ecommerce Product Landing'
  },
  {
    id: 83,
    img: 'assets/img/creative/box/tp-creative-5.jpg',
    category: 'APPS',
    title: 'Shouse Branding & Design'
  },
  {
    id: 84,
    img: 'assets/img/creative/box/tp-creative-10.jpg',
    category: 'APPS',
    title: 'Shows Branding Product'
  },

  {
    id: 85,
    img: 'assets/img/creative/box/tp-creative-7.jpg',
    category: 'LANDING PAGE',
    title: 'Minimal Cup Branding Project'
  },
  {
    id: 86,
    img: 'assets/img/creative/box/tp-creative-8.jpg',
    category: 'LANDING PAGE',
    title: 'Professional Gaming Desk'
  },

  {
    id: 87,
    img: 'assets/img/creative/box/tp-creative-11.jpg',
    category: 'BRANDING DESIGN',
    title: '3D Illustration Edit'
  },
  {
    id: 88,
    img: 'assets/img/creative/box/tp-creative-3.jpg',
    category: 'BRANDING DESIGN',
    title: 'Minimal Leaf Project'
  },
  {
    id: 89,
    img: 'assets/img/creative/box/tp-creative-6.jpg',
    category: 'BRANDING DESIGN',
    title: 'Ecommerce Product Listing'
  },

  {
    id: 90,
    img: 'assets/img/creative/box/tp-creative-12.jpg',
    category: '3D DESIGN',
    title: 'Unique Product Listings'
  },
  {
    id: 91,
    img: 'assets/img/creative/box/tp-creative-3.jpg',
    category: '3D DESIGN',
    title: 'Minimal Leaf Project'
  },

  // home nine portfolio
  {
    id: 92,
    img: 'assets/img/wedding/wedding-1.jpg',
    category: 'WEDDING',
    title: 'Wedding Couple of HIlls'
  },
  {
    id: 93,
    img: 'assets/img/wedding/wedding-2.jpg',
    category: 'BIRTHDAY PARTY',
    title: 'Tom & Elizabeth'
  },
  {
    id: 94,
    img: 'assets/img/wedding/wedding-3.jpg',
    category: 'EVENTS',
    title: 'Gloria & Vincent'
  },
  {
    id: 95,
    img: 'assets/img/wedding/wedding-4.jpg',
    category: 'PRINT DESIGN',
    title: 'Patricia & Dennis'
  },
  {
    id: 96,
    img: 'assets/img/wedding/wedding-5.jpg',
    category: '3D DESIGN',
    title: 'Larry & Ashley'
  },
  {
    id: 97,
    img: 'assets/img/wedding/wedding-6.jpg',
    category: 'PRODUCT DESIGN',
    title: 'Ruth & Albert'
  },
  {
    id: 98,
    img: 'assets/img/wedding/wedding-8.jpg',
    category: 'WEDDING',
    title: 'Ethan & Marie'
  },
  {
    id: 99,
    img: 'assets/img/wedding/wedding-7.jpg',
    category: 'BIRTHDAY PARTY',
    title: 'Carl & Christine'
  },
  {
    id: 100,
    img: 'assets/img/wedding/wedding-6.jpg',
    category: 'EVENTS',
    title: 'Ruth & Albert'
  },
  {
    id: 101,
    img: 'assets/img/wedding/wedding-5.jpg',
    category: 'PRINT DESIGN',
    title: 'Larry & Ashley'
  },
  {
    id: 102,
    img: 'assets/img/wedding/wedding-8.jpg',
    category: '3D DESIGN',
    title: 'Ethan & Marie'
  },
  {
    id: 103,
    img: 'assets/img/wedding/wedding-1.jpg',
    category: 'PRODUCT DESIGN',
    title: 'Wedding Couple of HIlls'
  },

  // portfolio ten
  {
    id: 104,
    img: 'assets/img/photoshort/photoshot-1.jpg',
    category: 'TRAVEL',
    title: 'Unique Trendy Baranding'
  },
  {
    id: 105,
    img: 'assets/img/photoshort/photoshot-2.jpg',
    category: 'PRODUCT',
    title: '3D Illustration Edit'
  },
  {
    id: 106,
    img: 'assets/img/photoshort/photoshot-3.jpg',
    category: 'BRANDING',
    title: 'Minimal Leaf Project'
  },
  {
    id: 107,
    img: 'assets/img/photoshort/photoshot-4.jpg',
    category: 'MINIMAL',
    title: 'Minimal Cup Branding Project'
  },
  {
    id: 108,
    img: 'assets/img/photoshort/photoshot-5.jpg',
    category: 'ADVENTURE',
    title: 'Ecommerce Product Landing'
  },
  {
    id: 109,
    img: 'assets/img/photoshort/photoshot-6.jpg',
    category: 'WEDDING',
    title: 'Wedding Couple of HIlls'
  },
  {
    id: 110,
    img: 'assets/img/photoshort/photoshot-7.jpg',
    category: 'EVENTS',
    title: 'Tom & Elizabeth'
  },
  {
    id: 111,
    img: 'assets/img/photoshort/photoshot-5.jpg',
    category: 'TRAVEL',
    title: 'Ecommerce Product Landing'
  },
  {
    id: 112,
    img: 'assets/img/photoshort/photoshot-9.jpg',
    category: 'TRAVEL',
    title: 'Ecommerce Product Listing'
  },
  {
    id: 113,
    img: 'assets/img/photoshort/photoshot-4.jpg',
    category: 'PRODUCT',
    title: 'Minimal Cup Branding Project'
  },
  {
    id: 114,
    img: 'assets/img/photoshort/photoshot-8.jpg',
    category: 'PRODUCT',
    title: 'Professional Gaming Desk'
  },
  {
    id: 115,
    img: 'assets/img/photoshort/photoshot-2.jpg',
    category: 'BRANDING',
    title: '3D Illustration Edit'
  },
  {
    id: 116,
    img: 'assets/img/photoshort/photoshot-4.jpg',
    category: 'BRANDING',
    title: 'Minimal Cup Branding Project'
  },
  {
    id: 117,
    img: 'assets/img/photoshort/photoshot-6.jpg',
    category: 'MINIMAL',
    title: 'Wedding Couple of HIlls'
  },
  {
    id: 118,
    img: 'assets/img/photoshort/photoshot-8.jpg',
    category: 'MINIMAL',
    title: 'Professional Gaming Desk'
  },
  {
    id: 119,
    img: 'assets/img/photoshort/photoshot-7.jpg',
    category: 'ADVENTURE',
    title: 'Tom & Elizabeth'
  },
  {
    id: 120,
    img: 'assets/img/photoshort/photoshot-8.jpg',
    category: 'ADVENTURE',
    title: 'Professional Gaming Desk'
  },
  {
    id: 121,
    img: 'assets/img/photoshort/photoshot-7.jpg',
    category: 'WEDDING',
    title: 'Tom & Elizabeth'
  },
  {
    id: 122,
    img: 'assets/img/photoshort/photoshot-2.jpg',
    category: 'WEDDING',
    title: '3D Illustration Edit'
  },
  {
    id: 123,
    img: 'assets/img/photoshort/photoshot-6.jpg',
    category: 'EVENTS',
    title: 'Wedding Couple of HIlls'
  },

  // portfolio eleven data
  {
    id: 124,
    img: 'assets/img/photoshort/2/photoshot-1.jpg',
    category: 'FASHION',
    title: 'Model & Fashion Photography'
  },
  {
    id: 125,
    img: 'assets/img/photoshort/2/photoshot-2.jpg',
    category: 'MODEL',
    title: 'Tom Fashion Photography'
  },
  {
    id: 126,
    img: 'assets/img/photoshort/2/photoshot-3.jpg',
    category: 'EVENT',
    title: 'Quisue sen duru martin'
  },
  {
    id: 127,
    img: 'assets/img/photoshort/2/photoshot-4.jpg',
    category: 'WEDDING TOUCH',
    title: 'Elizabeth Model Photography'
  },
  {
    id: 128,
    img: 'assets/img/photoshort/2/photoshot-5.jpg',
    category: 'WEDDING TOUCH',
    title: 'Marie Model Photography'
  },
  {
    id: 129,
    img: 'assets/img/photoshort/2/photoshot-6.jpg',
    category: 'WEDDING TOUCH',
    title: 'Smith Model Photography'
  },

  // portfolio twelve data
  {
    id: 130,
    img: 'assets/img/furniture/furniture-1.jpg',
    category: 'FURNITURE',
    title: 'Mordern Photoshot for Furniture'
  },
  {
    id: 131,
    img: 'assets/img/furniture/furniture-2.jpg',
    category: 'FURNITURE',
    title: 'Minimal Office Sofa Branding'
  },
  {
    id: 132,
    img: 'assets/img/furniture/furniture-3.jpg',
    category: 'FURNITURE',
    title: 'Yellow Sofa set for Personal Office'
  },
  {
    id: 133,
    img: 'assets/img/furniture/furniture-4.jpg',
    category: 'FURNITURE',
    title: 'Minimal Product Showcase'
  },
  {
    id: 134,
    img: 'assets/img/furniture/furniture-5.jpg',
    category: 'FURNITURE',
    title: 'Mordern Photoshot for Furniture'
  },

  // portfolio thirteen data
  {
    id: 135,
    img: 'assets/img/project/5/project-img-1.jpg',
    col: '8',
    title: 'School & College'
  },
  {
    id: 136,
    img: 'assets/img/project/5/project-img-2.jpg',
    col: '8',
    title: 'City Traffic & Parking'
  },
  {
    id: 137,
    img: 'assets/img/project/5/project-img-3.jpg',
    col: '8',
    title: 'Parks & Recreation'
  },
  {
    id: 138,
    img: 'assets/img/project/5/project-img-4.jpg',
    col: '8',
    title: 'Sports & Fitness'
  },
  {
    id: 139,
    img: 'assets/img/project/5/project-img-5.jpg',
    col: '4',
    title: 'Nursing & Hospitality'
  },
]

export default portfolioPageData;
