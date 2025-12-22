import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Factory, Truck, Shield, Users } from "lucide-react";

export default function Infrastructure() {
  const facilities = [
    {
      icon: Factory,
      title: "Manufacturing Plant",
      description: "State-of-the-art manufacturing facility with 300 MT per day capacity."
    },
    {
      icon: Truck,
      title: "Logistics Network",
      description: "Efficient distribution network ensuring timely delivery across the globe."
    },
    {
      icon: Shield,
      title: "Quality Lab",
      description: "Advanced testing laboratory with modern equipment for quality assurance."
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description: "Experienced team of engineers and technicians ensuring operational excellence."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Infrastructure" 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Company", href: "/about" },
            { label: "Infrastructure" }
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
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Infrastructure</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                World-Class Manufacturing Facilities
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto mt-6">
                Our modern infrastructure enables us to deliver high-quality products with efficiency and reliability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-background p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <facility.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">{facility.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
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