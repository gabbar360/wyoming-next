import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { CheckCircle, Award, Shield, FileCheck, Microscope, ClipboardCheck } from "lucide-react";

export default function Quality() {
  const certifications = [
    {
      title: "ISO 9001:2015",
      certificate: "TQS QMS/20180422320",
      description: "Quality Management System certification ensuring consistent quality processes and continuous improvement."
    },
    {
      title: "Quality Testing",
      certificate: "In-House Lab",
      description: "Comprehensive testing facilities for all products with detailed quality reports and certificates."
    },
    {
      title: "Industry Standards",
      certificate: "IS/BIS Compliance",
      description: "Products manufactured in compliance with Indian and international industry standards."
    },
  ];

  const qualityParameters = [
    "Total Solid Content (TSC)",
    "Sodium Oxide (Na2O) Content",
    "Silica (SiO2) Content",
    "Ratio (SiO2:Na2O)",
    "Specific Gravity / Baume",
    "pH Value",
    "Iron (Fe) Content",
    "Aluminum (Al) Content",
    "Chloride Content",
    "Moisture Content",
    "Particle Size Distribution",
    "Solubility Index",
  ];

  const qcSteps = [
    {
      icon: ClipboardCheck,
      title: "Raw Material Inspection",
      description: "All incoming raw materials are tested for purity and quality before acceptance."
    },
    {
      icon: Microscope,
      title: "In-Process Testing",
      description: "Regular sampling and testing during production to maintain process parameters."
    },
    {
      icon: FileCheck,
      title: "Finished Product Testing",
      description: "Comprehensive testing of finished products against specifications before release."
    },
    {
      icon: Shield,
      title: "Documentation & Traceability",
      description: "Complete documentation maintained for quality records and batch traceability."
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Quality Assurance" 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Company", href: "/about" },
            { label: "Quality" }
          ]} 
        />

        {/* Quality Commitment */}
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
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Commitment</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Quality is Our Top Priority
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At Wyoming Chemicals Distribution, quality is not just a department - it's a culture that permeates every aspect of our operations. From raw material selection to final product dispatch, we maintain stringent quality controls at every step.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our ISO 9001:2015 certification reflects our commitment to maintaining the highest quality standards and continuous improvement in our processes.
                </p>
                <ul className="space-y-3">
                  {[
                    "100% Quality Inspection of Products",
                    "State-of-the-art Testing Equipment",
                    "Experienced Quality Control Team",
                    "Continuous Process Improvement",
                    "Customer Feedback Integration"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-primary/10 rounded-2xl p-12 flex items-center justify-center">
                  <Award className="w-40 h-40 text-primary/50" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-background border-2 border-primary rounded-xl p-4 shadow-lg">
                  <div className="text-sm text-muted-foreground">Certificate No.</div>
                  <div className="font-display font-bold text-primary">TQS QMS/20180422320</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Certifications</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Certified for Excellence
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-background p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{cert.title}</h3>
                  <div className="text-primary font-medium text-sm mb-4">{cert.certificate}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Control Process */}
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">QC Process</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Our Quality Control Process
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qcSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Parameters */}
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Testing Parameters</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Comprehensive Quality Testing
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                Every batch of our products undergoes rigorous testing for the following parameters to ensure consistency and quality.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {qualityParameters.map((param, index) => (
                  <div key={index} className="flex items-center gap-3 bg-background p-4 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{param}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}