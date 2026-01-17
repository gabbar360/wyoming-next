import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { CheckCircle, Users, Target, Award, Factory, Globe, Eye, Gem, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function About() {
  const timeline = [
    {
      year: "2008",
      title: "Foundation Laid",
      description: "Wyoming Chemicals entered the domestic market by supplying inorganic chemicals, building a strong foundation through deep customer understanding and efficient supply networks.",
      highlights: ["Established a strong presence in inorganic chemical supply", "Built long-term client relationships"]
    },
    {
      year: "2014",
      title: "Manufacturing Growth",
      description: "Commissioned the first manufacturing unit with a 50 MT per day capacity, marking the beginning of in-house production and self-reliance.",
      highlights: ["Focused on consistent quality output", "Ensured prompt and reliable customer delivery"]
    },
    {
      year: "2017",
      title: "Scaling Up with Global Presence",
      description: "Expanded production capacity to 150 MT per day, reinforcing reliability and strengthening global industry trust.",
      highlights: ["Upgraded infrastructure to meet international standards", "Expanded global market presence in silicate solutions"]
    },
    {
      year: "2021",
      title: "Product Expansion & Capacity Growth",
      description: "Introduced Sodium Silicate Powder and Metasilicate products with advanced manufacturing facilities, achieving a total capacity of 300 MT per day.",
      highlights: ["Added a complete range of Sodium Silicate Powders", "Strengthened the product portfolio for diverse industrial applications"]
    },
    {
      year: "2024",
      title: "Global Expansion & Partnerships",
      description: "Strengthened international reach through a robust distribution network and long-term global collaborations, reinforcing trust across 25+ countries.",
      highlights: ["Expanded international distribution network", "Built strong and lasting global partnerships"]
    },
  ];

  const features = [
    { icon: CheckCircle, title: "Commitment to Quality", description: "We follow strict global standards to ensure product purity and reliability." },
    { icon: Factory, title: "Advanced Manufacturing", description: "State-of-the-art facilities designed for precision and consistency." },
    { icon: Globe, title: "Worldwide Reach", description: "Trusted by clients across multiple global industries." },
    { icon: Users, title: "Technical Expertise", description: "Backed by a highly skilled team ensuring innovation and support." },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="About Us" 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us" }
          ]} 
        />

        {/* About Section */}
        <section 
          className="py-16 md:py-24 relative bg-gray-50"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <div>
                <div className="relative">
                  <img 
                    src="/hero-images/Gemini_Generated_Image_n7y4hin7y4hin7y4.png" 
                    alt="Wyoming Chemicals Manufacturing Facility" 
                    className="w-full h-[600px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div>
                <div className="mb-4">
                  <span className="text-primary font-medium uppercase tracking-wider text-sm flex items-center gap-2">
                    <div className="w-8 h-[2px] bg-primary"></div>
                    About Us
                  </span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Trusted supplier of Sodium Silicates
                </h1>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2008, <strong className="text-foreground">Wyoming Chemicals</strong> has evolved into a trusted global supplier of 
                  <strong className="text-foreground"> Sodium Silicates, Specialty Silicates, and Metasilicates</strong>. Backed by decades of expertise, 
                  we serve as a reliable partner to industries worldwide, delivering high-quality chemical raw materials 
                  that consistently meet stringent international standards.
                </p>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Equipped with <strong className="text-foreground">state-of-the-art manufacturing facilities</strong> and guided by a culture of innovation, 
                  we cater to a diverse range of industries across the globe. Our unwavering focus on precision, consistency, 
                  and customer satisfaction has positioned us at the forefront of the global chemical supply chain.
                </p>

                {/* Vision, Mission, Values Tabs */}
                <Tabs defaultValue="vision" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="vision" className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>Our Vision</span>
                    </TabsTrigger>
                    <TabsTrigger value="mission" className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      <span>Our Mission</span>
                    </TabsTrigger>
                    <TabsTrigger value="values" className="flex items-center gap-2">
                      <Gem className="w-4 h-4" />
                      <span>Our Value</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="vision" className="mt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      To become a global leader in advanced silicate solutions by establishing new standards in quality, innovation, and sustainability for industries worldwide.
                    </p>
                  </TabsContent>
                  
                  <TabsContent value="mission" className="mt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      To provide high-performance silicate solutions through precision, innovation, and sustainability.
                    </p>
                  </TabsContent>
                  
                  <TabsContent value="values" className="mt-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Integrity:</strong> Guided by strong principles</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Innovation:</strong> Driven by new ideas</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Reliability:</strong> Delivering consistently dependable products and service</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Sustainability:</strong> Committed to responsible and eco-friendly practices</span>
                      </li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Certified Quality. <br/>Global Trust.
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We adhere to internationally recognized quality standards and rigorous safety protocols, ensuring every product we deliver meets both local regulations and global benchmarks.
                </p>
                <div className="relative">
                  <div className="bg-background rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/hero-images/Gemini_Generated_Image_lzgxkblzgxkblzgx.png"
                      alt="Quality Certification" 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 mb-6">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Request a Quote
              </h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
                Fill in the form below and our technical sales team will get in touch with a personalized quotation and expert support.
              </p>
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="inline-flex items-center gap-2">
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}