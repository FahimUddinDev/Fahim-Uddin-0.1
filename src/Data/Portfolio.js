import adminPanel from "../Assets/Portfolio/Admin panel.png";
import bexer from "../Assets/Portfolio/bexer.png";
import amiubas from "../Assets/Portfolio/amiubas.png";
import profile1 from "../Assets/Image/final-home--1st.png";
import profile2 from "../Assets/Image/final-home--2nd.png";
import profile3 from "../Assets/Image/final-home--3rd.png";
import profile4 from "../Assets/Image/final-home--4th.png";
import profile5 from "../Assets/Image/final-home--5th.png";
import client1 from "../Assets/Clients/client1.png";
import client2 from "../Assets/Clients/client2.png";
import client3 from "../Assets/Clients/client3.png";
import client4 from "../Assets/Clients/client4.png";
import client5 from "../Assets/Clients/client5.png";
import brand1 from "../Assets/Clients/brand-01.png";
import brand2 from "../Assets/Clients/brand-02.png";
import brand3 from "../Assets/Clients/brand-03.png";
import brand4 from "../Assets/Clients/brand-04.png";
import brand5 from "../Assets/Clients/brand-05.png";
import blog1 from "../Assets/blogImage/blog-01.jpg";
import blog2 from "../Assets/blogImage/blog-02.jpg";
import blog3 from "../Assets/blogImage/blog-03.jpg";

export const portfolio = [
  {
    id: 1,
    image: adminPanel,
    name: "DEVELOPMENT",
    heading: "React admin panel project ",
    link: "https://github.com/Fcode9/react-admin-panel",
    react: "611",
    blog: [
      {
        heading: "New react admin panel project  ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi. Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
      },
    ],
  },
  {
    id: 2,
    image: bexer,
    name: "APPLICATION",
    heading: "Bexer company application by react",
    link: "https://github.com/Fcode9/bexar",
    react: "753",
    blog: [
      {
        heading: "Bexer company application by react",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi. Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
      },
    ],
  },
  {
    id: 3,
    image: amiubas,
    name: "HTML To React",
    heading: "Amiubas react  Application",
    link: "https://github.com/Fcode9/ambiusProject",
    react: "653",
    blog: [
      {
        heading: "Amiubas react  Application",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi. Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
      },
    ],
  },
];

export const education = [
  {
    name: "Diploma in engineering",
    time: "Cumilla polytechnic institute (2014 - 2018)",
    point: "2.79/4",
    description: [{ Technology: ["Department of Computer technology"] }],
  },
  {
    name: "Secondary School Certificate",
    time: "J.H.E.M High School (2011 - 2013)",
    point: "4.00/5",
    description: [{ Department: ["Department of Science"] }],
  },
];

export const jobExperience = [
  {
    name: "Service Engineer",
    time: "Asiamed (2019 - Continue)",
    point: "",
    description: [
      {
        Responsibilities: [
          "• Installing and calibrating biomedical machines, equipment’s and software.",
          "• Evaluating this safety, efficiency and effectiveness of biomedical machine, equipment and software.",
          "• Maintaining and repairing biomedical machines and equipment, when needed.",
          "• Providing technical support when needed.",
          "• Keeping Up-To-Date service history on all biomedical machines and equipment.",
          "• Training clinicians   and other personnel on how to use biomedical machines and equipment, safely and effectively.",
          "• Researching new materials, technologies and engineering aspects of biomedical processes and system.",
        ],
      },
    ],
  },
  {
    name: "MIS Executive",
    time: "Abulkhair Group Of Company (2018 - 2019)",
    point: "",
    description: [
      {
        Responsibilities: [
          "• Daily sales statement sheet collects from various SO/PO.",
          "• Check DSS & input manually Excel Sheet.",
          "• Outlet wise SO/PO daily sales & collection posting in online software.",
          "• SO/PO party wise sales & collection maintain daily.",
          "• Outlet wise order receive & process and also print delivery memo.",
          "• Manually sales & collection submit to high management.",
          "• Monthly outlet wise sales & collection statement reconciliation with SO/PO.",
          "• Monthly reconciliation with account sales & collection.",
          "• Monthly report send to high management, SO/PO, outlet wise, territory wise, regional wise, divisional Wise etc.",
        ],
      },
    ],
  },
];

