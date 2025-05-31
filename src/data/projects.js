export const projectsData = [
  {
    id: 1,
    slug: "project-h",
    title: "Project-H: AI-Powered Health Platform",
    shortDescription: "Personalized health platform using React, Tailwind, Node.js, and OpenAI, helping users track fitness with 'Oats' AI coach and integrated biometric data analysis.",
    fullDescription: "An integrated health platform that combines symptom analysis, mental health support, and personalized recommendations using advanced AI algorithms.",
    image: "/projects/project-h/thumbnail.png",
    technologies: ["React", "OpenAI", "Node.js", "Machine Learning"],
    github: "https://github.com/Afthab33/project-h",
    demo: "https://projhealth.com",
    category: "Web App",
    featured: true,
    
    motivation: "Healthcare accessibility is a global challenge. I wanted to create a platform that provides immediate health insights and mental health support, making healthcare guidance available 24/7 to anyone with internet access.",
    
    challenges: [
      "Training accurate AI models for symptom analysis",
      "Ensuring medical accuracy and safety",
      "Creating intuitive health data visualization",
      "Implementing secure patient data handling"
    ],
    
    solutions: [
      "Developed custom ML models trained on verified medical datasets",
      "Implemented multiple validation layers and disclaimer systems",
      "Created interactive dashboards with clear health metrics",
      "Used end-to-end encryption for all sensitive data"
    ],
    
    features: [
      "AI-powered symptom checker with 85% accuracy",
      "Mental health assessment and support",
      "Personalized health recommendations",
      "Health metrics tracking and visualization",
      "Emergency contact integration"
    ],
    
    results: "Platform serves 1000+ active users with 85% accuracy in symptom analysis and 90% user satisfaction rate.",
    
    learnings: "Building healthcare applications requires balancing innovation with responsibility. I learned about medical data standards, AI ethics, and the importance of clear communication about AI limitations.",
    
    timeline: "8 months",
    teamSize: "Solo project with medical advisor consultation"
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