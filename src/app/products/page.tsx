import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Droplets, Box, Sparkles, FlaskConical, Atom, Shield } from "lucide-react";
import { products } from "@/data/products";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  "sodium-silicate-liquid": Droplets,
  "sodium-silicate-powder": Box,
  "sodium-silicate-glass": Sparkles,
  "metasilicate-pentahydrate": FlaskConical,
  "metasilicate-nonahydrate": Atom,
  "metasilicate-anhydrous": FlaskConical,
  "sodium-orthosilicate": Shield,
};

export default function Products() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Our Products" 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Products" }
          ]} 
        />

        {/* Products Introduction */}
        <section 
          className="section-padding relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Products</span>
              <h2 className="section-title mt-2 mb-4 sm:mb-6">
                Delivering Purity and Performance in Every Product
              </h2>
              <p className="text-muted-foreground leading-relaxed responsive-text">
                We manufacture a comprehensive range of sodium silicate products designed to meet the diverse needs of various industries. Each product is crafted with precision and undergoes rigorous quality testing to ensure optimal performance.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section 
          className="section-padding relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {products.map((product) => {
                const IconComponent = iconMap[product.id] || Droplets;
                return (
                  <div key={product.id} className="bg-background rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                    <div className="aspect-video bg-primary/5 relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.shortTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">{product.shortTitle}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{product.description}</p>
                      <div className="space-y-2 mb-4 sm:mb-6">
                        {product.applications.slice(0, 3).map((app, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            <span className="line-clamp-1">{app}</span>
                          </div>
                        ))}
                      </div>
                      <Link href={`/products/${product.id}`}>
                        <Button variant="outline" className="w-full group/btn text-sm sm:text-base">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}