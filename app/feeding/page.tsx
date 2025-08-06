"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState({})
  const [currentSlide, setCurrentSlide] = useState(0)

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const feedingSystemFeatures = [
    {
      title: "AI-Powered Feed Optimization",
      description: "Our machine learning algorithms analyze shrimp growth data, water quality parameters, and environmental factors to calculate the optimal feed quantity and schedule.",
      icon: "🤖",
      benefits: [
        "Reduces feed waste by up to 30%",
        "Improves Feed Conversion Ratio (FCR)",
        "Adapts to changing pond conditions"
      ]
    },
    {
      title: "Floating Distribution System",
      description: "Innovative floating device that evenly distributes feed across the pond surface, ensuring all shrimp have equal access to nutrition.",
      icon: "🚤",
      benefits: [
        "Eliminates overfeeding in certain areas",
        "Reduces labor requirements",
        "Works with existing pond infrastructure"
      ]
    },
    {
      title: "Real-Time Monitoring",
      description: "IoT sensors track shrimp feeding behavior and consumption patterns, providing data for continuous system improvement.",
      icon: "📊",
      benefits: [
        "Identifies feeding problems early",
        "Tracks shrimp growth progress",
        "Provides actionable insights"
      ]
    }
  ]

  const feedingProcess = [
    {
      step: 1,
      title: "Data Collection",
      description: "Sensors gather water quality data (temperature, DO, pH) and shrimp behavior patterns",
      icon: "📡"
    },
    {
      step: 2,
      title: "AI Analysis",
      description: "Machine learning models process the data to determine optimal feeding amounts and timing",
      icon: "🧠"
    },
    {
      step: 3,
      title: "Precision Feeding",
      description: "Automated feeders distribute the exact calculated amount of feed across the pond",
      icon: "⚖️"
    },
    {
      step: 4,
      title: "Performance Tracking",
      description: "System monitors feed consumption and shrimp growth to refine future feeding plans",
      icon: "📈"
    }
  ]

  const keyStats = [
    { label: "Feed Cost Reduction", value: "30%", subtitle: "Through optimized feeding schedules" },
    { label: "FCR Improvement", value: "1.3", subtitle: "Target Feed Conversion Ratio" },
    { label: "Growth Rate Increase", value: "20%", subtitle: "Faster shrimp growth" },
    { label: "Feed Waste Reduction", value: "40%", subtitle: "Through precise distribution" }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-cyan-300 rounded-full animate-ping"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full px-4 py-2 mb-6 border border-orange-400/30">
                <span className="text-orange-300 text-sm font-semibold">🚀 Pilot Project in Puttalam District</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Transform Your 
                <span className="block bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
                  Shrimp Feeding
                </span>
                Operations
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                Our AI-powered feeding system helps Sri Lankan shrimp farmers reduce costs, improve growth rates, and maximize profits through precision feeding technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-2xl">
                  Request Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all">
                  Learn More
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {keyStats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                    <div className="text-blue-300 text-xs">{stat.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-700/30 to-teal-600/30 rounded-3xl border border-blue-400/30 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                <div className="absolute inset-4 border-2 border-dashed border-blue-400/30 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🍽️</div>
                    <div className="text-white font-semibold">Precision Feeding System</div>
                    <div className="text-blue-200 text-sm">Optimized • Automated • Cost-Effective</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Smart Feeding System Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive solution addresses the key challenges in shrimp feeding management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {feedingSystemFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                data-animate
                id={`feature-${index}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-600">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How Our Feeding System Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seamless integration of IoT sensors, AI analysis, and automated feeding
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-teal-500 -ml-0.5"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {feedingProcess.map((step, index) => (
                <div 
                  key={step.step}
                  className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                  data-animate
                  id={`step-${index}`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 h-full border border-blue-100">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full text-white text-xl font-bold flex items-center justify-center mr-4">
                          {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center text-5xl">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="lg:hidden absolute left-1/2 h-8 w-1 bg-gradient-to-b from-blue-500 to-teal-500 -ml-0.5 -bottom-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sri Lanka Focus Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Designed for Sri Lankan Shrimp Farms</h2>
              <p className="text-xl text-blue-100 mb-8">
                Our system is specifically tailored to address the unique challenges faced by Sri Lankan shrimp farmers:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-300 text-xl mr-3">•</span>
                  <span>Optimized for common pond sizes and conditions in Puttalam and other shrimp farming regions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-300 text-xl mr-3">•</span>
                  <span>Works with locally available feed types and formulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-300 text-xl mr-3">•</span>
                  <span>Affordable solution designed for small to medium-scale farms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-300 text-xl mr-3">•</span>
                  <span>Local language support and SMS-based alerts for farmers without smartphones</span>
                </li>
              </ul>
              
              <button className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all">
                Learn About Local Pilot Program
              </button>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-700/30 to-teal-600/30 rounded-3xl border border-blue-400/30 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                <div className="absolute inset-4 border-2 border-dashed border-blue-400/30 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🇱🇰</div>
                    <div className="text-white font-semibold">Made for Sri Lanka</div>
                    <div className="text-blue-200 text-sm">Local Solutions • Global Impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Tangible Benefits for Your Farm</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How our smart feeding system improves your bottom line
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-blue-500 text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost Savings</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Reduce feed costs by 25-30%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Lower labor requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Decreased medication costs</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-blue-500 text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Increased Productivity</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>20% faster growth rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Higher survival rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>More uniform shrimp sizes</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-blue-500 text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Reduced environmental impact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Less feed waste in ponds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Improved water quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Farmers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from Sri Lankan shrimp farmers using our system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  RS
                </div>
                <div>
                  <h4 className="font-bold">R. Siriwardena</h4>
                  <p className="text-gray-500 text-sm">Puttalam District</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The feeding system has reduced our feed costs by 28% while actually improving our shrimp growth rates. It's transformed our profitability."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  NP
                </div>
                <div>
                  <h4 className="font-bold">N. Perera</h4>
                  <p className="text-gray-500 text-sm">Chilaw District</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Before this system, we were constantly guessing about feed amounts. Now we have precise data and our FCR has improved from 1.8 to 1.4."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  KJ
                </div>
                <div>
                  <h4 className="font-bold">K. Jayasuriya</h4>
                  <p className="text-gray-500 text-sm">Kalpitiya</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The SMS alerts about feeding adjustments have been invaluable. Even my workers who aren't tech-savvy can follow the simple instructions."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Shrimp Feeding?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the revolution in sustainable, profitable shrimp farming
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Your Name"
                className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                placeholder="Email Address"
                className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all">
                Request Information
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We'll contact you within 24 hours to discuss your farm's needs
            </p>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        [data-animate] {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}