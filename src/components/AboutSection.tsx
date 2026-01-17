import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "State-of-the-art manufacturing facilities",
  "Industry-specific formulation expertise",
  "Serving global industrial markets",
  "Rigorous quality assurance at every stage",
  "Flexible packaging and logistics solutions",
];

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="section-padding relative"
      style={{
        backgroundImage: 'url("/background-image.png")',
        backgroundSize: "300px 300px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=600&auto=format&fit=crop"
                alt="Manufacturing Facility"
                className="rounded-xl sm:rounded-2xl shadow-2xl w-full"
              />
            </div>
            {/* Decorative elements - hidden on mobile */}
            <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-32 h-32 sm:w-64 sm:h-64 bg-primary/10 rounded-xl sm:rounded-2xl -z-0 hidden sm:block" />
            <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-16 h-16 sm:w-32 sm:h-32 bg-accent/20 rounded-full -z-0 hidden sm:block" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="section-subtitle">About Us</span>
              <h2 className="section-title">
                Trusted supplier of Sodium Silicates
              </h2>
            </div>

            <p className="text-muted-foreground responsive-text leading-relaxed mb-6">
              <strong className="text-foreground">Wyoming Chemicals Distribution</strong> specializes in supplying a comprehensive range of{" "}
              <strong className="text-foreground">Sodium Silicates</strong>,{" "}
              <strong className="text-foreground">Specialty Silicates</strong>, and{" "}
              <strong className="text-foreground">Metasilicates</strong>.
              Built on a strong foundation in India with an expanding global presence, we
              deliver high-performance chemical solutions trusted across industries worldwide.
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="/about">
              <Button className="btn-primary group">
                Discover More
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;