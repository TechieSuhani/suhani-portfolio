export const profile = {
  name: 'Suhani Maurya',
  role: 'Full Stack Developer',
  tagline: 'I build thoughtful digital experiences and scalable web applications.',
  intro: 'MCA student and SAP Certified Back-End Developer passionate about turning ideas into reliable, user-friendly products.',
  email: 'work.suhanimaurya@gmail.com',
  phone: '+91 9208287221',
  location: 'India',
  github: 'https://github.com/TechieSuhani',
  linkedin: 'https://www.linkedin.com/in/suhanimau/',
  resume: '/Suhani-Maurya-Resume.pdf'
}

export const skillGroups = [
  {
    title: 'Programming', icon: 'code', image: '/images/skills/programming.svg', summary: 'Languages are the instructions developers use to tell computers what to do.',
    items: ['C', 'Java', 'JavaScript', 'HTML5', 'CSS3'],
    explanations: {
      C: 'A fast programming language often used to build operating systems and other low-level software.',
      Java: 'A programming language used to build applications and backend systems for many kinds of devices.',
      JavaScript: 'A language that makes websites interactive and can also run on servers.',
      HTML5: 'The standard language used to organize the content and structure of a web page.',
      CSS3: 'The styling language that controls how a web page looks and fits different screen sizes.'
    }
  },
  {
    title: 'Frontend', icon: 'monitor', image: '/images/skills/frontend.svg', summary: 'Frontend tools build the parts of an app people see and interact with.',
    items: ['React.js', 'Bootstrap', 'Material UI', 'Responsive UI', 'WebRTC APIs'],
    explanations: {
      'React.js': 'A library for building web pages from reusable interactive pieces called components.',
      Bootstrap: 'A set of ready-made styles and layout tools that helps pages fit different screens.',
      'Material UI': 'A collection of ready-to-use React interface parts, such as buttons, menus, and dialogs.',
      'Responsive UI': 'A layout that adjusts so an app works well on phones, tablets, and computers.',
      'WebRTC APIs': 'Browser tools that let people share audio, video, or other data in real time.'
    }
  },
  {
    title: 'Backend', icon: 'server', image: '/images/skills/backend.svg', summary: 'Backend tools handle the behind-the-scenes work of an app.',
    items: ['Node.js', 'Express.js', 'Socket.io', 'REST APIs', 'JWT Authentication'],
    explanations: {
      'Node.js': 'Lets JavaScript run on a server to handle requests and application logic.',
      'Express.js': 'A Node.js framework that helps developers create website routes and APIs.',
      'Socket.io': 'A tool for sending updates between a server and users instantly.',
      'REST APIs': 'A common way for the frontend and backend to request and share information.',
      'JWT Authentication': 'A signed token that helps verify a user after they sign in.'
    }
  },
  {
    title: 'Databases', icon: 'database', image: '/images/skills/databases.svg', summary: 'Databases keep an app’s information organized so it can be found and updated later.',
    items: ['MySQL', 'MongoDB', 'Mongoose', 'MongoDB Atlas'],
    explanations: {
      'MySQL': 'A database that stores information in related tables and lets apps query it using SQL.',
      'MongoDB': 'A database that stores information as flexible, document-like records.',
      'Mongoose': 'A library that helps Node.js organize, validate, and work with MongoDB data.',
      'MongoDB Atlas': 'A cloud service for hosting and managing MongoDB databases online.'
    }
  },
  {
    title: 'Cloud & Tools', icon: 'cloud', image: '/images/skills/cloud-tools.svg', summary: 'Cloud services run apps online; developer tools help build, share, and maintain them.',
    items: ['AWS EC2', 'AWS Amplify', 'Render', 'Git', 'GitHub', 'VS Code'],
    explanations: {
      'AWS EC2': 'A virtual computer in the cloud where an app or server can run.',
      'AWS Amplify': 'An AWS service that helps host and deploy web frontends.',
      'Render': 'A cloud platform that can host websites, APIs, and background services.',
      'Git': 'A tool that records code changes so developers can review or restore earlier versions.',
      'GitHub': 'A website for storing Git projects and collaborating on code.',
      'VS Code': 'A code editor used to write, explore, and debug software.'
    }
  },
  {
    title: 'Core Computer Science', icon: 'cpu', image: '/images/skills/computer-science.svg', summary: 'These foundations explain how software, data, and computers work.',
    items: ['OOP', 'DBMS', 'Operating Systems', 'DSA', 'Computer Networks'],
    explanations: {
      'OOP': 'A way to organize code around objects that combine information and actions.',
      'DBMS': 'Software and methods used to store, organize, and manage database information.',
      'Operating Systems': 'The main software that manages a computer and lets other apps run.',
      'DSA': 'Ways to organize data and solve computing problems efficiently.',
      'Computer Networks': 'How computers connect and exchange information over wired or wireless links.'
    }
  },
  {
    title: 'Additional', icon: 'layers', image: '/images/skills/additional.svg', summary: 'Other languages, platforms, and practices that support my development work.',
    items: ['SAP ABAP', 'SAP BTP', 'Python', 'Postman', 'Agile'],
    explanations: {
      'SAP ABAP': 'SAP’s programming language for building and customizing business applications.',
      'SAP BTP': 'SAP’s cloud platform for building, connecting, and extending SAP applications.',
      'Python': 'A readable, general-purpose language used for automation, web apps, data, and more.',
      'Postman': 'A tool for sending API requests and checking the responses.',
      'Agile': 'A way for teams to build software in small steps and improve it using feedback.'
    }
  }
]

