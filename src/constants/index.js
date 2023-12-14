import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  K8s,
  AWS,
  Jenkins,
  Aruba,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "E2E Web Developer",
    icon: web,
  },
  {
    title: "Micro Frontend Expert",
    icon: mobile,
  },
  {
    title: "Backend For Frontend Specialist",
    icon: creator,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "K8s",
    icon: K8s,
  },
  {
    name: "AWS",
    icon: AWS,
  },
  {
    name: "Jenkins",
    icon: Jenkins,
  },
];

const experiences = [
  {
    title: "Internship",
    company_name: "Aruba Networks, Hewlett Packared Enterprise",
    icon: Aruba,
    iconBg: "#383E56",
    date: "January 2020 - August 2020",
    points: [
      "Developed several debugging skills to decrease bug turn around time",
      "Pair programmed with senior developers to code and brainstorm solutions ",
      "Introduced shell scripts and supported developers to work on VM’s to increase the productivity ",
      "Fixed blockers and critical bugs within the planned duration and following best practices",
    ],
  },
  {
    title: "Cloud Engineer II",
    company_name: "Aruba Networks, Hewlett Packared Enterprise",
    icon: Aruba,
    iconBg: "#383E56",
    date: "August 2020 - September 2023",
    points: [
      "Developed end-to-end production-grade frontend applications and implemented a framework-like system for dynamic frontend views",
      "Engineered components for an in-house component library utilized by over 20 service teams.",
      "Architected and implemented solutions to transform monolithic frontends into micro frontends, significantly reducing build, deploy, and testing times.",
      "Optimized initial page load time by integrating CDN, server-side rendering, and cache strategies, while also converting runtime processes into build-time processes, resulting in an approximate 3-4 second improvement.",
      "Implemented Application Performance Monitoring (APM) for proactive monitoring and early detection of failures and bugs.",
      "Attained Fedramp security certification by addressing container security vulnerabilities and conducting audits on third-party libraries.",
      "Led multiple production crisis meetings involving cross-time zone teams",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Optimization",
    description: "Decreased web page load time by 3 -4 seconds",
    tags: [
      {
        name: "CDN",
        color: "blue-text-gradient",
      },
      {
        name: "S3",
        color: "green-text-gradient",
      },
      {
        name: "caching",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://ieeexplore.ieee.org/abstract/document/8822069/",
  },
  {
    name: "Zero Down Time",
    description:
      "Designed and implemented system to segregate s3 content for QA and Production environment without any downtime",
    tags: [
      {
        name: "security",
        color: "blue-text-gradient",
      },
      {
        name: "CI/CD",
        color: "green-text-gradient",
      },
      {
        name: "production-cluster",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Automation",
    description:
      "Created internal tools and processes to help team members develop, deploy and test their changes locally reducing overall feature turn around time.      ",
    tags: [
      {
        name: "shell-script",
        color: "blue-text-gradient",
      },
      {
        name: "npm-scripts",
        color: "green-text-gradient",
      },
      {
        name: "VM's",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
