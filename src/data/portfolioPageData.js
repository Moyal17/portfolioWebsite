const portfolioPageData = [
  {
    id: 'aspire_mobile',
    img: 'https://assets.dormoyal.com/resized/aspire-mobile.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/aspire-mobile/mobile1.jpg', type: 'image', alt: "aspire mobile 1"},
      {src: 'https://assets.dormoyal.com/projects/aspire-mobile/mobile2.jpg', type: 'image', alt: "aspire mobile 2"},
      {src: 'https://assets.dormoyal.com/projects/aspire-mobile/mobile3.jpg', type: 'image', alt: "aspire mobile 3"},
      {src: 'https://assets.dormoyal.com/projects/aspire-mobile/mobile4.jpg', type: 'image', alt: "aspire mobile 4"},
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
  {
    id: 'aspire_trainer_platform',
    img: 'https://assets.dormoyal.com/resized/aspire-platform.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/aspire-platform/aspire-web-platform.jpg', type: 'image', alt: "aspire platform 2"},
      {src: 'https://assets.dormoyal.com/projects/aspire-platform/aspire-web-platform2.jpg', type: 'image', alt: "aspire platform 3"},
      {src: 'https://assets.dormoyal.com/projects/aspire-platform/aspire-trainer-mock.jpg', type: 'image', alt: "aspire platform 1"},
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
  {
    id: 'aspire_website',
    img: 'https://assets.dormoyal.com/resized/aspire-website.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/aspire-site/mockup.jpg', type: 'image', alt: "aspire website 1"},
      {src: 'https://assets.dormoyal.com/projects/aspire-site/home.jpg', type: 'image', alt: "aspire website 1"},
      {src: 'https://assets.dormoyal.com/projects/aspire-site/blog.jpg', type: 'image', alt: "aspire website 2"},
      {src: 'https://assets.dormoyal.com/projects/aspire-site/ourapp.jpg', type: 'image', alt: "aspire website 3"},
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
  {
    id: 'center_parcs_ecommerce',
    img: 'https://assets.dormoyal.com/resized/centerparcs.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/centerparcs/mockup.jpg', type: 'image', alt: "centerParcs mockup"},
      {src: 'https://assets.dormoyal.com/projects/centerparcs/home.jpg', type: 'image', alt: "centerParcs home"},
      {src: 'https://assets.dormoyal.com/projects/centerparcs/search.jpg', type: 'image', alt: "centerParcs search"},
      {src: 'https://assets.dormoyal.com/projects/centerparcs/pages.jpg', type: 'image', alt: "centerParcs pages"},
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
    back: 'round_robin_website',
    current: 'center_parcs_ecommerce',
    next: 'ynet_ecommerce'
  },
  {
    id: 'ynet_ecommerce',
    img: 'https://assets.dormoyal.com/resized/ynet.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/ynet/mockup.jpg', type: 'image', alt: "ynet mockup"},
      {src: 'https://assets.dormoyal.com/projects/ynet/home.jpg', type: 'image', alt: "ynet home"},
      {src: 'https://assets.dormoyal.com/projects/ynet/hotels.jpg', type: 'image', alt: "ynet hotels"},
      {src: 'https://assets.dormoyal.com/projects/ynet/flights.jpg', type: 'image', alt: "ynet hotels"},
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
    back: 'center_parcs_ecommerce',
    current: 'ynet_ecommerce',
    next: 'ornadlan'
  },
  {
    id: 'ornadlan',
    img: 'https://assets.dormoyal.com/resized/ornadlan.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/ornadlan/mockup.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://assets.dormoyal.com/projects/ornadlan/mockup-admin.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://assets.dormoyal.com/projects/ornadlan/home.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://assets.dormoyal.com/projects/ornadlan/realestates.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://assets.dormoyal.com/projects/ornadlan/pages.jpg', type: 'image', alt: "ornadlan mockup"},
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
    back: 'ynet_ecommerce',
    current: 'ornadlan',
    next: 'quarterback'
  },
  {
    id: 'quarterback',
    img: 'https://assets.dormoyal.com/resized/qb.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/qb/mockup.jpg', type: 'image', alt: "quarterback mockup"},
      {src: 'https://assets.dormoyal.com/projects/qb/mockup2.jpg', type: 'image', alt: "quarterback mockup"},
      {src: 'https://assets.dormoyal.com/projects/qb/mockup3.jpg', type: 'image', alt: "quarterback mockup"},
    ],
    category: 'Web Development',
    title: 'Quarterback Gaming Extension',
    client: 'Quarterback | Gaming Platform',
    date: 'November, 2018',
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
    back: 'ornadlan',
    current: 'quarterback',
    next: 'shaked_tours_ecommerce'
  },
  {
    id: 'shaked_tours_ecommerce',
    img: 'https://assets.dormoyal.com/resized/shakedtours.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/shakedTours/mockup.jpg', type: 'image', alt: "shakedTours mockup"},
      {src: 'https://assets.dormoyal.com/projects/shakedTours/home.jpg', type: 'image', alt: "shakedTours home"},
      {src: 'https://assets.dormoyal.com/projects/shakedTours/hotels.jpg', type: 'image', alt: "shakedTours hotels"},
      {src: 'https://assets.dormoyal.com/projects/shakedTours/flights.jpg', type: 'image', alt: "shakedTours flights"},
    ],
    category: 'Web Development',
    title: 'Shaked Tours Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'December, 2018',
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
    back: 'quarterback',
    current: 'shaked_tours_ecommerce',
    next: 'alray_ecommerce'
  },
  {
    id: 'alray_ecommerce',
    img: 'https://assets.dormoyal.com/resized/alray.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/alray/alray-mockup.jpg', type: 'image', alt: "alray mockup"},
      {src: 'https://assets.dormoyal.com/projects/alray/home.jpg', type: 'image', alt: "alray mockup"},
      {src: 'https://assets.dormoyal.com/projects/alray/home2.jpg', type: 'image', alt: "alray mockup"},
      {src: 'https://assets.dormoyal.com/projects/alray/hotels.jpg', type: 'image', alt: "alray mockup"},
      {src: 'https://assets.dormoyal.com/projects/alray/orderProcess.jpg', type: 'image', alt: "alray mockup"},
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
    back: 'shaked_tours_ecommerce',
    current: 'alray_ecommerce',
    next: 'acceptivent'
  },
  {
    id: 'acceptivent',
    img: 'https://assets.dormoyal.com/projects/acceptivent/mockup1.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/acceptivent/mockup1.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://assets.dormoyal.com/projects/acceptivent/mockup2.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://assets.dormoyal.com/projects/acceptivent/mockup3.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://assets.dormoyal.com/projects/acceptivent/mockup4.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://assets.dormoyal.com/projects/acceptivent/mockup5.jpg', type: 'image', alt: "ornadlan mockup"},
    ],
    category: 'Web Development',
    title: 'Acceptivent Website & Mobile',
    client: 'Acceptivent | Plan your Wedding',
    date: 'May, 2018',
    social: {
      website: 'https://www.acceptivent.com/',
    },
    description: [
      'Acceptivent is a platform designed to answer your every need for managing RSVP\'S to you wedding, birthday or even just a planing a night out with all of your friends.',
      'a SMARTER event management Platform.',
      'The best experience for your event to start before the time comes, Acceptivent gives you a platform to control your guests list.'
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
    back: 'alray_ecommerce',
    current: 'acceptivent',
    next: 'pegasus_ecommerce'
  },
  {
    id: 'pegasus_ecommerce',
    img: 'https://assets.dormoyal.com/resized/pegasus.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/pegasus/pegasus-mockup.jpg', type: 'image', alt: "pegasus mockup"},
      {src: 'https://assets.dormoyal.com/projects/pegasus/home.jpg', type: 'image', alt: "pegasus mockup"},
      {src: 'https://assets.dormoyal.com/projects/pegasus/hotels2.jpg', type: 'image', alt: "pegasus mockup"},
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
    back: 'acceptivent',
    current: 'pegasus_ecommerce',
    next: 'airsales_ecommerce'
  },
  {
    id: 'airsales_ecommerce',
    img: 'https://assets.dormoyal.com/resized/airsales.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/airsales/mockup.jpg', type: 'image', alt: "airsales mockup"},
      {src: 'https://assets.dormoyal.com/projects/airsales/home.jpg', type: 'image', alt: "airsales home"},
      {src: 'https://assets.dormoyal.com/projects/airsales/hotels.jpg', type: 'image', alt: "airsales hotels"},
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
    back: 'pegasus_ecommerce',
    current: 'airsales_ecommerce',
    next: 'eventer_admin_panel'
  },
  {
    id: 'eventer_admin_panel',
    img: 'https://assets.dormoyal.com/resized/eventer1.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/eventer-admin/eventer-mockup2.jpg', type: 'image', alt: "aspire mobile 1"},
      {src: 'https://assets.dormoyal.com/projects/eventer-admin/event.jpg', type: 'image', alt: "aspire mobile 1"},
      {src: 'https://assets.dormoyal.com/projects/eventer-admin/event2.jpg', type: 'image', alt: "aspire mobile 1"},
      {src: 'https://assets.dormoyal.com/projects/eventer-admin/event3.jpg', type: 'image', alt: "aspire mobile 1"},
    ],
    category: 'Web Development',
    title: 'Eventer - Admin Panel',
    client: 'Eventer | Ticketing System',
    date: 'August, 2017',
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
    back: 'airsales_ecommerce',
    current: 'eventer_admin_panel',
    next: 'graiver_ecommerce'
  },
  {
    id: 'graiver_ecommerce',
    img: 'https://assets.dormoyal.com/resized/graiver.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/graiver/graiver-mockup.jpg', type: 'image', alt: "graiver mockup"},
      {src: 'https://assets.dormoyal.com/projects/graiver/home.jpg', type: 'image', alt: "graiver mockup"},
      {src: 'https://assets.dormoyal.com/projects/graiver/flights.jpg', type: 'image', alt: "graiver mockup"},
    ],
    category: 'Web Development',
    title: 'Graiver Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'July, 2017',
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
    back: 'eventer_admin_panel',
    current: 'graiver_ecommerce',
    next: 'airindia_ecommerce'
  },
  {
    id: 'airindia_ecommerce',
    img: 'https://assets.dormoyal.com/resized/airindia.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/airIndia/mockup.jpg', type: 'image', alt: "airindia mockup"},
      {src: 'https://assets.dormoyal.com/projects/airIndia/home.jpg', type: 'image', alt: "airindia home"},
    ],
    category: 'Web Development',
    title: 'Air India Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'June , 2017',
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
    back: 'graiver_ecommerce',
    current: 'airindia_ecommerce',
    next: 'beepost_app'
  },
  {
    id: 'beepost_app',
    img: 'https://assets.dormoyal.com/resized/beepost.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/beepost/mobile2.jpg', type: 'image', alt: "beepost app mobile 1"},
      {src: 'https://assets.dormoyal.com/projects/beepost/web.jpg', type: 'image', alt: "beepost web 2"},
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
    ],
    back: 'airindia_ecommerce',
    current: 'beepost_app',
    next: 'round_robin_website_new'
  },
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
    date: 'January, 2017',
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
    back: 'beepost_app',
    current: 'round_robin_website_new',
    next: 'eventer_ticket_sell'
  },
  {
    id: 'eventer_ticket_sell',
    img: 'https://assets.dormoyal.com/resized/eventer2.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/eventer-ticket/eventer-mockup.jpg', type: 'image', alt: "aspire mobile 1"},
      {src: 'https://assets.dormoyal.com/projects/eventer-ticket/home.jpg', type: 'image', alt: "aspire mobile 1"},
      {src: 'https://assets.dormoyal.com/projects/eventer-ticket/intro.jpg', type: 'image', alt: "aspire mobile 1"},
      {src: 'https://assets.dormoyal.com/projects/eventer-ticket/eventer-events.jpg', type: 'image', alt: "aspire mobile 1"},
    ],
    category: 'Web Development',
    title: 'Eventer - Ticket Selling Platform',
    client: 'Eventer | Ticketing System',
    date: 'April, 2015',
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
    back: 'round_robin_website_new',
    current: 'eventer_ticket_sell',
    next: 's2r'
  },
  {
    id: 's2r',
    img: 'https://assets.dormoyal.com/resized/s2r.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/s2r/s2r-mockup.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://assets.dormoyal.com/projects/s2r/home.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://assets.dormoyal.com/projects/s2r/about.jpg', type: 'image', alt: "ornadlan mockup"},
      {src: 'https://assets.dormoyal.com/projects/s2r/clients.jpg', type: 'image', alt: "ornadlan mockup"},
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
    back: 'eventer_ticket_sell',
    current: 's2r',
    next: 'round_robin_website'
  },
  {
    id: 'round_robin_website',
    img: 'https://assets.dormoyal.com/resized/rndrobin.jpg',
    images: [
      {src: 'https://assets.dormoyal.com/projects/rndrobin/mockup1.jpg', type: 'image', alt: "rndrobin website 1"},
      {src: 'https://assets.dormoyal.com/projects/rndrobin/home.jpg', type: 'image', alt: "rndrobin website 2"},
      {src: 'https://assets.dormoyal.com/projects/rndrobin/pages.jpg', type: 'image', alt: "rndrobin website 3"},
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
    back: 's2r',
    current: 'round_robin_website',
  }
]

export default portfolioPageData;