export const projects = [
  {
    number: '01', name: 'NovaGPT', category: 'AI CHAT APPLICATION', period: 'Sep 2026 — Oct 2026',
    image: '/images/projects/novagpt.svg',
    description: 'A full-stack AI chat application with a responsive interface and real-time conversation flow.',
    details: 'A responsive AI chat application I’ve been building to explore full-stack development and AI integration. It provides a clean chat experience with account management, saved conversations, and voice features. 👩‍💻💬',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Groq API', 'Gemini API'],
    highlights: [
      '➡️ Generate AI-powered chat responses',
      '➡️ Create an account and sign in securely',
      '➡️ Save and revisit conversations',
      '➡️ Choose response style and language',
      '➡️ Dictate prompts using your microphone',
      '➡️ Listen to assistant responses with text-to-speech',
      '➡️ Use the responsive interface across desktop and mobile'
    ],
    stackGroups: [
      { title: '🎨 Frontend', items: ['React.js', 'Vite', 'CSS for responsive styling', 'Browser Web Speech API for voice input and spoken replies'] },
      { title: '⚙️ Backend', items: ['Node.js and Express.js', 'REST APIs for chat and account features', 'MongoDB Atlas and Mongoose for data storage', 'Secure password hashing and HttpOnly session cookies'] },
      { title: '🧠 AI Integration', items: ['Groq API integration for AI responses', 'Optional Gemini provider configuration', 'API keys are kept on the server side, not exposed in the frontend'] },
      { title: '☁️ Deployment & Learning', items: ['Deployed on Render', 'Practiced frontend-backend integration, authentication, database connectivity, API handling, and deployment workflows', 'Learned to handle provider rate limits and configure alternative AI providers'] }
    ],
    github: 'https://github.com/TechieSuhani/NovaGPT',
    githubLabel: 'GitHub repository',
    live: 'https://novagpt-0epr.onrender.com/'
  },
  {
    number: '02', name: 'VersionControl', category: 'REPOSITORY MANAGEMENT PLATFORM', period: 'Jun 2026 — Jul 2026',
    image: '/images/projects/versioncontrol.svg',
    description: 'A GitHub-inspired platform for repository operations, issue tracking and pull-request workflows.',
    details: 'Full-stack web development project – Version Control System, a modern repository management and collaboration platform inspired by GitHub. 💻✨ A powerful platform that enables developers to create and manage repositories, track source code changes, maintain commit history, collaborate using Issues and Pull Requests, simulate GitHub Actions workflows, and visualize repository insights through an intuitive GitHub-inspired interface. 🌍✨ Built from scratch using the MERN Stack and modern web technologies.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT', 'AWS'],
    highlights: [
      '🔹 User Signup & Login Authentication',
      '🔹 Create & Manage Repositories',
      '🔹 Public & Private Repository Support',
      '🔹 Repository Settings & Description Management',
      '🔹 Source Code Viewer & Editor',
      '🔹 Add, Edit & Delete Files',
      '🔹 Commit History Tracking',
      '🔹 Git Command Simulation',
      '🔹 Branch Management',
      '🔹 Issue Tracking System',
      '🔹 Pull Request Management',
      '🔹 GitHub Actions Workflow Simulation',
      '🔹 Workflow Progress & Logs Viewer',
      '🔹 Repository Insights Dashboard',
      '🔹 Responsive GitHub-Inspired User Interface'
    ],
    stackGroups: [
      { title: '🎨 Frontend', items: ['React.js for a dynamic and interactive user interface', 'React Router DOM for seamless client-side navigation', 'Axios for REST API communication', 'CSS3 for responsive and modern UI design', 'React Icons for enhanced user experience'] },
      { title: '⚙️ Backend', items: ['Node.js & Express.js for RESTful API development', 'MongoDB Atlas & Mongoose for cloud database management', 'JWT Authentication for secure login and authorization', 'Socket.IO for real-time workflow updates and communication'] },
      { title: '☁️ Deployment & Learning', items: ['Frontend deployed on AWS Amplify', 'Backend deployed on Render', 'MongoDB Atlas integration for cloud database management', 'Implemented JWT Authentication & Protected Routes', 'Integrated REST APIs for seamless frontend-backend communication', 'Learned repository management concepts, Git workflow simulation, cloud deployment, CORS handling, authentication flow, and production-level full-stack application development'] }
    ],
    futureEnhancements: [
      '🔸 Repository Fork Feature',
      '🔸 Repository Star & Watch System',
      '🔸 Merge Conflict Resolution',
      '🔸 Advanced Branch Switching',
      '🔸 Code Difference (Diff) Viewer',
      '🔸 Repository Search & Filtering',
      '🔸 Notifications System',
      '🔸 Organization & Team Collaboration',
      '🔸 Wiki & Documentation Support',
      '🔸 Docker & Kubernetes Deployment'
    ],
    github: 'https://github.com/TechieSuhani/GitHub-Clone',
    githubLabel: 'GitHub repository',
    live: 'https://main.d2xdcn0sjrppcq.amplifyapp.com/auth'
  },
  {
    number: '03', name: 'ConnectMeet', category: 'VIDEO CONFERENCING PLATFORM', period: 'May 2026 — Jun 2026',
    image: '/images/projects/connectmeet.svg',
    description: 'A real-time video conferencing application with room creation and participant controls.',
    details: 'Full-stack web development project – ConnectMeet, a real-time video conferencing platform inspired by modern online meeting applications. 🎥💻 A powerful platform that enables users to join virtual meetings, communicate through live video/audio streams, exchange messages in real time, and collaborate seamlessly from anywhere. 🌍✨ Built from scratch using the MERN Stack, WebRTC, and Socket.IO.',
    stack: ['React', 'Node.js', 'Express', 'WebRTC', 'Socket.io'],
    highlights: [
      '🔹 User Signup & Login Authentication',
      '🔹 Secure Meeting Creation & Joining',
      '🔹 Real-Time Video Calling',
      '🔹 Live Audio Communication',
      '🔹 Meeting Code Based Room Access',
      '🔹 Real-Time Chat Messaging',
      '🔹 Mute / Unmute Controls',
      '🔹 Camera On / Off Controls',
      '🔹 Responsive User Interface',
      '🔹 Meeting History Management'
    ],
    stackGroups: [
      { title: '🎨 Frontend', items: ['React.js for a dynamic and interactive user interface', 'React Router for seamless navigation', 'Axios for API communication', 'Material UI & Bootstrap for responsive UI design', 'WebRTC APIs for real-time media streaming'] },
      { title: '⚙️ Backend', items: ['Node.js & Express.js for RESTful API development', 'MongoDB & Mongoose for database management', 'Socket.IO for real-time communication and signaling', 'JWT Authentication for secure login and authorization'] },
      { title: '☁️ Deployment & Learning', items: ['Frontend deployed on Render', 'Backend deployed on Render', 'MongoDB Atlas integration for cloud database management', 'Implemented WebRTC signaling using Socket.IO', 'Learned real-time communication architecture, peer-to-peer connections, deployment troubleshooting, authentication flow, and full-stack application development'] }
    ],
    futureEnhancements: [
      '🔸 Screen Sharing Functionality',
      '🔸 Meeting Recording Feature',
      '🔸 Participant Management Controls',
      '🔸 Virtual Background Support',
      '🔸 Raise Hand & Reactions Feature',
      '🔸 File Sharing During Meetings',
      '🔸 Meeting Scheduling System',
      '🔸 Waiting Room Feature',
      '🔸 Meeting Analytics Dashboard',
      '🔸 Multi-Participant Group Video Calls'
    ],
    github: 'https://github.com/TechieSuhani/Zoom-Clone',
    githubLabel: 'GitHub repository',
    live: 'https://zoom-clone-xwby.onrender.com/'
  },
  {
    number: '04', name: 'TradeQuest', category: 'STOCK TRADING PLATFORM', period: 'Apr 2026 — May 2026',
    image: '/images/projects/tradequest.svg',
    description: 'A mock stock-trading platform inspired by modern brokerage applications.',
    details: "Full-stack web development project – TradeQuest, a stock trading platform inspired by one of India's leading brokerage applications. 🔮📊 Search stocks, bonds, derivatives, and mutual funds across NSE, BSE, and MCX with a responsive interface. 🪩 Built from scratch using the MERN Stack.",
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    highlights: [
      '🔹 User Signup & Login Authentication',
      '🔹 Buy & Sell Stock Functionality',
      '🔹 Holdings & Positions Management',
      '🔹 Portfolio Dashboard',
      '🔹 Dynamic Stock Data Visualization',
      '🔹 Secure Session Handling',
      '🔹 Responsive User Interface'
    ],
    stackGroups: [
      { title: '🎨 Frontend', items: ['React.js for a dynamic and interactive user interface', 'React Router for seamless navigation', 'Axios for backend API communication', 'Bootstrap for responsive and modern UI design'] },
      { title: '⚙️ Backend', items: ['Node.js & Express.js for RESTful API development', 'MongoDB & Mongoose for database management and modeling', 'JWT Authentication for secure user login and authorization'] },
      { title: '☁️ Deployment & Learning', items: ['Frontend deployed on Render', 'Backend deployed on Render', 'Connected frontend, backend, and database in a production environment', 'Learned API integration, deployment troubleshooting, authentication flow, and full-stack architecture'] }
    ],
    futureEnhancements: [
      '🔸 Real-Time Stock Market Data',
      '🔸 Watchlist Feature',
      '🔸 Buy/Sell Order Simulation',
      '🔸 Portfolio Analytics Dashboard',
      '🔸 Price Alerts & Notifications',
      '🔸 Advanced Charts & Graphs',
      '🔸 Dark/Light Theme Support',
      '🔸 Trading History Tracking',
      '🔸 User Profile Management',
      '🔸 Multi-user Portfolio Comparison'
    ],
    github: 'https://github.com/TechieSuhani/Zerodha-Clone',
    githubLabel: 'GitHub repository',
    live: 'https://zerodha-clone-r6u9.onrender.com/'
  },
  {
    number: '05', name: 'WanderLust', category: 'TRAVEL & PROPERTY PLATFORM', period: 'May 2025 — Jul 2025',
    image: '/images/projects/wanderlust.svg',
    description: 'An Airbnb-inspired marketplace connecting travelers and hosts through accommodation listings and bookings.',
    details: 'Full-stack web development project – WanderLust. 🔮 An online marketplace connecting travelers with hosts who offer accommodations and experiences worldwide. 🌐 It bridges both parties by facilitating bookings and communication, while property owners can create listings to share their spaces with a global audience. 🪩 Built from scratch using the MVC framework, this responsive, feature-rich platform delivers a dynamic experience inspired by Airbnb. ✈️',
    stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'MVC', 'Cloudinary'],
    highlights: [
      '🔹 Marketplace connecting travelers and hosts worldwide',
      '🔹 Booking and communication between both parties',
      '🔹 Property owners can create listings for their spaces',
      '🔹 Responsive, Airbnb-inspired experience'
    ],
    stackGroups: [
      { title: '🏛️ MVC Architecture', items: ['Model handles data logic and database interaction', 'View defines how data is presented through templates', 'Controller manages application logic and connects models to views'] },
      { title: '🖼️ Views & Responsive UI', items: ['EJS templating for dynamic rendering', 'Bootstrap for responsive design'] },
      { title: '🔧 Backend & Database', items: ['Express.js for backend routing', 'MongoDB for database storage', 'Mongoose for data modeling and database connectivity'] },
      { title: '📍 Integrations & Authentication', items: ['Mapbox for listing geolocation and real-time map rendering', 'Cloudinary for image upload and storage', 'Sessions and Passport.js for authentication and authorization'] },
      { title: '☁️ Deployment', items: ['Deployed on Render', '.env configuration for environment settings'] }
    ],
    github: 'https://github.com/TechieSuhani/Airbnb-Website-Clone',
    githubLabel: 'GitHub repository',
    live: 'https://airbnb-website-15gh.onrender.com/'
  }
]

