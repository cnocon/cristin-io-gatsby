const ResumeData = {
  name: "Cristin O'Connor",
  jobTitle: "Front End Software Engineer",
  experience: [
    // {
    //   startDate: "June 2019",
    //   endDate: "Present",
    //   position: "Front End Engineering Blog & CMS",
    //   company: "cristin.io",
    //   desc: "",
    //   descList: ["Rebuild professional Front End Engineering Blog and Portfolio site using Node, MongoDB, Express, and React"],
    //   awards: []
    // },
    // {
    //   startDate: "June 2019",
    //   endDate: "Present",
    //   position: "Relocating/Switching Career Focus",
    //   company: "Arriving in Salt Lake City, UT area by early October 2019",
    //   desc: "",
    //   descList: ["Engineer with 10+ years of experience looking to pursue her passion for Front End work in a career shift","Desires position as a Junior to Mid Level Front End Engineer in the greater Salt Lake City area","Able to work remotely given relocation won't likely be done until early November 2019"],
    //   awards: []
    // },
    {
      year: 2021,
      startDate: "Feb 2021",
      endDate: "Present",
      position: "Software Engineer",
      company: "Vivint Smart Home, Inc. <i class='far fa-chevron-right'></i> <em>Lehi, UT</em>",
      desc: "",
      descList: [
        "Implement the front end for multiple web applications using technologies including Vue.js and TypeScript.",
      ],
      awards: []
    },
    {
      year: 2020,
      startDate: "Feb 2020",
      endDate: "Feb 2021",
      position: "Front End Developer II",
      company: "Clearlink <i class='far fa-chevron-right'></i> <em>Salt Lake City, UT</em>",
      desc: "",
      descList: [
        "Use mockups to code responsive web pages using Handlebars, SCSS, and a proprietary component library",
        "Assist in maintaining and extending applications using Javascript, NPM, and Node",
        "Support a broad range of browsers and devices"
        // "Migrate websites into a Gatsby, GraphQL, and Emotion powered front end."
      ],
      awards: [
        {
          name: "FED Project Showcase Winner ",
          detail: "July 2020"
        },
        {
          name: "FED Project Showcase Winner ",
          detail: "October 2020"
        }
      ]
    },
    {
      year: 2018,
      startDate: "April 2018",
      endDate: "June 2019",
      position: "Software Engineer",
      company: "The Scion Group <i class='far fa-chevron-right'></i> <em>Chicago, IL</em>",
      desc: "Our small team worked with a large number of APIs and data to populate a data warehouse stored in Snowflake. I worked heavily with tools like DataTables and HighCharts in order to help visualize meaning. The internal tool housing all the resulting insights is a Rails 5 App.",
      descList: [
        "Launch a new Rails-based business intelligence platform from scratch on a two person team responsible for decision making and planning from start to finish",
        "Take ownership of front end maintenance and scaling using ERB, handcrafted SASS, HTML5, Javascript, Stimulus.js, ActionView, and a custom Bootstrap installation",
        "Engineer services for consuming data from various 3rd party APIs",
        //  "Create data visualizations using Javascript libraries (e.g. Highcharts and DataTables)",
        // "Build and automate services to distribute dynamically generated reports using the AXLSX gem, DocRaptor, ActionMailer, and Heroku Scheduler"
      ],
      awards: []
    },
    {
      year: 2015,
      startDate: "July 2015",
      endDate: "Sept 2017",
      position: "Software Engineer",
      company: "NCSA Next College Student Athlete <i class='far fa-chevron-right'></i> <em>Chicago, IL</em>",
      descList: [
        "Serve simultaneously on both the UI and Software Engineering teams and float between teams as needed",
        "Lead UI/UX design on project to build a tool for families to estimate federal loan amounts",
        "Build and support existing Rails applications using TDD with RSPEC","Utilize Javascript, Slim, jQuery, CoffeeScript, and LESS for front end work",
        // "Write API documentation for internal and publicly available APIs"
      ],
      awards: [
        {
          name: "Teammate of the Sprint",
          detail: "Winter 2015"
        }, {
          name: "Teammate of the Sprint",
          detail: "Spring 2016"
        }
      ]
    },
    {
      year: "2014",
      startDate: "2014",
      endDate: "2015",
      position: "Jr. Front End Engineer",
      company: "DialogTech <i class='far fa-chevron-right'></i> <em>Chicago, IL</em>",
      desc: "As a member of the Front-End Engineering team worked on several applications to assist our clients’ marketing efforts, including phone routing, tracking, and analytics tools. The primary framework we used was Backbone, although at the end of my tenure there we started transitioning into a React and Node based implementation. I almost exclusively coded in vanilla Javascript (ES5), although we used used Underscore and jQuery occasionally. I built out mockups using LESS and a Handlebars.",
      descList: [
        "Code extensively in Javascript to extend and support several single page applications built in Backbone,",
        // "Build mockups of new views to spec with LESS, Mustache, and Handlebars, careful to consider accessibility requirements and cross-browser compatibility of implementations",
        "Build mockups of new views to spec in Backbone with LESS, Mustache, Lodash, and Handlebars",
        "Develop and deploy code in an all Javascript web stack: MongoDB, Node, Express and Backbone"
      ],
      awards: []
    },
    {
      year: "2014",
      startDate: "2014",
      endDate: "2014",
      position: "Rails Developer",
      company: "Blueye Creative <i class='far fa-chevron-right'></i> <em>Chicago, IL</em>",
      desc: "As a contractor, I worked on the MVC components for a Rails-based software application that would serve as an Airbnb-like product. Additionally, I was the sole developer responsible for building a database Wilson could use to track millions of racket purchases. This included writing a powerful algorithm to parse through years of inconsistently formatted records form Excel spreadsheets, as well as building out a front end for them to enter new purchase data efficiently in an aesthetically pleasing format.",
      descList: ["Assist in building an Airbnb-like web application using Rails 4", "Build a new database for Wilson’s tennis racket inventory with a Microsoft Access front end","Parse through and import years of inconsistently formatted spreadsheet data with Ruby scripts"],
      awards: []
    },
    // {
    //   year: 2013,
    //   startDate: "2013",
    //   endDate: "2013",
    //   position: "Teaching Assistant",
    //   company: "University of Notre Dame <i class='far fa-chevron-right'></i> <em>Notre Dame, IN</em>",
    //   desc: "Served as a teaching assistant in an Introduction to Web Development course covering HTML, CSS, Javascript, wireframing, and responsive design.",
    //   descList: ["Assist with answering questions and explaining concepts to students in a course covering HTML, CSS, Javascript, wireframing, and responsive design"],
    //   awards: []
    // },
    {
      year: 2011,
      startDate: "2011",
      endDate: "2014",
      position: "Web Support Developer",
      company: "University of Notre Dame <i class='far fa-chevron-right'></i> <em>Notre Dame, IN</em>",
      desc: "I was the sole support developer for ~400 websites using our homegrown CMS, supporting the codebase for both the Rails app and the individual websites. Further, I trained clients to maintain their websites in our CMS with a focus on empowering them to generate content that would improve their search rankings and strive to reach the levels of accessibility/usability encouraged by WAI-ARIA.  I also created a series of responsive HTML email templates for brand-standards compliant email marketing for the Office of the Provost and the Office of the President, among others. I also had the occasional opportunity to build out custom designed mobile-first, responsive websites for university organizations.",
      descList: ["Sole support developer for ~400 websites using our homegrown CMS, providing support for both our Rails based CMS app and client websites",
      // "Train clients to maintain their websites in our CMS with a focus on empowering them to generate content that would improve their search rankings and strive to reach the levels of accessibility/usability encouraged by WAI-ARIA",
      "Train clients to maintain their websites in our CMS with a focus on improving search rankings and good accessibility",
      // "Create a series of responsive, brand-standards compliant, HTML email templates for email marketing campaigns from the Office of the Provost and the Office of the President and many more",
      "Build custom designs from PSDs into mobile-first, responsive websites",
      "Excel at providing great customer service over the phone, in-person, and via email for clients"],
      awards: [
        {
          name: "Presidential Team Irish Award",
          detail: "Winter 2013"
        }, {
          name: "Employee of the Quarter",
          detail:"Winter 2013"
        }
      ]
    }
    // {
    //   year: 2010,
    //   startDate: "2010",
    //   endDate: "2011",
    //   position: "Web Developer and Designer",
    //   company: "Freelance",
    //   desc: "I set up WordPress sites for clients, including customizations in PHP, CSS, and JavaScript as needed. I also did design work and SEO consulting.",
    //   descList: ["Provide a range of services for clients, researching solutions based on their needs",
    //   "Design custom websites, set up hosting, and stand up WordPress sites with as needed custom PHP, CSS, and Javascript"],
    //   awards: []
    // }
  ],
  education: [
    {
      year: 2011,
      startDate: "2007",
      endDate: "2011",
      position: "B.A. Sociology, Computer Applications",
      company: "University of Notre Dame <i class='far fa-chevron-right'></i> <em>Notre Dame, IN</em>",
      timespan: "Class of 2011",
      descList: [],
      awards: [
        {
          name:"SUMMA CUM LAUDE",
          detail: "College of Arts and Letters"
        },{
          name:"PHI BETA KAPPA",
          detail: "They made me pay a fee"
        }, {
          name:"ALPHA KAPPA DELTA",
          detail: "International Sociology Honor Society"
        }
      ]
    },
    {
      year: 2014,
      startDate: "2014",
      endDate: "2014",
      timespan: "Spring 2014",
      position: "Student/Graduate",
      company: "Dev Bootcamp <i class='far fa-chevron-right'></i> <em>Chicago, IL</em>",
      desc: "Learned multiple languages and frameworks, including Ruby, JavaScript, Rails, SQL, HTML and CSS as well as techniques for fast, effective learning in an ever-evolving field.",
      descList: ["Learned multiple languages and frameworks, including Ruby, JavaScript, Rails, SQL, HTML and CSS as well as techniques for fast, effective learning in an ever-evolving field."],
      awards: []
    },
  ],
  skills: [
    {name: "JavaScript", percent: "90", icon: "fab fa-js-square"},
    {name: "SCSS, LESS, CSS", percent: "90", icon: "fab fa-sass"},
    {name: "React", percent: "85", icon: "fab fa-react"},
    {name: "Git", percent: "80", icon: "fab fa-git"},
    {name: "Vue", percent: "65", icon: "fab fa-vuejs"},
    {name: "APIs", percent: "60", icon: "fal fa-chart-network"},
    {name: "Ruby", percent: "60", icon: "fal fa-gem"},
    {name: "Node, NPM", percent: "55", icon: "fab fa-node-js"},
    {name: "Rails 5", percent: "50", icon: "fal fa-subway"},
    {name: "TypeScript", percent: "45", icon: "fa fal fa-brackets"}
  ],
  assets: [
    "Empathy to be an effective teammate",
    "Organizational abilities for managing projects independently",
    "Research skills to find the best solutions to new challenges",
    "Enthusiasm and passion for front end work",
    "Positive attitude and willingness to handle a wide variety of responsibilities",
    "Effective communicator with people from varying technical backgrounds",
    "Dedicated to ongoing professional development",
    "Natural problem solver",
    "5+ years of Agile experience",
    "10+ years of experience working on web applications in various capacities",
  ],
  courses: [
    {
      img: "https://i.udemycdn.com/course/240x135/2143416_520c_2.jpg",
      title: "React Node FullStack",
      link: "https://www.udemy.com/node-react/",
      by: "Ryan Dhungel, via Udemy",
      desc: "Learn Node JS API Development from Scratch with MongoDB"
    },{
      img: "https://udemy-images.udemy.com/course/480x270/762616_7693_3.jpg",
      title: "The Complete SQL Bootcamp",
      link: "https://www.udemy.com/the-complete-sql-bootcamp/learn/v4/overview" ,
      by: "Jose Portilla, Data Scientist via Udemy",
      desc: "Learn how to read and write complex queries to a database using PostgreSQL."
    },
    {
      img:"https://udemy-images.udemy.com/course/480x270/705264_caa9_3.jpg",
      title: "Modern React with Redux",
      link:"https://www.udemy.com/react-redux/learn/v4/overview",
      by: "Stephen Grider (via Udemy)",
      desc: "Master the fundamentals of React and Redux with this tutorial as you develop apps with React Router, Webpack, and ES6."
    }, {
      img:"https://udemy-images.udemy.com/course/480x270/1179104_da2b_4.jpg",
      title: "React: Make Stunning React Websites",
      link:"https://www.udemy.com/learning-path-react-make-stunning-react-websites/learn/v4/overview",
      by: "Ben Fhala, Packt Publishing",
      desc: "This Learning Path covers the practical skills needed to make great interface components that show you how to ingest your data and display it on the web using a variety of techniques, such as charts and grids."
    }
  ],
  other: [
    {
      src: "/assets/images/site/planet.png",
      alt: "Cats are a big part of my world.",
      title: "Cat Enthusiast",
      desc: "I'm a big animal lover in general, but I enjoy adopting special needs cats in my spare time. I have sixteen now (just kidding... I have one)."
    },
    {
      src: "/assets/images/site/quill.png",
      alt: "A Quill",
      title: "Sociological Insight",
      desc: "I majored in Sociology in college because I love it. It was just lucky that I only had to work half as hard as my engineering friends for twice their GPAs."
    },
    {
      src: "/assets/images/site/tv.png",
      alt: "TV aficionado",
      title: "TV Knowledge",
      desc: "I've seen an impressive amount of shows. But somehow I still haven't watched Adventure Time."
    }
  ],
  social: {
    github: {
      className: "social-link github",
      href: "http://github.com/cnocon",
    },
    twitter: {
      className: "social-link twitter",
      href: "http://twitter.com/cnocon",
    },
    linkedIn: {
      className: "social-link linkedin",
      href: "https://www.linkedin.com/in/cristinoconnor/",
    },
    email: {
      className: "social-link email",
      href: "mailto:her@cristin.io",
    },
    icons: {
      email: {
        className: "fa fa-envelope-o"
      }
    }
  },
  projects: [
    {
      link: "https://github.com/cnocon/weather-charts-app",
      title: "Weather Charts",
      by: "react, webpack, redux, react router",
      desc: "",
      img: "/assets/images/site/sun.png"
    }, {
      link: "https://github.com/cnocon/blogging-app",
      title: "Mini Blogging App",
      by: "react, react router, redux, mongodb",
      desc: "",
      img: "/assets/images/site/website.png"
    }, {
      link: "https://github.com/cnocon/cristin.io",
      title: "cristin.io",
      by: "react",
      desc: "",
      img: "/assets/images/site/lightbulb.png"
    }
  ]
};

export {ResumeData};
