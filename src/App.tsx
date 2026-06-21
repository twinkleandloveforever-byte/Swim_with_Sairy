import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Users, Award, Heart, CheckCircle, Waves, ChevronDown, GraduationCap, Timer, Target } from 'lucide-react';

// ============ NAVIGATION ============
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollToSection('home')} className="font-display font-bold text-lg md:text-xl text-ocean-900 hover:text-cyan-600 transition-colors">
            Private Swim Instruction
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-ocean-800 hover:text-cyan-600 font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500 to-ocean-500 text-white px-6 py-2.5 rounded-full font-semibold hover:from-cyan-600 hover:to-ocean-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Inquire Now
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-ocean-800 hover:bg-ocean-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-ocean-100 py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-ocean-800 hover:text-cyan-600 font-medium py-2 px-4 text-left transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-cyan-500 to-ocean-500 text-white px-6 py-3 rounded-full font-semibold mx-4 text-center"
              >
                Inquire Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// ============ HERO SECTION ============
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-ocean-50 via-cyan-50 to-white flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-ocean-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Waves className="w-4 h-4" />
            Serving Sugar Land, Texas & Surrounding Areas
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ocean-900 leading-tight mb-6 animate-slide-up">
            Private, Mobile Swim Coaching
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-ocean-600 mt-2">
              Premium Instruction in Your Pool
            </span>
          </h1>

          <p className="text-lg md:text-xl text-ocean-700 max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Professional, individualized swim lessons brought directly to your home pool or local community pool.
            Experience the difference of dedicated, one-on-one attention.
          </p>

          <div className="bg-gradient-to-r from-ocean-900 via-ocean-800 to-cyan-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-cyan-200 text-sm md:text-base font-medium mb-3 uppercase tracking-wider">
              Book Your Lesson Today
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-white">
              <a href="tel:3463263650" className="flex items-center gap-2 text-xl md:text-2xl lg:text-3xl font-bold hover:text-cyan-300 transition-colors">
                <Phone className="w-6 h-6 md:w-8 md:h-8" />
                <span>346-326-3650</span>
              </a>
              <div className="hidden md:block w-px h-8 bg-white/30" />
              <a href="mailto:twinkleandloveforever@gmail.com" className="flex items-center gap-2 text-lg md:text-xl lg:text-2xl font-semibold hover:text-cyan-300 transition-colors">
                <Mail className="w-6 h-6 md:w-7 md:h-7" />
                <span className="break-all">twinkleandloveforever@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a href="#contact" className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-700 font-medium">
              <span>Scroll to inquire</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

