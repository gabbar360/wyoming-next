import Link from "next/link";
import { Mail, Phone, MapPin, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-display font-semibold text-lg sm:text-xl mb-4 sm:mb-6">About Company</h4>
            <p className="text-background/70 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Wyoming Chemicals Distribution is a leading manufacturer of Sodium Silicates and Metasilicates, providing reliable solutions to industries across India and around the globe.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L3.09 8.26L4 21L12 17L20 21L20.91 8.26L12 2Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-background">ISO Certified</p>
                <p className="text-xs text-background/70">Quality Assured</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-display font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Useful Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm sm:text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Domestic</h4>
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div>
                <a href="mailto:sales@wyomingchemicals.com" className="text-background/70 hover:text-primary transition-colors text-sm sm:text-base break-all">
                  sales@wyomingchemicals.com
                </a>
              </div>
              {/* <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.687z"/>
                </svg>
                <a href="https://wa.me/919825218329" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors text-sm sm:text-base">
                  +91 98252 18329
                </a>
              </div> */}
            </div>
            
            <h5 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">International</h5>
            <div className="space-y-2 sm:space-y-3">
              <div>
                <a href="mailto:export@wyomingchemicals.com" className="text-background/70 hover:text-primary transition-colors text-sm sm:text-base break-all">
                  export@wyomingchemicals.com
                </a>
              </div>
              {/* <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.687z"/>
                </svg>
                <a href="https://wa.me/919712796836" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors text-sm sm:text-base">
                  +91 97127 96836
                </a>
              </div> */}
            </div>
          </div>

          {/* Company Details */}
          <div>
            <h4 className="font-display font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Company Details</h4>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <h5 className="font-semibold text-background mb-2">WYOMING CHEMICAL DISTRIBUTION LLC</h5>
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 mt-0.5 " />
                  <p className="text-background/70 text-sm sm:text-base leading-relaxed">
                    30 N Gould St, STE R,<br />
                    Sheridan, WY 82801
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <a href="tel:+13073339122" className="text-background/70 hover:text-primary transition-colors text-sm sm:text-base">
                    +1 307 333 9122
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="text-center">
            <p className="text-background/60 text-xs sm:text-sm">
              © 2025 <strong>Wyoming Chemicals Distribution</strong>. Developed by{" "}
              <a href="https://www.flexadigital.com/" target="_blank" rel="noopener" className="text-white hover:underline">
                Flexa Digital
              </a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;