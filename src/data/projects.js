import proximaCover from '../assets/APPUICove.jpeg';
import proximaExtended from '../assets/APPUIPAGE3.jpeg';
import evBike from '../assets/evbik.jpeg';
import krypto from '../assets/krypto-UI----Shashan.jpeg';
import detective from '../assets/PRIVATEDETETCTIVEAGENCYUI.jpg';
import finalNavBar from '../assets/finalnavba.jpeg';

export const projects = [
  {
    id: 5,
    title: "Private Detective Agency Login UI",
    subtitle: "Login UI",
    role: "UI/UX Designer",
    tools: ["Figma"],
    type: "Web UI",
    image: detective,
    overview: "Security-focused websites often appear cluttered or outdated.",
    intent: "Designed a noir-inspired, minimal login page with strong contrast, glowing blue accents, and a clean layout for trust.",
    colors: [],
    uxLaws: [],
    features: [],
    problem: "Security-focused websites often appear cluttered or outdated.",
    approach: "Designed a noir-inspired, minimal login page with strong contrast, glowing blue accents, and a clean layout for trust.",
    outcome: "A modern, sleek login interface emphasizing confidentiality and precision.",
    prototypeDesc: "Includes: Sliding login modal, Password visibility toggle, Form validation interactions, Thematic background transitions",
    link: "https://www.figma.com/proto/Zus3BfYiOB2NRTIbeyXvXo/Web-UI-for-Private-detective-agency?node-id=1-2&t=7Jcg2ZKR9Uxo88Oy-1"
  },
  {
    id: 4,
    title: "KRYPTO – NFT Marketplace Website UI",
    subtitle: "NFT Marketplace",
    role: "UI/UX Designer",
    tools: ["Figma"],
    type: "Web UI",
    image: krypto,
    overview: "KRYPTO is a conceptual NFT marketplace emphasizing simplicity, trust, and modern digital aesthetics. The site uses neon-inspired gradients and glassmorphism for a futuristic feel.",
    intent: "To build visual trust by blending editorial layout with creative NFT aesthetics while avoiding the typical “over futuristic” clutter seen in crypto sites.",
    colors: [], 
    uxLaws: [
      { name: "Similarity", desc: "Uniform cards" },
      { name: "Common Region", desc: "Structured sections" },
      { name: "Peak-End Rule", desc: "Strong closing CTA" }
    ],
    features: [],
    problem: "NFT platforms appear overly technical and overwhelming.",
    approach: "Introduced a calming purple-blue gradient palette, strong hierarchy, simple CTAs, and uniform card designs to reduce cognitive load.",
    outcome: "A friendly NFT marketplace interface featuring analytics, testimonials, and a clean buying/selling flow.",
    prototypeDesc: "Features: Glassmorphic card hover effects, Testimonial slider, Dual CTA interaction (Buy/Sell), Section transitions",
    link: "https://www.figma.com/proto/kGJa4HpRYfNNVdvuH1FMwB/Krypto?node-id=19-131&t=dtcmH8jVuojuefOW-1"
  },
  {
    id: 6,
    title: "Floating Curved Bottom Navigation",
    subtitle: "Component Design & Interaction",
    role: "UI/UX Designer",
    tools: ["Figma", "Prototyping"],
    type: "Component Design • Interaction",
    image: finalNavBar,
    overview: "This project explores a modern, fluid, floating bottom navigation bar designed for high-engagement mobile apps. The goal was to rethink the traditional flat bar and create a more tactile, expressive component using elevation, curvature, and color emphasis.",
    intent: "The final navigation bar features a dynamic scoop curve, expressive icon states, and elevated active feedback — giving users a sense of physical touch and micro-movement.",
    colors: [
      { name: "Base Surface", hex: "#000000" },
      { name: "Active Spotlight", hex: "#F2F2F2" },
      { name: "Home Active", hex: "#FF4D4D" },
      { name: "Discover Active", hex: "#FF9A23" },
      { name: "Settings Active", hex: "#597AFF" }
    ],
    uxLaws: [
      { name: "Fitts’s Law", desc: "Icons are sized for easy thumb reach and quick tap targets." },
      { name: "Hick’s Law", desc: "Only three core actions → reduces decision time." },
      { name: "Law of Focused Attention", desc: "Spotlight and elevation ensure the active tab is always unmistakably visible." },
      { name: "Aesthetic–Usability Effect", desc: "Smooth curves + depth increase perceived quality and trust." },
      { name: "Von Restorff Effect", desc: "Active icon is visually isolated using color, elevation, and shape." }
    ],
    features: [
      "Curved Scoop for Active State",
      "High-Contrast Icon Fill (Red, Orange, Blue)",
      "Dark Base Bar for floating illusion",
      "Circular Spotlight Behind Active Icon"
    ],
    problem: "Most bottom navigation bars follow static, flat patterns. They fail to highlight the active state clearly, provide visual depth, or support expressive, animated affordances.",
    approach: "A curved, floating navigation bar that places the active icon inside a raised, spotlight-like container. This creates strong active-state feedback and better visual affordance.",
    outcome: "A modern replacement for traditional flat navigation bars. The concept uses elevation, spotlighting, and micro-curvature to highlight the selected icon in a memorable, tactile way.",
    prototypeDesc: "Animated button with two animation combined in a bottom single nav bar.",
    link: "https://www.figma.com/proto/Rj5xxEVPo0ZgcObNx5ZgpL/Menu--Animated-?node-id=0-1&t=TUkNiPbF3a6HMGmU-1"
  },
  {
    id: 3,
    title: "EV-B Electric Bike Launch",
    subtitle: "Landing Page UI",
    role: "UI/UX Designer",
    tools: ["Figma"],
    type: "Landing Page • Product UI",
    image: evBike,
    overview: "EV-B is a modern electric bike brand concept. The website focuses on futuristic typography, bold imagery, and a clean, breathable layout that reflects the modernity of electric vehicles.",
    intent: "The goal was to create a premium, light-weight, and tech-forward design that appeals to early adopters and EV enthusiasts.",
    colors: [
      { name: "Mint Green", hex: "#CCF5F1" },
      { name: "Black", hex: "#0E0E0E" },
      { name: "Pure White", hex: "#FFFFFF" }
    ],
    uxLaws: [
      { name: "Doherty Threshold", desc: "Quick transitions and smooth animations keep the page feeling responsive." },
      { name: "Law of Prägnanz", desc: "Simple, strong shapes and bold hero typography deliver an immediate message." },
      { name: "F-Shaped Reading", desc: "Specs, name, and CTA placed in a perfect scanning pattern." },
      { name: "Serial Position Effect", desc: "Key selling points placed at the beginning and end of scroll." }
    ],
    features: [
      "Hero with product showcase",
      "Specs section (speed, range, charge time)",
      "Navigation layout with airy spacing",
      "Pre-order CTA",
      "Slider navigation for product gallery"
    ],
    problem: "EV websites often feel either too technical or too flashy. I aimed for a balanced, premium, and clean approach.",
    approach: "Designed a hero section featuring a bold product render, paired with clear specs and a modern gradient theme. Applied Hick’s Law and Fitts’s Law for faster actions.",
    outcome: "A clean, futuristic landing page with strong visual focus, minimal navigation, and an effective pre-order call-to-action.",
    prototypeDesc: "Includes: Hero animations, Slide-based product showcase, Hover transitions on specs, Responsive layout behavior, Pre-order button transitions",
    link: "https://www.figma.com/proto/3jml72b2v4tLGZB5BBYFQA/E-bike-launch-Web-UI-Design?node-id=12-2&t=La9rLxNJLrICciOj-1"
  },
  {
    id: 1,
    title: "Proxima AI – Chatbot Mobile UI",
    subtitle: "Dynamic Prototype",
    role: "UI/UX Designer",
    tools: ["Figma", "Auto-Layout"],
    type: "Mobile App • Prototyping • Visual Design",
    image: proximaCover,
    overview: "Proxima AI is a mobile-first conversational assistant designed to feel personal, calm, and visually smooth. The interface blends gradient-driven depth with minimal interaction friction, focusing on clarity and ease of use.",
    intent: "My goal was to create a dynamic system that welcomes the user, adapts visually to context, and reduces cognitive load while maintaining a futuristic yet friendly feel.",
    colors: [
      { name: "Electric Blue", hex: "#5B84FF" },
      { name: "Midnight Black", hex: "#0D0D0F" },
      { name: "Soft White", hex: "#F7F7F7" }
    ],
    uxLaws: [
      { name: "Von Restorff Effect", desc: "Primary actions like Get Started appear in eye-catching blue." },
      { name: "Hick’s Law", desc: "Minimal choices on home screen → quicker decision-making." },
      { name: "Fitts’s Law", desc: "Large, thumb-friendly CTA buttons for mobile use." },
      { name: "Aesthetic–Usability Effect", desc: "Smooth gradients and clean spacing make the system feel trustworthy and effortless." }
    ],
    features: [
      "Designed onboarding screens",
      "Built conversation interface",
      "Created quick-action tiles for prompts",
      "Added user profile and global navigation",
      "Introduced content cards with imagery & link previews"
    ],
    problem: "Most chatbots feel generic and transactional. I wanted to design a personal, modern, and dynamic chatbot experience with emotional warmth.",
    approach: "Using structured UX processes, I first built wireframes to define layout, grouping, and hierarchy. Then I moved into high-fidelity screens using gradients, spacing systems, and large typography.",
    outcome: "A polished, modern mobile experience with onboarding screens, conversation UI, prompt utilities, histories, and a cohesive visual identity.",
    prototypeDesc: "A fully interactive flow showcasing: Swipe-based onboarding, Smooth CTA transitions, Chat animations, Image/card responses, Prompt input interactions, Menu + settings animations",
    link: "https://www.figma.com/proto/vl7aGphaZFhsovZPqoPL4g/Chatbot-UI-%E2%80%93-Dynamic-Prototype-for-AI-Interfaces--BY-SHASHANK-?node-id=2343-347&t=m5Ao5yIx49Q5Be2e-1"
  },
  {
    id: 2,
    title: "Proxima AI – Conversation Screens",
    subtitle: "Extended UI",
    role: "UI/UX Designer",
    tools: ["Figma"],
    type: "Mobile App • Extended UI",
    image: proximaExtended,
    overview: "The extended screens showcase practical interaction sequences—user messages, AI responses, image suggestions, and prompt utilities.",
    intent: "The objective was to maintain continuity with the splash and home screens while ensuring message content remains the main visual focus. A neutral dark background enhances media, text, and action buttons.",
    colors: [
      { name: "Deep Blue → Black Gradient", hex: "gradient" },
      { name: "Neutral Gray", hex: "#1A1A1A" }
    ],
    uxLaws: [
      { name: "Progressive Disclosure", desc: "Hidden quick prompts, expandable menus." },
      { name: "Law of Proximity", desc: "Grouped engagement controls—like, dislike, share—near the response." },
      { name: "Miller’s Law", desc: "Chunked information (image, text, links)." },
      { name: "Jakob’s Law", desc: "Familiar chat app structure = instant usability." }
    ],
    features: [
      "AI response cards",
      "Scrollable conversation thread",
      "Image preview card with link",
      "User prompt field with multiple input modes (mic, upload, camera, text)"
    ],
    problem: "AI responses often look cluttered or disorganized.",
    approach: "Designed modular cards for images, text, and links. Created response actions grouped using the Law of Proximity. Integrated a clean navigation drawer for user settings.",
    outcome: "A complete conversation flow with visuals, prompts, sentiment actions, and a seamless dark-mode interface."
  }
];

