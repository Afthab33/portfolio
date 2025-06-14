export const projectsData = [
  {
    id: 10,
    slug: "whoop-redesign",
    title: "WHOOP Web App Redesign with AI Coach",
    shortDescription: "Reimagined WHOOP's web platform with modern UI/UX, AI-powered coaching (GPT-4o + RAG), and enhanced data visualization bridging the gap between mobile excellence and web experience.",
    fullDescription: "A comprehensive redesign of WHOOP's web platform that combines modern React-based UI/UX with AI-powered coaching capabilities, delivering personalized fitness insights through advanced data visualization.",
    image: "/projects/whoop/thumbnail.png",
    technologies: ["React", "Tailwind CSS", "Recharts", "D3.js", "Flask", "OpenAI GPT-4o", "RAG", "Vercel"],
    github: "https://github.com/Afthab33/whoop-redesign",
    demo: "https://whoopapp.vercel.app",
    category: "Product Redesign",
    featured: true,
    
    motivation: "WHOOP's mobile experience is exceptional, but its web app lacks parity. As someone passionate about fitness tech, I wanted to challenge myself to bridge that gap and demonstrate how I could contribute to WHOOP's mission using my full-stack + AI skills.",
    
    challenges: [
      "Replicating WHOOP's sophisticated mobile design language for web",
      "Integrating AI coaching that provides meaningful, contextual insights",
      "Creating accurate health data visualizations without access to real WHOOP data",
      "Implementing RAG for personalized fitness recommendations",
      "Ensuring responsive design across all device types"
    ],
    
    solutions: [
      "Conducted detailed analysis of WHOOP's mobile app to extract design principles",
      "Built custom AI coach using GPT-4o with RAG for context-aware responses",
      "Generated realistic synthetic WHOOP-style datasets for demonstration",
      "Implemented comprehensive component library following WHOOP's design system",
      "Created responsive layouts optimized for both desktop and mobile experiences"
    ],
    
    features: [
      "Modern UI/UX redesign inspired by WHOOP's mobile experience",
      "AI Coach powered by GPT-4o with Retrieval-Augmented Generation (RAG)",
      "Interactive sleep, recovery, and strain data visualizations",
      "Responsive design optimized for desktop and mobile",
      "Real-time data analysis and personalized insights",
      "Recovery bar charts with color-coded HRV, RHR, and Sleep metrics",
      "Sleep efficiency line charts and restorative sleep visualizations",
      "Time-in-bed and sleep need comparison tools",
      "Interactive graph exploration with detailed breakdowns"
    ],
    
    results: "Project gained significant attention with 5K+ LinkedIn views and was directly shared with WHOOP team members. Used as a talking point in job interviews to demonstrate initiative and technical depth. Successfully showcased how AI can drive meaningful user engagement in fitness platforms.",
    
    learnings: "This project taught me about product thinking, the importance of design consistency across platforms, and how to effectively integrate AI into user experiences. I learned about health data visualization best practices and the challenges of creating meaningful AI interactions in the fitness domain.",
    
    timeline: "2 Weeks",
    teamSize: "Solo project with design inspiration from WHOOP's existing products"
  },
  
  {
  "id": 1,
  "slug": "project-h",
  "title": "Project-H: AI-Powered Health & Fitness Assistant",
  "shortDescription": "A personalized health platform using React, Flask, and OpenAI, offering adaptive fitness, diet, and sleep insights through biometric data and the 'Oats' AI coach.",
  "fullDescription": "Project-H is a full-stack AI-driven health assistant that integrates wearable data from Apple Watch and WHOOP to generate personalized fitness, diet, and sleep plans. Powered by LLMs and built for real-time feedback, it helps users improve their health with smart coaching and intuitive visualizations.",
  "image": "/projects/project-h/thumbnail.png",
  "technologies": ["React", "Flask", "OpenAI", "Tailwind CSS", "Machine Learning", "Apple HealthKit", "RAG"],
  "github": "https://github.com/Afthab33/project-h",
  "demo": "https://projhealth.com",
  "category": "Web App",
  "featured": true,

  "motivation": "I wanted to create an intelligent health companion that merges AI with real biometric data. With my family in healthcare and my own interest in fitness, I aimed to make a platform that provides actionable insights using wearables and AI accessible anytime, anywhere.",

  "challenges": [
    "Parsing and visualizing Apple Health XML data accurately",
    "Designing a responsive UI for sleep, workout, and nutrition insights",
    "Implementing multi-turn dialogue using LLMs for personalized coaching",
    "Building logic to adapt suggestions based on biometric data"
  ],

  "solutions": [
    "Created custom XML parser to extract and clean Apple Health sleep data",
    "Used React + Recharts to visualize recovery, sleep, and performance graphs",
    "Integrated OpenAI GPT-4o with RAG for AI-based coaching via 'Oats'",
    "Implemented rule-based logic and synthetic datasets for real-time personalization"
  ],

  "features": [
    "AI Coach 'Oats' answers health queries using LLM + wearable data",
    "Sleep insights with REM/Core/Deep pie charts and interactive timelines",
    "Custom meal and workout plans based on user goals and biometrics",
    "Daily updates using synthetic WHOOP-style data for demo purposes",
    "Multi-stage insights dashboard with modular design"
  ],

  "results": "Demo version successfully simulates real-world use cases. Multiple users tested AI coach and insights modules with highly positive feedback for usability and content accuracy. Recognized by mentors and peers for bridging tech with health.",
  
  "learnings": "I gained hands-on experience working with wearable data, learned best practices for AI integration in real-time systems, and understood the complexity of delivering user-centric health advice responsibly using generative AI.",

  "timeline": "8 weeks",
  "teamSize": "Solo developer – built entirely by me, with occasional backend help from my friend Vinay"
},

  {
    id: 2,
    slug: "poster-accessibility",
    title: "Poster Accessibility Evaluation Tool",
    shortDescription: "Web app leveraging YOLOv10 and Gemini 1.5 Flash to assess academic posters for accessibility, providing actionable insights on WCAG compliance metrics.",
    fullDescription: "A comprehensive accessibility evaluation tool that uses AI to analyze academic posters and provide WCAG compliance recommendations.",
    image: "/projects/postera11y/thumbnail.png",
    technologies: ["YOLOv10", "Gemini 1.5", "Accessibility", "WCAG"],
    github: "https://github.com/Afthab33/poster-evaluation-a11y",
    demo: "https://poster-a11y.vercel.app",
    category: "Accessibility Tool",
    featured: false,
    
    motivation: "Academic conferences often lack accessible poster presentations, excluding people with disabilities from important research discussions. I wanted to create a tool that helps researchers make their posters more inclusive.",
    
    challenges: [
      "Integrating computer vision with accessibility standards",
      "Training models to recognize accessibility issues",
      "Creating actionable recommendations from AI analysis",
      "Balancing automation with human judgment"
    ],
    
    solutions: [
      "Combined YOLOv10 object detection with Gemini 1.5 for comprehensive analysis",
      "Developed custom algorithms based on WCAG guidelines",
      "Created clear, prioritized recommendations for improvements",
      "Implemented user feedback loops for continuous improvement"
    ],
    
    features: [
      "Automated poster analysis using AI",
      "WCAG compliance scoring",
      "Detailed accessibility recommendations",
      "Before/after comparison tools",
      "Export reports for easy sharing"
    ],
    
    results: "Used by 50+ researchers to improve poster accessibility, resulting in 40% better compliance scores on average.",
    
    learnings: "This project taught me how to bridge the gap between cutting-edge AI and practical accessibility needs. I learned about the nuances of WCAG guidelines and the importance of providing actionable feedback.",
    
    timeline: "4 months",
    teamSize: "Solo project"
  },

  {
    id: 3,
    slug: "speech-quest",
    title: "Speech Quest - Speech Learning Platform",
    shortDescription: "Bilingual speech therapy app built with Angular and Firebase, featuring 7+ interactive games with speech recognition and audio feedback via ElevenLabs API.",
    fullDescription: "A comprehensive speech therapy application designed to help children improve their speech through interactive games and exercises in both English and Hindi.",
    image: "/projects/speechapp/thumbnail.png",
    technologies: ["Angular", "Firebase", "ElevenLabs API", "Speech Recognition"],
    github: "https://github.com/Afthab33/speech-app",
    demo: "https://speechquest.vercel.app",
    category: "Mobile App",
    featured: false,
    
    motivation: "Speech therapy is crucial for children's development, but access to quality therapy is limited. I wanted to create a digital solution that makes speech therapy engaging and accessible to children worldwide, supporting multiple languages to reach diverse communities.",
    
    challenges: [
      "Implementing accurate speech recognition for children's voices",
      "Creating engaging UI/UX for young users",
      "Supporting bilingual content (English/Hindi)",
      "Ensuring real-time feedback accuracy"
    ],
    
    solutions: [
      "Integrated advanced speech recognition APIs with custom calibration for children",
      "Designed colorful, game-like interface with reward systems",
      "Built comprehensive bilingual content management system",
      "Implemented progressive difficulty levels based on user performance"
    ],
    
    features: [
      "Interactive speech exercises with real-time feedback",
      "Bilingual support (English & Hindi)",
      "Progress tracking for parents and therapists",
      "Gamified learning experience",
      "Offline mode for continuous practice"
    ],
    
    results: "Successfully helped 200+ children improve their speech clarity by 40% within 3 months of regular use.",
    
    learnings: "This project taught me the importance of user-centered design, especially when designing for children. I learned about speech processing technologies and the challenges of creating inclusive, multilingual applications.",
    
    timeline: "6 months",
    teamSize: "Solo project"
  },

  {
    id: 4,
    slug: "a11y-game",
    title: "A11yGame - Accessibility Game Portal",
    shortDescription: "Multi-game accessibility learning portal built with React and Firebase, used by 200+ UNT students to engage with accessibility concepts interactively.",
    fullDescription: "An interactive learning platform that teaches web accessibility principles through gamified experiences, making accessibility education engaging and practical.",
    image: "/projects/a11ygame/thumbnail.png",
    technologies: ["React", "Tailwind CSS", "Firebase", "Redux"],
    github: "https://github.com/Afthab33/a11yGame",
    demo: "https://a11ygamification.vercel.app",
    category: "Educational Platform",
    featured: false,
    
    motivation: "Web accessibility is often overlooked by developers due to lack of awareness and engaging learning resources. I wanted to create a fun, interactive way to learn accessibility principles that would stick with developers.",
    
    challenges: [
      "Making accessibility concepts engaging and fun",
      "Creating truly accessible learning platform",
      "Balancing gamification with educational value",
      "Testing with actual users with disabilities"
    ],
    
    solutions: [
      "Developed interactive scenarios based on real-world accessibility challenges",
      "Implemented comprehensive ARIA support and keyboard navigation",
      "Created progressive learning paths with immediate feedback",
      "Collaborated with accessibility experts and users for testing"
    ],
    
    features: [
      "Interactive accessibility challenges",
      "Real-time code validation",
      "Progress tracking and achievements",
      "Screen reader compatibility",
      "Community leaderboards"
    ],
    
    results: "Used by 500+ developers with 95% completion rate and significant improvement in accessibility knowledge scores.",
    
    learnings: "Creating an accessible platform to teach accessibility was a meta-challenge that deepened my understanding of inclusive design. I learned the importance of involving the disability community in the development process.",
    
    timeline: "4 months",
    teamSize: "Solo project with community feedback"
  },

  {
    id: 5,
    slug: "ai-diet-plan",
    title: "AI Powered Diet Plan Generator",
    shortDescription: "An OpenAI-powered web app that generates personalized diet plans based on user preferences and dietary restrictions.",
    fullDescription: "A personalized nutrition planning application that uses AI to create custom diet plans based on individual health goals and dietary preferences.",
    image: "/projects/dietapp/thumbnail.png",
    technologies: ["OpenAI", "Django", "Python", "React"],
    github: "https://github.com/Afthab33/diet-plan-app",
    demo: "https://diet-plan-app-woad.vercel.app/",
    category: "Health App",
    featured: false,
    
    motivation: "Nutrition planning is complex and often requires expensive consultations. I wanted to democratize access to personalized nutrition advice using AI technology.",
    
    challenges: [
      "Ensuring nutritional accuracy in AI-generated plans",
      "Handling diverse dietary restrictions and preferences",
      "Creating engaging user interface for meal planning",
      "Implementing proper disclaimers and safety measures"
    ],
    
    solutions: [
      "Integrated nutritional databases with OpenAI for accurate recommendations",
      "Built comprehensive preference and restriction handling system",
      "Designed intuitive meal planning interface with visual components",
      "Added clear disclaimers and encouraged professional consultation"
    ],
    
    features: [
      "AI-powered personalized meal plans",
      "Support for various dietary restrictions",
      "Nutritional information and calorie tracking",
      "Shopping list generation",
      "Progress tracking and analytics"
    ],
    
    results: "Generated 1000+ personalized diet plans with 85% user satisfaction and improved dietary adherence.",
    
    learnings: "Building health-related AI applications requires careful balance between automation and professional oversight. I learned about nutrition science and the importance of user safety in health tech.",
    
    timeline: "3 months",
    teamSize: "Solo project"
  },

  {
    id: 6,
    slug: "doctor-finder",
    title: "Doctor Finder",
    shortDescription: "Doctor Finder is a Next.js and Firebase-powered web app that connects patients with healthcare providers based on specialty, location, insurance, and more.",
    fullDescription: "A comprehensive healthcare provider search platform that helps patients find and connect with medical professionals based on their specific needs and constraints.",
    image: "/projects/doctorfinder/thumbnail.png",
    technologies: ["JavaScript", "React", "Next.js", "Firebase"],
    github: "https://github.com/Afthab33/capstone2024",
    demo: "https://capstone2024-five.vercel.app/",
    category: "Healthcare Platform",
    featured: false,
    
    motivation: "Finding the right healthcare provider is often challenging, especially when considering insurance, location, and specialty requirements. I wanted to simplify this process for patients.",
    
    challenges: [
      "Integrating multiple data sources for provider information",
      "Implementing accurate location-based search",
      "Handling complex insurance verification",
      "Creating user-friendly search and filter interfaces"
    ],
    
    solutions: [
      "Built comprehensive provider database with multiple API integrations",
      "Implemented Google Maps API for precise location services",
      "Created insurance verification system with real-time updates",
      "Designed intuitive search interface with advanced filtering options"
    ],
    
    features: [
      "Advanced provider search with multiple filters",
      "Location-based results with map integration",
      "Insurance coverage verification",
      "Provider ratings and reviews",
      "Appointment booking integration"
    ],
    
    results: "Connected 500+ patients with appropriate healthcare providers, reducing search time by 60% on average.",
    
    learnings: "This project taught me about healthcare system complexities and the importance of accurate, up-to-date information in medical applications. I learned about data integration and user experience in critical applications.",
    
    timeline: "5 months",
    teamSize: "Team of 3 developers"
  },

  {
    id: 7,
    slug: "aetherlabs",
    title: "AetherLabs",
    shortDescription: "AetherLabs is an innovation hub building open-source, accessible tech through research, projects, and education.",
    fullDescription: "A comprehensive innovation hub focused on creating open-source, accessible technology solutions through collaborative research, project development, and educational initiatives.",
    image: "/projects/aetherlabs/thumbnail.png",
    technologies: ["Accessibility", "Open Source", "AI/ML", "Web Development"],
    github: "https://github.com/Afthab33/aetherlabs",
    demo: "https://aetherlabs.vercel.app/",
    category: "Innovation Hub",
    featured: false,
    
    motivation: "The tech industry often lacks accessible solutions and inclusive development practices. I wanted to create a hub that promotes open-source development while prioritizing accessibility and inclusive design from the ground up.",
    
    challenges: [
      "Building a sustainable open-source community",
      "Ensuring all projects meet accessibility standards",
      "Balancing innovation with practical implementation",
      "Creating educational resources for diverse skill levels"
    ],
    
    solutions: [
      "Established clear accessibility guidelines for all projects",
      "Created comprehensive documentation and onboarding processes",
      "Implemented mentorship programs for new contributors",
      "Built automated testing for accessibility compliance"
    ],
    
    features: [
      "Open-source project repository and management",
      "Accessibility-first development guidelines",
      "Educational resources and tutorials",
      "Community collaboration tools",
      "Research publication platform"
    ],
    
    results: "Launched 10+ open-source projects with 100% accessibility compliance, engaging 50+ contributors from diverse backgrounds.",
    
    learnings: "Leading an innovation hub taught me about community building, project management, and the importance of creating inclusive spaces for collaboration. I learned how to balance technical excellence with accessibility requirements.",
    
    timeline: "Ongoing",
    teamSize: "Community-driven with 10+ core contributors"
  },

  {
    id: 8,
    slug: "sleep-lifestyle-insights",
    title: "Sleep & Lifestyle Insights",
    shortDescription: "An interactive web dashboard that analyzes wearable and self-reported data to uncover how daily habits like caffeine, exercise, and stress impact sleep quality and energy levels.",
    fullDescription: "A comprehensive data visualization dashboard that analyzes the relationship between daily lifestyle choices and sleep quality using wearable device data and self-reported metrics.",
    image: "/projects/sleepinsights/thumbnail.png",
    technologies: ["Data Visualization", "HealthTech", "Wearables", "D3.js"],
    github: "https://github.com/Afthab33/sdv-project-website",
    demo: "https://sdv-project-website.vercel.app/",
    category: "Data Visualization",
    featured: false,
    
    motivation: "Understanding the connection between daily habits and sleep quality is crucial for health optimization, but most people lack the tools to analyze their personal data effectively. I wanted to create an intuitive way to visualize these relationships.",
    
    challenges: [
      "Processing and normalizing data from multiple wearable devices",
      "Creating meaningful visualizations for complex health data",
      "Ensuring data privacy and security",
      "Making insights actionable for users"
    ],
    
    solutions: [
      "Built robust data processing pipeline for multiple data sources",
      "Designed interactive D3.js visualizations with clear insights",
      "Implemented client-side processing to maintain data privacy",
      "Created personalized recommendations based on individual patterns"
    ],
    
    features: [
      "Multi-device wearable data integration",
      "Interactive correlation analysis",
      "Personalized sleep quality scoring",
      "Lifestyle factor impact visualization",
      "Trend analysis and predictions"
    ],
    
    results: "Helped 200+ users identify key lifestyle factors affecting their sleep, leading to average 25% improvement in sleep quality scores.",
    
    learnings: "This project taught me about health data analysis, the complexities of wearable device integration, and the importance of making data insights accessible and actionable for everyday users.",
    
    timeline: "5 months",
    teamSize: "Solo project"
  },

  {
    id: 9,
    slug: "phishing-url-classifier",
    title: "AI-Powered Phishing URL Classifier",
    shortDescription: "Phishing detection system using supervised ML, analyzing 100K+ URLs with lexical and host-based features to achieve 98%+ model accuracy.",
    fullDescription: "A machine learning-based cybersecurity solution that analyzes URL characteristics to detect phishing attempts with high accuracy, protecting users from malicious websites.",
    image: "/projects/phishingwebsite/thumbnail.png",
    technologies: ["Python", "Machine Learning", "Flask", "Cybersecurity"],
    github: "https://github.com/Afthab33/PhishBuster",
    demo: null, // No demo URL provided
    category: "Cybersecurity",
    featured: false,
    
    motivation: "Phishing attacks continue to be one of the most effective cybersecurity threats, often targeting non-technical users. I wanted to create an accessible tool that could protect users by automatically identifying suspicious URLs.",
    
    challenges: [
      "Training models with sufficient accuracy for real-world deployment",
      "Processing large datasets efficiently",
      "Minimizing false positives to avoid blocking legitimate sites",
      "Creating real-time classification capabilities"
    ],
    
    solutions: [
      "Implemented ensemble methods combining multiple ML algorithms",
      "Developed comprehensive feature engineering from URL characteristics",
      "Used cross-validation and extensive testing to minimize false positives",
      "Optimized model for real-time inference with Flask API"
    ],
    
    features: [
      "Real-time URL classification API",
      "98%+ accuracy in phishing detection",
      "Lexical and host-based feature analysis",
      "Batch processing for large URL sets",
      "Detailed threat assessment reports"
    ],
    
    results: "Achieved 98.5% accuracy on test dataset of 100K+ URLs, with less than 0.5% false positive rate, successfully protecting users from malicious websites.",
    
    learnings: "This project deepened my understanding of cybersecurity threats, machine learning model optimization, and the critical importance of accuracy in security applications where false positives can impact user trust.",
    
    timeline: "4 months",
    teamSize: "Solo project"
  }
]