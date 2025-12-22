import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

export default function BlogDetailLoading() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Loading..."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Loading..." }
          ]}
        />

        {/* Loading Content */}
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-pulse">
              {/* Meta Info Skeleton */}
              <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-border">
                <div className="h-6 bg-gray-200 rounded-full w-24"></div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
              </div>

              {/* Content Skeleton */}
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>

              {/* Tags Skeleton */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="h-5 w-5 bg-gray-200 rounded"></div>
                  <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                  <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                  <div className="h-6 bg-gray-200 rounded-full w-18"></div>
                </div>
              </div>

              {/* Navigation Skeleton */}
              <div className="mt-12 flex justify-between items-center">
                <div className="h-10 bg-gray-200 rounded w-32"></div>
                <div className="h-10 bg-gray-200 rounded w-28"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}