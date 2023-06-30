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
        title: 'นิสิตและบุคลากร มข.',
        path: '/นิสิตและบุคลากร_มข',
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
    id: 1,
    title: 'LAW KKU',
    links: [
      {
        id: 1,
        title: 'เกี่ยวกับเรา',
        path: '/about_us',
        cName: 'submenu-item',
      },
      {
        id: 2,
        title: 'คำถามที่พบบ่อย',
        path: '/คำถามที่พบบ่อย',
        cName: 'submenu-item',
      },
      {
        id: 3,
        title: 'การใช้งาน',
        path: '/การใช้งาน',
        cName: 'submenu-item',
      },
      {
        id: 4,
        title: 'ติดต่อเรา',
        path: '/contact_us',
        cName: 'submenu-item',
      },
      {
        id: 5,
        title: 'นโยบายความเป็นส่วนตัว',
        path: '/นโยบายความเป็นส่วนตัว',
        cName: 'submenu-item',
      },
      {
        id: 6,
        title: 'นโยบายคุกกี้',
        path: '/นโยบายคุกกี้',
        cName: 'submenu-item',
      },
    ],
  },
  {
    id: 2,
    title: 'หมวดวิชา',
    links: [
      {
        id: 1,
        title: 'ภาษา',
        path: '/ภาษา',
        cName: 'submenu-item',
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
        cName: 'submenu-item',
      },
      {
        id: 4,
        title: 'ศิลปะและการพัฒนาตนเอง',
        path: '/ศิลปะและการพัฒนาตนเอง',
        cName: 'submenu-item',
      },
      {
        id: 5,
        title: 'สุขภาพ',
        path: '/สุขภาพ',
        cName: 'submenu-item',
      },
      {
        id: 6,
        title: 'คอร์สทั้งหมด',
        path: '/courses',
        cName: 'submenu-item',
      },
    ],
  },
  {
    id: 3,
    title: 'ประเภทผู้เรียน',
    links: [
       {
        id: 1,
        title: 'นิสิตและบุคลากร มข.',
        path: '/นิสิตและบุคลากร_มข',
        cName: 'submenu-item',
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
    ],
  },
 
];

