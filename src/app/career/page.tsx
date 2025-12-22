"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Users, Target, Award, FileText, Upload, MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function Career() {
  const [activeTab, setActiveTab] = useState("who-we-are");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
    location: "",
    designation: "",
    message: "",
    resume: null as File | null
  });

  const jobOpenings = [
    {
      title: "Production Manager",
      department: "Manufacturing",
      location: "Morbi, Gujarat",
      experience: "5-8 years",
      type: "Full Time",
      description: "Lead production operations and ensure quality standards in sodium silicate manufacturing."
    },
    {
      title: "Quality Control Analyst",
      department: "Quality Assurance",
      location: "Morbi, Gujarat", 
      experience: "2-4 years",
      type: "Full Time",
      description: "Conduct quality testing and analysis of chemical products to maintain industry standards."
    },
    {
      title: "Sales Executive",
      department: "Sales & Marketing",
      location: "Multiple Locations",
      experience: "1-3 years", 
      type: "Full Time",
      description: "Drive sales growth and build relationships with clients in chemical industry."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Career" 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Career" }
          ]} 
        />

        {/* About Career Section */}
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="/hero-images/Gemini_Generated_Image_8scgyp8scgyp8scg.png" 
                  alt="Career at Ankit Silicate" 
                  className="rounded-2xl w-full h-auto"
                />
              </div>
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm flex items-center gap-2">
                  <div className="w-3 h-4 bg-primary clip-path-arrow"></div>
                  Career
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Build Your Future With Us
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Join <strong>Wyoming Chemicals Distribution</strong> to grow your career in a collaborative, innovative, and safe environment. We deliver world‑class <strong>sodium silicate</strong> solutions with honesty, transparency, and precision—empowering you to make real industry impact.
                </p>

                {/* Tabs */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      { id: "who-we-are", label: "WHO WE ARE" },
                      { id: "life-culture", label: "LIFE & CULTURE" },
                      { id: "benefits", label: "BENEFITS" }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                          activeTab === tab.id
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="bg-background p-6 rounded-lg border">
                    {activeTab === "who-we-are" && (
                      <p className="text-muted-foreground leading-relaxed">
                        We are a people-first team committed to providing dependable inorganic chemical solutions. Rooted in <strong>honesty</strong>, <strong>transparency</strong>, and a drive for <strong>continuous improvement</strong>, we turn complex industrial challenges into efficient, scalable outcomes.
                      </p>
                    )}
                    {activeTab === "life-culture" && (
                      <p className="text-muted-foreground leading-relaxed">
                        Our culture is collaborative, inclusive, and growth-oriented. We put safety first through strict compliance and regular training—empowering you to share ideas, innovate confidently, and do your best work every day.
                      </p>
                    )}
                    {activeTab === "benefits" && (
                      <p className="text-muted-foreground leading-relaxed">
                        Competitive pay, skill development, health support, and flexible work options—benefits designed to match your career goals and life stage.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section 
          className="py-16 md:py-24 bg-primary/5 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Current Openings</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Join Our Growing Team
              </h2>
            </div>
            <div className="grid gap-8">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="font-display text-xl font-bold text-foreground">{job.title}</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{job.type}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <button 
                        onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section 
          id="application-form"
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="hidden lg:block">
                <div className="bg-gray-100 p-8 rounded-2xl min-h-[600px] flex items-center justify-center">
                  <img 
                    src="/career-logo.png" 
                    alt="Career Contact" 
                    className="rounded-2xl w-full h-auto max-h-full object-contain"
                  />
                </div>
              </div>
              <div className="bg-gray-900 text-white p-8 rounded-2xl">
                <h3 className="font-display text-2xl font-bold mb-4">APPLY NOW</h3>
                <p className="text-gray-300 mb-8">
                  Send your cv, relevant work experience and anything else that will make you stand out to hr@wyomingchemicals.com
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name*"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address*"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number*"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="qualification"
                        placeholder="Highest Qualification*"
                        required
                        value={formData.qualification}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        name="experience"
                        placeholder="Years of Experience*"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="location"
                        placeholder="Current Location*"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <select
                      name="designation"
                      required
                      value={formData.designation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary"
                    >
                      <option value="">Select Position*</option>
                      <option value="production-manager">Production Manager</option>
                      <option value="quality-control">Quality Control Analyst</option>
                      <option value="sales-executive">Sales Executive</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <textarea
                        name="message"
                        placeholder="Write Your Message*"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary resize-none"
                      />
                    </div>
                    <div>
                      <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                        <input
                          type="file"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          id="resume-upload"
                        />
                        <label htmlFor="resume-upload" className="cursor-pointer">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-400 text-sm">
                            Drop files here or click to upload.<br />
                            <span className="text-xs">(PDF, DOC, DOCX • max 5MB)</span>
                          </p>
                        </label>
                        {formData.resume && (
                          <p className="text-primary text-sm mt-2">{formData.resume.name}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                      Apply Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section 
          className="py-16 bg-primary/5 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold text-foreground mb-8">
                Have Questions About Careers?
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:hr@wyomingchemicals.com" className="hover:text-primary transition-colors">
                    hr@wyomingchemicals.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+919825218329" className="hover:text-primary transition-colors">
                    +91 98252 18329
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}