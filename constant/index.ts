export const navItems = [
  {
    id: 1,
    title: 'หน้าแรก',
    path: '/',
    cName: 'nav-item'
  },
  {
    id: 2,
    title: 'หมวดวิชา',
    path: '/courses',
    cName: 'nav-item',
    children: [
      {
        id: 1,
        title: 'ภาษา',
        path: '/ภาษา',
        cName: 'submenu-item'
      },
      {
        id: 2,
        title: 'เทคโนโลยี',
        path: '/เทคโนโลยี',
        cName: 'submenu-item'
      },
      {
        id: 3,
        title: 'การจัดการ',
        path: '/การจัดการ',
        cName: 'submenu-item'
      },
      {
        id: 4,
        title: 'ศิลปะและการพัฒนาตนเอง',
        path: '/ศิลปะและการพัฒนาตนเอง',
        cName: 'submenu-item'
      },
      {
        id: 5,
        title: 'สุขภาพ',
        path: '/สุขภาพ',
        cName: 'submenu-item'
      },
      {
        id: 6,
        title: 'คอร์สทั้งหมด',
        path: '/courses',
        cName: 'submenu-item'
      },
    ]
  },
  {
    id: 3,
    title: 'ประเภทผู้เรียน',
    path: '/ประเภทผู้เรียน',
    cName: 'nav-item',
    children: [
      {
        id: 1,
        title: 'นิสิตและบุคลากรจุฬาฯ',
        path: '/นิสิตและบุคลากรจุฬาฯ',
        cName: 'submenu-item'
      },
      {
        id: 2,
        title: 'บุคคลทั่วไป',
        path: '/บุคคลทั่วไป',
        cName: 'submenu-item'
      },
      {
        id: 3,
        title: 'Partner',
        path: '/Partner',
        cName: 'submenu-item'
      },
    ]
  },
  {
    id: 4,
    title: 'คลังความรู้',
    path: '/คลังความรู้',
    cName: 'nav-item',
  },
  {
    id: 5,
    title: 'ข่าวประชาสัมพันธ์',
    path: '/ข่าวประชาสัมพันธ์',
    cName: 'nav-item'
  },
  {
    id: 6,
    title: 'คำถามที่พบบ่อย',
    path: '/คำถามที่พบบ่อย',
    cName: 'nav-item'
  },
  {
    id: 7,
    title: 'เกี่ยวกับเรา',
    path: '/about_us',
    cName: 'nav-item',
    children: [
      {
        id: 1,
        title: 'เกี่ยวกับเรา',
        path: '/about_us',
        cName: 'submenu-item'
      },
      {
        id: 2,
        title: 'ติดต่อเรา',
        path: '/contact_us',
        cName: 'submenu-item'
      },
      {
        id: 3,
        title: 'คลิปอื่น',
        path: '/คลิปอื่น',
        cName: 'submenu-item'
      },
    ]
  },
];

export const categoryFilters = [
  "Frontend",
  "Backend",
  "Full-Stack",
  "Mobile",
  "UI/UX",
  "Game Dev",
  "DevOps",
  "Data Science",
  "Machine Learning",
  "Cybersecurity",
  "Blockchain",
  "E-commerce",
  "Chatbots"
]

export const footerLinks = [
  {
    title: 'For developers',
    links: [
      'Go Pro!',
      'Explore development work',
      'Development blog',
      'Code podcast',
      'Open-source projects',
      'Refer a Friend',
      'Code of conduct',
    ],
  },
  {
    title: 'Hire developers',
    links: [
      'Post a job opening',
      'Post a freelance project',
      'Search for developers',
    ],
  },
  {
    title: 'Brands',
    links: [
      'Advertise with us',
    ],
  },
  {
    title: 'Company',
    links: [
      'About',
      'Careers',
      'Support',
      'Media kit',
      'Testimonials',
      'API',
      'Terms of service',
      'Privacy policy',
      'Cookie policy',
    ],
  },
  {
    title: 'Directories',
    links: [
      'Development jobs',
      'Developers for hire',
      'Freelance developers for hire',
      'Tags',
      'Places',
    ],
  },
  {
    title: 'Development assets',
    links: [
      'Code Marketplace',
      'GitHub Marketplace',
      'NPM Registry',
      'Packagephobia',
    ],
  },
  {
    title: 'Development Resources',
    links: [
      'Freelancing',
      'Development Hiring',
      'Development Portfolio',
      'Development Education',
      'Creative Process',
      'Development Industry Trends',
    ],
  },
];

