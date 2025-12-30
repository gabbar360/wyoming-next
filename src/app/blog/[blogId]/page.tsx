import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { fetchBlogPost, fetchBlogPosts } from "@/lib/wordpress";
import { getImageUrl } from "@/lib/imageHelper";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Tag,
  Beaker,
} from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}): Promise<Metadata> {
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

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const post = await fetchBlogPost(blogId);

  if (!post) {
    notFound();
  }

  const allPosts = await fetchBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);
  const otherPosts =
    relatedPosts.length < 2
      ? [
          ...relatedPosts,
          ...allPosts
            .filter((p) => p.id !== post.id && !relatedPosts.includes(p))
            .slice(0, 2 - relatedPosts.length),
        ]
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
            {
              label:
                post.title.length > 30
                  ? post.title.substring(0, 30) + "..."
                  : post.title,
            },
          ]}
        />

        {/* Blog Content */}
        <section
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              {post.featuredImage ? (
                <div className="mb-8 rounded-2xl overflow-hidden">
                  <img
                    src={getImageUrl(post.featuredImage)}
                    alt={post.featuredImageAlt || post.title}
                    className="w-full h-64 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ) : (
                <div className="mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/15 to-primary/25 h-64 md:h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Beaker className="w-20 h-20 text-primary/60 mx-auto mb-4" />
                    <div className="text-lg font-medium text-primary/80">Chemical Industry Insights</div>
                    <div className="text-sm text-primary/60 mt-2">Featured Article</div>
                  </div>
                </div>
              )}

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-border">
                <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Article Content */}
              <article
                className="prose prose-lg max-w-none text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-3 flex-wrap">
                  <Tag className="w-5 h-5 text-primary" />
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-foreground text-sm font-medium px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-12 flex justify-between items-center">
                <Link href="/blog">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button>
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
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
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Keep Reading
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
                Related Articles
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="aspect-video bg-primary/10 relative">
                    {relatedPost.featuredImage ? (
                      <img
                        src={getImageUrl(relatedPost.featuredImage)}
                        alt={relatedPost.featuredImageAlt || relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl font-display font-bold text-primary/20">
                          {relatedPost.title.charAt(0)}
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {relatedPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {relatedPost.readTime}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
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
