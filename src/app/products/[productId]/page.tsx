import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductById, products } from "@/data/products";
import { ArrowRight, CheckCircle, Beaker, Settings, Award, Shield, AlertTriangle, Truck } from "lucide-react";

export default async function ProductDetail({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title={product.shortTitle}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: product.shortTitle }
          ]}
        />

        {/* Product Overview */}
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
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Product Details</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  {product.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.fullDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.industries.map((industry, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
                <Link href="/contact">
                  <Button size="lg">
                    Request a Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="bg-secondary rounded-2xl p-8 relative z-10">
                  <img 
                    src={product.image} 
                    alt={product.shortTitle}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Product Information */}
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="safety">Safety Info</TabsTrigger>
                <TabsTrigger value="synonyms">Synonyms</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specifications" className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Beaker className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Technical Specifications</h3>
                </div>
                <div className="bg-background rounded-2xl overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-secondary/30" : ""}>
                          <td className="px-6 py-4 font-medium text-foreground">{spec.label}</td>
                          <td className="px-6 py-4 text-muted-foreground">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="features" className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Key Features</h3>
                </div>
                <div className="bg-background rounded-2xl p-6">
                  <ul className="space-y-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              {product.id === 'sodium-silicate-powder' && (
                <>
                  <TabsContent value="safety" className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground">Health & Safety Information</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-background rounded-2xl p-6">
                        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-yellow-500" />
                          Hazard Information
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div><strong>Signal Word:</strong> Warning</div>
                          <div><strong>Hazard Statements:</strong> H315–H319–H335</div>
                          <div><strong>Precautionary Statements:</strong> P261–P280–P305+P351+P338–P321–P405</div>
                          <div><strong>Hazard Codes:</strong> Xi</div>
                        </div>
                      </div>
                      <div className="bg-background rounded-2xl p-6">
                        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Truck className="w-5 h-5 text-blue-500" />
                          Transport Information
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div><strong>Classification:</strong> NONH for all modes of transport</div>
                          <div><strong>GHS Pictogram:</strong> GHS Exclamation Pictogram</div>
                          <div><strong>Safety Statements:</strong> N/A</div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="synonyms" className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Settings className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground">Chemical Synonyms</h3>
                    </div>
                    <div className="bg-background rounded-2xl p-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          "Sodium disilicate powder",
                          "Sodium trisilicate powder",
                          "Silicic Acid Sodium Salt",
                          "Water Glass Powder",
                          "Sodium siliconate",
                          "Hydrous Sodium Silicate",
                          "Disodium oxosilanediolate",
                          "Sodium polysilicate",
                          "Sodium sesquisilicate",
                          "Disodium metasilicate",
                          "Disodium silicate",
                          "Sodium silicon oxide",
                          "Disodium monosilicate hydrate",
                          "Sodium oxosilanediolate"
                        ].map((synonym, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-foreground text-sm">{synonym}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </>
              )}
            </Tabs>
          </div>
        </section>

        {/* Applications */}
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Applications</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {product.shortTitle} is used across various industries for multiple applications
              </p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {product.applications.map((application, index) => (
                <div 
                  key={index}
                  className="bg-secondary p-6 rounded-xl flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <span className="text-foreground font-medium leading-relaxed">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance - Only for Sodium Silicate Powder */}
        {product.id === 'sodium-silicate-powder' && (
          <section 
            className="py-16 md:py-24 relative"
            style={{
              backgroundImage: 'url("/background-image.png")',
              backgroundSize: "300px 300px",
              backgroundRepeat: "repeat",
            }}
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Testing Facility & Quality Assurance</h3>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  All parameters are tested in our in-house laboratory using processes issued by the Bureau of Indian Standards (BIS)
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-background rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-foreground mb-2">ISO 9001:2015</h4>
                  <p className="text-muted-foreground text-sm">Certified company ensuring quality management systems</p>
                </div>
                <div className="bg-background rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Beaker className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-foreground mb-2">NABL Certified</h4>
                  <p className="text-muted-foreground text-sm">Laboratory accredited for accurate testing and analysis</p>
                </div>
                <div className="bg-background rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-foreground mb-2">BIS Standards</h4>
                  <p className="text-muted-foreground text-sm">Regular calibration and Bureau of Indian Standards compliance</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related Products */}
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Explore More</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">Related Products</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="aspect-video bg-primary/5 relative overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.shortTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {relatedProduct.shortTitle}
                    </h4>
                    <p className="text-muted-foreground text-sm line-clamp-2">{relatedProduct.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}