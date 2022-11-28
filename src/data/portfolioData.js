
const portfolioData = [
  // aspire_mobile V
  {
    id: 'aspire_mobile',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/aspire-mobile.jpg',
    category: 'Mobile Design & Development',
    title: 'Aspire - Mobile App',
    client: 'ASPIRE | Personal Training',
    date: 'January, 2020',
  },
  // aspire_trainer_platform V
  {
    id: 'aspire_trainer_platform',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/aspire-platform.jpg',
    category: 'Web Design & Development',
    title: 'Aspire - Trainer Platform',
    client: 'ASPIRE | Personal Training',
    date: 'January, 2020'
  },
  // aspire_website V
  {
    id: 'aspire_website',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/aspire-website.jpg',
    category: 'Web Design & Development',
    title: 'Aspire Website',
    client: 'ASPIRE | Personal Training',
    date: 'January, 2020'
  },
  // eventer_admin_panel V
  {
    id: 'eventer_admin_panel',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/eventer-ticketing.jpg',
    category: 'Web Development',
    title: 'Eventer - Admin Panel',
    client: 'Eventer | Ticketing System',
    date: 'August, 2015',
  },
  // eventer_ticket_sell V
  {
    id: 'eventer_ticket_sell',
    img: 'assets/img/project/eventer-mockup.jpg',
    category: 'Web Development',
    title: 'Eventer - Ticket Selling Platform',
    client: 'Eventer | Ticketing System',
    date: 'November, 2016'
  },
  // round_robin_website_new V
  {
    id: 'round_robin_website_new',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/rndrobin2.jpg',
    category: 'Web Development',
    title: 'Round Robin Website',
    client: 'Round Robin',
    date: 'April, 2015'
  },
  // round_robin_website V
  {
    id: 'round_robin_website',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/rndrobin.jpg',
    category: 'Web Development',
    title: 'Round Robin Website',
    client: 'Round Robin',
    date: 'April, 2015',
  },
  // center_parcs_ecommerce V
  {
    id: 'center_parcs_ecommerce',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/centerparcs.jpg',
    category: 'Web Development',
    title: 'Center Parcs Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'February, 2019'
  },
  // shaked_tours_ecommerce V
  {
    id: 'shaked_tours_ecommerce',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/shakedtours.jpg',
    category: 'Web Development',
    title: 'Shaked Tours Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'December, 2017'
  },
  // airsales_ecommerce V
  {
    id: 'airsales_ecommerce',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/airsales.jpg',
    category: 'Web Development',
    title: 'Air Sales Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'October, 2018',
  },
  // graiver_ecommerce
  {
    id: 'graiver_ecommerce',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/graiver.jpg',
    category: 'Web Development',
    title: 'Graiver Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'July, 2018',
  },
  // Ynet_ecommerce V
  {
    id: 'ynet_ecommerce',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/ynet.jpg',
    category: 'Web Development',
    title: 'Ynet Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'July, 2018'
  },
  // pegasus_ecommerce
  {
    id: 'pegasus_ecommerce',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/pegasus.jpg',
    category: 'Web Development',
    title: 'Pegasus Tours Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'April, 2018'
  },
  // airindia_ecommerce V
  {
    id: 'airindia_ecommerce',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/airindia.jpg',
    category: 'Web Development',
    title: 'Air India Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'February , 2019'
  },
  // alray_ecommerce
  {
    id: 'alray_ecommerce',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/alray.jpg',
    category: 'Web Development',
    title: 'Alray Ecommerce Website',
    client: 'Round Trip | SaaS Travel Platform',
    date: 'July, 2018',
  },
  // beepost_app V
  {
    id: 'beepost_app',
    img: 'assets/img/project/bepost-mockup.jpg',
    category: 'Web Development',
    title: 'Bee-Post Web Extension',
    client: 'Round Robin | Entrepreneurship Program',
    date: 'February, 2017'
  },
  // quarterback V
  {
    id: 'quarterback',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/qb.jpg',
    category: 'Web Development',
    title: 'Quarterback Gaming Extension',
    client: 'Quarterback | Gaming Platform',
    date: 'November, 2017',
  },
  // ornadlan V
  {
    id: 'ornadlan',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/ornadlan.jpg',
    category: 'Web Development',
    title: 'Or-Nadlan Website',
    client: 'Or-Nadlan Real Estate',
    date: 'July, 2018',
  },
  // s2r V
  {
    id: 's2r',
    img: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/resized/s2r.jpg',
    category: 'Web Development',
    title: 'S2R Website',
    client: 'S2R Website',
    date: 'November, 2015',
  },
]

export default portfolioData;
