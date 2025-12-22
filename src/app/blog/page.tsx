import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { fetchBlogPosts } from "@/lib/wordpress";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog & Insights | Wyoming Chemicals Distribution",
  description: "Stay updated with the latest trends, insights, and developments in the sodium silicate industry. Expert knowledge and industry news from Wyoming Chemicals Distribution.",
  keywords: "sodium silicate, chemical industry, blog, insights, Wyoming Chemicals, industry news",
  openGraph: {
    title: "Blog & Insights | Wyoming Chemicals Distribution",
    description: "Industry insights and expert knowledge in sodium silicate and chemical manufacturing.",
    type: "website",
  },
};

export default async function Blog() {
  const blogPosts = await fetchBlogPosts();
  
  // Fallback message if no posts are available
  if (blogPosts.length === 0) {
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
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  No Blog Posts Available
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're currently updating our blog content. Please check back soon for the latest industry insights and news.
                </p>
                <Link href="/contact">
                  <Button>
                    Contact Us for Updates
                    <ArrowRight className="w-4 h-4 ml-2" />
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

        {/* Blog Grid */}
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
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                  <div className="aspect-video bg-primary/10 relative">
                    {post.featuredImage ? (
                      <Image 
                        src={post.featuredImage} 
                        alt={post.featuredImageAlt || post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl font-display font-bold text-primary/20">
                          {post.title.charAt(0)}
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <Link href={`/blog/${post.slug}`} className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}