import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  Code, 
  Database, 
  Terminal, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  User, 
  Send, 
  Sparkles, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Award, 
  Globe, 
  Layers, 
  Copy, 
  Smartphone,
  Eye
} from 'lucide-react';
import BlurText from './components/BlurText';
import FoldText from './components/FoldText';
import GooeyNav from './components/GooeyNav';
import ElectricBorder from './components/ElectricBorder';
import SpotlightCard from './components/SpotlightCard';
import TargetCursor from './components/TargetCursor';


// Resume Data Constants strictly from uploaded resume
const RESUME_DATA = {
  name: "JAYA SANJU",
  title: "AI & Data Science Student | Full-Stack & Web Developer",
  location: "Coimbatore - 641107, Tamil Nadu, India",
  phone: "+917826979447",
  email: "jayasanju27@gmail.com",
  github: "https://github.com/jayasanju27",
  linkedin: "https://www.linkedin.com/in/jaya-sanju-1237b632b",
  summary: "B.Tech student specializing in Artificial Intelligence and Data Science with hands-on project experience in web development and responsive website engineering. Eager to contribute to real-world solutions through technical skills and practical projects.",

  skills: [
    { category: "Languages & Core Skills", items: ["Python", "Java", "HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"] },
    { category: "Databases", items: ["Supabase", "PostgreSQL"] },
    { category: "Tools & Frameworks", items: ["VS Code", "Google Colab", "Canva", "Git"] },
    { category: "Deployment", items: ["Vercel"] },
    { category: "Languages Known", items: ["English (Fluent)", "Tamil (Native)"] }
  ],

  experience: [
    {
      role: "Web Development & Responsive Website Intern",
      company: "IT NANBRAGAL",
      period: "10.06.2025 - 10.07.2025",
      type: "Internship",
      details: [
        "Completed hands-on internship focused on enhancing full-stack and web development skills.",
        "Built responsive web user interfaces adhering to modern UI/UX principles and mobile adaptability.",
        "Collaborated on practical front-end engineering tasks and website optimization."
      ]
    }
  ],

  projects: [
    {
      title: "Smartphone E-Commerce Platform",
      subtitle: "Full-Stack Web Shopping Application",
      period: "2025",
      tags: ["React.js", "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel"],
      description: "Developed a comprehensive responsive smartphone shopping platform with interactive browsing, searching, live product comparisons, wishlist management, cart system, multi-step checkout, user authentication, and Supabase database integration.",
      features: [
        "Product Browsing & Smart Search",
        "Live Smartphone Spec Comparison Engine",
        "Interactive Wishlist & Shopping Cart Management",
        "Supabase Auth & Database Integration",
        "Seamless Multi-Step Checkout Flow",
        "Fully Responsive Mobile-First Interface"
      ],
      githubUrl: "#",
      liveUrl: "https://smartstore-app-kappa.vercel.app/"
    }
  ],

  education: [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      institution: "Info Institute of Engineering (Anna University affiliated)",
      period: "2024 – 2028",
      cgpa: "7.0 / 10 Approx (Cumulative)",
      highlights: [
        "Specializing in Machine Learning, Python Programming, and Data Structures.",
        "Active involvement in web development and software engineering projects.",
        "Affiliated with Anna University, Chennai."
      ]
    }
  ]
};