// ============ MOBILE ADVANTAGE SECTION ============
function MobileAdvantage() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-ocean-100 to-cyan-100 overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/265846/pexels-photo-265846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Beautiful outdoor pool setting for private swim lessons"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-ocean-500 rounded-2xl p-4 md:p-6 shadow-xl text-white hidden sm:block">
              <MapPin className="w-8 h-8 mb-2" />
              <p className="font-bold">Sugar Land, TX</p>
              <p className="text-cyan-100 text-sm">Mobile Service</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-900 mb-6">
              Learn Where You're
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-ocean-600"> Most Comfortable</span>
            </h2>
            <p className="text-lg text-ocean-700 leading-relaxed mb-8">
              Based in Sugar Land, TX, I travel directly to your backyard home pool or designated neighborhood community pool
              for ultimate safety, convenience, and low-distraction learning.
            </p>

            <div className="space-y-4">
              {[
                { icon: Heart, text: 'Familiar environment reduces anxiety' },
                { icon: Users, text: 'One-on-one dedicated attention' },
                { icon: Clock, text: 'Flexible scheduling that works for you' },
                { icon: Award, text: 'No crowded lanes or distractions' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-ocean-50 rounded-xl hover:bg-ocean-100 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-ocean-500 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-ocean-800 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ ABOUT SECTION ============
function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-ocean-50 via-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/863980/pexels-photo-863980.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional swim instructor portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-ocean-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-ocean-900">Certified</p>
                    <p className="text-sm text-ocean-600">Professional Instructor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-900 mb-6">
              Meet Your Independent
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-ocean-600">Swim Instructor</span>
            </h2>

            <div className="space-y-6 text-ocean-700 leading-relaxed">
              <p className="text-lg">
                As a dedicated, local independent swim instructor, I provide consistent one-on-one attention that
                you simply cannot find at massive commercial swim schools with rotating staff and crowded classes.
              </p>

              <p>
                With a strong athletic background and years of experience in the water, I bring both technical
                expertise, positive reinforcement, and proven techniques adapted to each individual's pace.
              </p>

              <p>
                Safety is my top priority. Every lesson begins with water safety fundamentals, ensuring students
                build confidence and skills in a secure, supportive environment. Whether you're introducing your
                child to the water or refining competitive strokes, I tailor each session to your specific needs.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { number: '100%', label: 'Focus on You' },
                { number: 'Safety', label: 'First Priority' },
                { number: 'Patient', label: 'Instruction' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center shadow-lg">
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-ocean-600">
                    {item.number}
                  </p>
                  <p className="text-sm text-ocean-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ PROGRAMS SECTION ============
function ProgramsSection() {
  const programs = [
    {
      title: 'Beginner & Kids Lessons',
      description: 'Water acclimation, safety skills, floating, and breath control for young children. Building confidence and essential foundations in a fun, supportive environment.',
      image: 'https://images.pexels.com/photos/1323938/pexels-photo-1323938.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Heart,
      features: ['Water Safety', 'Floating Skills', 'Breath Control', 'Fun Learning'],
    },
    {
      title: 'Adult Swim Instruction',
      description: 'Tailored for adults learning to swim, overcoming water anxiety, or mastering low-impact fitness. It\'s never too late to become confident in the water.',
      image: 'https://images.pexels.com/photos/35580/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      icon: GraduationCap,
      features: ['Overcome Anxiety', 'Build Confidence', 'Low-Impact Fitness', 'Personal Pace'],
    },
    {
      title: 'Skill & Stroke Refinement',
      description: 'Advanced competitive coaching, stroke mechanics, endurance, and efficiency refinement for athletes, triathletes, or those seeking to perfect their technique.',
      image: 'https://images.pexels.com/photos/8639881/pexels-photo-8639881.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Target,
      features: ['Stroke Mechanics', 'Endurance', 'Competition Prep', 'Technique Analysis'],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-900 mb-6">
            Programs for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-ocean-600"> Every Level</span>
          </h2>
          <p className="text-lg text-ocean-700 leading-relaxed">
            From first splashes to competitive performance, I offer structured lesson tracks tailored to your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-ocean-100 hover:border-cyan-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <program.icon className="w-7 h-7 text-cyan-600" />
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-bold text-ocean-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-ocean-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {program.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                      <span className="text-ocean-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PRICING SECTION ============
function PricingSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-ocean-900 via-ocean-800 to-cyan-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-ocean-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Timer className="w-4 h-4" />
          Flexible Scheduling
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Premium Instruction,
          <span className="block text-cyan-300">Competitive Rates</span>
        </h2>

        <p className="text-lg md:text-xl text-ocean-100 leading-relaxed mb-8 max-w-2xl mx-auto">
          As an independent instructor, I provide elite, personalized coaching without the corporate overhead fees
          of commercial swim centers. Contact me directly for a customized quote tailored to your family's
          specific goals and scheduling needs.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="text-center">
              <p className="text-cyan-200 text-sm mb-1">No Hidden Fees</p>
              <p className="font-bold text-lg">Transparent Pricing</p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block" />
            <div className="text-center">
              <p className="text-cyan-200 text-sm mb-1">Flexible Packages</p>
              <p className="font-bold text-lg">Custom Quotes</p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block" />
            <div className="text-center">
              <p className="text-cyan-200 text-sm mb-1">Direct Contact</p>
              <p className="font-bold text-lg">Personal Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ SUCCESS MODAL ============
function SuccessModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ocean-900/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center animate-slide-up">
        <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-ocean-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>

        <h3 className="font-display text-2xl font-bold text-ocean-900 mb-3">
          Inquiry Sent Successfully!
        </h3>
        <p className="text-ocean-600 mb-6">
          Thank you for your interest! Your inquiry has been sent directly to the instructor.
          Expect a response within 24-48 hours.
        </p>

        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-cyan-500 to-ocean-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-ocean-600 transition-all shadow-lg hover:shadow-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
}

// ============ CONTACT FORM SECTION ============
function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    swimmerAge: '',
    location: '',
    preferredTimes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const skillLevels = [
    'Preschool (Ages 2-4) - Beginner',
    'Preschool (Ages 2-4) - Some Experience',
    'Child (Ages 5-8) - Beginner',
    'Child (Ages 5-8) - Intermediate',
    'Child (Ages 5-8) - Advanced',
    'Youth (Ages 9-12) - Beginner',
    'Youth (Ages 9-12) - Intermediate',
    'Youth (Ages 9-12) - Advanced',
    'Teen (Ages 13-17) - Beginner',
    'Teen (Ages 13-17) - Intermediate',
    'Teen (Ages 13-17) - Advanced',
    'Adult (18+) - Beginner',
    'Adult (18+) - Intermediate',
    'Adult (18+) - Advanced/Competitive',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.swimmerAge) {
      newErrors.swimmerAge = 'Please select swimmer age and level';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xpwzgvqk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          swimmerAge: formData.swimmerAge,
          location: formData.location,
          preferredTimes: formData.preferredTimes,
          _subject: `New Swim Lesson Inquiry from ${formData.fullName}`,
        }),
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          swimmerAge: '',
          location: '',
          preferredTimes: '',
        });
        setErrors({});
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-ocean-50 via-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-900 mb-6">
            Ready to Start?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-ocean-600">
              Send an Inquiry Today
            </span>
          </h2>

          <div className="bg-gradient-to-r from-ocean-900 via-ocean-800 to-cyan-800 rounded-2xl p-6 md:p-8 shadow-xl mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-white">
              <a href="tel:3463263650" className="flex items-center gap-2 text-lg md:text-xl font-bold hover:text-cyan-300 transition-colors">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
                <span>Phone: 346-326-3650</span>
              </a>
              <div className="hidden md:block w-px h-8 bg-white/30" />
              <a href="mailto:twinkleandloveforever@gmail.com" className="flex items-center gap-2 text-base md:text-lg font-semibold hover:text-cyan-300 transition-colors">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
                <span>swimwithsairy@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-ocean-100">
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-ocean-800 mb-2">
                  Full Name <span className="text-coral-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${errors.fullName ? 'border-coral-500' : 'border-ocean-200'} focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all outline-none`}
                  placeholder="Your full name"
                />
                {errors.fullName && <p className="mt-1 text-sm text-coral-500">{errors.fullName}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-ocean-800 mb-2">
                    Email Address <span className="text-coral-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${errors.email ? 'border-coral-500' : 'border-ocean-200'} focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all outline-none`}
                    placeholder="you@email.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-coral-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-ocean-800 mb-2">
                    Phone Number <span className="text-coral-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${errors.phone ? 'border-coral-500' : 'border-ocean-200'} focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all outline-none`}
                    placeholder="(XXX) XXX-XXXX"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-coral-500">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="swimmerAge" className="block text-sm font-semibold text-ocean-800 mb-2">
                  Swimmer's Age & Current Skill Level <span className="text-coral-500">*</span>
                </label>
                <select
                  id="swimmerAge"
                  name="swimmerAge"
                  value={formData.swimmerAge}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${errors.swimmerAge ? 'border-coral-500' : 'border-ocean-200'} focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all outline-none bg-white`}
                >
                  <option value="">Select age group and skill level</option>
                  {skillLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                {errors.swimmerAge && <p className="mt-1 text-sm text-coral-500">{errors.swimmerAge}</p>}
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-ocean-800 mb-2">
                  Location / Pool Access Details <span className="text-coral-500">*</span>
                </label>
                <textarea
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${errors.location ? 'border-coral-500' : 'border-ocean-200'} focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all outline-none resize-none`}
                  placeholder="Describe your home pool or community pool setup in Sugar Land area..."
                />
                {errors.location && <p className="mt-1 text-sm text-coral-500">{errors.location}</p>}
              </div>

              <div>
                <label htmlFor="preferredTimes" className="block text-sm font-semibold text-ocean-800 mb-2">
                  Preferred Days and Times
                </label>
                <textarea
                  id="preferredTimes"
                  name="preferredTimes"
                  value={formData.preferredTimes}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border-2 border-ocean-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all outline-none resize-none"
                  placeholder="e.g., Weekday mornings, Saturday afternoons, flexible schedule..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-ocean-500 text-white py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-ocean-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Submit Inquiry & Send Email
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="bg-ocean-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-display font-bold text-xl mb-4">Private Swim Instruction</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-ocean-200 mb-6">
            <a href="tel:3463263650" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span>346-326-3650</span>
            </a>
            <a href="mailto:twinkleandloveforever@gmail.com" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span>swimwithsairy@gmail.com</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Sugar Land, TX</span>
            </span>
          </div>
          <p className="text-ocean-300 text-sm">
            Professional mobile swim lessons serving Sugar Land and surrounding areas.
          </p>
          <div className="mt-6 pt-6 border-t border-ocean-800">
            <p className="text-ocean-400 text-sm">
              &copy; {new Date().getFullYear()} Private Swim Instruction. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ MAIN APP ============
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <MobileAdvantage />
      <AboutSection />
      <ProgramsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