export const profile = {
  name: "Shashank Shekhar",
  role: "UI/UX & Product Designer",
  bio: "I’m a UI/UX and Product Designer based in India, currently pursuing my B.Tech in Civil Engineering at MNNIT Allahabad. My work blends visual design, usability principles, and system thinking to craft pixel-sharp, conversion-driven interfaces.",
  about: "I’m Shashank Shekhar, a Civil Engineering undergrad at MNNIT Allahabad with a deep passion for UI/UX Design, Product Design, and Digital Branding. My work focuses on creating clean, modern, intuitive interfaces using UX laws, strong typographic systems, and meaningful visuals.\n\nI’ve led cross-functional teams, designed scalable digital systems, mentored students, and worked on brand-aligned layouts that significantly improved reach and engagement.",
  skills: {
    tools: ["Figma", "Framer", "Auto-Layout", "Component Libraries", "Wireframing", "Prototyping"],
    soft: ["Collaboration", "UX Thinking", "System Design", "Visual Communication", "Storytelling"],
    coursework: ["Microsoft Power BI", "NumPy & Pandas (Data Analysis)"]
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/shekhar-mnnit",
    github: "https://github.com/shashank-mnnit",
    twitter: "https://x.com/Shashank_NIT",
    resume: "https://drive.google.com/drive/folders/1-xhUv6YVe31VHaPlrvVgoEHsStfDN98y?usp=sharing",
    email: "shekhar.mnnit26@gmail.com"
  }
};