export const training = [
  {
    name: "RESPONSIVE WEB DESIGN",
    time: "FREE CODE CAMP",
    point: "",
    description: [
      { duration: ["Duration : 300 hours"] },
      { year: ["Year : 2021"] },
      {
        Topics: ["•	HTML", "•	CSS", "•	Bootstrap", "•	tailwind"],
      },
    ],
  },
  {
    name: "SYSTEM & NETWORK ADMINISTRATION USING LINUX",
    time: "CSLiT",
    point: "",
    description: [
      { duration: ["Duration : 3 month"] },
      { year: ["Year : 3 month"] },
      {
        Topics: [
          "•	Linux networking concept & review & Network configuration",
          "•	Network troubleshooting & monitoring & Remote access",
          "•	Mail server, File sharing, FTP server, DNS server, Web server & Samba server",
          "•	Network file systems, Firewalls & System log",
        ],
      },
    ],
  },
  {
    name: "MICROSOFT OFFICE APPLICATION",
    time: "BALIA COMPUTER TRANING CENTER",
    point: "",
    description: [
      { duration: ["Duration : 3 month"] },
      { year: ["Year : 2013"] },
      {
        Topics: [
          "•	Microsoft Word",
          "•	Microsoft Excel",
          "•	Microsoft Powerpoit",
          "•	Microsoft Access",
        ],
      },
    ],
  },
  {
    name: "ISP SETUP & ADMINISTRATION USING MIKROTIK",
    time: "CSLiT",
    point: "",
    description: [
      { duration: ["Duration : 3 month"] },
      { year: ["Year : 2018"] },
      {
        Topics: [
          "•	MikroTik Installation, License & package upgradation",
          "•	IP Access NAT, Bridge, NTP, VLAN & Routing",
          "•	Bandwidth Management, IP Restriction, DHCP Server, User Management and MRTG ",
          "•	PPPoE Server Configuration, VPN Configuration & Proxy Configuration  ",
          "•	Tools Introduction, Monitoring and E-mail Backup-Restore",
          "•	Link Redundancy Solution & Hotspot Solution",
        ],
      },
    ],
  },
  {
    name: "CCNA ROUTING & SWTCHING",
    time: "TECHNO IT SOLUTION",
    point: "",
    description: [
      { duration: ["Duration : 3 month"] },
      { year: ["Year : 2017"] },
      {
        Topics: [
          "•	IP Addressing Sub netting & VLSM",
          "•	Managing Cisco Internetwork & IP Routing Technologies",
          "•	Configuring IP Routing _ Static Routing, Default Routing, Dynamic Routing",
          "•	Switching, Cisco Router Cabling & Configuration",
          "•	WAN Technology-Leased Line & Protocols",
          "•	Security With Access Control Lists ",
          "•	Networking Devices and Designs",
        ],
      },
    ],
  },
];

export const coding = [];

export const skill = [
  { name: "HTML", value: 95 },
  { name: "CSS", value: 90 },
  { name: "Boot Strap & tailwind", value: 90 },
  { name: "JAVASCRIPT", value: 80 },
  { name: "Reactjs", value: 85 },
  { name: "React native", value: 80 },
  { name: "Redux", value: 75 },
  { name: "Linux", value: 70 },
  { name: "CCNA", value: 95 },
  { name: "Mikrotik", value: 60 },
];

export const review = [
  {
    id: 1,
    name: "Nevine Acotanza",
    image: profile1,
    organization: "Rainbow-themes",
    designation: "Cheife operation officer",
    review: {
      name: "Android app development",
      via: "via Upwork ",
      time: "Mar 4, 2021",
      star: 5,
      comment:
        "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, loborits mauris hendreit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris.",
    },
  },
  {
    id: 2,
    name: "Jone Duone Joe",
    image: profile2,
    organization: "Bound - trolola",
    designation: "Operating officer",
    review: {
      name: "web app development",
      via: "via Upwork ",
      time: "Mar 4, 2016",
      star: 5,
      comment:
        "Important fact to nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris.",
    },
  },
  {
    id: 3,
    name: "Nevine Dhawan",
    image: profile3,
    organization: "Glassfisom",
    designation: "CEO of Officer",
    review: {
      name: "Android App Design",
      via: "Fiver",
      time: " Aug 30, 2021",
      star: 5,
      comment:
        " No more question for design. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris .",
    },
  },
  {
    id: 4,
    name: "Mevine Thoda",
    image: profile4,
    organization: "NCD - design",
    designation: "Marketing Officer",
    review: {
      name: "SEO-Marketing",
      via: "via Upwork ",
      time: "Apr 28, 2022",
      star: 5,
      comment:
        " Marcent Of Vanice and treatment. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris .",
    },
  },
  {
    id: 5,
    name: "Davei Luace",
    image: profile5,
    organization: "Personal",
    designation: "Chief Operating Manager",
    review: {
      name: "Android App Development",
      via: "via Upwork ",
      time: "Dec 21, 2022",
      star: 5,
      comment:
        " When managment is so important. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris .",
    },
  },
];

