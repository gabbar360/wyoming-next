import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Leaf, Recycle, Droplets, Sun, Shield, Target } from "lucide-react";

export default function Sustainability() {
  const initiatives = [
    {
      icon: Recycle,
      title: "Waste Reduction",
      description: "Implementing circular economy principles to minimize waste and maximize resource efficiency."
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Advanced water treatment and recycling systems to reduce water consumption."
    },
    {
      icon: Sun,
      title: "Energy Efficiency",
      description: "Renewable energy adoption and energy-efficient manufacturing processes."
    },
    {
      icon: Shield,
      title: "Environmental Protection",
      description: "Strict environmental compliance and continuous monitoring of our impact."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Sustainability" 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Company", href: "/about" },
            { label: "Sustainability" }
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
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Commitment</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Sustainable Manufacturing for a Better Future
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto mt-6">
                We are committed to sustainable practices that protect our environment while delivering high-quality products to our customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {initiatives.map((initiative, index) => (
                <div key={index} className="bg-background p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <initiative.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">{initiative.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{initiative.description}</p>
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