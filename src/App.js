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
import { Link } from 'react-router-dom'

// Add Google Fonts import for Bebas Neue and Roboto
import '@fontsource/bebas-neue';
import '@fontsource/roboto';

// Add translations object
const translations = {
  en: {
    nav: {
      howItWorks: "How It Works",
      benefits: "Benefits",
      contactUs: "Contact Us",
      getStarted: "Get Started"
    },
    hero: {
      title: "FIND THE PERFECT TALENT FOR YOUR PROJECTS",
      subtitle: "Connect with world-class IT experts, avoid costly intermediaries and save up to 30% of costs while ensuring a perfect match with your project requirements.",
      getStarted: "Get Started",
      learnMore: "Learn More",
      earlyAccess: "Early access partners"
    },
    stats: {
      savings: "Average Savings",
      skillMatch: "Skill Match Rate",
      matchingTime: "Average Matching Time"
    },
    howItWorks: {
      title: "HOW VITERA WORKS",
      subtitle: "A streamlined process to connect you with the perfect freelance talent.",
      steps: {
        define: {
          title: "Define Your Needs",
          description: "Specify your project requirements, technical skills needed, and timeline. Our platform helps you articulate exactly what you're looking for.",
          items: [
            "Detailed skill requirements",
            "Project scope definition",
            "Timeline and budget planning"
          ]
        },
        match: {
          title: "Get Matched",
          description: "Our advanced matching algorithm identifies the perfect freelancers with 100% technical fit for your specific industry needs.",
          items: [
            "AI-powered matching algorithm",
            "Technical assessment",
            "Industry-specific expertise verification"
          ]
        },
        collaborate: {
          title: "Collaborate Directly",
          description: "Connect and work directly with your matched talent. No intermediaries, no communication barriers, just seamless collaboration.",
          items: [
            "Direct communication channels",
            "Integrated project management tools",
            "Real-time progress tracking"
          ]
        },
        manage: {
          title: "Manage with Ease",
          description: "Benefit from streamlined contract management, pre-vetted legal frameworks, and transparent pricing with no hidden fees.",
          items: [
            "Pre-vetted legal frameworks",
            "Transparent pricing structure",
            "Automated administrative processes"
          ]
        }
      }
    },
    benefits: {
      title: "SOLVING YOUR FREELANCE CHALLENGES",
      subtitle: "Vitera addresses the common pain points companies face when working with external talent.",
      items: {
        verification: {
          title: "Skill Verification",
          description: "No more uncertainty about freelancer capabilities. We thoroughly verify skills and expertise to ensure perfect alignment with your requirements."
        },
        quality: {
          title: "Quality Consistency",
          description: "Eliminate the risk of inconsistent work quality and underperformance with our pre-vetted talent pool and detailed past project verification."
        },
        flexibility: {
          title: "Flexible Engagements",
          description: "Adjust resources on short notice without delays or wasted resources. Scale up or down as your project needs evolve."
        },
        contracts: {
          title: "Simplified Contracts",
          description: "Streamlined contract management with pre-vetted legal frameworks eliminates complex negotiations and compliance risks."
        },
        pricing: {
          title: "Transparent Pricing",
          description: "Save up to 30% compared to traditional agencies with our transparent pricing model that eliminates hidden margins."
        },
        admin: {
          title: "Reduced Administrative Burden",
          description: "Focus on your core business while we handle the administrative overhead associated with managing external talent."
        }
      }
    },
    contact: {
      title: "GET IN TOUCH",
      subtitle: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        companyPlaceholder: "Your company",
        messagePlaceholder: "How can we help you?",
        send: "Send Message"
      },
      meeting: {
        title: "Prefer a quick chat?",
        description: "Schedule a 15-minute introduction call to discuss how we can help you find the perfect talent for your projects.",
        schedule: "Schedule a Meeting"
      }
    },
    footer: {
      description: "Connecting companies with exceptional freelance talent, without the intermediaries.",
      solutions: "Solutions",
      company: "Company",
      legal: "Legal",
      rights: "All rights reserved.",
      links: {
        solutions: {
          talentMatching: "Talent Matching",
          contractManagement: "Contract Management",
          skillVerification: "Skill Verification",
          projectManagement: "Project Management"
        },
        company: {
          about: "About",
          contact: "Contact"
        },
        legal: {
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          impressum: "Impressum"
        }
      }
    },
    brands: {
      title: "TRUSTED BY THE FOLLOWING COMPANIES"
    },
    valueProposition: {
      title: "WHY CHOOSE VITERA?",
      subtitle: "We eliminate intermediaries, saving you up to 30% while connecting you with perfectly matched talent.",
      items: {
        matching: {
          title: "Perfect Talent Matching",
          description: "Industry-specific experts with a 100% match in technical fit, reducing rework and delays.",
          learnMore: "Learn more"
        },
        quality: {
          title: "Quality Assurance",
          description: "Absolute confidence through verified credentials and detailed past projects, ensuring consistent delivery and quality.",
          learnMore: "Learn more"
        },
        cost: {
          title: "Cost Savings",
          description: "Transparent pricing that saves up to 30% compared to traditional agencies by eliminating intermediary margins.",
          learnMore: "Learn more"
        },
        agile: {
          title: "Agile Flexibility",
          description: "Agile contracts with automated capacity and availability tracking, enabling you to scale engagements up or down as needed.",
          learnMore: "Learn more"
        }
      }
    },
    floatingButton: {
      tooltip: "Schedule a 15-min intro call"
    }
  },
  de: {
    nav: {
      howItWorks: "So funktioniert's",
      benefits: "Vorteile",
      contactUs: "Kontakt",
      getStarted: "Jetzt starten"
    },
    hero: {
      title: "FINDEN SIE DAS PERFEKTE TALENT FÜR IHRE PROJEKTE",
      subtitle: "Verbinden Sie sich mit erstklassigen IT-Experten, vermeiden Sie kostspielige Zwischenhändler und sparen Sie bis zu 30% der Kosten bei perfekter Übereinstimmung mit Ihren Projektanforderungen.",
      getStarted: "Jetzt starten",
      learnMore: "Mehr erfahren",
      earlyAccess: "Early-Access-Partner"
    },
    stats: {
      savings: "Durchschnittliche Einsparungen",
      skillMatch: "Qualifikationsübereinstimmung",
      matchingTime: "Durchschnittliche Matching-Zeit"
    },
    howItWorks: {
      title: "SO FUNKTIONIERT VITERA",
      subtitle: "Ein optimierter Prozess, um Sie mit dem perfekten freiberuflichen Talent zu verbinden.",
      steps: {
        define: {
          title: "Definieren Sie Ihre Anforderungen",
          description: "Spezifizieren Sie Ihre Projektanforderungen, technischen Fähigkeiten und Zeitplan. Unsere Plattform hilft Ihnen, genau zu artikulieren, wonach Sie suchen.",
          items: [
            "Detaillierte Qualifikationsanforderungen",
            "Projektumfang-Definition",
            "Zeit- und Budgetplanung"
          ]
        },
        match: {
          title: "Finden Sie Ihr Match",
          description: "Unser fortschrittlicher Matching-Algorithmus identifiziert die perfekten Freelancer mit 100% technischer Übereinstimmung für Ihre spezifischen Branchenanforderungen.",
          items: [
            "KI-gestützter Matching-Algorithmus",
            "Technische Bewertung",
            "Branchenspezifische Expertise-Verifizierung"
          ]
        },
        collaborate: {
          title: "Direkte Zusammenarbeit",
          description: "Verbinden und arbeiten Sie direkt mit Ihrem zugeordneten Talent. Keine Zwischenhändler, keine Kommunikationsbarrieren, nur nahtlose Zusammenarbeit.",
          items: [
            "Direkte Kommunikationskanäle",
            "Integrierte Projektmanagement-Tools",
            "Echtzeit-Fortschrittsverfolgung"
          ]
        },
        manage: {
          title: "Einfaches Management",
          description: "Profitieren Sie von optimiertem Vertragsmanagement, vorgeprüften rechtlichen Rahmenbedingungen und transparenter Preisgestaltung ohne versteckte Gebühren.",
          items: [
            "Vorgeprüfte rechtliche Rahmenbedingungen",
            "Transparente Preisstruktur",
            "Automatisierte Verwaltungsprozesse"
          ]
        }
      }
    },
    benefits: {
      title: "LÖSUNG IHRER FREELANCE-HERAUSFORDERUNGEN",
      subtitle: "Vitera adressiert die häufigsten Schmerzpunkte, mit denen Unternehmen bei der Arbeit mit externen Talenten konfrontiert sind.",
      items: {
        verification: {
          title: "Qualifikationsüberprüfung",
          description: "Keine Unsicherheit mehr über die Fähigkeiten von Freelancern. Wir überprüfen gründlich Fähigkeiten und Expertise, um eine perfekte Übereinstimmung mit Ihren Anforderungen sicherzustellen."
        },
        quality: {
          title: "Qualitätskonsistenz",
          description: "Eliminieren Sie das Risiko inkonsistenter Arbeitsqualität und Minderleistung mit unserem vorgeprüften Talent-Pool und detaillierter Überprüfung vergangener Projekte."
        },
        flexibility: {
          title: "Flexible Engagements",
          description: "Passen Sie Ressourcen kurzfristig ohne Verzögerungen oder verschwendete Ressourcen an. Skalieren Sie nach oben oder unten, wie es Ihre Projektanforderungen erfordern."
        },
        contracts: {
          title: "Vereinfachte Verträge",
          description: "Optimiertes Vertragsmanagement mit vorgeprüften rechtlichen Rahmenbedingungen eliminiert komplexe Verhandlungen und Compliance-Risiken."
        },
        pricing: {
          title: "Transparente Preisgestaltung",
          description: "Sparen Sie bis zu 30% im Vergleich zu traditionellen Agenturen mit unserem transparenten Preismodell, das versteckte Margen eliminiert."
        },
        admin: {
          title: "Reduzierter Verwaltungsaufwand",
          description: "Konzentrieren Sie sich auf Ihr Kerngeschäft, während wir uns um den administrativen Aufwand bei der Verwaltung externer Talente kümmern."
        }
      }
    },
    contact: {
      title: "KONTAKTIEREN SIE UNS",
      subtitle: "Haben Sie Fragen? Wir würden uns freuen, von Ihnen zu hören. Senden Sie uns eine Nachricht und wir werden uns so schnell wie möglich bei Ihnen melden.",
      form: {
        name: "Name",
        email: "E-Mail",
        company: "Unternehmen",
        message: "Nachricht",
        namePlaceholder: "Ihr Name",
        emailPlaceholder: "ihre@email.com",
        companyPlaceholder: "Ihr Unternehmen",
        messagePlaceholder: "Wie können wir Ihnen helfen?",
        send: "Nachricht senden"
      },
      meeting: {
        title: "Bevorzugen Sie ein kurzes Gespräch?",
        description: "Vereinbaren Sie ein 15-minütiges Einführungsgespräch, um zu besprechen, wie wir Ihnen bei der Suche nach dem perfekten Talent für Ihre Projekte helfen können.",
        schedule: "Meeting planen"
      }
    },
    footer: {
      description: "Wir verbinden Unternehmen mit außergewöhnlichen freiberuflichen Talenten, ohne Zwischenhändler.",
      solutions: "Lösungen",
      company: "Unternehmen",
      legal: "Rechtliches",
      rights: "Alle Rechte vorbehalten.",
      links: {
        solutions: {
          talentMatching: "Talent-Matching",
          contractManagement: "Vertragsmanagement",
          skillVerification: "Qualifikationsprüfung",
          projectManagement: "Projektmanagement"
        },
        company: {
          about: "Über uns",
          contact: "Kontakt"
        },
        legal: {
          privacy: "Datenschutzerklärung",
          terms: "Nutzungsbedingungen",
          impressum: "Impressum"
        }
      }
    },
    brands: {
      title: "VERTRAUT VON FOLGENDEN UNTERNEHMEN"
    },
    valueProposition: {
      title: "WARUM VITERA WÄHLEN?",
      subtitle: "Wir eliminieren Zwischenhändler und sparen Ihnen bis zu 30%, während wir Sie mit perfekt passenden Talenten verbinden.",
      items: {
        matching: {
          title: "Perfektes Talent-Matching",
          description: "Branchenspezifische Experten mit 100% technischer Übereinstimmung, reduzieren Nacharbeit und Verzögerungen.",
          learnMore: "Mehr erfahren"
        },
        quality: {
          title: "Qualitätssicherung",
          description: "Absolute Sicherheit durch verifizierte Qualifikationen und detaillierte Projekthistorie, die konsistente Lieferung und Qualität gewährleistet.",
          learnMore: "Mehr erfahren"
        },
        cost: {
          title: "Kosteneinsparungen",
          description: "Transparente Preisgestaltung, die durch den Wegfall von Vermittlermargen bis zu 30% im Vergleich zu traditionellen Agenturen einspart.",
          learnMore: "Mehr erfahren"
        },
        agile: {
          title: "Agile Flexibilität",
          description: "Agile Verträge mit automatisierter Kapazitäts- und Verfügbarkeitsverfolgung, ermöglichen Ihnen die Skalierung von Engagements nach oben oder unten.",
          learnMore: "Mehr erfahren"
        }
      }
    },
    floatingButton: {
      tooltip: "15-minütiges Einführungsgespräch planen"
    }
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState('en')
  const t = translations[language]

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
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <img src={VLOGO} alt="Vitera Logo" className="h-8 w-auto" />
                </Link>
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a
                  href="#how-it-works"
                  className="group border-transparent text-gray-800 hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 hover:border-primary text-sm font-medium transition-all duration-300"
                >
                  {t.nav.howItWorks}
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </a>
                <a
                  href="#benefits"
                  className="border-transparent text-gray-800 hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 hover:border-primary text-sm font-medium transition-colors duration-200"
                >
                  {t.nav.benefits}
                </a>
              </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center">
              {/* Language Switcher */}
              <div className="mr-4">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="en">EN</option>
                  <option value="de">DE</option>
                </select>
              </div>
              <a
                href="#contact"
                className="bg-white text-primary border-2 border-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300 mr-4"
              >
                {t.nav.contactUs}
              </a>
              <a
                href="#contact"
                className="bg-primary text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/20"
              >
                {t.nav.getStarted}
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="-mr-2 flex items-center md:hidden">
              {/* Add mobile language switcher */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="mr-2 bg-white border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="en">EN</option>
                <option value="de">DE</option>
              </select>
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
                {t.nav.howItWorks}
              </a>
              <a
                href="#benefits"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-primary hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.benefits}
              </a>
              <div className="mt-6 space-y-3 pb-3">
                <a
                  href="#contact"
                  className="block w-full bg-white text-primary border-2 border-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300 text-center"
                >
                  {t.nav.contactUs}
                </a>
                <a
                  href="#contact"
                  className="block w-full bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/20 text-center"
                >
                  {t.nav.getStarted}
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight font-['Bebas_Neue']">
                {t.hero.title}
              </h1>
              
              <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0 font-['Roboto']">
                {t.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-primary text-white rounded-lg font-medium text-base hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 transform hover:-translate-y-1"
                >
                  {t.hero.getStarted}
                </a>
                <a
                  href="#how-it-works"
                  className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-medium text-base hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
                >
                  {t.hero.learnMore} <ArrowRight size={18} className="ml-2" />
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
                  {t.hero.earlyAccess}
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
          <p className="text-center text-gray-500 text-sm font-medium mb-8">{t.brands.title}</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-['Bebas_Neue']">
              {t.valueProposition.title}
            </h2>
            <p className="mt-4 text-xl text-gray-600 font-['Roboto']">
              {t.valueProposition.subtitle}
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.valueProposition.items.matching.title}</h3>
              <p className="text-gray-600 flex-grow">
                {t.valueProposition.items.matching.description}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a href="#" className="text-primary font-medium flex items-center hover:underline">
                  {t.valueProposition.items.matching.learnMore} <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.valueProposition.items.quality.title}
              </h3>
              <p className="text-gray-600">
                {t.valueProposition.items.quality.description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <DollarSign size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.valueProposition.items.cost.title}
              </h3>
              <p className="text-gray-600">
                {t.valueProposition.items.cost.description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.valueProposition.items.agile.title}
              </h3>
              <p className="text-gray-600">
                {t.valueProposition.items.agile.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-['Bebas_Neue']">
              {t.howItWorks.title}
            </h2>
            <p className="mt-4 text-xl text-gray-600 font-['Roboto']">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="mt-20 relative">
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-16 mb-20">
                <div className="order-2 md:order-1">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/20">
                      1
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {t.howItWorks.steps.define.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {t.howItWorks.steps.define.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {t.howItWorks.steps.define.items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                            <span className="ml-3 text-gray-600">{item}</span>
                          </li>
                        ))}
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {t.howItWorks.steps.match.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {t.howItWorks.steps.match.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {t.howItWorks.steps.match.items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                            <span className="ml-3 text-gray-600">{item}</span>
                          </li>
                        ))}
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {t.howItWorks.steps.collaborate.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {t.howItWorks.steps.collaborate.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {t.howItWorks.steps.collaborate.items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                            <span className="ml-3 text-gray-600">{item}</span>
                          </li>
                        ))}
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {t.howItWorks.steps.manage.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {t.howItWorks.steps.manage.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {t.howItWorks.steps.manage.items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                            <span className="ml-3 text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -ml-px hidden md:block"></div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-['Bebas_Neue']">
              {t.benefits.title}
            </h2>
            <p className="mt-4 text-xl text-gray-600 font-['Roboto']">
              {t.benefits.subtitle}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:border-primary border border-gray-100">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.benefits.items.verification.title}
              </h3>
              <p className="text-gray-600">
                {t.benefits.items.verification.description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:border-primary border border-gray-100">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.benefits.items.quality.title}
              </h3>
              <p className="text-gray-600">
                {t.benefits.items.quality.description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:border-primary border border-gray-100">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.benefits.items.flexibility.title}
              </h3>
              <p className="text-gray-600">
                {t.benefits.items.flexibility.description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:border-primary border border-gray-100">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.benefits.items.contracts.title}
              </h3>
              <p className="text-gray-600">
                {t.benefits.items.contracts.description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:border-primary border border-gray-100">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                <DollarSign size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.benefits.items.pricing.title}
              </h3>
              <p className="text-gray-600">
                {t.benefits.items.pricing.description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:border-primary border border-gray-100">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.benefits.items.admin.title}
              </h3>
              <p className="text-gray-600">
                {t.benefits.items.admin.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">30%</div>
              <div className="text-white/80">{t.stats.savings}</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-white/80">{t.stats.skillMatch}</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">48h</div>
              <div className="text-white/80">{t.stats.matchingTime}</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-12 shadow-2xl shadow-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-['Bebas_Neue'] mb-6">
                  {t.contact.title}
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto font-['Roboto']">
                  {t.contact.subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <form
                    action="https://formspree.io/f/contact@vitera.it"
                    method="POST"
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.contact.form.name}
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                        placeholder={t.contact.form.namePlaceholder}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.contact.form.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                        placeholder={t.contact.form.emailPlaceholder}
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.contact.form.company}
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                        placeholder={t.contact.form.companyPlaceholder}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.contact.form.message}
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                        placeholder={t.contact.form.messagePlaceholder}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/20"
                    >
                      {t.contact.form.send}
                    </button>
                  </form>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="text-white space-y-8">
                    <h3 className="text-2xl font-bold">
                      {t.contact.meeting.title}
                    </h3>
                    <p className="text-white/80">
                      {t.contact.meeting.description}
                    </p>
                    
                    <div className="space-y-4">
                      <a
                        href="https://calendly.com/vitera/demo"
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
                        {t.contact.meeting.schedule}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Schedule Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="group relative">
          <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <p className="text-sm text-gray-600 text-center">{t.floatingButton.tooltip}</p>
          </div>
          <a
            href="https://calendly.com/vitera/demo"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="text-white font-bold text-2xl mb-4">Vitera</div>
              <p className="text-gray-400 text-sm mb-6">
                {t.footer.description}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.75-1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                {t.footer.solutions}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {t.footer.links.solutions.talentMatching}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {t.footer.links.solutions.contractManagement}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {t.footer.links.solutions.skillVerification}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {t.footer.links.solutions.projectManagement}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                {t.footer.company}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {t.footer.links.company.about}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {t.footer.links.company.contact}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                {t.footer.legal}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {t.footer.links.legal.privacy}
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {t.footer.links.legal.terms}
                  </a>
                </li>
                <li>
                  <a href="/impressum" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {t.footer.links.legal.impressum}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm text-center">
              &copy; {new Date().getFullYear()} Vitera. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