export const resumeNav = [
  { title: "Experience", link: "/" },
  { title: "Education", link: "/education" },
  { title: "Professional Skills", link: "/skill" },
  { title: "Training Summary", link: "/training" },
];

export const clientNav = [
  { title: "JavaScript", link: "/" },
  { title: "Product Design", link: "/designClient" },
  { title: "HTML to React", link: "/htmlToReact" },
  { title: "React To Laravel", link: "/reactToLaravel" },
  { title: "Python", link: "/pythonClient" },
];

export const clients = [
  { imageDark: client1, imageLight: brand1, name: "John Due", link: "/" },
  { imageDark: client2, imageLight: brand2, name: "Smiths Marth", link: "/" },
  { imageDark: client3, imageLight: brand3, name: "Add Dev", link: "/" },
  { imageDark: client4, imageLight: brand4, name: "Jone Due", link: "/" },
  { imageDark: client5, imageLight: brand5, name: "John Due", link: "/" },
  { imageDark: client1, imageLight: brand1, name: "Adon Smith", link: "/" },
  { imageDark: client2, imageLight: brand2, name: "Smitha Mila", link: "/" },
  { imageDark: client3, imageLight: brand3, name: "Sultana Mila", link: "/" },
  { imageDark: client4, imageLight: brand4, name: "Jannat", link: "/" },
  { imageDark: client5, imageLight: brand5, name: "Mila Dus", link: "/" },
  { imageDark: client1, imageLight: brand1, name: "Marth Smiths", link: "/" },
  { imageDark: client5, imageLight: brand5, name: "Marth Smiths", link: "/" },
];

export const price = [
  {
    title: "Make Your Single Page",
    name: "Elementor",
    desc: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
    price: 30,
    offer: [
      "1 Page with Elementor",
      "Design Customization",
      "Responsive Design",
      "Content Upload",
      "Design Customization",
      "2 Plugins/Extensions",
      "multipage Elementor",
      "Design Figma",
      "MAintaine Design",
      "Content Upload",
      "Design With XD",
      "8 Plugins/Extensions",
    ],
  },
  {
    title: "Design Make this Page",
    name: "Elementor",
    desc: "Making this the first true generator on the Internet. It uses a dictionary & plugin Development.",
    price: 50,
    offer: [
      "1 Page with Elementor",
      "Design Customization",
      "Responsive Design",
      "Content Upload",
      "Design Customization",
      "2 Plugins/Extensions",
      "multipage Elementor",
      "Design Figma",
      "MAintaine Design",
      "Content Upload",
      "Design With XD",
      "8 Plugins/Extensions",
    ],
  },
  {
    title: "Customize Your Single Page",
    name: "Elementor",
    desc: "I will install your desire theme and made like Theme demo and customize your single page( homepage)",
    price: 90,
    offer: [
      "1 Page with Elementor",
      "Design Customization",
      "Responsive Design",
      "Content Upload",
      "Design Customization",
      "2 Plugins/Extensions",
      "multipage Elementor",
      "Design Figma",
      "MAintaine Design",
      "Content Upload",
      "Design With XD",
      "8 Plugins/Extensions",
    ],
  },
];

