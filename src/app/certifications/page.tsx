import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Award, Shield, CheckCircle, FileCheck } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "ISO 9001:2015",
      certificate: "TQS QMS/20180422320",
      description: "Quality Management System certification ensuring consistent quality processes and continuous improvement.",
      icon: Award
    },
    {
      title: "Quality Testing",
      certificate: "In-House Lab",
      description: "Comprehensive testing facilities for all products with detailed quality reports and certificates.",
      icon: FileCheck
    },
    {
      title: "Industry Standards",
      certificate: "IS/BIS Compliance",
      description: "Products manufactured in compliance with Indian and international industry standards.",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Certifications" 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Company", href: "/about" },
            { label: "Certifications" }
          ]} 
        />

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
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Certifications</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Certified for Excellence
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto mt-6">
                Our certifications demonstrate our commitment to quality, safety, and international standards.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-background p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <cert.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{cert.title}</h3>
                  <div className="text-primary font-medium text-sm mb-4">{cert.certificate}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}