export const education = [
  { degree: 'Master of Computer Applications', institute: 'G.L. Bajaj Institute of Technology and Management', years: '2025 — 2027', score: '87%' },
  { degree: 'B.Sc. (Mathematics & Physics)', institute: 'Udai Pratap College, Varanasi', years: '2022 — 2025', score: '71%' },
  { degree: 'Class XII · CBSE', institute: 'Kendriya Vidyalaya, Varanasi', years: '2021 — 2022', score: '82.4%' },
  { degree: 'Class X · CBSE', institute: 'Kendriya Vidyalaya, Varanasi', years: '2020 — 2021', score: '85.4%' }
]

export const certifications = [
  { name: 'SAP Certified – Back-End Developer', issuer: 'ABAP Cloud | SAP', date: 'Sep 2026', note: 'Certified in backend development using ABAP Cloud and SAP development technologies.', url: 'https://drive.google.com/file/d/1s3I9rncsiQC0mHBqR3uLTckIRCiK4dET/view?usp=drivesdk' },
  { name: 'Full Stack Web Development', issuer: 'Apna College', date: 'Apr 2025', note: 'One-year program covering frontend, backend and database development.', url: 'https://drive.google.com/file/d/1wgO_xrGyO1XMRhzcwk173_U8PsCD9VQ_/view?usp=drivesdk' },
  { name: 'DSA with JAVA', issuer: 'Apna College', date: 'Apr 2026', note: 'Comprehensive data structures and algorithms program using Java.', url: 'https://drive.google.com/file/d/1DsqcPdHUicST4HjjRUVpE6Xp5aUeiuIJ/view?usp=drivesdk' },
  { name: 'MERN Stack Development', issuer: 'Appwars Technologies', date: 'Apr 2026', note: 'Specialized workshop focused on building full-stack applications with the MERN stack.', url: 'https://drive.google.com/file/d/1n5qFOQ0Lr0RhM0uu0MGZHU9uBFHSpR4w/view?usp=drivesdk' }
]
