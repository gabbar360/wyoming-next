import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

export default function BlogLoading() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Blog & Insights" 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog" }
          ]} 
        />

        {/* Blog Introduction */}
        <section 
          className="py-16 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Blog</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Industry News & Insights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Stay updated with the latest trends, insights, and developments in the sodium silicate industry. Our team shares valuable knowledge and expertise through regular articles.
              </p>
            </div>
          </div>
        </section>

        {/* Loading Skeleton */}
        <section 
          className="py-16 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-background rounded-2xl overflow-hidden shadow-sm animate-pulse">
                  <div className="aspect-video bg-gray-200"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-4 bg-gray-200 rounded w-20"></div>
                      <div className="h-4 bg-gray-200 rounded w-16"></div>
                    </div>
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
                    <div className="flex items-center justify-between">
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                      <div className="h-4 bg-gray-200 rounded w-20"></div>
                    </div>
                  </div>
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