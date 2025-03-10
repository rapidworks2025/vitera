"use client"

import { useState, useEffect } from "react"
import {
  CheckCircle,
  Users,
  Briefcase,
  Clock,
  DollarSign,
  Shield,
  Menu,
  X,
  ChevronRight,
  Star,
  ArrowRight,
  Check,
} from "react-feather"
import { useInView } from 'react-intersection-observer';
import VLOGO from '../src/assets/vteralogo.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-text">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src={VLOGO} alt="Vitera Logo" className="h-8 w-auto" />
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a
                  href="#how-it-works"
                  className="group border-transparent text-gray-800 hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 hover:border-primary text-sm font-medium transition-all duration-300"
                >
                  How It Works
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </a>
                <a
                  href="#benefits"
                  className="border-transparent text-gray-800 hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 hover:border-primary text-sm font-medium transition-colors duration-200"
                >
                  Benefits
                </a>
                <a
                  href="#testimonials"
                  className="border-transparent text-gray-800 hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 hover:border-primary text-sm font-medium transition-colors duration-200"
                >
                  Testimonials
                </a>
              </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center">
              <a
                href="#contact"
                className="bg-white text-primary border-2 border-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300 mr-4"
              >
                Contact Us
              </a>
              <a
                href="#contact"
                className="bg-primary text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/20"
              >
                Get Started
              </a>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <div className="pt-2 pb-3 space-y-1 px-4">
              <a
                href="#how-it-works"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-primary hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#benefits"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-primary hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </a>
              {/* <a
                href="#testimonials"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-primary hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a> */}
              <div className="mt-6 space-y-3 pb-3">
                <a
                  href="#contact"
                  className="block w-full bg-white text-primary border-2 border-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300 text-center"
                >
                  Contact Us
                </a>
                <a
                  href="#contact"
                  className="block w-full bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/20 text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
        {/* Add hero pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center py-16 md:py-24">
            <div className="text-center md:text-left pt-8 space-y-8">
              {/* Add animated badge */}
              {/* <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in-up">
                <span className="animate-pulse mr-2">•</span> Talent Matching Platform
              </div> */}
              
              {/* Improve typography and add gradient text */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight font-display">
                Find the perfect{" "}
                <span className="inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">
                    talent
                  </span>
                </span>{" "}
                for your projects
                </h1>
              
              <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
                Connect with world-class IT experts, avoid costly intermediaries and save up to{" "}
                <span className="font-bold text-primary">30%</span> of costs while ensuring a perfect match with your project requirements.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                    <a
                      href="#contact"
                  className="px-8 py-4 bg-primary text-white rounded-lg font-medium text-base hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 transform hover:-translate-y-1"
                    >
                      Get Started
                    </a>
                    <a
                      href="#how-it-works"
                  className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-medium text-base hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
                    >
                  Learn More <ArrowRight size={18} className="ml-2" />
                    </a>
                  </div>
              <div className="mt-10 flex items-center justify-center md:justify-start">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600">
                    JD
                </div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600">
                    KM
              </div>
                  <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600">
                    TS
          </div>
                  <div className="w-10 h-10 rounded-full bg-primary border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                    +2
        </div>
                </div>
                <div className="ml-4 text-sm text-gray-500">
                  Early access partners
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              <img
                className="relative rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Team collaboration"
          />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 transform rotate-3">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                    <DollarSign size={24} />
                  </div>
                  <div className="ml-3">
                    <div className="text-xs text-gray-500">Average Savings</div>
                    <div className="text-xl font-bold text-primary">30%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brands Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100">
          <p className="text-center text-gray-500 text-sm font-medium mb-8">TRUSTED BY THE FOLLOWING COMPANIES</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded hidden lg:block"></div>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-display">Why Choose Vitera?</h2>
            <p className="mt-4 text-xl text-gray-600">
              We eliminate intermediaries, saving you up to 30% while connecting you with perfectly matched talent.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Users size={28} />
                  </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Perfect Talent Matching</h3>
              <p className="text-gray-600 flex-grow">
                Industry-specific experts with a 100% match in technical fit, reducing rework and delays.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a href="#" className="text-primary font-medium flex items-center hover:underline">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
              </div>

            <div className="bg-white rounded-xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <CheckCircle size={28} />
                  </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600 flex-grow">
                  Absolute confidence through verified credentials and detailed past projects, ensuring consistent
                  delivery and quality.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a href="#" className="text-primary font-medium flex items-center hover:underline">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
              </div>

            <div className="bg-white rounded-xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <DollarSign size={28} />
                  </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Savings</h3>
              <p className="text-gray-600 flex-grow">
                  Transparent pricing that saves up to 30% compared to traditional agencies by eliminating intermediary
                  margins.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a href="#" className="text-primary font-medium flex items-center hover:underline">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
          </div>

            <div className="bg-white rounded-xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Agile Flexibility</h3>
              <p className="text-gray-600 flex-grow">
                Agile contracts with automated capacity and availability tracking, enabling you to scale engagements up
                or down as needed.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a href="#" className="text-primary font-medium flex items-center hover:underline">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-display">How Vitera Works</h2>
            <p className="mt-4 text-xl text-gray-600">
              A streamlined process to connect you with the perfect freelance talent.
            </p>
          </div>

          <div className="mt-20 relative">
              {/* Steps */}
              <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-16 mb-20">
                <div className="order-2 md:order-1">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/20">
                        1
                      </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Define Your Needs</h3>
                      <p className="text-gray-600 text-lg">
                      Specify your project requirements, technical skills needed, and timeline. Our platform helps you
                      articulate exactly what you're looking for.
                    </p>
                      <ul className="mt-6 space-y-3">
                        <li className="flex items-start">
                          <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="ml-3 text-gray-600">Detailed skill requirements</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="ml-3 text-gray-600">Project scope definition</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="ml-3 text-gray-600">Timeline and budget planning</span>
                        </li>
                      </ul>
                  </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
                    <div className="relative bg-white p-6 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-all duration-500 border border-gray-100">
                      <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                        <Briefcase size={64} className="text-primary/40" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>

              <div className="grid md:grid-cols-2 gap-16 mb-20">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
                    <div className="relative bg-white p-6 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-all duration-500 border border-gray-100">
                      <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                        <Users size={64} className="text-primary/40" />
                    </div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                  </div>
                      </div>
                    </div>
                </div>
                <div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/20">
                      2
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Matched</h3>
                      <p className="text-gray-600 text-lg">
                      Our advanced matching algorithm identifies the perfect freelancers with 100% technical fit for your specific industry needs.
                    </p>
                      <ul className="mt-6 space-y-3">
                        <li className="flex items-start">
                          <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="ml-3 text-gray-600">AI-powered matching algorithm</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="ml-3 text-gray-600">Technical assessment</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="ml-3 text-gray-600">Industry-specific expertise verification</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </div>

              <div className="grid md:grid-cols-2 gap-16 mb-20">
                <div className="order-2 md:order-1">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/20">
                        3
                      </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborate Directly</h3>
                      <p className="text-gray-600 text-lg">
                        Connect and work directly with your matched talent. No intermediaries, no communication
                        barriers, just seamless collaboration.
                      </p>
                      <ul className="mt-6 space-y-3">
                        <li className="flex items-start">
                          <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="ml-3 text-gray-600">Direct communication channels</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="ml-3 text-gray-600">Integrated project management tools</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="ml-3 text-gray-600">Real-time progress tracking</span>
                        </li>
                      </ul>
                  </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
                    <div className="relative bg-white p-6 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-all duration-500 border border-gray-100">
                      <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                        <CheckCircle size={64} className="text-primary/40" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>

              <div className="grid md:grid-cols-2 gap-16">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
                    <div className="relative bg-white p-6 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-all duration-500 border border-gray-100">
                      <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                        <Shield size={64} className="text-primary/40" />
                    </div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                  </div>
                      </div>
                    </div>
                </div>
                <div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/20">
                        4
                      </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Manage with Ease</h3>
                      <p className="text-gray-600 text-lg">
                        Benefit from streamlined contract management, pre-vetted legal frameworks, and transparent
                        pricing with no hidden fees.
                      </p>
                      <ul className="mt-6 space-y-3">
                        <li className="flex items-start">
                          <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="ml-3 text-gray-600">Pre-vetted legal frameworks</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="ml-3 text-gray-600">Transparent pricing structure</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="ml-3 text-gray-600">Automated administrative processes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              {/* Connecting line */}
            <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -ml-px hidden md:block"></div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-display">
              Solving Your Freelance Challenges
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Vitera addresses the common pain points companies face when working with external talent.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:border-primary border border-gray-100">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Skill Verification</h3>
              <p className="text-gray-600">
                No more uncertainty about freelancer capabilities. We thoroughly verify skills and expertise to ensure
                perfect alignment with your requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:border-primary border border-gray-100">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Consistency</h3>
              <p className="text-gray-600">
                Eliminate the risk of inconsistent work quality and underperformance with our pre-vetted talent pool and
                detailed past project verification.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:border-primary border border-gray-100">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Engagements</h3>
              <p className="text-gray-600">
                Adjust resources on short notice without delays or wasted resources. Scale up or down as your project
                needs evolve.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:border-primary border border-gray-100">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Simplified Contracts</h3>
              <p className="text-gray-600">
                Streamlined contract management with pre-vetted legal frameworks eliminates complex negotiations and
                compliance risks.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:border-primary border border-gray-100">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                <DollarSign size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                Save up to 30% compared to traditional agencies with our transparent pricing model that eliminates
                hidden margins.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:border-primary border border-gray-100">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reduced Administrative Burden</h3>
              <p className="text-gray-600">
                Focus on your core business while we handle the administrative overhead associated with managing
                external talent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
        {/* Add floating shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">30%</div>
              <div className="text-white/80">Average Cost Savings</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-white/80">Skill Match Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">48h</div>
              <div className="text-white/80">Average Matching Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section - Temporarily Hidden
      <div id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
              <span className="mr-2">•</span> Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-display">What Our Clients Say</h2>
            <p className="mt-4 text-xl text-gray-600">
              Hear from companies that have transformed their approach to working with freelance talent.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-primary opacity-20">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0ZM20.5 41.5C17.467 41.5 15 39.033 15 36C15 32.967 17.467 30.5 20.5 30.5C23.533 30.5 26 32.967 26 36C26 39.033 23.533 41.5 20.5 41.5ZM43.5 41.5C40.467 41.5 38 39.033 38 36C38 32.967 40.467 30.5 43.5 30.5C46.533 30.5 49 32.967 49 36C49 39.033 46.533 41.5 43.5 41.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                  TC
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-900">Tech Connect</h4>
                  <p className="text-sm text-gray-500">Software Development</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "Vitera transformed how we work with freelancers. We found the perfect match for our project in days,
                not weeks, and saved 25% compared to our previous agency."
              </p>
              <div className="flex text-yellow-400">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-primary opacity-20">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0ZM20.5 41.5C17.467 41.5 15 39.033 15 36C15 32.967 17.467 30.5 20.5 30.5C23.533 30.5 26 32.967 26 36C26 39.033 23.533 41.5 20.5 41.5ZM43.5 41.5C40.467 41.5 38 39.033 38 36C38 32.967 40.467 30.5 43.5 30.5C46.533 30.5 49 32.967 49 36C49 39.033 46.533 41.5 43.5 41.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                  FS
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-900">FinServe Solutions</h4>
                  <p className="text-sm text-gray-500">Financial Technology</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "The quality of talent we've accessed through Vitera is exceptional. Their matching algorithm found us
                developers with exactly the specialized skills we needed, and the transparent pricing model saved us
                significant costs."
              </p>
              <div className="flex text-yellow-400">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-primary opacity-20">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0ZM20.5 41.5C17.467 41.5 15 39.033 15 36C15 32.967 17.467 30.5 20.5 30.5C23.533 30.5 26 32.967 26 36C26 39.033 23.533 41.5 20.5 41.5ZM43.5 41.5C40.467 41.5 38 39.033 38 36C38 32.967 40.467 30.5 43.5 30.5C46.533 30.5 49 32.967 49 36C49 39.033 46.533 41.5 43.5 41.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                  HI
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-900">HealthInnovate</h4>
                  <p className="text-sm text-gray-500">Healthcare Technology</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "Working with Vitera eliminated our contract headaches and administrative burden. Their pre-vetted legal
                frameworks and streamlined management tools let us focus on innovation instead of paperwork."
              </p>
              <div className="flex text-yellow-400">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
      */}

      {/* CTA Section */}
      <div id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-12 shadow-2xl shadow-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display mb-6">
                  Get in Touch
          </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <form
                    action="https://formspree.io/f/contact@vitera.it"
                    method="POST"
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                        placeholder="Your name"
                      />
            </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/20"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Schedule Meeting Section */}
                <div className="flex flex-col justify-center">
                  <div className="text-white space-y-8">
                    <h3 className="text-2xl font-bold">Prefer a quick chat?</h3>
                    <p className="text-white/80">
                      Schedule a 15-minute introduction call to discuss how we can help you find the perfect talent for your projects.
                    </p>
                    
                    <div className="space-y-4">
              <a
                  href="https://calendly.com/vitera/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-xl shadow-black/10"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 8H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Schedule a Meeting
              </a>
            </div>
              
                    <div className="pt-8 border-t border-white/20 space-y-6">
                      <div className="flex items-center">
                        <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                        <a href="mailto:contact@vitera.it" className="text-white hover:text-white/90">
                          contact@vitera.it
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Section */}
      <div id="privacy-policy" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-display mb-4">
              Privacy Policy
            </h2>
            <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h3>
            <p>
              At Vitera, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. The Data We Collect</h3>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
            </ul>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Data</h3>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h3>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Your Legal Rights</h3>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Contact Us</h3>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:contact@vitera.it" className="text-primary hover:underline">contact@vitera.it</a>
            </p>
          </div>
        </div>
      </div>

      {/* Terms of Service Section */}
      <div id="terms" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-display mb-4">
              Terms of Service
            </h2>
            <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h3>
            <p>
              By accessing or using our platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Use of Services</h3>
            <p>
              Our platform provides a service that connects companies with freelance talent. You may use our services only as permitted by these terms and any applicable laws.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. User Accounts</h3>
            <p>
              When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the service.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Intellectual Property</h3>
            <p>
              The service and its original content, features, and functionality are and will remain the exclusive property of Vitera and its licensors. The service is protected by copyright, trademark, and other laws.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Termination</h3>
            <p>
              We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h3>
            <p>
              In no event shall Vitera, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Changes to Terms</h3>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us at: <a href="mailto:contact@vitera.it" className="text-primary hover:underline">contact@vitera.it</a>
            </p>
          </div>
        </div>
      </div>

      {/* Impressum Section */}
      <div id="impressum" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-display mb-4">
              Impressum
            </h2>
            <p className="text-lg text-gray-600">Legal Information</p>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Company Information</h3>
            <p>
              <strong>Vitera GmbH</strong><br />
              Musterstraße 123<br />
              10115 Berlin<br />
              Germany
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Contact</h3>
            <p>
              Email: <a href="mailto:contact@vitera.it" className="text-primary hover:underline">contact@vitera.it</a><br />
              Phone: +49 30 1234567<br />
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Registration</h3>
            <p>
              Commercial Register: Amtsgericht Berlin-Charlottenburg<br />
              Registration Number: HRB 123456<br />
              VAT Identification Number: DE123456789
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Responsible for Content</h3>
            <p>
              According to § 55 Abs. 2 RStV:<br />
              Max Mustermann<br />
              Musterstraße 123<br />
              10115 Berlin<br />
              Germany
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Dispute Resolution</h3>
            <p>
              The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
            </p>
            <p>
              We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Liability for Content</h3>
            <p>
              As a service provider, we are responsible for our own content on these pages according to § 7 Abs.1 TMG (German Telemedia Act). According to §§ 8 to 10 TMG, however, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="text-white font-bold text-2xl mb-4">Vitera</div>
              <p className="text-gray-400 text-sm mb-6">
                Connecting companies with exceptional freelance talent, without the intermediaries.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.75-1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

                <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Solutions</h3>
              <ul className="space-y-3">
                    <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                        Talent Matching
                      </a>
                    </li>
                    <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                        Contract Management
                      </a>
                    </li>
                    <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                        Skill Verification
                      </a>
                    </li>
                    <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                        Project Management
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-3">
                    <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                        About
                      </a>
                    </li>
                    <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Contact
                      </a>
                    </li>
                  </ul>
                </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Privacy Policy
                      </a>
                    </li>
                    <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Terms of Service
                      </a>
                    </li>
                    <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm text-center">
              &copy; {new Date().getFullYear()} Vitera. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Schedule Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="group relative">
          <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <p className="text-sm text-gray-600 text-center">Schedule a 15-min intro call</p>
        </div>
        <a
            href="https://calendly.com/vitera/intro"
          target="_blank"
          rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 8H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </a>
        </div>
      </div>
    </div>
  )
}

export default App

