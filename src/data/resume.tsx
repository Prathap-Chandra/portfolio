import { Icons } from "@/components/icons";
import { image, video } from "framer-motion/client";
import { HomeIcon, NotebookIcon } from "lucide-react";

const calculateExperience = () => {
  const startDate = new Date("2019-01-01");
  const currentDate = new Date();
  const experience = currentDate.getFullYear() - startDate.getFullYear();
  return experience;
}

export const DATA = {
  name: "Prathap Chandra",
  initials: "DV",
  url: "https://prathapchandra.com",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/hyderabad",
  description: `${calculateExperience()} years of experience in designing and implementing scalable backend systems. Specializing in high-performance APIs, database optimization, and cloud infrastructure. Currently working as a Lead SDE at Freecharge.`,
  summary:
    "Born and raised in Hyderabad, India, I pursued a **Bachelor's degree** in **Computer Science and Engineering** from Vignan Institute of Technology and Sciences. The book [**How I Braved Anu Aunty and Co-Founded A Million Dollar Company**](https://www.goodreads.com/book/show/14347714-how-i-braved-anu-aunty-co-founded-a-million-dollar-company?ref=nav_sb_ss_1_17) by **Varun Agarwal** and the movie [**The Social Network**](https://www.imdb.com/title/tt1285016/) by **David Fincher** sparked my interest in coding and product development. I had the privilege of playing a key role in organizing Hyderabad's first [**FOSS United**](https://fossunited.org/) event. I enjoy building products and exploring new technologies and ideas. I can watch [**Silicon Valley**](https://www.imdb.com/title/tt2575988/) by **Mike Judge** over and over again.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Node.js",
    "Python",
    "Go",
    "React",
    "Vue",
    "Next.js",
    "Typescript",
    "Postgres",
    "SQLite",
    "Redis",
    "Qdrant",
    "Neo4j",
    "Docker",
    "Terraform",
    "AWS",
    "Machine Learning",
    // "Neural Networks",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "prathap.chandra.754@gmail.com",
    // tel: "+91 9000000000",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prathapchandra/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/prathap_moola",
        icon: Icons.x,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Prathap-Chandra",
        icon: Icons.github,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://prathap-chandra.medium.com/",
        icon: Icons.medium,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/prathap_chandra",
        icon: Icons.instagram,
        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://www.youtube.com/@prathap-chandra",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:prathap.chandra.754@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Freecharge DBAT - Axis Bank",
      href: "https://www.freecharge.in/",
      badges: [],
      location: "Mumbai, India - Remote",
      title: "Lead SDE",
      logoUrl: "/companies/freecharge.svg",
      start: "May 2024",
      end: "Present",
      description: "Currently leading a team responsible for the development of a overdraft product.",
    },
    {
      company: "CAW Studios",
      badges: [],
      href: "https://www.cawstudios.com/",
      location: "Hyderabad, India - Remote",
      title: "SDE II",
      logoUrl: "/companies/caw-1.png",
      start: "June 2022",
      end: "May 2024",
      description:
        " Implemented Outlook Actionable Mails and Actionable Mobile Pages (Gmail), integrating comprehensive help desk functionalities directly within users mailboxes resulting in a 3x increase in sales conversion. Developed an application enabling developers to select repositories, branches, and custom configurations for deployment, automating Docker container creation. Led the development of a robust integration system in Node.js from the ground up, serving as a critical intermediary between client applications and the main backend server. Optimized system performance by analyzing and refining database queries, significantly boosting read and write efficiency by 60%",
    },
    {
      company: "Shipsy",
      href: "https://shipsy.io/",
      badges: [],
      location: "Gurugram, India - Remote",
      title: "Software Engineer",
      logoUrl: "/companies/shipsy-2.png",
      start: "June 2021",
      end: "June 2022",
      description:
        "Worked on logistics and supply chain management solutions for warehouses.",
    },
    {
      company: "2gethr",
      href: "https://www.2gethr.com/",
      badges: [],
      location: "Bangalore, India - Remote",
      title: "Software Engineer",
      logoUrl: "/companies/2gethr.jpg",
      start: "May 2020",
      end: "June 2021",
      description:
        "At 2gethr, I took on significant development projects that showcased my full-stack and cloud capabilities. I was responsible for building an entire real-time chat application from the ground up using Node.js and socket.io and was responsible for deploying it to production. To streamline our development process, I automated code deployment using Bitbucket Pipelines, enhancing our team's efficiency. Additionally, I developed the backend for an automated Invoice Generation system for a co-working space's clients, utilizing Node.js, AWS, and MongoDB. This project highlighted my skills in creating robust, scalable backend solutions and working with cloud technologies.",
    },
    {
      company: "Yellow.ai",
      href: "https://yellow.ai/",
      badges: [],
      location: "Bangalore, India - Remote",
      title: "Software Engineer",
      logoUrl: "/companies/yellow-ai-1.jpeg",
      start: "June 2019",
      end: "March 2020",
      description: "During my time as a Software Engineer at Yellow.ai, I focused on enhancing chatbot capabilities through advanced NLP techniques. I fine-tuned entity extraction and intent classification models for various use cases, using Word2Vec, BERT and other Models. My work extended to building document-based chat systems using vector embeddings and databases. I also expanded our chatbot's reach by deploying interactive bots to Microsoft Teams using App Studio. This initiative broadened our support beyond web platforms. Additionally, I designed and developed visually appealing, responsive Adaptive Cards, creating cross-platform UI components within the Microsoft ecosystem. These efforts significantly improved user engagement and the overall chatbot experience across multiple platforms.",
    },
    {
      company: "Yellow.ai",
      href: "https://yellow.ai/",
      badges: [],
      location: "Bangalore, India - Remote",
      title: "Software Engineer Intern",
      logoUrl: "/companies/yellow-ai-1.jpeg",
      start: "January 2019",
      end: "June 2019",
      description:
        "During my internship at Yellow.ai, I built chatbots for various HR use cases like scheduling meetings, searching employee information, checking payroll data, and other HR-related tasks using Yellow Messenger's BotPlatform.io. This experience allowed me to gain hands-on knowledge in chatbot development and understand the practical applications of conversational AI in streamlining HR processes.",
    },
  ],
  education: [
    {
      school: "Vignan's Institute of Information Technology",
      href: "https://www.vignan.ac.in/",
      degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      logoUrl: "/education/vignan.png",
      start: "2015",
      end: "2019",
    },
    {
      school: "Narayana Junior College",
      href: "https://www.narayanagroup.com/",
      degree: "Higher Secondary Education (12th Standard)",
      logoUrl: "/education/narayana.avif",
      start: "2013",
      end: "2015",
    },
    {
      school: "Bhashyam Public School",
      href: "https://www.bhashyam.in/",
      degree: "Secondary School Certificate (10th Standard)",
      logoUrl: "/education/bhashyam-2.png",
      start: "2008",
      end: "2013",
    },
  ],
  projects: [
    {
      title: "Vector Databases",
      href: "https://www.canva.com/design/DAGLzPSr7Sg/Dfl686fOHzhXJAYD2qQTMw/view?embed",
      dates: "22nd June 2024",
      location: "Plane.so, Hitech City, Hyderabad, India",
      active: true,
      description:
        "In this blog series, I've explained how vectors drive modern AI systems, powering everything from recommendation engines to advanced search. I break down complex concepts, showing how text, images, and audio are transformed into data through vector embeddings, with practical insights for implementation",
      technologies: [
        "AI-powered Search",
        "Machine Learning (ML)",
        "Vector Databases",
        "Vector Embeddings",
        "Recommendation Engines",
        "Neural Networks",
        "Image Similarity Search",
        "Audio Processing",
        "Large Language Models (LLMs)",
        "Qdrant",
      ],
      links: [
        {
          type: "Canva Presentation",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.canva.com/design/DAGLzPSr7Sg/Dfl686fOHzhXJAYD2qQTMw/view?embed",
        },
        {
          type: "Source Code",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Prathap-Chandra/vector-search-blog-code",
        },
        {
          type: "Blog Part - 1",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "https://medium.com/gitconnected/the-big-bang-theory-of-ai-exploding-with-vectors-part-1-dc47f40e5bd8?sk=102c1898b577ba23784ae0a512dadd4d",
        },
        {
          type: "Blog Part - 2",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "https://levelup.gitconnected.com/the-big-bang-theory-of-ai-exploding-with-vectors-part-2-c996b82c8f56?sk=5955069823f870b2b4b9bb2add65b80c",
        },
        {
          type: "Blog Part - 3",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "https://levelup.gitconnected.com/the-big-bang-theory-of-ai-exploding-with-vectors-part-3-55bdb09966fb?sk=93e2cfa8e046806835f2d419b19e756b",
        },
        {
          type: "LinkedIn",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/fossunited-hyd_foss-fossunited-hyderabad-activity-7209218619459686400-giT-?utm_source=share&utm_medium=member_desktop",
        },
      ],
      canvaEmbed: "https://www.canva.com/design/DAGLzPSr7Sg/Dfl686fOHzhXJAYD2qQTMw/view?embed",
    },
    {
      title: "The Power of PostgreSQL",
      href: "https://www.canva.com/design/DAFvPKku2H8/eApq9k9qphVwGJ8LqcgfGQ/view?embed",
      dates: "23rd September 2023",
      location: "CAW Studios, Gachibowli, Hyderabad, India",
      active: true,
      description:
        "In this talk, I explore PostgreSQL’s MVCC mechanism and its impact on database performance, demonstrating how updates create new rows and discussing solutions like VACUUM to manage storage bloat efficiently. Additionally, I highlight PostgreSQL's approach to concurrency, showing how it differs from MySQL to ensure smooth multi-user operations.",
      technologies: [
        "PostgreSQL",
        "MVCC (Multi-Version Concurrency Control)",
        "Database Performance",
        "Dead Tuples",
        "Bloat Management",
        "VACUUM",
        "Storage Optimization",
        "Index Bloat",
        "Query Performance",
        "Toast Tables",
        "Query Optimization",
        "Auto-Vacuum"
      ],
      links: [
        {
          type: "Canva Presentation",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.canva.com/design/DAFvPKku2H8/eApq9k9qphVwGJ8LqcgfGQ/view?embed",
        },
        {
          type: "Youtube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/74x_PWo3s48?t=480",
        },
        {
          type: "LinkedIn",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/fossunited-hyd_hyderabad-meetup-rsvp-october-activity-7112111220383481856-Rw38?utm_source=share&utm_medium=member_desktop",
        },
        {
          type: "Blog Part - 1",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "https://medium.com/gitconnected/connection-pooling-in-postgresql-b01cdc92f7f9?sk=7c9c0f630b2106e4f2a912dc4c165c97",
        },
        {
          type: "Blog Part - 2",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "https://medium.com/gitconnected/unleashing-the-beast-postgresqls-epic-battle-for-speed-4519dfe5d95b?sk=12c67284e18a7f68665948d94163d969",
        },
      ],
      canvaEmbed: "https://www.canva.com/design/DAFvPKku2H8/eApq9k9qphVwGJ8LqcgfGQ/view?embed",
    },
    {
      title: "Chatbot Development",
      href: "https://www.canva.com/design/DAGPCiIPT0A/pZX8UfPBiMk_W_UOam3VBw/view?embed",
      dates: "23rd September 2023",
      location: "Freecharge (DBAT), Mumbai, India",
      active: true,
      description:
        "In this talk, I delve into building intelligent chatbots using entity extraction and intent recognition techniques. I explore tools like Duckling and spaCy to interpret user inputs, demonstrating how they extract meaningful information and recognize intent to deliver precise, context-aware responses.",
      technologies: [
        "Chatbots",
        "Entity Extraction",
        "Intent Recognition",
        "Duckling",
        "spaCy",
        "Python",
        "NLP",
        "Named Entity Recognition (NER)",
        "AI-powered Conversations",
        "Machine Learning Models",
        "Conversational AI",
        "Natural Language Processing (NLP)",
        "Pre-trained Models",
      ],
      links: [
        {
          type: "Canva Presentation",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.canva.com/design/DAGPCiIPT0A/pZX8UfPBiMk_W_UOam3VBw/view?embed",
        },
      ],
      canvaEmbed: "https://www.canva.com/design/DAGPCiIPT0A/pZX8UfPBiMk_W_UOam3VBw/view?embed",
    },
    {
      title: "Load balancing using Nginx",
      href: "https://medium.com/codex/load-balancing-with-nginx-7d1bb4c24d5d?sk=408a77f628eef6a90939e7744fd5d5af",
      // dates: "23rd September 2023",
      // location: "Freecharge (DBAT), Mumbai, India",
      active: true,
      description:
        "In this blog, I explore the power of NGINX as a load balancer at the application layer. I demonstrate how to configure multiple servers with NGINX to achieve efficient request distribution using methods like round-robin, least connections, and IP hash, while also touching on key features such as server slow-start and weighted balancing for optimized performance.",
      technologies: [
        "Nginx",
        "Load Balancing",
        "Application Layer",
        "Round-robin",
        "Least Connections",
        "IP Hash",
        "Server Slow-start",
        "Weighted Balancing",
        "Nginx Configuration"
      ],
      image: "/others/nginx-load-balancer.png",
      links: [
        {
          type: "Medium",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "https://medium.com/codex/load-balancing-with-nginx-7d1bb4c24d5d?sk=408a77f628eef6a90939e7744fd5d5af",
        },
      ],
    },
  ],
  hackathons: [
    {
      title: "FOSS United Hyderabad",
      dates: "22nd June 2024",
      location: "Plane.so, Hitech City, Hyderabad, India",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image: "./others/foss-hyd.png",
      links: [
        {
          title: "LinkedIn",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/fossunited-hyd_foss-fossunited-hyderabad-activity-7209218619459686400-giT-?utm_source=share&utm_medium=member_desktop",
        },
        {
          title: "Presentation",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.canva.com/design/DAGLzPSr7Sg/Dfl686fOHzhXJAYD2qQTMw/view?embed",
        },
        {
          title: "Source Code",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Prathap-Chandra/vector-search-blog-code",
        },
        {
          title: "Medium",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "https://medium.com/gitconnected/the-big-bang-theory-of-ai-exploding-with-vectors-part-1-dc47f40e5bd8?sk=102c1898b577ba23784ae0a512dadd4d",
        },
        {
          title: "Medium",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "https://levelup.gitconnected.com/the-big-bang-theory-of-ai-exploding-with-vectors-part-2-c996b82c8f56?sk=5955069823f870b2b4b9bb2add65b80c",
        },
        {
          title: "Medium",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "https://levelup.gitconnected.com/the-big-bang-theory-of-ai-exploding-with-vectors-part-3-55bdb09966fb?sk=93e2cfa8e046806835f2d419b19e756b",
        },
      ],
    },
    {
      title: "FOSS United Hyderabad",
      dates: "23rd September 2023",
      location: "CAW Studios, Gachibowli, Hyderabad, India",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image: "./others/foss-hyd.png",
      links: [
        {
          title: "LinkedIn",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/fossunited-hyd_hyderabad-meetup-rsvp-october-activity-7112111220383481856-Rw38?utm_source=share&utm_medium=member_desktop",
        },
        {
          title: "Medium",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "https://medium.com/gitconnected/connection-pooling-in-postgresql-b01cdc92f7f9?sk=7c9c0f630b2106e4f2a912dc4c165c97",
        },
        {
          title: "Presentation",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.canva.com/design/DAFvPKku2H8/eApq9k9qphVwGJ8LqcgfGQ/view?embed",
        },
      ],
    },
  ],
} as const;