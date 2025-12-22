"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const productCategories = products.map(product => product.shortTitle);

const homeProducts = products.map(product => ({
  id: product.id,
  category: product.shortTitle,
  title: product.title,
  description: product.description,
  features: product.applications.slice(0, 3),
  image: product.image,
}));

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Sodium Silicate Liquid");
  const activeProduct = homeProducts.find(p => p.category === activeCategory) || homeProducts[0];

  return (
    <section 
      id="products" 
      className="section-padding relative"
      style={{
        backgroundImage: 'url("/background-image.png")',
        backgroundSize: "300px 300px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="lg:max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 sm:w-8 h-[2px] bg-primary" />
              <span className="section-subtitle">Products</span>
            </div>
            <h2 className="section-title">
              Delivering Purity and Performance in Every Product
            </h2>
          </div>
          <Link href="/products" className="self-start lg:self-auto">
            <Button className="btn-outline bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Products
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Category Tabs */}
          <div className="lg:col-span-3">
            {/* Mobile: Horizontal scroll tabs */}
            <div className="lg:hidden mb-6">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {productCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-background border border-border text-foreground hover:border-primary/30"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Desktop: Vertical tabs */}
            <div className="hidden lg:block space-y-2">
              {productCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 rounded-lg transition-all duration-300 flex items-center justify-between group ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-foreground hover:bg-background border border-border hover:border-primary/30"
                  }`}
                >
                  <span className="font-medium text-sm sm:text-base">{category}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    activeCategory === category ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Detail */}
          <div className="lg:col-span-9">
            <div className="bg-background rounded-xl sm:rounded-2xl border border-border overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-square lg:aspect-auto relative overflow-hidden">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-foreground mb-3 sm:mb-4 leading-tight">
                    {activeProduct.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 responsive-text">
                    {activeProduct.description}
                  </p>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {activeProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground font-medium text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/products">
                    <Button className="btn-primary group">
                      Read More
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;