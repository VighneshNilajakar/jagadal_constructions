'use client';

import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Compass, 
  Droplet, 
  Sun,
  Menu,
  X,
  Star,
  Quote,
  Instagram
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Logo = ({ invert = false }: { invert?: boolean }) => (
  <div className="flex items-center gap-3">
    <div className="relative w-16 h-16 sm:w-20 sm:h-20">
      <Image 
        src="/logo.png" 
        alt="Jagadal Constructions Logo" 
        fill
        className="object-contain object-left"
        priority
      />
    </div>
    <div className="flex flex-col justify-center">
      <span className={`font-display font-bold text-xl sm:text-2xl leading-none tracking-tight ${invert ? 'text-white' : 'text-slate-900'}`}>JAGADAL</span>
      <span className={`text-xs sm:text-sm font-semibold tracking-widest uppercase mt-1 ${invert ? 'text-slate-300' : 'text-slate-600'}`}>CONSTRUCTIONS</span>
    </div>
  </div>
);

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-200 selection:text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Logo />
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Projects</a>
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</a>
            <a 
              href="tel:+918660432776" 
              className="inline-flex items-center justify-center h-10 px-6 font-medium text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 py-4 px-4 flex flex-col gap-4 shadow-lg">
            <a href="#about" className="text-base font-medium text-slate-900 p-2" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="text-base font-medium text-slate-900 p-2" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#features" className="text-base font-medium text-slate-900 p-2" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a 
              href="tel:+918660432776" 
              className="inline-flex items-center justify-center h-12 w-full font-medium text-base text-white bg-slate-900 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={18} className="mr-2" />
              +91 86604 32776
            </a>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden bg-slate-50">
          <div className="absolute inset-0 z-0 opacity-10">
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" className="text-slate-400" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-6">
                  <Star size={12} className="fill-amber-500 text-amber-500" />
                  5.0 Google Rating
                </div>
                <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                  Building Dreams,<br />
                  <span className="text-slate-600">Constructing Trust.</span>
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                  Belagavi's most trusted name in real estate. We offer premium 
                  <strong> "Plot + Construction"</strong> packages tailored to your vision. 
                  No cookie-cutter layouts. Just quality over anything else.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#projects" className="inline-flex items-center justify-center h-14 px-8 font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors group">
                    View Premium Projects
                  </a>
                  <a href="tel:+918660432776" className="inline-flex items-center justify-center h-14 px-8 font-medium text-slate-900 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors">
                    <Phone size={18} className="mr-2 text-slate-400" />
                    +91 86604 32776
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[500px] lg:h-[650px] w-full"
              >
                <div className="absolute inset-0 bg-slate-900 p-2 sm:p-4 flex flex-col rounded-xl">
                  <div className="relative w-full h-full overflow-hidden group">
                    <Image 
                      src="/poster_new.png" 
                      alt="Modern Villa Architecture" 
                      fill
                      className="object-contain transition-transform duration-700"
                      priority
                    />
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-500 -z-10 rounded-xl"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-slate-200 -z-10 rounded-xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">The Jagadal Standard</h2>
              <p className="text-lg text-slate-600">Every project we undertake is built on a foundation of uncompromising quality and transparent documentation.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Compass, title: "Vastu Compliant", desc: "Every structural floor plan and spatial layout is designed strictly in alignment with Vastu Shastra principles." },
                { icon: ShieldCheck, title: "Clear Documentation", desc: "Non-Agricultural (NA) layouts with clear KJP plot documentation, fully eligible for nationalized bank housing loans." },
                { icon: Droplet, title: "Premium Infrastructure", desc: "Advanced underground drainage systems and dedicated custom borewells for every property." },
                { icon: Sun, title: "Future Ready", desc: "Green solar energy integration available, ensuring your home is sustainable and energy-efficient." }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-8 border border-slate-100 hover:border-slate-200 bg-slate-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-white flex items-center justify-center border border-slate-200 mb-6 group-hover:border-amber-500 transition-colors">
                    <feature.icon size={24} className="text-slate-700 group-hover:text-amber-600" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Signature Projects */}
        <section id="projects" className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Premium Locations</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold">Plot + Construction Packages</h2>
              </div>
              <p className="text-slate-400 max-w-sm text-sm">
                Secure your high-potential plot bundled seamlessly with our end-to-end villa construction services in Belagavi's prime residential areas.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group bg-slate-800 border border-slate-700 overflow-hidden flex flex-col"
              >
                <div className="relative w-full overflow-hidden bg-slate-900 p-2">
                  <Image 
                    src="/proj1.png" 
                    alt="Sai Colony Project" 
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 uppercase tracking-wider z-10">
                    Starts ₹75 Lakhs
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-display font-bold mb-2">Sai Colony</h3>
                  <p className="text-slate-300 text-sm mb-6 flex-grow">
                    Located just 1.5 KM from the Mahantesh Nagar bridge. Premium East-facing plots in a rapidly developing sector.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-sm text-slate-300"><CheckCircle2 size={16} className="text-amber-500 mr-2" /> East-facing Plot</li>
                    <li className="flex items-center text-sm text-slate-300"><CheckCircle2 size={16} className="text-amber-500 mr-2" /> 2BHK Custom Villa</li>
                    <li className="flex items-center text-sm text-slate-300"><CheckCircle2 size={16} className="text-amber-500 mr-2" /> Bank Loan Available</li>
                  </ul>
                  <a href="tel:+918660432776" className="inline-flex items-center justify-center w-full h-12 bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors">
                    Enquire Now
                  </a>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group bg-slate-800 border border-slate-700 overflow-hidden flex flex-col"
              >
                <div className="relative w-full overflow-hidden bg-slate-900 p-2">
                  <Image 
                    src="/proj2.png" 
                    alt="KHB Colony Project" 
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 uppercase tracking-wider z-10">
                    Starts ₹70 Lakhs
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-display font-bold mb-2">KHB Colony, Kanbargi</h3>
                  <p className="text-slate-300 text-sm mb-6 flex-grow">
                    Prime 30x40 ft plots in a well-established residential layout with excellent connectivity.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-sm text-slate-300"><CheckCircle2 size={16} className="text-amber-500 mr-2" /> 30x40 ft Dimensions</li>
                    <li className="flex items-center text-sm text-slate-300"><CheckCircle2 size={16} className="text-amber-500 mr-2" /> East-facing Property</li>
                    <li className="flex items-center text-sm text-slate-300"><CheckCircle2 size={16} className="text-amber-500 mr-2" /> Underground Drainage</li>
                  </ul>
                  <a href="tel:+918660432776" className="inline-flex items-center justify-center w-full h-12 bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors">
                    Enquire Now
                  </a>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group bg-slate-800 border border-slate-700 overflow-hidden flex flex-col"
              >
                <div className="relative w-full overflow-hidden bg-slate-900 p-2">
                  <Image 
                    src="/proj3.png" 
                    alt="Ramteerth Nagar Project" 
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 uppercase tracking-wider z-10">
                    Starts ₹65 Lakhs
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-display font-bold mb-2">Ramteerth Nagar</h3>
                  <p className="text-slate-300 text-sm mb-6 flex-grow">
                    Luxurious living combining style, comfort, and sophistication. Situated in immediate proximity to local parks.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-sm text-slate-300"><CheckCircle2 size={16} className="text-amber-500 mr-2" /> 20x30 & 30x40 BUDA Plots</li>
                    <li className="flex items-center text-sm text-slate-300"><CheckCircle2 size={16} className="text-amber-500 mr-2" /> Near Local Parks</li>
                    <li className="flex items-center text-sm text-slate-300"><CheckCircle2 size={16} className="text-amber-500 mr-2" /> Piped Gas Connection</li>
                  </ul>
                  <a href="tel:+918660432776" className="inline-flex items-center justify-center w-full h-12 bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors">
                    Enquire Now
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-800 text-center">
              <p className="text-slate-400 text-sm">
                Other active locations include <span className="text-slate-300 font-medium">Mahantesh Nagar Extension, Shindoli, Sahyadri Nagar, Sarthi Nagar, and Basvan Kudachi.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial & Trust */}
        <section className="py-24 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Client Testimonials</h2>
              <p className="text-lg text-slate-600">What our clients say about our transparent and high-quality services.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 border border-amber-100 shadow-sm flex flex-col rounded-xl"
              >
                <Quote size={32} className="text-amber-200 mb-6" />
                <blockquote className="text-lg font-medium text-slate-800 mb-6 leading-snug flex-grow">
                  "Altaf bhai ki taraf se bahut achhi service hai. Company genuine hai... highly recommended for their authentic business practices."
                </blockquote>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                  <div>
                    <p className="text-slate-900 font-semibold">Verified Client</p>
                    <p className="text-slate-500 text-sm">Belagavi</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </motion.div>
              {/* Testimonial 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 border border-amber-100 shadow-sm flex flex-col rounded-xl"
              >
                <Quote size={32} className="text-amber-200 mb-6" />
                <blockquote className="text-lg font-medium text-slate-800 mb-6 leading-snug flex-grow">
                  "The construction quality is top-notch. They customized the floor plan according to our Vastu requirements perfectly."
                </blockquote>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                  <div>
                    <p className="text-slate-900 font-semibold">Rahul D.</p>
                    <p className="text-slate-500 text-sm">Sai Colony Project</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </motion.div>
              {/* Testimonial 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 border border-amber-100 shadow-sm flex flex-col rounded-xl"
              >
                <Quote size={32} className="text-amber-200 mb-6" />
                <blockquote className="text-lg font-medium text-slate-800 mb-6 leading-snug flex-grow">
                  "Transparent documentation and on-time delivery. Jagadal Constructions made our dream home a reality without any stress."
                </blockquote>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                  <div>
                    <p className="text-slate-900 font-semibold">Sneha K.</p>
                    <p className="text-slate-500 text-sm">Ramteerth Nagar</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-amber-500 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" className="text-amber-900" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
            >
              Ready to Build Your Dream Home?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-900/80 mb-10 max-w-2xl mx-auto font-medium"
            >
              Connect with our experts today for a free consultation on your ideal plot and construction package in Belagavi.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a href="tel:+918660432776" className="inline-flex items-center justify-center h-14 px-8 font-bold text-amber-500 bg-slate-900 hover:bg-slate-800 transition-colors shadow-xl hover:shadow-2xl">
                <Phone size={18} className="mr-2" />
                Call +91 86604 32776
              </a>
            </motion.div>
          </div>
        </section>

        {/* Map Location */}
        <section className="h-96 w-full relative">
          <iframe 
            src="https://maps.google.com/maps?q=Jagadal+Constructions,+Belagavi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
          <div>
            <div className="mb-6">
              <Logo invert={true} />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Building Dreams, Constructing Trust. The premier choice for custom villas and premium plots in Belagavi.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Headquarters</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 shrink-0 mt-1" />
                <span className="text-sm">
                  Shop No: 3, Sunath Paradise, MIG 1,<br />
                  Opposite Sports Complex, Ashok Nagar,<br />
                  Shivaji Nagar, Belagavi, Karnataka 590016
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <a href="tel:+918660432776" className="text-sm hover:text-white transition-colors">+91 86604 32776</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6">Operating Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-amber-500 shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="text-white mb-1">Monday - Saturday</p>
                  <p>10:00 AM - 1:00 PM</p>
                  <p>4:00 PM - 8:00 PM</p>
                  <p className="mt-2 text-amber-500/80">Closed on Sundays</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-900 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Abubakar Jagadal Constructions. All rights reserved.</p>
          <a href="https://instagram.com/abubakarjagadalconstructions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <Instagram size={18} />
            <span>@abubakarjagadalconstructions</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