export const blog = [
  {
    id: 1,
    date: "2 May, 2021",
    image: blog1,
    name: "Designe",
    heading: "T-shirt design is the part of design ",
    react: "2 min read",
    blog: [
      {
        heading: "Digital Marketo to Their New Office.",
        text: "Nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
      },
      {
        heading: "Nobis eleifend option conguenes.",
        text: "Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed posuere massa nunc quis dui. Integer ornare varius mi, in vehicula orci scelerisque sed. Fusce a massa nisi. Curabitur sit amet suscipit nisl. Sed eget nisl laoreet, suscipit enim nec, viverra eros. Nunc imperdiet risus leo, in rutrum erat dignissim id. Ut rhoncus vestibulum facilisis. Duis et lorem vitae ligula cursus venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae nisi tortor. Morbi leo nulla, posuere vel lectus a, egestas posuere lacus. Fusce eleifend hendrerit bibendum. Morbi nec efficitur ex.",
      },
      {
        heading: "Mauris tempor, orci id pellentesque.",
        text: "Nulla non ligula vel nisi blandit egestas vel eget leo. Praesent fringilla dapibus dignissim. Pellentesque quis quam enim. Vestibulum ultrices, leo id suscipit efficitur, odio lorem rhoncus dolor, a facilisis neque mi ut ex. Quisque tempor urna a nisi pretium, a pretium massa tristique. Nullam in aliquam diam. Maecenas at nibh gravida, ornare eros non, commodo ligula. Sed efficitur sollicitudin auctor. Quisque nec imperdiet purus, in ornare odio. Quisque odio felis, vestibulum et.",
      },
    ],
    comment: [
      {
        userName: "Faysal",
        comment: "New",
      },
    ],
  },
  {
    id: 2,
    date: "2 May, 2021",
    image: blog2,
    name: "Development",
    heading: "The services provide for design  ",
    react: "2hours read",
    blog: [
      {
        heading: "Digital Marketo to Their New Office.",
        text: "Nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
      },
      {
        heading: "Nobis eleifend option conguenes.",
        text: "Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed posuere massa nunc quis dui. Integer ornare varius mi, in vehicula orci scelerisque sed. Fusce a massa nisi. Curabitur sit amet suscipit nisl. Sed eget nisl laoreet, suscipit enim nec, viverra eros. Nunc imperdiet risus leo, in rutrum erat dignissim id. Ut rhoncus vestibulum facilisis. Duis et lorem vitae ligula cursus venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae nisi tortor. Morbi leo nulla, posuere vel lectus a, egestas posuere lacus. Fusce eleifend hendrerit bibendum. Morbi nec efficitur ex.",
      },
      {
        heading: "Mauris tempor, orci id pellentesque.",
        text: "Nulla non ligula vel nisi blandit egestas vel eget leo. Praesent fringilla dapibus dignissim. Pellentesque quis quam enim. Vestibulum ultrices, leo id suscipit efficitur, odio lorem rhoncus dolor, a facilisis neque mi ut ex. Quisque tempor urna a nisi pretium, a pretium massa tristique. Nullam in aliquam diam. Maecenas at nibh gravida, ornare eros non, commodo ligula. Sed efficitur sollicitudin auctor. Quisque nec imperdiet purus, in ornare odio. Quisque odio felis, vestibulum et.",
      },
    ],
    comment: [
      {
        userName: "Faysal",
        comment: "New",
      },
    ],
  },
  {
    id: 3,
    date: "2 May, 2021",
    image: blog3,
    name: "Application",
    heading: "Mobile app landing design & app maintain",
    react: "5min read",
    blog: [
      {
        heading: "Digital Marketo to Their New Office.",
        text: "Nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
      },
      {
        heading: "Nobis eleifend option conguenes.",
        text: "Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed posuere massa nunc quis dui. Integer ornare varius mi, in vehicula orci scelerisque sed. Fusce a massa nisi. Curabitur sit amet suscipit nisl. Sed eget nisl laoreet, suscipit enim nec, viverra eros. Nunc imperdiet risus leo, in rutrum erat dignissim id. Ut rhoncus vestibulum facilisis. Duis et lorem vitae ligula cursus venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae nisi tortor. Morbi leo nulla, posuere vel lectus a, egestas posuere lacus. Fusce eleifend hendrerit bibendum. Morbi nec efficitur ex.",
      },
      {
        heading: "Mauris tempor, orci id pellentesque.",
        text: "Nulla non ligula vel nisi blandit egestas vel eget leo. Praesent fringilla dapibus dignissim. Pellentesque quis quam enim. Vestibulum ultrices, leo id suscipit efficitur, odio lorem rhoncus dolor, a facilisis neque mi ut ex. Quisque tempor urna a nisi pretium, a pretium massa tristique. Nullam in aliquam diam. Maecenas at nibh gravida, ornare eros non, commodo ligula. Sed efficitur sollicitudin auctor. Quisque nec imperdiet purus, in ornare odio. Quisque odio felis, vestibulum et.",
      },
    ],
    comment: [
      {
        userName: "Faysal",
        comment: "New",
      },
    ],
  },
];

export const socialLinks = {
  facebook: "https://www.facebook.com/faysal.mahamud.12345",
  instagram: "https://www.instagram.com/faysal_mahamud1/",
  linkdin:
    "https://www.linkedin.com/in/fahim-uddin-159a86194/?originalSubdomain=bd",
  github: "https://github.com/Fcode9",
};

export const work = [
  {
    heading: "React Application",
    shortDesc:
      "Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React. ",
  },
  {
    heading: "React-Native Application",
    shortDesc:
      "Create native apps for Android, iOS, and more using React. React Native combines the best parts of native development with React.",
  },
  {
    heading: "Front-End Development",
    shortDesc:
      "Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript.",
  },
];
