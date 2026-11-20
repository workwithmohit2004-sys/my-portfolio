export const portfolioData = {
  personal: {
    name: "Mohit Sharma",
    role: "Frontend Web Developer",
    tagline: "Building Modern & Responsive Web Experiences",
    heroDescription:
      "I'm a passionate frontend developer with a strong foundation in HTML, CSS, JavaScript, and React.js. I enjoy creating responsive, user-friendly web applications and continuously learning new technologies to improve my development skills.",
    aboutBio: [
      "I'm Mohit Sharma, a passionate Frontend Web Developer with a Bachelor's degree in Computer Applications (BCA).",
      "I have hands-on experience with HTML, CSS, JavaScript, and React.js. I enjoy developing modern, responsive, and user-friendly websites.",
      "I believe in continuous learning and improving my problem-solving abilities through practical projects. Currently, I'm exploring backend technologies like Node.js to move towards becoming a Full-Stack Developer.",
      "My goal is to create meaningful digital experiences and contribute to real-world projects."
    ],
    phone: "+91-9068582691",
    email: "Mohitsharma701708@gmail.com",
    location: "Meerut, Uttar Pradesh, India",
    // Replace these placeholders with your active profile URLs
    github: "https://github.com/mohitsharma-dev", 
    linkedin: "https://linkedin.com/in/mohitsharma-dev",
    resumeUrl: "#", // Link to PDF or downloadable asset
  },

  aboutHighlights: [
    {
      title: "Frontend Development",
      description: "Crafting modern, accessible, and responsive web user interfaces with React.js, Tailwind CSS, and clean semantic code.",
      icon: "Code2"
    },
    {
      title: "Continuous Learning",
      description: "Constantly expanding development horizons, presently diving deeper into Node.js and full-stack architecture.",
      icon: "Sparkles"
    },
    {
      title: "Problem Solving",
      description: "Transforming design ideas and real-world logic into robust, intuitive, and interactive digital solutions.",
      icon: "Lightbulb"
    }
  ],

  skills: {
    languages: [
      { name: "HTML5", level: "Semantic Markup, Accessibility, SEO", icon: "FileCode" },
      { name: "CSS3", level: "Responsive Layouts, Flexbox, Grid, Animations", icon: "Palette" },
      { name: "JavaScript", level: "ES6+, DOM Manipulation, Async/Await", icon: "FileJson" },
    ],
    frameworks: [
      { name: "React.js", level: "Hooks, Component Architecture, State Management", icon: "Atom" },
      { name: "Tailwind CSS", level: "Utility-first Design, Custom Systems", icon: "Wind" }
    ],
    learning: [
      { name: "Node.js", status: "Currently Learning & Exploring", icon: "Server" },
      { name: "Full-Stack Concepts", status: "RESTful APIs & Backend Architecture", icon: "Database" }
    ],
    tools: [
      { name: "Visual Studio Code", description: "Primary IDE, Extensions & Debugging", icon: "Laptop" },
      { name: "Git & GitHub", description: "Version Control, Branching & Repositories", icon: "GitBranch" },
    ],
    softSkills: [
      { name: "Teamwork", description: "Collaborating smoothly in team environments" },
      { name: "Communication", description: "Clear technical and interpersonal articulation" },
      { name: "Problem-solving", description: "Analytical mindset and structured troubleshooting" },
      { name: "Self-learning", description: "Rapidly picking up documentation and emerging tools" },
      { name: "Adaptability", description: "Thriving with shifting requirements and modern workflows" }
    ]
  },

  experience: [
    {
      position: "Frontend Web Development",
      organization: "Self Projects & Learning",
      duration: "June 2023 – Present",
      location: "Remote / Self-Directed",
      type: "Practical Experience",
      highlights: [
        "Practiced building responsive and user-friendly websites with clean UI/UX standards.",
        "Gained hands-on experience with HTML, CSS, JavaScript, and React.js through multiple real-world web apps.",
        "Improved problem-solving and design skills through iterative development and code refactoring.",
        "Currently exploring backend technologies like Node.js to move towards full-stack development."
      ],
      technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Git", "Node.js (Learning)"]
    }
  ],

  projects: [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Website",
      category: "Full Frontend Web App",
      description: "Built a responsive e-commerce frontend using React.js, HTML, CSS, and JavaScript. Implemented modern product listings, homepage design, and mobile-friendly layouts.",
      technologies: ["React.js", "HTML5", "CSS3", "JavaScript"],
      features: [
        "Responsive multi-device shopping layout",
        "Interactive product showcase with category filtering",
        "Dynamic cart management & state persistence",
        "Clean modern checkout and banner design"
      ],
      demoUrl: "https://example.com/demo-ecommerce", // Replace with your live URL
      githubUrl: "https://github.com/mohitsharma-dev/ecommerce-website", // Replace with your repo URL
      accentColor: "from-indigo-500/20 to-blue-500/20",
      badgeColor: "text-indigo-400 border-indigo-500/30",
      stats: "Interactive Catalog & Cart"
    },
    {
      id: "news-platform",
      title: "News Website",
      category: "Dynamic API Integration",
      description: "Created a dynamic news application using React.js and a News API. Implemented category-based news filtering and a responsive user interface.",
      technologies: ["React.js", "News API", "JavaScript", "CSS3"],
      features: [
        "Real-time news headlines via REST API integration",
        "Filter articles by categories (Tech, Business, Science, Sports)",
        "Search functionality for instant article discovery",
        "Responsive article cards with direct read links"
      ],
      demoUrl: "https://example.com/demo-news", // Replace with your live URL
      githubUrl: "https://github.com/mohitsharma-dev/news-website", // Replace with your repo URL
      accentColor: "from-cyan-500/20 to-teal-500/20",
      badgeColor: "text-cyan-400 border-cyan-500/30",
      stats: "Live News Feeds & Filtering"
    },
    {
      id: "weather-platform",
      title: "Weather App",
      category: "Live Forecast App",
      description: "Created a responsive weather forecast application using React.js and a Weather API. Implemented real-time data fetching, city-based search, and dynamic weather icons.",
      technologies: ["React.js", "Weather API", "JavaScript", "Tailwind CSS"],
      features: [
        "Real-time temperature, humidity, and wind conditions",
        "City search with dynamic geocoding query support",
        "Dynamic weather condition icons and thematic gradients",
        "Mobile-optimized cards with high readability"
      ],
      demoUrl: "https://example.com/demo-weather", // Replace with your live URL
      githubUrl: "https://github.com/mohitsharma-dev/weather-app", // Replace with your repo URL
      accentColor: "from-sky-500/20 to-indigo-500/20",
      badgeColor: "text-sky-400 border-sky-500/30",
      stats: "Real-time City Metrics"
    },
    {
      id: "rps-game",
      title: "Rock-Paper-Scissors Game",
      category: "Interactive Logic Game",
      description: "Developed an interactive game using HTML, CSS, and JavaScript. Added score tracking and a simple, user-friendly interface.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Computer decision algorithm with randomized choice generation",
        "Persistent round-by-round score tracker",
        "Animated win/loss/tie outcome feedback",
        "Clean, intuitive, and tactile button controls"
      ],
      demoUrl: "https://example.com/demo-rps", // Replace with your live URL
      githubUrl: "https://github.com/mohitsharma-dev/rock-paper-scissors", // Replace with your repo URL
      accentColor: "from-violet-500/20 to-fuchsia-500/20",
      badgeColor: "text-violet-400 border-violet-500/30",
      stats: "Dynamic Scoreboard Engine"
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institute: "J.P. Institute of Engineering Technology, Meerut",
      year: "2026",
      status: "Pursuing",
      statusType: "pursuing", // active highlight
      description: "Advanced coursework in Software Engineering, Advanced Computer Applications, Database Systems, and Web Technologies."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "College of Applied Education and Health Science, Meerut",
      year: "2026",
      status: "Completed",
      statusType: "completed",
      description: "Core foundation in Computer Science, Data Structures, Object-Oriented Programming, Database Management, and Web Development."
    },
    {
      degree: "Senior Secondary (Class XII)",
      institute: "School Education Board",
      year: "2023",
      status: "Completed",
      statusType: "completed",
      description: "Completed higher secondary education with strong focus on analytical reasoning and foundational sciences."
    }
  ],

  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ]
};

