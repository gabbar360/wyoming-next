import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { fetchBlogPost, fetchBlogPosts } from "@/lib/wordpress";
import { ArrowRight, ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ blogId: string }> }): Promise<Metadata> {
  const { blogId } = await params;
  const post = await fetchBlogPost(blogId);
  
  if (!post) {
    return {
      title: "Post Not Found | Wyoming Chemicals Distribution",
      description: "The requested blog post could not be found.",
    };
  }
  
  return {
    title: `${post.title} | Wyoming Chemicals Distribution`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogDetail({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;
  const post = await fetchBlogPost(blogId);

  if (!post) {
    notFound();
  }

  const allPosts = await fetchBlogPosts();
  const relatedPosts = allPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);
  const otherPosts = relatedPosts.length < 2 
    ? [...relatedPosts, ...allPosts.filter(p => p.id !== post.id && !relatedPosts.includes(p)).slice(0, 2 - relatedPosts.length)]
    : relatedPosts;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title={post.title}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title.length > 30 ? post.title.substring(0, 30) + "..." : post.title }
          ]}
        />

        <div className="py-16 bg-background relative" style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}>
          <div className="container mx-auto px-4 relative z-10">
            {/* Back Button */}
            <div className="mb-8">
              <Link href="/blog">
                <Button variant="outline" className="group hover:bg-primary hover:text-primary-foreground">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Blog
                </Button>
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <article className="flex-1 max-h-screen overflow-y-auto pr-4" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                {/* Hero Image */}
                {post.featuredImage && (
                  <div className="aspect-video overflow-hidden rounded-xl mb-10 shadow-lg">
                    <img 
                      src={post.featuredImage} 
                      alt={post.featuredImageAlt || post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Article Header */}
                <header className="mb-12">
                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-10 bg-primary rounded-full"></div>
                    <span className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                    {post.title}
                  </h1>
                  
                  {/* Excerpt */}
                  <div className="bg-muted border-l-4 border-primary p-8 rounded-r-xl mb-10">
                    <p className="text-lg text-muted-foreground leading-relaxed italic font-medium">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-8 p-6 bg-card rounded-xl border shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground font-medium">Author</span>
                        <p className="font-semibold text-foreground">{post.author}</p>
                      </div>
                    </div>
                    
                    <div className="w-px h-10 bg-border"></div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground font-medium">Published</span>
                        <p className="font-semibold text-foreground">{post.date}</p>
                      </div>
                    </div>
                    
                    <div className="w-px h-10 bg-border"></div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground font-medium">Read Time</span>
                        <p className="font-semibold text-foreground">{post.readTime}</p>
                      </div>
                    </div>
                  </div>
                </header>

                {/* Article Content */}
                <div className="bg-card rounded-xl border shadow-sm overflow-hidden mb-12">
                  <div className="p-8 md:p-12">
                    <div 
                      className="prose prose-lg max-w-none
                        [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-foreground [&>h1]:mt-8 [&>h1]:mb-6 [&>h1]:pb-4 [&>h1]:border-b [&>h1]:border-border
                        [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-6 [&>h2]:flex [&>h2]:items-center [&>h2]:gap-3 [&>h2]:before:content-[''] [&>h2]:before:w-1 [&>h2]:before:h-8 [&>h2]:before:bg-primary [&>h2]:before:rounded-full
                        [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-4
                        [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:text-foreground [&>h4]:mt-6 [&>h4]:mb-3
                        [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-base
                        [&>ul]:my-6 [&>ul]:space-y-2 [&>ul>li]:text-muted-foreground [&>ul>li]:leading-relaxed
                        [&>ol]:my-6 [&>ol]:space-y-2 [&>ol>li]:text-muted-foreground [&>ol>li]:leading-relaxed
                        [&>blockquote]:bg-primary/5 [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:p-6 [&>blockquote]:rounded-r-lg [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-foreground
                        [&>pre]:bg-muted [&>pre]:text-foreground [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:my-6 [&>pre]:border
                        [&>code]:bg-muted [&>code]:text-primary [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:font-medium
                        [&>img]:rounded-lg [&>img]:shadow-md [&>img]:my-8
                        [&>table]:w-full [&>table]:border-collapse [&>table]:my-8 [&>table]:border [&>table]:rounded-lg [&>table]:overflow-hidden
                        [&>table>thead>tr>th]:bg-muted [&>table>thead>tr>th]:p-4 [&>table>thead>tr>th]:text-left [&>table>thead>tr>th]:font-semibold [&>table>thead>tr>th]:text-foreground [&>table>thead>tr>th]:border-b [&>table>thead>tr>th]:border-border
                        [&>table>tbody>tr>td]:p-4 [&>table>tbody>tr>td]:border-b [&>table>tbody>tr>td]:border-border [&>table>tbody>tr>td]:text-muted-foreground
                        [&>hr]:my-8 [&>hr]:border-border
                      "
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="border-t border-border pt-10 mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Tag className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Article Tags</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer border border-primary/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Related Posts */}
                {otherPosts.length > 0 && (
                  <div className="border-t border-border pt-12">
                    <h3 className="text-2xl font-bold text-foreground mb-8">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {otherPosts.map((relatedPost) => (
                        <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                          <div className="bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group h-full border hover:border-primary/20">
                            <div className="aspect-video overflow-hidden rounded-t-xl">
                              {relatedPost.featuredImage ? (
                                <img 
                                  src={relatedPost.featuredImage} 
                                  alt={relatedPost.featuredImageAlt || relatedPost.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                                    <span className="text-2xl font-bold text-primary-foreground">
                                      {relatedPost.title.charAt(0)}
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="p-6">
                              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4">
                                {relatedPost.category}
                              </div>
                              <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2 text-foreground">
                                {relatedPost.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="w-4 h-4 mr-2" />
                                {relatedPost.readTime}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </article>

              {/* Sidebar */}
              <aside className="lg:w-80">
                <div className="sticky top-24 space-y-8 h-fit">
                  {/* Author Info */}
                  <div className="bg-card rounded-xl shadow-md border p-6">
                    <h3 className="font-bold text-foreground mb-6 text-lg">About the Author</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{post.author}</p>
                        <p className="text-sm text-muted-foreground">Chemical Industry Expert</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Specialized in chemical industry insights, sustainable practices, and innovative solutions with extensive experience in the field.
                    </p>
                  </div>

                  {/* Article Info */}
                  <div className="bg-card rounded-xl shadow-md border p-6">
                    <h3 className="font-bold text-foreground mb-6 text-lg">Article Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="text-muted-foreground font-medium">Published:</span>
                        <span className="font-semibold text-foreground">{post.date}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="text-muted-foreground font-medium">Read Time:</span>
                        <span className="font-semibold text-primary">{post.readTime}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="text-muted-foreground font-medium">Category:</span>
                        <span className="font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full text-sm">{post.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="bg-primary text-primary-foreground rounded-xl shadow-md p-6">
                    <h3 className="font-bold mb-3 text-lg">Need Chemical Solutions?</h3>
                    <p className="text-sm mb-6 text-primary-foreground/90 leading-relaxed">
                      Get expert advice and quality chemical products for your business needs.
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
                        Contact Us Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}