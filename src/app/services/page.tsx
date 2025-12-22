import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Package, Truck, FlaskConical, Users, Headphones, FileCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: FlaskConical,
      title: "Custom Formulation",
      description: "We develop customized silicate formulations tailored to your specific industrial requirements. Our R&D team works closely with you to create products that deliver optimal performance for your applications."
    },
    {
      icon: Package,
      title: "Flexible Packaging",
      description: "We offer a variety of packaging options to meet your needs, from small containers to bulk tankers. Our flexible packaging solutions ensure safe handling and convenient storage of products."
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "With our efficient logistics network, we ensure timely delivery of products to your location. Whether domestic or international, we handle shipping with care and precision."
    },
    {
      icon: FileCheck,
      title: "Quality Certification",
      description: "All our products come with comprehensive quality certificates and test reports. We maintain strict documentation for traceability and compliance with international standards."
    },
    {
      icon: Users,
      title: "Technical Consultation",
      description: "Our team of chemical engineers provides expert technical consultation to help you choose the right products and optimize their use in your manufacturing processes."
    },
    {
      icon: Headphones,
      title: "After-Sales Support",
      description: "We believe in building long-term relationships with our clients. Our dedicated support team is always available to address your queries and provide assistance."
    },
  ];

  const industries = [
    { name: "Detergent Manufacturing", description: "High-performance binders and builders for cleaning products" },
    { name: "Ceramic Industry", description: "Essential materials for ceramic glazes and production" },
    { name: "Foundry Applications", description: "Quality silicates for core making and mold binding" },
    { name: "Construction Chemicals", description: "Concrete additives and waterproofing solutions" },
    { name: "Paper & Pulp", description: "Sizing agents and coating materials" },
    { name: "Water Treatment", description: "Corrosion inhibitors and water softening agents" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Our Services" 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services" }
          ]} 
        />

        {/* Services Introduction */}
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">What We Offer</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Comprehensive Industrial Solutions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Wyoming Chemicals Distribution, we go beyond just manufacturing. We provide end-to-end solutions that include technical support, custom formulations, and reliable logistics to ensure your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-secondary p-8 rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
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
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Industries We Serve</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Trusted by Leading Industries Worldwide
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our silicate products are trusted by diverse industries across the globe. We understand the unique requirements of each sector and deliver products that meet specific performance criteria.
                </p>
                <Link href="/contact">
                  <Button className="btn-primary">
                    Get Industry-Specific Solutions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-background p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                    <h4 className="font-display font-bold text-foreground mb-2">{industry.name}</h4>
                    <p className="text-muted-foreground text-sm">{industry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
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
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Process</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                How We Work With You
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", description: "Understand your requirements and recommend solutions" },
                { step: "02", title: "Customization", description: "Develop products tailored to your specifications" },
                { step: "03", title: "Production", description: "Manufacture with strict quality control measures" },
                { step: "04", title: "Delivery", description: "Safe and timely delivery to your location" },
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-display font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                  )}
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