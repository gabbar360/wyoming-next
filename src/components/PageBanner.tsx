import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
}

const PageBanner = ({ title, breadcrumbs }: PageBannerProps) => {
  return (
    <section className="relative bg-secondary py-16 md:py-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          {title}
        </h1>
        <nav className="flex items-center gap-2 text-muted-foreground">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4" />}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-primary transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-primary">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default PageBanner;