// Custom Three.js 3D Background Component
const ThreeDCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let renderer, scene, camera;
    let particleSystem, wireframeSphere, torusRing;
    let mouseX = 0, mouseY = 0;

    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Load Three.js dynamically if not present
    const initThree = () => {
      const THREE = window.THREE;
      if (!THREE) return;

      const width = currentMount.clientWidth || window.innerWidth;
      const height = currentMount.clientHeight || window.innerHeight;

      // Scene Setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.z = 30;

      // Renderer Setup
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      currentMount.appendChild(renderer.domElement);

      // Create Floating Particle Field
      const particleCount = 1200;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const color1 = new THREE.Color(0x3b82f6); // Indigo / Cyan
      const color2 = new THREE.Color(0x8b5cf6); // Purple / Violet

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 80;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

        const mixedColor = color1.clone().lerp(color2, Math.random());
        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.18,
        vertexColors: true,
        transparent: true,
        opacity: 0.7
      });

      particleSystem = new THREE.Points(geometry, particleMaterial);
      scene.add(particleSystem);

      // Create Futuristic Central 3D Icosahedron Core
      const sphereGeo = new THREE.IcosahedronGeometry(10, 2);
      const sphereMat = new THREE.MeshBasicMaterial({
        color: 0x6366f1,
        wireframe: true,
        transparent: true,
        opacity: 0.25
      });
      wireframeSphere = new THREE.Mesh(sphereGeo, sphereMat);
      scene.add(wireframeSphere);

      // Orbiting Glowing Torus Ring
      const torusGeo = new THREE.TorusGeometry(14, 0.2, 16, 100);
      const torusMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      });
      torusRing = new THREE.Mesh(torusGeo, torusMat);
      torusRing.rotation.x = Math.PI / 3;
      scene.add(torusRing);

      // Handle Mouse Move
      const handleMouseMove = (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Handle Resize
      const handleResize = () => {
        if (!currentMount) return;
        const w = currentMount.clientWidth || window.innerWidth;
        const h = currentMount.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener('resize', handleResize);

      // Animation Loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Rotate Objects
        if (particleSystem) {
          particleSystem.rotation.y += 0.0008;
          particleSystem.rotation.x += 0.0004;
        }

        if (wireframeSphere) {
          wireframeSphere.rotation.y += 0.003;
          wireframeSphere.rotation.x += 0.002;
          wireframeSphere.position.x += (mouseX * 4 - wireframeSphere.position.x) * 0.05;
          wireframeSphere.position.y += (-mouseY * 4 - wireframeSphere.position.y) * 0.05;
        }

        if (torusRing) {
          torusRing.rotation.z += 0.005;
          torusRing.rotation.y += 0.002;
        }

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    };

    // Load Script if Three is not on window
    if (!window.THREE) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      script.async = true;
      script.onload = () => initThree();
      document.body.appendChild(script);
    } else {
      initThree();
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (renderer && renderer.domElement && currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Dynamic Typing Effect
  useEffect(() => {
    const roles = [
      "AI & Data Science Specialist",
      "Full-Stack Web Developer",
      "React.js & Tailwind Specialist",
      "Python & Java Programmer"
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      const currentRole = roles[roleIdx];
      if (isDeleting) {
        setTypedText(currentRole.substring(0, charIdx - 1));
        charIdx--;
      } else {
        setTypedText(currentRole.substring(0, charIdx + 1));
        charIdx++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIdx === currentRole.length) {
        speed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        speed = 500;
      }

      timer = setTimeout(type, speed);
    };

    timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, []);

  // Download Resume Function
  const handleDownloadResume = () => {
    const resumeText = `====================================================
${RESUME_DATA.name}
${RESUME_DATA.location} | Phone: ${RESUME_DATA.phone} | Email: ${RESUME_DATA.email}
====================================================

SUMMARY
${RESUME_DATA.summary}

WORK EXPERIENCE
${RESUME_DATA.experience.map(e => `
Role: ${e.role}
Company: ${e.company} (${e.period})
Key Details:
${e.details.map(d => ` • ${d}`).join('\n')}
`).join('\n')}

PROJECTS
${RESUME_DATA.projects.map(p => `
Project: ${p.title} (${p.subtitle})
Technologies: ${p.tags.join(', ')}
Description: ${p.description}
Key Features:
${p.features.map(f => ` • ${f}`).join('\n')}
`).join('\n')}

SKILLS
${RESUME_DATA.skills.map(s => `${s.category}: ${s.items.join(', ')}`).join('\n')}

EDUCATION
${RESUME_DATA.education.map(ed => `
Degree: ${ed.degree}
Institution: ${ed.institution} (${ed.period})
Academic Performance: CGPA ${ed.cgpa}
`).join('\n')}
`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Jaya_Sanju_Resume.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyContact = (text) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* 3D WebGL Background Canvas */}
      <ThreeDCanvas />



      {/* Target Lock Cursor Effect */}
      <TargetCursor 
        spinDuration={4}
        hideDefaultCursor={true}
        parallaxOn={true}
        cursorColor="#22d3ee"
        cursorColorOnTarget="#6366f1"
        targetSelector="a, button, .cursor-target"
      />

      {/* Decorative Glow Elements */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation Bar */}
      <GooeyNav
        items={navLinks.map(link => ({
          label: link.label,
          href: `#${link.id}`
        }))}
        activeHref={`#${activeSection}`}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />

      <main className="relative z-10 pt-20">
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column - Hero Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Available for Opportunities & Projects</span>
              </div>

              <div className="space-y-3">
                <div className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                  <BlurText
                    text="Hi, I'm"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    as="h1"
                    className="text-white mb-2"
                  />
                  <BlurText
                    text={RESUME_DATA.name}
                    delay={150}
                    animateBy="words"
                    direction="bottom"
                    as="div"
                    className="leading-normal py-1"
                    childClassName="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500"
                  />
                </div>

                <div className="h-10 text-xl sm:text-2xl font-medium text-slate-300 flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-cyan-400 font-mono">&gt;</span>
                  <span>{typedText}</span>
                  <span className="w-2 h-6 bg-cyan-400 animate-pulse inline-block"></span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {RESUME_DATA.summary}
              </p>

              {/* Action CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#projects"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Eye className="w-5 h-5" />
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Send className="w-5 h-5 text-cyan-400" />
                  Get in Touch
                </a>

                <button
                  onClick={handleDownloadResume}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 text-sm font-semibold transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </button>
              </div>

              {/* Quick Info Badges */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Coimbatore, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  <span>Anna University Affiliated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span>CGPA 7.0 / 10</span>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Futuristic 3D Developer Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-md">

                <ElectricBorder
                  color="#22d3ee"
                  speed={0.8}
                  chaos={0.08}
                  borderRadius={16}
                  className="w-full shadow-2xl"
                >
                  <div className="relative bg-transparent p-6 sm:p-8 backdrop-blur-xl space-y-6">

                  {/* Card Header Bar */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-xs font-mono text-slate-500">jaya_sanju_profile.json</span>
                  </div>

                  {/* Profile Image */}
                  <div className="flex flex-col items-center pt-4 pb-2">
                    <div className="relative group/image">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full blur opacity-60 group-hover/image:opacity-100 transition duration-500 animate-pulse"></div>
                      <img
                        src="/profile.jpg"
                        alt="Jaya Sanju"
                        className="relative w-36 h-36 rounded-full object-cover border-4 border-slate-900 shadow-2xl transform group-hover/image:scale-105 transition duration-500"
                      />
                    </div>
                  </div>

                  {/* Code Snippet Styled Profile Details */}
                  <div className="font-mono text-xs sm:text-sm space-y-2 text-slate-300">
                    <p><span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = &#123;</p>
                    <p className="pl-4"><span className="text-cyan-400">name</span>: <span className="text-emerald-300">"{RESUME_DATA.name}"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">degree</span>: <span className="text-emerald-300">"B.Tech AI & DS"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">college</span>: <span className="text-emerald-300">"Info Institute of Engineering"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">location</span>: <span className="text-emerald-300">"Coimbatore - 641107"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">coreTech</span>: [<span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"React.js"</span>, <span className="text-amber-300">"Tailwind"</span>, <span className="text-amber-300">"Supabase"</span>],</p>
                    <p className="pl-4"><span className="text-cyan-400">status</span>: <span className="text-indigo-400">"Actively Coding"</span></p>
                    <p>&#125;;</p>
                  </div>

                  {/* Interactive Quick Links */}
                  <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3">
                    <a
                      href={`mailto:${RESUME_DATA.email}`}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-xs text-slate-300 hover:text-cyan-400 border border-slate-700/50 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="truncate">{RESUME_DATA.email}</span>
                    </a>
                    <a
                      href={`tel:${RESUME_DATA.phone}`}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-xs text-slate-300 hover:text-cyan-400 border border-slate-700/50 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{RESUME_DATA.phone}</span>
                    </a>
                  </div>

                </div>
              </ElectricBorder>
              </div>
            </div>

          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
          <div className="max-w-7xl mx-auto space-y-12">

            <div className="text-center space-y-3">
              <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">Get To Know Me</span>
              <FoldText
                text="About Me"
                splitBy="char"
                hinge="bottom"
                trigger="scroll"
                duration={0.7}
                stagger={0.045}
                fontSize="inherit"
                fontWeight="inherit"
                color="inherit"
                className="text-3xl sm:text-4xl font-extrabold text-white"
              />
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Card 1: AI & DS Focus */}
              <div className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  AI & Data Science Student
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Currently pursuing B.Tech in Artificial Intelligence and Data Science (2024–2028) at Info Institute of Engineering, affiliated with Anna University. Maintaining a cumulative CGPA of ~7.0.
                </p>
              </div>

              {/* Card 2: Full Stack & Responsive Web */}
              <div className="bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  Web Engineering
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Hands-on experience building modern responsive websites, single-page web applications using React.js, Tailwind CSS, Supabase backend databases, and modern deployment tools like Vercel.
                </p>
              </div>

              {/* Card 3: Hands-on Industry Experience */}
              <div className="bg-slate-900/60 border border-slate-800 hover:border-purple-500/50 rounded-2xl p-6 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  Industry Internship
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Completed web development internship at IT Nanbragal, enhancing full-stack capabilities, web UI standard practices, and production web project workflows.
                </p>
              </div>

            </div>

            {/* Language Proficiency Bar */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                Languages Known
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                  <span className="font-semibold text-slate-200">English</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-400 font-mono">Fluent</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                  <span className="font-semibold text-slate-200">Tamil</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-400 font-mono">Native</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50 bg-slate-950/40">
          <div className="max-w-7xl mx-auto space-y-12">

            <div className="text-center space-y-3">
              <span className="text-indigo-400 font-mono text-xs tracking-widest uppercase">Technical Stack</span>
              <FoldText
                text="Skills & Technologies"
                splitBy="char"
                hinge="bottom"
                trigger="scroll"
                duration={0.7}
                stagger={0.03}
                fontSize="inherit"
                fontWeight="inherit"
                color="inherit"
                className="text-3xl sm:text-4xl font-extrabold text-white"
              />
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESUME_DATA.skills.map((skillGroup, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 backdrop-blur-sm space-y-4 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-cyan-400 border border-cyan-500/30">
                      {idx === 0 && <Terminal className="w-5 h-5" />}
                      {idx === 1 && <Database className="w-5 h-5" />}
                      {idx === 2 && <Layers className="w-5 h-5" />}
                      {idx === 3 && <Globe className="w-5 h-5" />}
                      {idx === 4 && <User className="w-5 h-5" />}
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {skillGroup.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {skillGroup.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
          <div className="max-w-7xl mx-auto space-y-12">

            <div className="text-center space-y-3">
              <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">Career Journey</span>
              <FoldText
                text="Work Experience"
                splitBy="char"
                hinge="bottom"
                trigger="scroll"
                duration={0.7}
                stagger={0.035}
                fontSize="inherit"
                fontWeight="inherit"
                color="inherit"
                className="text-3xl sm:text-4xl font-extrabold text-white"
              />
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-transparent">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row items-center group">

                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/30 z-10">
                    <Briefcase className="w-4 h-4" />
                  </div>

                  {/* Experience Card */}
                  <div className="ml-14 md:ml-0 md:w-1/2 md:pr-12 w-full">
                    <div className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-xl space-y-4">

                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <div>
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            {exp.type}
                          </span>
                          <h3 className="text-xl font-extrabold text-white mt-2">
                            {exp.role}
                          </h3>
                        </div>
                        <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                          {exp.period}
                        </span>
                      </div>

                      <div className="text-sm font-bold text-indigo-400">
                        🏢 {exp.company}
                      </div>

                      <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                        {exp.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50 bg-slate-950/40">
          <div className="max-w-7xl mx-auto space-y-12">

            <div className="text-center space-y-3">
              <span className="text-purple-400 font-mono text-xs tracking-widest uppercase">Portfolio Showcase</span>
              <FoldText
                text="Featured Project"
                splitBy="char"
                hinge="bottom"
                trigger="scroll"
                duration={0.7}
                stagger={0.035}
                fontSize="inherit"
                fontWeight="inherit"
                color="inherit"
                className="text-3xl sm:text-4xl font-extrabold text-white"
              />
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              {RESUME_DATA.projects.map((proj, idx) => (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(34, 211, 238, 0.15)"
                  className="p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-6 h-6 text-cyan-400" />
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {proj.title}
                        </h3>
                      </div>
                      <p className="text-sm text-cyan-400 font-mono">{proj.subtitle}</p>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700">
                      {proj.period}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Feature Highlights Grid */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-slate-200 tracking-wider uppercase font-mono">
                      Key Highlights & Functional Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {proj.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-slate-200 tracking-wider uppercase font-mono">
                      Tech Stack Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Buttons */}
                  <div className="pt-4 flex flex-wrap gap-4">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all duration-300"
                    >
                      <Eye className="w-4 h-4" />
                      View Project Details
                    </button>
                  </div>

                </SpotlightCard>
              ))}
            </div>

          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
          <div className="max-w-7xl mx-auto space-y-12">

            <div className="text-center space-y-3">
              <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">Academic Background</span>
              <FoldText
                text="Education"
                splitBy="char"
                hinge="bottom"
                trigger="scroll"
                duration={0.7}
                stagger={0.045}
                fontSize="inherit"
                fontWeight="inherit"
                color="inherit"
                className="text-3xl sm:text-4xl font-extrabold text-white"
              />
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              {RESUME_DATA.education.map((edu, idx) => (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(99, 102, 241, 0.15)"
                  className="p-6 sm:p-8 backdrop-blur-xl hover:border-indigo-500/50 transition-all duration-300 space-y-6 shadow-xl"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800 pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-6 h-6 text-cyan-400" />
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {edu.degree}
                        </h3>
                      </div>
                      <p className="text-indigo-400 font-semibold text-sm">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                        {edu.period}
                      </span>
                      <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                      Academic Highlights
                    </p>
                    <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </SpotlightCard>
              ))}
            </div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50 bg-slate-950/60">
          <div className="max-w-7xl mx-auto space-y-12">

            <div className="text-center space-y-3">
              <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">Get In Touch</span>
              <FoldText
                text="Contact Me"
                splitBy="char"
                hinge="bottom"
                trigger="scroll"
                duration={0.7}
                stagger={0.04}
                fontSize="inherit"
                fontWeight="inherit"
                color="inherit"
                className="text-3xl sm:text-4xl font-extrabold text-white"
              />
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">

              {/* Left Column - Contact Details */}
              <div className="lg:col-span-5 space-y-6">

                <SpotlightCard spotlightColor="rgba(34, 211, 238, 0.15)" className="p-6 sm:p-8 backdrop-blur-xl space-y-6">

                  <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                    Contact Information
                  </h3>

                  <div className="space-y-4">

                    {/* Email Card */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800 group hover:border-cyan-500/40 transition-colors">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] uppercase font-mono text-slate-500">Email Address</span>
                          <a href={`mailto:${RESUME_DATA.email}`} className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 truncate">
                            {RESUME_DATA.email}
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopyContact(RESUME_DATA.email)}
                        className="p-2 text-slate-400 hover:text-cyan-400 transition-colors"
                        title="Copy Email"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Phone Card */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800 group hover:border-emerald-500/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-mono text-slate-500">Phone Number</span>
                          <a href={`tel:${RESUME_DATA.phone}`} className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-400">
                            {RESUME_DATA.phone}
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopyContact(RESUME_DATA.phone)}
                        className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                        title="Copy Phone Number"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Location Card */}
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-mono text-slate-500">Location</span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-200">
                          {RESUME_DATA.location}
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Social Buttons */}
                  <div className="pt-2 border-t border-slate-800 flex items-center gap-3">
                    <a
                      href={RESUME_DATA.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-all text-xs font-semibold"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href={RESUME_DATA.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all text-xs font-semibold"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </div>

                </SpotlightCard>

              </div>

              {/* Right Column - Interactive Form */}
              <div className="lg:col-span-7">
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl">

                  {formSubmitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                      <p className="text-slate-400 text-sm max-w-md mx-auto">
                        Thank you for reaching out, {formState.name || 'Visitor'}. I will review your message and reply as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                        Send Me a Message
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-slate-400">Your Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-200 text-sm"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-slate-400">Your Email *</label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-200 text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-400">Subject</label>
                        <input
                          type="text"
                          placeholder="Project Inquiry / Opportunity"
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-200 text-sm"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-400">Message *</label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Hello Jaya Sanju, I'd like to talk about..."
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-200 text-sm resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </form>
                  )}

                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black">
              JS
            </div>
            <span>© {new Date().getFullYear()} Jaya Sanju. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Back to Top ↑</a>
          </div>
        </div>
      </footer>

      {/* PROJECT MODAL POPUP */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{selectedProject.subtitle}</span>
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-mono text-slate-400 uppercase">Core Platform Features</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {selectedProject.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}