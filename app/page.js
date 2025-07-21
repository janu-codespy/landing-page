"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, BookOpen, Award, TrendingUp, Users, Mail, Phone, MapPin, 
  X, CheckCircle, GraduationCap, Globe, Code, BarChart3, Target, Lightbulb,
  Calendar, Clock, Star, ArrowUpRight, Rocket, Cpu, Trophy
} from 'lucide-react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const services = [
    { icon: BookOpen, title: "Online Courses", desc: "Comprehensive learning programs in AI, IoT, and emerging technologies", stats: "500+ Students Enrolled" },
    { icon: Code, title: "Hands-on Workshops", desc: "Practical coding sessions and project-based learning experiences", stats: "95% Completion Rate" },
    { icon: Trophy, title: "Certification Programs", desc: "Industry-recognized certificates to boost your career prospects", stats: "200+ Certifications Issued" },
    { icon: Rocket, title: "Startup Incubation", desc: "From idea to launch - complete support for tech entrepreneurs", stats: "50+ Startups Launched" },
  ];

  const testimonials = [
    { name: "Priya Sharma", company: "TechStart Solutions", role: "Software Developer", text: "The hands-on approach and practical projects helped me land my dream job. Nipix truly delivers quality education." },
    { name: "Rajesh Kumar", company: "Innovation Labs", role: "AI Engineer", text: "The AI course was comprehensive and the mentorship was exceptional. Highly recommend for tech enthusiasts." },
    { name: "Anita Patel", company: "Digital Dynamics", role: "Product Manager", text: "From concept to execution, Nipix helped me transform my startup idea into a successful business." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-sm sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Nipix Technology</h1>
                <p className="text-xs text-gray-500">Innovate • Learn • Create</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['Courses', 'About', 'Success Stories', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase().replace(' ', '-'))}
                  className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            <motion.button
              className="bg-gradient-to-r from-teal-500 to-coral-500 text-white px-6 py-2.5 rounded-md hover:from-teal-600 hover:to-coral-600 font-medium flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              onClick={openModal}
            >
              Start Learning
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section - Completely Different Layout */}
      <section className="relative bg-gradient-to-br from-slate-800 via-teal-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-teal-500/20 rounded-full px-4 py-2 mb-6">
                <Award className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Trusted by 5000+ Students</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Shape the Future of
                <span className="block text-coral-300">Technology</span>
              </h1>
              
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                Master cutting-edge technologies through hands-on learning. From AI to IoT, we build creators, not just learners.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-white text-slate-900 px-8 py-4 rounded-md font-semibold hover:bg-teal-50 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => handleScroll(e, 'courses')}
                >
                  Explore Courses
                  <ArrowUpRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-slate-900 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  onClick={openModal}
                >
                  Start Free Trial
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coral-300 mb-2">5000+</div>
                    <div className="text-sm text-teal-100">Students Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coral-300 mb-2">95%</div>
                    <div className="text-sm text-teal-100">Job Placement Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coral-300 mb-2">100+</div>
                    <div className="text-sm text-teal-100">Industry Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coral-300 mb-2">24/7</div>
                    <div className="text-sm text-teal-100">Learning Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - New Horizontal Layout */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What We Provide
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empowering students with future-ready skills. From courses to innovators – we build creators, not just learners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-gray-50 hover:bg-teal-50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-teal-100 group-hover:bg-coral-200 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <service.icon className="w-7 h-7 text-teal-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.desc}</p>
                
                <div className="inline-flex items-center text-teal-600 font-medium text-sm">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  {service.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Side by Side with Video */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-teal-100 rounded-full px-4 py-2 mb-6">
                <Target className="w-5 h-5 text-teal-600 mr-2" />
                <span className="text-teal-600 font-medium text-sm">Our Mission</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Building the Next Generation of Innovators
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nipix Technology is an education company dedicated to creating innovators through hands-on learning and real-world applications. We don't just teach – we inspire transformation.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Build → Break → Understand → Innovate methodology",
                  "Industry-aligned curriculum with latest technologies", 
                  "Mentorship from experienced tech professionals",
                  "Project-based learning with real-world applications"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <motion.button
                className="bg-gradient-to-r from-teal-500 to-coral-500 text-white px-6 py-3 rounded-md hover:from-teal-600 hover:to-coral-600 font-medium"
                whileHover={{ scale: 1.05 }}
                onClick={openModal}
              >
                Join Our Community
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-slate-700 via-teal-700 to-gray-800 rounded-xl p-8 text-white shadow-2xl border border-white/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-coral-500/20 rounded-xl"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6 text-center">Learning Progress Dashboard</h3>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border border-white/20">
                      <Code className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-2xl font-bold">150+</div>
                    <div className="text-sm text-teal-100">Coding Projects</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border border-white/20">
                      <Trophy className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm text-teal-100">Success Rate</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Full Stack Development</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-white/30 rounded-full h-2">
                      <div className="bg-coral-300 h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Data Science & AI</span>
                      <span>72%</span>
                    </div>
                    <div className="w-full bg-white/30 rounded-full h-2">
                      <div className="bg-coral-300 h-2 rounded-full w-[72%]"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Mobile Development</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-white/30 rounded-full h-2">
                      <div className="bg-coral-300 h-2 rounded-full w-[90%]"></div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">85%</div>
                    <div className="text-sm text-gray-600">Career Growth</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New Design */}
      <section id="results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What Our Clients Say
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what business leaders say about working with StrataCorp.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-8 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - New Layout */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 via-teal-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Start Your Tech Journey?
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Join thousands of students who have transformed their careers through our innovative technology education programs. Your future in tech starts here.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="w-10 h-10 bg-coral-500 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">+91 98765 43210</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">learn@nipixtechnology.com</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="w-10 h-10 bg-coral-500 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Bangalore | Mumbai | Delhi | Online</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/15 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Start Your Learning Journey</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="bg-white/20 border border-white/30 rounded-md px-4 py-3 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-coral-400 focus:bg-white/30"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="bg-white/20 border border-white/30 rounded-md px-4 py-3 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-coral-400 focus:bg-white/30"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/20 border border-white/30 rounded-md px-4 py-3 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-coral-400 focus:bg-white/30"
                />
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="w-full bg-white/20 border border-white/30 rounded-md px-4 py-3 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-coral-400 focus:bg-white/30"
                />
                <select className="w-full bg-white/20 border border-white/30 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-coral-400 focus:bg-white/30">
                  <option className="text-gray-900 bg-white">Select Course Interest</option>
                  <option className="text-gray-900 bg-white">Full Stack Development</option>
                  <option className="text-gray-900 bg-white">Data Science & AI</option>
                  <option className="text-gray-900 bg-white">Mobile App Development</option>
                  <option className="text-gray-900 bg-white">DevOps & Cloud</option>
                </select>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-coral-500 to-teal-500 text-white font-semibold py-3 rounded-md hover:from-coral-600 hover:to-teal-600 transition-colors shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  onClick={openModal}
                >
                  Enroll Now - Free Trial Class
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-800 via-teal-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-coral-400 rounded-lg flex items-center justify-center mr-3">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Nipix Technology</h3>
                  <p className="text-sm text-teal-200">Innovate • Learn • Create</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Empowering the next generation of innovators through hands-on technology education and mentorship.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-teal-600 hover:bg-coral-500 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-teal-600 hover:bg-coral-500 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-teal-600 hover:bg-coral-500 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-coral-300">Programs</h4>
              <ul className="space-y-3 text-sm">
                <li className="text-gray-300 hover:text-teal-300 cursor-pointer transition-colors">Full Stack Development</li>
                <li className="text-gray-300 hover:text-teal-300 cursor-pointer transition-colors">Data Science & AI</li>
                <li className="text-gray-300 hover:text-teal-300 cursor-pointer transition-colors">Mobile App Development</li>
                <li className="text-gray-300 hover:text-teal-300 cursor-pointer transition-colors">DevOps & Cloud</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-coral-300">Company</h4>
              <ul className="space-y-3 text-sm">
                <li className="text-gray-300 hover:text-teal-300 cursor-pointer transition-colors">About Us</li>
                <li className="text-gray-300 hover:text-teal-300 cursor-pointer transition-colors">Our Mentors</li>
                <li className="text-gray-300 hover:text-teal-300 cursor-pointer transition-colors">Success Stories</li>
                <li className="text-gray-300 hover:text-teal-300 cursor-pointer transition-colors">Careers</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-coral-300">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="text-gray-300 flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-teal-400" />
                  +91 98765 43210
                </li>
                <li className="text-gray-300 flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-teal-400" />
                  learn@nipixtechnology.com
                </li>
                <li className="text-gray-300 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-teal-400" />
                  Bangalore, India
                </li>
                <li className="text-gray-300 flex items-center">
                  <Globe className="w-4 h-4 mr-2 text-teal-400" />
                  Mumbai, India
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-teal-700/50 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Nipix Technology. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-300">
                <span className="hover:text-teal-300 cursor-pointer transition-colors">Privacy Policy</span>
                <span className="hover:text-teal-300 cursor-pointer transition-colors">Terms of Service</span>
                <span className="hover:text-teal-300 cursor-pointer transition-colors">Cookie Policy</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 w-full max-w-lg relative shadow-2xl border-2 border-teal-200"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-coral-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Start Your Learning Journey
                </h2>
                <p className="text-gray-600">
                  Join thousands of students who transformed their careers with us
                </p>
              </div>
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                />
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                />
                <select className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700">
                  <option>Which course interests you?</option>
                  <option>Full Stack Development</option>
                  <option>Data Science & AI</option>
                  <option>Mobile App Development</option>
                  <option>DevOps & Cloud</option>
                  <option>UI/UX Design</option>
                </select>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-coral-500 text-white py-3 rounded-md font-semibold hover:from-teal-600 hover:to-coral-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enroll Now - Free Trial Class
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
