"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Only add scroll listener on home page
    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // For other pages, always show as scrolled (normal navbar)
      setIsScrolled(true);
    }
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Company",
      href: "/about",
      dropdown: [
        { name: "About Us", href: "/about" },
        { name: "Career", href: "/career" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Certifications", href: "/certifications" },
        { name: "Infrastructure", href: "/infrastructure" },
        { name: "Quality", href: "/quality" },
      ],
    },
    {
      name: "Products",
      href: "/products",
      dropdown: [
        { name: "Sodium Silicate Liquid", href: "/products/sodium-silicate-liquid" },
        { name: "Sodium Silicate Powder", href: "/products/sodium-silicate-powder" },
        { name: "Sodium Silicate Glass", href: "/products/sodium-silicate-glass" },
      ],
    },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      {/* <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919825218329" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>+91 98252 18329</span>
            </a>
            <a href="mailto:export@wyomingchemicals.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span>export@wyomingchemicals.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Morbi, Gujarat, India</span>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        (isScrolled || pathname !== '/') 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src={pathname === '/' && !isScrolled ? '/header-logo-2.png' : '/header-logo-1.png'}
                alt="Wyoming Chemicals Distribution"
                className="h-24 w-auto transition-opacity duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 hover:text-primary transition-colors font-medium py-2 px-2 text-sm ${
                      pathname === item.href ? "text-primary" : ((isScrolled || pathname !== '/') ? "text-foreground" : "text-white")
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />}
                  </Link>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-background border border-border rounded-lg shadow-xl py-3 min-w-[220px] z-[100] animate-fade-in mt-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors whitespace-nowrap"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Tablet Navigation */}
            <nav className="hidden lg:flex xl:hidden items-center gap-3">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 hover:text-primary transition-colors font-medium py-2 px-1 text-sm ${
                      pathname === item.href ? "text-primary" : ((isScrolled || pathname !== '/') ? "text-foreground" : "text-white")
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />}
                  </Link>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-background border border-border rounded-lg shadow-xl py-3 min-w-[200px] z-[100] animate-fade-in mt-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors whitespace-nowrap"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden xl:block">
              <Link href="/contact">
                <Button className="btn-primary text-sm px-6 py-3">
                  Get Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 transition-colors ${
                (isScrolled || pathname !== '/') ? 'text-foreground' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden bg-background border-t border-border animate-fade-in shadow-lg">
            <nav className="container mx-auto px-4 py-4 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-border last:border-0">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-3 text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => !item.dropdown && setIsMenuOpen(false)}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveDropdown(activeDropdown === item.name ? null : item.name);
                        }}
                      />
                    )}
                  </Link>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="pl-4 pb-2 animate-fade-in">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="btn-primary w-full">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;