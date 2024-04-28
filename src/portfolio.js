/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ashutosh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ashutosh Hathidara Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Usman Ghulam",
  logo_name: "UsmanGhulam",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/usmanghulam?tab=repositories",
  githubProfile: "https://github.com/usmanghulam",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/usmanghulam",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/usmanghulam01/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:usmanghulam01@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/faisal.jutt.7906/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/usmanghulam/?hl=en/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/usmanghulam/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/usmanghulam01",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Virtual University Of Pakistan",
      subtitle: "Associate Degree In Computer Science",
      logo_path: "vu_logo.jpeg",
      alt_name: "vu",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Hands-on Experience with Projects and Assignments demonstrating practical applications of theories in real-world scenarios using Javascript, C and C++",
        "⚡ Active in Online Learning Communities and Team Projects at Virtual University, enhancing collaborative skills and peer learning through forums and group discussions.",
      ],
      website_link: "https://www.vu.edu.pk/",
    },
    {
      title: "GIGCCL",
      subtitle: "Intermediate in Computer Science",
      logo_path: "civil_lines.jpg",
      alt_name: "GIGCCL",
      duration: "2012 - 2014",
      descriptions: [
        "⚡ Gaining foundational knowledge in programming, network basics, and system administration..",
        "⚡ Achieved Proficiency in Core Computer Science Concepts and practical skills during the course, preparing for advanced studies and professional applications in the field of computing+",
      ],
      website_link: "https://www.giccl.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Exam 480: Programming in HTML5 with JavaScript and CSS3",
      subtitle: "- Issued Mar 2019",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/09ae51a2-ff60-489a-bb12-0c7e2977e43a/linked_in_profile",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "SQL and Relational Databases 101",
      subtitle: "- Issued Dec 2023",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/a54b8427e84d4cb0845a163d4807ed0b",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  // subtitle: "Work, Internships",
  description:
    "I have worked as a Web Developer with many growing startups, helping them build and improve their websites, web portals and web applications. I’ve also worked with larger, well-established companies as a Software Engineer, where I was responsible for building and maintaining complex software applications.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "MERN/PERN Stack Engineer",
          company: "Abhi (YC S21)",
          company_url: "https://abhi.com.pk/",
          logo_path: "images.png",
          duration: "August 2022 - Present",
          location: "Lahore, Pakistan",
          description: `I led a team of developers, effectively managing and directing their efforts to enhance product development. This leadership resulted in a 20% reduction in project delivery times and saved $10,000. Additionally, I spearheaded the revamp of product features, which significantly increased customer satisfaction by 20% and boosted sales by 15%. My role also involved coordinating tasks among team members, leading to a 30% increase in productivity and ensuring the on-time delivery of project milestones.`,
          color: "#000000",
        },
        {
          title: "MERN Stack Engineer",
          company: "Strategic Systems International",
          company_url: "https://www.ssidecisions.com/",
          logo_path: "images (1).png",
          duration: "Jan 2022 - Aug 2022",
          location: "Lahore, Pakistan - remote",
          description:
            "I collaborated effectively with cross-functional teams to ensure 100% on-time delivery of all assigned tasks. My contributions to enhancing company projects and portals led to a 15% increase in user engagement. I maintained consistent communication and alignment with team objectives, which was crucial for driving project success and improving service outcomes.",
          color: "#0879bf",
        },
        {
          title: "Frontend Engineer (ReactJs/NextJs)",
          company: "Renegade Furniture Group",
          company_url: "https://renegadefurniture.com/",
          logo_path: "images.jpeg",
          duration: "Nov 2019 - Dec 2021",
          location: "Islamabad, Pakistan - hybrid",
          description:
            "I specialized in Front End Development, utilizing React and Redux to build both Single Page Applications (SPA) and Multi-Page Applications (MPA), achieving a 20% improvement in application performance. My delivery of exceptional code for complex web applications ensured 100% compatibility across all browsers and operating systems, thereby increasing customer satisfaction. Additionally, I enhanced front-end interfaces by integrating designs with JSON REST APIs, which boosted user engagement by 20%. My expertise in modern web technologies and commitment to high-quality outputs consistently contributed to superior project outcomes.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Mern Stack Engineer Intern",
          company: "Zeen Technologies",
          company_url: "https://www.zintechnologies.com/",
          logo_path: "zeen_technologies_logo.jpeg",
          duration: "April 2019 - Nov 2019",
          location: "Lahore, Pakistan",
          description:
            "Developed a high-performing blog application with React.js, JavaScript, Node.js, Express.js, MongoDB & React Hooks, resulting in a 20% increase in user engagement.",
          color: "#000000",
        },
        {
          title: "Front-end Engineer Intern",
          company: "Bluehorn Technologies",
          company_url: "https://bluehorntech.co.uk/",
          logo_path: "bluehorntech_logo.jpeg",
          duration: "Jan 2019 - Mar 2019",
          location: "Lahore, Pakistan",
          description:
            "Led team of 5 in developing responsive, user-friendly designs using HTML, CSS, JS, jQuery, and Bootstrap, resulting in 20% increase in website traffic.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "dp.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
