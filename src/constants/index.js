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
    python,
    basketball,
    agile,
    reach52,
    tictag,
    siemens,
    cellstrat,
    unhad,
    poolpal,
    siemens_project,
    icc
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Product Manager",
      icon: agile,
    },
    {
      title: "Python Developer",
      icon: backend,
    },
    {
      title: "Basketballer",
      icon: basketball,
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
      name: "Python",
      icon: python,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Product Management Intern",
      company_name: "reach52",
      icon: reach52,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [
        "Orchestrated ScrumBan fusion, merging Scrum and Kanban for an 80% boost in feature release efficiency. Pioneered Agile culture adoption",
        "Led a cross-functional team of 6 (4 developers, 2 designers) to elevate data visualization with implementation of 5+ pivotal platform features",
        "Enhanced data-driven insights through reach52 insights (React, Redux, MongoDB), elevating user engagement by 30% for > 10 big partners",
      ],
    },
    {
      title: "Technical Project Management Intern",
      company_name: "TagTeam Technologies (Tictag)",
      icon: tictag,
      iconBg: "#E6DEDD",
      date: "August 2022 - May 2023",
      points: [
        "Automated data workflows with Python and JavaScript, cutting processing time by 25% for streamlined end-to-end operations",
        "Attained 99.5% data annotation accuracy, maintained < 1% churn rate while nurturing 5+ client relations, fuelling satisfaction and retention business",
        "Elevated user engagement 15% via proactive UAT testing of new app features in collaboration with the product team",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Siemens Energy",
      icon: siemens,
      iconBg: "#383E56",
      date: "May 2022 - August 2022",
      points: [
        "Built custom CRM using Python and Django, cutting response time by 20% for managers' customer info and employee task mapping",
        "Employed Excel/Tableau for trend models, speeding up claim approval by 30% with stricter measures",
        "Created Excel-Python app with Openpyxl, Pandas, and NumPy, reducing Sales processing time by 35%",
        "Participating in code reviews and providing constructive feedback to other developers",
      ],
    },
    {
      title: "Product and GTM Intern",
      company_name: "CellStrat AI",
      icon: cellstrat,
      iconBg: "#E6DEDD",
      date: "March 2021 - October 2021",
      points: [
        "Upgraded the process of ML and DL open pack generation to increase the adaptability of the platform thus increasing the corporate deploy percentage by up to 20%",
        "Collaborated with more than 5 educational institutions for starting the Python ML and DL coding bootcamps resulting in an upgrade of the active user count by up to 600",
      ],
    },
    {
      title: "Frontend Software Intern",
      company_name: "Unhad Organisation",
      icon: unhad,
      iconBg: "#E6DEDD",
      date: "March 2020 - May 2020",
      points: [
        "Aided the development of a multi-platform mobile application using Appery.io and Mobile Readie thereby speeding up the process of the launch",
        "Liaised with the front-end developer team to improve the CSS, HTML, Javascript functionality of the Unhad Website",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Chirag is a dynamic professional who adapts quickly to changing scenarios and thrives under pressure. His enthusiastic and proactive approach makes him a natural leader in new project initiatives. A standout example of his ability was when he skilfully automated several processes for a key client, resulting in noticeable efficiency gains and optimised operations. His contributions speak volumes about his capability and potential!",
      name: "Pulkit Aggarwal",
      designation: "Solutions Consultant",
      company: "Tictag",
      image: "https://media.licdn.com/dms/image/D5603AQEbYX7yWuSG_w/profile-displayphoto-shrink_800_800/0/1687366784740?e=1698278400&v=beta&t=0ZGsw6h6gpw05t33Ois_vfGOCUfd2k9xsDnqSMZS-5Q",
    },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "PoolPal Carpool",
      description:
        `Poolpal carpooling is web application where drivers can pickup passengers, who are travelling to a similar destination, to share a car ride. The web app connect drivers and passengers and allows the arrangement of shared rides, typically for the purpose of maximising each trip to reduce carbon footprint. 
        
        Overall, a carpooling app provides a convenient, cost-effective and sustainable way for people to travel around.`,
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
      ],
      image: poolpal,
      source_code_link: "https://github.com/chiragnagpal02/PoolPal/tree/main",
    },
    {
      name: "Custom CRM",
      description:
        `During my internship at Siemens, my team member and I worked on this Customer Relationship Management System (CRM), extensively designed by using Python, Django, HTML, CSS, Bootstrap and SQLlite as the database.

        The system is capable of handling more than 20,000 customers for the company and can do extensive compuations in the backend helping save valuable time for the managers which results in increased productivity.`,
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: siemens_project,
      source_code_link: "https://github.com/chiragnagpal02/CustomerEmployeeTaskSystem",
    },
    {
      name: "ICC Player Management System ",
      description:
        "This is a high school project developed to automate the functionalities of a user friendly cricket database. The purpose of this software project is to write a program which provides a user friendly interface to explore the history of cricket along with its top players and important matches.The program mainly brings forth the usage of python programming along with database management system of mySQL.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
      ],
      image: icc,
      source_code_link: "https://github.com/chiragnagpal02/ICCPlayerManagementSystem",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };