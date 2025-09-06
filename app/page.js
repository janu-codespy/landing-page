"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowRight, BookOpen, Users, Mail, Phone, MapPin, 
  X, CheckCircle, GraduationCap, Globe, Monitor, BarChart3, Target, Brain,
  Calendar, Clock, Star, ArrowUpRight, Award, Play, Lightbulb, Trophy,
  ChevronRight, Quote, TrendingUp, Zap, Shield, Code, PenTool, Briefcase,
  Laptop, Database, Smartphone, Layers, GitBranch, Cpu, Sparkles, Rocket,
  TrendingDown, ChevronDown, Menu, MessageCircle, Video, BookmarkCheck
} from 'lucide-react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -50]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Floating particles animation
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(newParticles);
  }, []);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'courses', 'about', 'success', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const courses = [
    { 
      icon: Code, 
      title: "Full-Stack Web Development", 
      desc: "Master modern web development with React, Node.js, and cloud technologies", 
      duration: "24 weeks", 
      students: "3,850+",
      price: "$599",
      level: "Beginner to Expert",
      tech: ["React", "Node.js", "MongoDB", "AWS"]
    },
    { 
      icon: Brain, 
      title: "AI & Machine Learning", 
      desc: "Build intelligent systems with Python, TensorFlow, and advanced ML algorithms", 
      duration: "20 weeks", 
      students: "2,920+",
      price: "$699",
      level: "Intermediate to Expert",
      tech: ["Python", "TensorFlow", "PyTorch", "OpenAI"]
    },
    { 
      icon: Smartphone, 
      title: "Mobile App Development", 
      desc: "Create native and cross-platform mobile apps for iOS and Android", 
      duration: "18 weeks", 
      students: "2,150+",
      price: "$549",
      level: "Beginner to Advanced",
      tech: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    { 
      icon: Database, 
      title: "Cloud & DevOps Engineering", 
      desc: "Master cloud infrastructure, containers, and automated deployment pipelines", 
      duration: "16 weeks", 
      students: "1,780+",
      price: "$649",
      level: "Intermediate",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"]
    },
  ];

  const testimonials = [
    { 
      name: "Alex Morgan", 
      company: "Meta", 
      role: "Senior Software Engineer", 
      text: "Nipix Technology's Full-Stack program exceeded my expectations. The curriculum is cutting-edge and the mentorship is world-class. I landed my dream job at Meta!",
      avatar: "AM",
      rating: 5,
      salary: "$165K"
    },
    { 
      name: "Priya Sharma", 
      company: "OpenAI", 
      role: "ML Engineer", 
      text: "The AI course at Nipix is phenomenal. The hands-on projects and real-world applications prepared me for complex challenges at OpenAI.",
      avatar: "PS",
      rating: 5,
      salary: "$180K"
    },
    { 
      name: "David Chen", 
      company: "Startup Founder", 
      role: "CTO & Co-founder", 
      text: "After completing the Mobile Development course, I built and launched my own app. It now has 100K+ users and we raised $2M in funding!",
      avatar: "DC",
      rating: 5,
      salary: "Entrepreneur"
    },
  ];

  const features = [
    {
      icon: Laptop,
      title: "Modern Tech Stack",
      desc: "Learn the latest technologies used by top tech companies"
    },
    {
      icon: Users,
      title: "Industry Mentors",
      desc: "1-on-1 guidance from engineers at FAANG companies"
    },
    {
      icon: Layers,
      title: "Project Portfolio",
      desc: "Build 5+ real-world projects for your portfolio"
    },
    {
      icon: Trophy,
      title: "Job Guarantee",
      desc: "100% job placement guarantee or full refund"
    },
    {
      icon: GitBranch,
      title: "Live Collaboration",
      desc: "Work on team projects with real development workflows"
    },
    {
      icon: Cpu,
      title: "Industry Certification",
      desc: "Earn certificates recognized by top tech companies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse opacity-30"></div>
        
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Enhanced Animated Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `linear-gradient(45deg, rgba(59,130,246,0.6), rgba(147,51,234,0.6))`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(59,130,246,0.3)`
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Enhanced Gradient Overlays */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none z-0" />
      
      {/* Ultra-Modern Navigation */}
      <motion.nav 
        className="fixed top-0 w-full bg-black/80 backdrop-blur-2xl border-b border-blue-500/20 z-50 shadow-2xl shadow-blue-500/10"
        style={{ y: headerY }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 shadow-2xl shadow-blue-500/50 ring-2 ring-blue-400/30">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 animate-pulse opacity-75"></div>
                <Image 
                  src="/logo.jpg" 
                  alt="Nipix Technology Logo" 
                  width={48} 
                  height={48}
                  className="relative z-10 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                  Nipix Technology
                </h1>
                <div className="flex items-center space-x-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <p className="text-xs text-gray-300 font-medium">Future-Ready Education</p>
                </div>
              </div>
            </motion.div>
            
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Courses', id: 'courses' },
                { name: 'About', id: 'about' },
                { name: 'Success Stories', id: 'success' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative font-medium transition-all duration-300 px-4 py-2 rounded-lg ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-blue-500/20 shadow-lg shadow-blue-500/25'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-blue-500/10'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            <div className="hidden lg:block">
              <motion.button
                className="group relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold overflow-hidden shadow-2xl shadow-blue-500/25 border border-blue-400/30"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px rgba(6, 182, 212, 0.4)",
                  borderColor: "rgba(6, 182, 212, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-2">
                  <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="tracking-wide">Start Learning</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button 
              className="lg:hidden p-3 rounded-2xl bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/30 backdrop-blur-lg"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="w-6 h-6 text-cyan-400" />
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-2xl border-b border-blue-500/30 shadow-2xl shadow-blue-500/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-6 space-y-2">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'Courses', id: 'courses' },
                  { name: 'About', id: 'about' },
                  { name: 'Success Stories', id: 'success' },
                  { name: 'Contact', id: 'contact' }
                ].map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block py-3 px-4 text-gray-300 hover:text-cyan-400 hover:bg-blue-500/20 font-medium transition-all duration-300 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 rounded-xl font-semibold mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    openModal();
                  }}
                >
                  Start Learning
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center overflow-hidden">
        {/* Advanced Dynamic Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
              x: [0, -40, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto w-full"
          style={{ opacity: heroOpacity }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div 
                className="inline-flex items-center bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full px-6 py-3 mb-8 border border-cyan-400/30 shadow-2xl shadow-cyan-500/25 backdrop-blur-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                <Sparkles className="w-5 h-5 mr-3 text-cyan-400" />
                <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
                  #1 Next-Gen Tech Education Platform
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent leading-tight mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Master{" "}
                <motion.span 
                  className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  Future Tech
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg blur-lg"
                    animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.span>
                Skills Today
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                Join <span className="font-bold text-cyan-400">50,000+</span> students at Nipix Technology and learn cutting-edge programming, AI, and cloud technologies from industry experts. Build real projects, get mentored, and land your dream tech job.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <motion.button
                  className="group relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg overflow-hidden shadow-2xl shadow-cyan-500/25 border border-cyan-400/30"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 25px 50px rgba(6, 182, 212, 0.4)",
                    borderColor: "rgba(6, 182, 212, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleScroll(e, 'courses')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-3">
                    <span className="tracking-wide">Explore Courses</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                </motion.button>
                
                <motion.button
                  className="group border-2 border-cyan-400/50 text-cyan-400 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/40 backdrop-blur-lg bg-cyan-400/10"
                  whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openModal}
                >
                  <div className="flex items-center justify-center space-x-3">
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    <span className="tracking-wide">Free Demo Class</span>
                  </div>
                </motion.button>
              </motion.div>

              <motion.div 
                className="grid grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                {[
                  { number: "50K+", label: "Students Placed", icon: Users },
                  { number: "₹15L", label: "Avg Package", icon: TrendingUp },
                  { number: "98%", label: "Job Success Rate", icon: Award }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all">
                      <stat.icon className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative lg:block hidden"
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Main Card */}
                <motion.div 
                  className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-200/50"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    boxShadow: "0 40px 80px rgba(0,0,0,0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {/* Floating Elements */}
                  <motion.div 
                    className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl"
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Trophy className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <div className="text-center mb-10">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl overflow-hidden mx-auto mb-6 relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Image 
                        src="/logo.jpg" 
                        alt="Nipix Technology Logo" 
                        width={80} 
                        height={80}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
                    </motion.div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Start Your Tech Journey</h3>
                    <p className="text-gray-600 text-lg">Join our next cohort</p>
                  </div>
                  
                  <div className="space-y-6 mb-10">
                    {[
                      { icon: Video, title: "Live Classes", desc: "Interactive coding sessions", 
                        bgClass: "bg-gradient-to-r from-blue-50 to-blue-50/50", 
                        borderClass: "border-blue-100", 
                        iconBgClass: "bg-blue-100 group-hover:bg-blue-200", 
                        iconColorClass: "text-blue-600" 
                      },
                      { icon: MessageCircle, title: "1:1 Mentoring", desc: "Personal guidance", 
                        bgClass: "bg-gradient-to-r from-purple-50 to-purple-50/50", 
                        borderClass: "border-purple-100", 
                        iconBgClass: "bg-purple-100 group-hover:bg-purple-200", 
                        iconColorClass: "text-purple-600" 
                      },
                      { icon: BookmarkCheck, title: "Job Guarantee", desc: "100% placement assurance", 
                        bgClass: "bg-gradient-to-r from-green-50 to-green-50/50", 
                        borderClass: "border-green-100", 
                        iconBgClass: "bg-green-100 group-hover:bg-green-200", 
                        iconColorClass: "text-green-600" 
                      }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className={`flex items-center p-4 ${feature.bgClass} rounded-xl border ${feature.borderClass} group hover:shadow-lg transition-all`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + index * 0.2 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.div 
                          className={`w-12 h-12 ${feature.iconBgClass} rounded-xl flex items-center justify-center mr-4 transition-colors`}
                          whileHover={{ rotate: 10 }}
                        >
                          <feature.icon className={`w-6 h-6 ${feature.iconColorClass}`} />
                        </motion.div>
                        <div>
                          <div className="font-bold text-gray-900">{feature.title}</div>
                          <div className="text-sm text-gray-600">{feature.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button
                    className="w-full bg-gradient-to-r from-blue-400 to-cyan-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={openModal}
                  >
                    Book Free Counseling
                  </motion.button>
                </motion.div>

                {/* Floating Decorative Elements */}
                <motion.div
                  className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  <Brain className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-xl flex items-center justify-center"
                  animate={{ 
                    y: [-5, 5, -5],
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity }
                  }}
                >
                  <Laptop className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center space-y-2 text-gray-400">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </motion.div>
      </section>

      {/* Enhanced Courses Section */}
      <section id="courses" className="relative py-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full px-6 py-3 mb-8 border border-cyan-200 shadow-lg backdrop-blur-sm"
            >
              <Target className="w-5 h-5 text-cyan-600 mr-3" />
              <span className="font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Premium Courses Collection
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Master{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                In-Demand
              </span>
              <br />Tech Skills
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Our industry-designed curriculum covers the latest technologies and frameworks used by top tech companies worldwide. Learn from industry veterans and build production-ready applications.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative bg-white/90 backdrop-blur-xl hover:bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-xl border border-gray-200/50 hover:border-cyan-200 overflow-hidden group-hover:scale-[1.01]">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Corner Element */}
                  <motion.div 
                    className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  
                  <div className="relative z-10 flex items-start space-x-6">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 group-hover:from-cyan-500 group-hover:to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 shadow-lg group-hover:shadow-xl"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <course.icon className="w-8 h-8 text-cyan-600 group-hover:text-white transition-colors duration-500" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-900 transition-colors leading-tight">
                          {course.title}
                        </h3>
                        <motion.span 
                          className="text-2xl font-black bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
                          whileHover={{ scale: 1.1 }}
                        >
                          {course.price}
                        </motion.span>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">{course.desc}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">{[
                          { icon: Clock, text: course.duration, color: "cyan" },
                          { icon: Users, text: `${course.students} enrolled`, color: "blue" },
                          { icon: BarChart3, text: course.level, color: "purple" },
                          { icon: Award, text: "Certificate", color: "green" }
                        ].map((item, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center text-gray-600 text-sm"
                            whileHover={{ scale: 1.05 }}
                          >
                            <item.icon className={`w-4 h-4 mr-2 text-${item.color}-500`} />
                            <span className="font-medium">{item.text}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {course.tech.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200 hover:shadow-md transition-all"
                            whileHover={{ scale: 1.05, y: -1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <motion.button
                        className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-4 rounded-2xl font-bold text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl hover:shadow-2xl"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 25px 50px rgba(6, 182, 212, 0.4)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={openModal}
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <span>Enroll Now</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Course Comparison Section */}
          <motion.div
            className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Courses?</h3>
              <p className="text-xl text-gray-600">Compare with other platforms and see the difference</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Rocket, title: "Project-Based Learning", desc: "Build 5+ real-world projects" },
                { icon: Users, title: "Industry Mentors", desc: "Learn from FAANG engineers" },
                { icon: Shield, title: "Job Guarantee", desc: "100% placement or money back" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Nipix Technology
              </span>
              ?
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide more than just courses – we offer a complete ecosystem designed to transform you into a tech professional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-cyan-200 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 group-hover:from-cyan-500 group-hover:to-blue-600 rounded-xl flex items-center justify-center mb-4 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how our graduates have transformed their careers and achieved incredible success in top tech companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-cyan-50/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-cyan-200 relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -3 }}
              >
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Quote className="w-2.5 h-2.5 text-white" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="font-bold text-cyan-600 text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-blue-600 font-medium">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">{testimonial.salary}</div>
                    <div className="text-xs text-gray-500">Package</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-3xl p-12 border border-blue-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">98%</div>
                  <div className="text-gray-600 text-sm">Job Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">₹15L</div>
                  <div className="text-gray-600 text-sm">Highest Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">2 Months</div>
                  <div className="text-gray-600 text-sm">Avg Job Search</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-gray-600 text-sm">Hiring Partners</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-500/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-8 text-white">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Join thousands of successful graduates who have transformed their careers. Get personalized guidance and start your journey to becoming a tech professional.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">+91 98765 43210</div>
                    <div className="text-gray-300 text-sm">Career Counseling</div>
                  </div>
                </div>
                <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">admissions@nipixtech.com</div>
                    <div className="text-gray-300 text-sm">Course Enquiries</div>
                  </div>
                </div>
                <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Pan India Campus</div>
                    <div className="text-gray-300 text-sm">Online & Offline Learning</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-white">Book Free Demo Class</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="bg-white/20 border border-white/30 rounded-xl px-4 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/30 backdrop-blur-sm"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="bg-white/20 border border-white/30 rounded-xl px-4 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/30 backdrop-blur-sm"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/30 backdrop-blur-sm"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/30 backdrop-blur-sm"
                />
                <select className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/30 backdrop-blur-sm">
                  <option className="text-gray-900 bg-white">Choose Your Interest</option>
                  <option className="text-gray-900 bg-white">Full-Stack Web Development</option>
                  <option className="text-gray-900 bg-white">AI & Machine Learning</option>
                  <option className="text-gray-900 bg-white">Mobile App Development</option>
                  <option className="text-gray-900 bg-white">Cloud & DevOps Engineering</option>
                </select>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-4 rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  onClick={openModal}
                >
                  Book Free Demo Class
                </motion.button>
                
                <div className="text-center text-white/80 text-sm">
                  No payment required • Live interactive session
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-white rounded-xl overflow-hidden shadow-sm mr-4">
                  <Image 
                    src="/logo.jpg" 
                    alt="Nipix Technology Logo" 
                    width={48} 
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">Nipix Technology</h3>
                  <p className="text-blue-400 font-medium">Future-Ready Education</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                Empowering the next generation of tech professionals with cutting-edge skills and industry-ready knowledge through innovative learning experiences.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center cursor-pointer transition-colors">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center cursor-pointer transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center cursor-pointer transition-colors">
                  <Code className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-8 text-blue-400">Courses</h4>
              <ul className="space-y-4">
                <li className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">Full-Stack Development</li>
                <li className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">AI & Machine Learning</li>
                <li className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">Mobile Development</li>
                <li className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">Cloud & DevOps</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-8 text-blue-400">Company</h4>
              <ul className="space-y-4">
                <li className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">About Us</li>
                <li className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">Success Stories</li>
                <li className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">Career Services</li>
                <li className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">Join Our Team</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Nipix Technology. All rights reserved.
              </p>
              <div className="flex space-x-8 text-gray-400">
                <span className="hover:text-blue-400 cursor-pointer transition-colors">Privacy Policy</span>
                <span className="hover:text-blue-400 cursor-pointer transition-colors">Terms of Service</span>
                <span className="hover:text-blue-400 cursor-pointer transition-colors">Student Code</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white rounded-3xl p-10 w-full max-w-2xl shadow-2xl border border-gray-200 overflow-hidden"
              initial={{ y: 100, opacity: 0, scale: 0.8, rotateX: 30 }}
              animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ y: 100, opacity: 0, scale: 0.8, rotateX: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-cyan-50/50"></div>
              
              {/* Floating Particles in Modal */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${10 + i * 8}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              <motion.button
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10"
                onClick={closeModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl overflow-hidden mx-auto mb-8 relative"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    <Image 
                      src="/logo.jpg" 
                      alt="Nipix Technology Logo" 
                      width={96} 
                      height={96}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
                  </motion.div>
                  
                  <motion.h2 
                    className="text-4xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Start Your{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Tech Journey
                    </span>
                  </motion.h2>
                  
                  <motion.p 
                    className="text-lg text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    Get personalized course recommendations and exclusive access to our tech community with industry experts.
                  </motion.p>
                </div>
                
                <motion.form 
                  onSubmit={(e) => e.preventDefault()} 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="grid grid-cols-2 gap-6">
                    <motion.input 
                      type="text" 
                      placeholder="First Name" 
                      className="border-2 border-gray-200 rounded-2xl p-4 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm" 
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.input 
                      type="text" 
                      placeholder="Last Name" 
                      className="border-2 border-gray-200 rounded-2xl p-4 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm" 
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  
                  <motion.input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full border-2 border-gray-200 rounded-2xl p-4 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm" 
                    whileFocus={{ scale: 1.02 }}
                  />
                  
                  <motion.input 
                    type="text" 
                    placeholder="Career Goal" 
                    className="w-full border-2 border-gray-200 rounded-2xl p-4 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm" 
                    whileFocus={{ scale: 1.02 }}
                  />
                  
                  <motion.select 
                    className="w-full border-2 border-gray-200 rounded-2xl p-4 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option>What interests you most?</option>
                    <option>Full-Stack Web Development</option>
                    <option>AI & Machine Learning</option>
                    <option>Mobile App Development</option>
                    <option>Cloud & DevOps Engineering</option>
                    <option>Data Science & Analytics</option>
                  </motion.select>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 25px 50px rgba(6, 182, 212, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center space-x-3">
                      <Rocket className="w-6 h-6" />
                      <span>Get My Personalized Path</span>
                    </div>
                  </motion.button>
                  
                  <motion.div 
                    className="text-center text-gray-500 text-sm flex items-center justify-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Start with a free demo class • No payment required</span>
                  </motion.div>
                </motion.form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
