"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    }
  };

  return (
    <section className="bg-primary text-primary-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Logo */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-display font-bold text-lg sm:text-2xl">W</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white">WYOMING</span>
                <span className="block text-xs sm:text-sm text-white/80 tracking-widest uppercase">Chemicals Distribution</span>
              </div>
            </div>
          </div>

          {/* Newsletter Content */}
          <div className="lg:col-span-9">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6">
              <div className="lg:flex-1 text-center lg:text-left">
                <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium">
                  Subscribe for the latest news. Stay updated on the latest trends.
                </p>
              </div>
              <div className="lg:flex-shrink-0">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 text-sm sm:text-base"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="bg-white text-primary hover:bg-white/90 px-6 sm:px-8 font-semibold text-sm sm:text-base whitespace-nowrap"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;